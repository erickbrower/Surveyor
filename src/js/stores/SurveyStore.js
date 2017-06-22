import { EventEmitter} from "events";

import dispatcher from "../dispatcher";


class SurveyStore extends EventEmitter {
  constructor() {
    super();
    this.surveys = []
  }

  getAll() {
    return this.surveys;
  }

  createSurvey(name, category) {
    this.surveys.push(
      {
        name,
        category
      }
    );

    this.emit("change");
  }

  receiveSurveys(surveys) {
    this.surveys = surveys;
    this.emit("change");
  }

  handleAction(action) {
    switch(action.actionType) {
      case "RECEIVE_SURVEYS": {
        this.receiveSurveys(action.surveys);
        break
      }
      case "CREATE_SURVEY": {
        this.createSurvey(action.name, action.category);
        break
      }
    }
  }
}

const surveyStore = new SurveyStore;
dispatcher.register(surveyStore.handleAction.bind(surveyStore));

export default surveyStore;
