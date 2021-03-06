import {
  PROJECTS_NEXT_VALUES_CHANGE_ERROR_MESSAGE,
  PROJECTS_NEXT_VALUES_CHANGE_NEXT_VALUE,
  PROJECTS_NEXT_VALUES_CHANGE_IS_ERROR,
  PROJECTS_NEXT_VALUES_CHANGE_IS_SAVED,
  PROJECTS_NEXT_VALUES_CHANGE_IS_SAVING,
  PROJECTS_NEXT_VALUES_CHANGE_PROP_VALUE,
  PROJECTS_NEXT_VALUES_REMOVE_VIRTUAL,
  PROJECTS_NEXT_VALUES_CHANGE_IS_REMOVING,
  PROJECTS_NEXT_VALUES_CHANGE_IS_COPYING,
  PROJECTS_NEXT_VALUES_CHANGE_NEXT_VALUE_ONLY_IN_STATE,
  PROJECTS_NEXT_VALUES_CHANGE_IS_RESTORING,
  PROJECTS_NEXT_VALUES_RESTORE_VIRTUAL,
  PROJECTS_NEXT_VALUES_REMOVE_FULLY,
  PROJECTS_NEXT_VALUES_COPY_AND_REDIRECT,
  PROJECTS_NEXT_VALUES_CREATE_MODEL_FILES_FROM_THIS_DATA,
  PROJECTS_NEXT_VALUES_SUB_TASK_CHANGE_IS_PROCESSING,
  PROJECTS_NEXT_VALUES_SUB_TASK_CHANGE_IS_ERROR,
  PROJECTS_NEXT_VALUES_SUB_TASK_CHANGE_ERROR_MESSAGE,
  PROJECTS_NEXT_VALUES_CREATE_MAPSPT,
} from '../constants';

/**
 * ProjectsNextValues Actions
 */
export function projectsNextValuesChangePropValue({
  projectId,
  entry,
  propKey,
  propValue,
  additionalData = {},
  subType,
}) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_PROP_VALUE,
    projectId,
    entry,
    propKey,
    propValue,
    additionalData,
    subType,
  };
}

export function projectsNextValuesSubTaskChangeIsProcessing(
  { projectId, keyId, taskName },
  isProcessing,
) {
  return {
    type: PROJECTS_NEXT_VALUES_SUB_TASK_CHANGE_IS_PROCESSING,
    projectId,
    keyId,
    taskName,
    isProcessing,
  };
}

export function projectsNextValuesSubTaskChangeIsError(
  { projectId, keyId, taskName },
  isError,
) {
  return {
    type: PROJECTS_NEXT_VALUES_SUB_TASK_CHANGE_IS_ERROR,
    projectId,
    keyId,
    taskName,
    isError,
  };
}

export function projectsNextValuesSubTaskChangeErrorMessage(
  { projectId, keyId, taskName },
  errorMessage,
) {
  return {
    type: PROJECTS_NEXT_VALUES_SUB_TASK_CHANGE_ERROR_MESSAGE,
    projectId,
    keyId,
    taskName,
    errorMessage,
  };
}

export function projectsNextValuesChangeIsSaving(
  { projectId, keyId },
  isSaving,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_IS_SAVING,
    projectId,
    keyId,
    isSaving,
  };
}

export function projectsNextValuesChangeIsSaved({ projectId, keyId }, isSaved) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_IS_SAVED,
    projectId,
    keyId,
    isSaved,
  };
}

export function projectsNextValuesChangeIsError({ projectId, keyId }, isError) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_IS_ERROR,
    projectId,
    keyId,
    isError,
  };
}

export function projectsNextValuesChangeIsRemoving(
  { projectId, keyId },
  isRemoving,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_IS_REMOVING,
    projectId,
    keyId,
    isRemoving,
  };
}

export function projectsNextValuesChangeIsRestoring(
  { projectId, keyId },
  isRestoring,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_IS_RESTORING,
    projectId,
    keyId,
    isRestoring,
  };
}

export function projectsNextValuesChangeIsCopying(
  { projectId, keyId },
  isCopying,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_IS_COPYING,
    projectId,
    keyId,
    isCopying,
  };
}

export function projectsNextValuesChangeErrorMessage(
  { projectId, keyId },
  errorMessage,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_ERROR_MESSAGE,
    projectId,
    keyId,
    errorMessage,
  };
}

export function projectsNextValuesChangeNextValue(
  { projectId, keyId, subType },
  nextValue,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_NEXT_VALUE,
    projectId,
    keyId,
    nextValue,
    subType,
  };
}

export function projectsNextValuesChangeNextValueOnlyInState(
  { projectId, keyId, subType },
  nextValue,
) {
  return {
    type: PROJECTS_NEXT_VALUES_CHANGE_NEXT_VALUE_ONLY_IN_STATE,
    projectId,
    keyId,
    nextValue,
    subType,
  };
}

/**
 * Special actions
 *
 * equal:
 *   export function projectsNextValuesRemoveVirtual({
 *     projectId,
 *     entry,
 *     propKey,
 *     propValue,
 *     additionalData = {},
 *     subType,
 *   }) {
 *     return {
 *       type: PROJECTS_NEXT_VALUES_REMOVE_VIRTUAL,
 *       projectId,
 *       entry,
 *       propKey,
 *       propValue,
 *       additionalData,
 *       subType,
 *     };
 *   }
 */
export const [
  projectsNextValuesRemoveVirtual,
  projectsNextValuesRemoveFully,
  projectsNextValuesRestoreVirtual,
  projectsNextValuesCopyAndRedirect,
  projectsNextValuesCreateModelFilesFromThisData,
  projectsNextValuesCreateMapSpt,
] = [
  PROJECTS_NEXT_VALUES_REMOVE_VIRTUAL,
  PROJECTS_NEXT_VALUES_REMOVE_FULLY,
  PROJECTS_NEXT_VALUES_RESTORE_VIRTUAL,
  PROJECTS_NEXT_VALUES_COPY_AND_REDIRECT,
  PROJECTS_NEXT_VALUES_CREATE_MODEL_FILES_FROM_THIS_DATA,
  PROJECTS_NEXT_VALUES_CREATE_MAPSPT,
].map(
  type => ({
    projectId,
    entry,
    propKey,
    propValue,
    additionalData = {},
    subType,
  }) => ({
    type,
    projectId,
    entry,
    propKey,
    propValue,
    additionalData,
    subType,
  }),
);
