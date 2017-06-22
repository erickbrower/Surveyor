import dispatcher from "../dispatcher";

import surveyApi from "../api/SurveyApiClient";

export function getSurveys() {
  surveyApi.getSurveys((surveys) => {
    dispatcher.dispatch({
      actionType: "RECEIVE_SURVEYS",
      surveys
    });
  });
}

export function getSurvey(id) {
  surveyApi.getSurveys(id, (survey) => {
    dispatcher.dispatch({
      actionType: "RECEIVE_SURVEY",
      survey
    });
  });
}

export function createSurvey(survey) {
  surveyApi.createSurvey(survey, (surveyResult) => {
    dispatcher.dispatch({
      actionType: "CREATE_SURVEY",
      survey: surveyResult
    });
  });
}

export function updateSurvey(survey) {
  surveyApi.updateSurvey(survey, (surveyResult) => {
    dispatcher.dispatch({
      actionType: "UPDATE_SURVEY",
      survey: surveyResult
    });
  })
}

export function deleteSurvey(id) {
  surveyApi.deleteSurvey(id, (id) => {
    dispatcher.dispatch({
      actionType: "DELETE_SURVEY",
      id
    });
  });
}
