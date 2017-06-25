import React from "react";

import SurveyStore from "../stores/SurveyStore";
import * as SurveyActions from "../actions/SurveyActions";


export default class Survey extends React.Component {
  constructor() {
    super();
    this.getSurvey = this.getSurvey.bind(this);
    this.state = {
      survey: {}
    }
  }

  componentWillMount() {
    SurveyStore.on("change", this.getSurvey);
  }

  componentDidMount() {
    SurveyActions.getSurvey();
  }

  componentWillUnmount() {
    SurveyStore.removeListener("change", this.getSurvey);
  }

  getSurvey() {
    let survey = SurveyStore.getSurvey(this.props.match.params._id)
    this.setState({
      survey: survey
    })
  }

  render() {
    let { survey } = this.state;
    if (survey) {
      return (
        <h2> { survey.name } </h2>
      );
    } else {
      return null;
    }
  }
}
