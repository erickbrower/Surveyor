import React from "react";
import SurveyItem from "./SurveyItem";

export default class SurveyList extends React.Component {
  formatSurveys() {
    if (!this.props.surveys) {
      return "No surveys yet!";
    }
    let surveys = this.props.surveys.map((survey) => {
      let { id, name, category } = survey;
      return (
        <SurveyItem key={id} name={name} category={category} />
      );
    });
    return surveys;
  }

  render() {
    return(
      <ul>
        { this.formatSurveys() }
      </ul>
    );
  }
}
