import React from "react";
import { Link } from "react-router-dom";

export default class SurveyItem extends React.Component {
  render() {
    let { id, name, category } = this.props;
    let linkPath = "surveys/" + id;
    return(
      <li><Link to={linkPath}><strong>{name}</strong></Link> - {category}</li>
    );
  }
}
