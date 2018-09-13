import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { PROCESSING } from './constants';

const selectRoute = state => state.get('route');
const selectGlobal = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectIsLoggedIn = () =>
  createSelector(selectGlobal, globalState => globalState.get('isLoggedIn'));

const makeSelectProjectsImports = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('projectsImports'),
  );

const makeSelectProjectsImportsIsProcessing = () =>
  createSelector(selectGlobal, globalState =>
    globalState
      .get('projectsImports')
      .some(fileDataSets =>
        fileDataSets.some(
          fileDataSet => fileDataSet.get('status') === PROCESSING,
        ),
      ),
  );

const makeSelectProjectsImportsProcessingData = () =>
  createSelector(selectGlobal, globalState => {
    const isProcessing = globalState
      .get('projectsImports', Map({}))
      .some(fileDataSets =>
        fileDataSets.some(
          fileDataSet => fileDataSet.get('status') === PROCESSING,
        ),
      );

    let countTotal = 0;
    let countCompleted = 0;
    let countProcesses = 0;

    if (!isProcessing) {
      return {
        isProcessing,
        countTotal,
        countCompleted,
        countProcesses,
        percent: 0,
      };
    }

    globalState.get('projectsImports').forEach(fileDataSets =>
      fileDataSets.forEach(fileDataSet => {
        if (fileDataSet.get('status') === PROCESSING) {
          countTotal += fileDataSet.get('countTotal', 0);
          countCompleted += fileDataSet.get('countCompleted', 0);
          countProcesses += 1;
        }
      }),
    );

    return {
      isProcessing,
      countTotal,
      countCompleted,
      countProcesses,
      percent: (() => {
        if (countTotal <= 0) return 0;
        if (countCompleted >= countTotal) return 100;
        return (countCompleted / countTotal) * 100;
      })(),
    };
  });

const makeSelectProjectsNextValues = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('projectsNextValues'),
  );

export {
  makeSelectLocation,
  makeSelectCurrentUser,
  makeSelectIsLoggedIn,
  makeSelectProjectsImports,
  makeSelectProjectsImportsIsProcessing,
  makeSelectProjectsImportsProcessingData,
  makeSelectProjectsNextValues,
};
