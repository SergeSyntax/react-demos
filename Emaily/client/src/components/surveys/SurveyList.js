import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';
class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys = () => this.props.surveys.map(survey => (
      <div className="card darken-1" key={survey._id}>
        <div className="card-content">
          <span className="card-title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Send On: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a>Yes: {survey.yes}</a>
          <a>No: {survey.no}</a>
        </div>
      </div>
    ));

  render() {
    return (
      <div>
        <div>{this.renderSurveys()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys
});

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
