import { EventEmitter} from "events";
import _ from "lodash";

import dispatcher from "../dispatcher";


class SurveyStore extends EventEmitter {
  constructor() {
    super();
    this.surveys = []
  }

  getAll() {
    return this.surveys;
  }

  getSurvey(id) {
    let index = this.getSurveyIndex(parseInt(id));
    return this.surveys[index];
  }

  getSurveyIndex(id) {
    return _.findIndex(this.surveys, { id: id })
  }

  createSurvey(survey) {
    this.surveys.push(survey);
    this.emit("change");
  }

  updateSurvey(survey) {
    let index = this.getSurveyIndex(survey.id);
    if (index > 0) {
      this.surveys[index] = survey;
      this.emit("change");
    }
  }

  receiveSurveys(surveys) {
    this.surveys = surveys;
    this.emit("change");
  }

  receiveSurvey(survey) {
    if (!this.updateSurvey(survey)) {
      this.createSurvey(survey);
    }
  }

  handleAction(action) {
    switch(action.actionType) {
      case "RECEIVE_SURVEYS": {
        this.receiveSurveys(action.surveys);
        break;
      }
      case "RECEIVE_SURVEY": {
        this.receiveSurvey(action.survey);
        break;
      }
      case "CREATE_SURVEY": {
        this.createSurvey(action.name, action.category);
        break;
      }
    }
  }
}

const surveyStore = new SurveyStore;
dispatcher.register(surveyStore.handleAction.bind(surveyStore));

export default surveyStore;
