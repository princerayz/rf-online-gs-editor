import chunk from 'lodash/chunk';
import path from 'path';
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { COUNT } from '../../../../classes/constants';
import ServerMapportalReader from '../../../../structs/server/map/portal_reader';
import apolloClient from '../../../../apollo';
import projectMapBlockImportServerMutation from '../../../../apollo/mutations/project_mapportal_import_server';

/**
 * Import Server MapBlocks Resolver
 */
export default function* defaultSaga({
  projectId,
  projectImportState,
  actions,
  mapName,
}) {
  yield delay(1000);
  const state = projectImportState.toJS();
  const { filePath, importType } = state;
  // payloaded or parse from filename
  const mapNameValue =
    mapName || path.parse(filePath).name.replace(/-\[PORTAL\]/gi, '');

  const fileReader = new ServerMapportalReader({ path: filePath });
  yield call(fileReader.asyncLoadSubclasses.bind(fileReader));

  const headers = yield call(fileReader.getHeaders.bind(fileReader));

  const total = headers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.header[COUNT],
    0,
  );

  let countCompleted = 0;

  yield put(actions.changeCountTotal(total));
  const sections = yield call(fileReader.getBlocks.bind(fileReader));
  const { blocks } = sections[0];
  const chunks = chunk(blocks, 10);

  let t = 0;
  while (chunks.length > t) {
    yield apolloClient.mutate({
      mutation: projectMapBlockImportServerMutation,
      variables: {
        projectId,
        blocks: chunks[t],
        importType,
        mapName: mapNameValue,
      },
    });

    countCompleted += chunks[t].length;
    yield put(actions.changeCountCompleted(countCompleted));
    t += 1;
  }

  return sections;
}
