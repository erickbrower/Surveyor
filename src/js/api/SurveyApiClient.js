import _ from "lodash";

let fakeData = {
  surveys: [
    {
      id: 1,
      category: "Books",
      name: "The Old Man and the Sea"
    },
    {
      id: 2,
      category: "Movies",
      name: "Guardians of the Galaxy"
    },
    {
      id: 3,
      category: "Movies",
      name: "John Wick"
    }
  ]
}

//For now, fake Api calls by using setTimeout
class SurveyApiClient {

  getSurveys(success, error) {
    setTimeout(() => {
      success(fakeData.surveys);
    }, 200);
  }

  createSurvey(survey, success, error) {
    setTimeout(() => {
      survey.id = Date.now;
      success(survey);
    }, 200);
  }

  updateSurvey(survey, success, error) {
    setTimeout(() => {
      success(survey);
    }, 200);
  }

  deleteSurvey(id, success, error) {
    setTimeout(() => {
      success(id);
    }, 200);
  }
}

const surveyApiClient = new SurveyApiClient;
export default surveyApiClient;
