import React from "react";

export default class SurveyItem extends React.Component {
  render() {
    let { name, category } = this.props;
    return(
      <li><strong>{name}</strong> - {category}</li>
    );
  }
}
