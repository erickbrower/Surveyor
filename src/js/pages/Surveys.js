import React from "react";

import SurveyStore from "../stores/SurveyStore";
import * as SurveyActions from "../actions/SurveyActions";

import SurveyList from "../components/SurveyList"

export default class Surveys extends React.Component {
  constructor() {
    super();
    this.getSurveys = this.getSurveys.bind(this);
    this.state = {
      surveys: SurveyStore.getAll()
    }
  }

  componentWillMount() {
    SurveyStore.on("change", this.getSurveys);
  }

  componentDidMount() {
    SurveyActions.getSurveys();
  }

  componentWillUnmount() {
    SurveyStore.removeListener("change", this.getSurveys);
  }

  getSurveys() {
    this.setState({
      surveys: SurveyStore.getAll()
    })
  }

  render() {
    let { surveys } = this.state;
    return (
      <SurveyList surveys={surveys} />
    );
  }
}
