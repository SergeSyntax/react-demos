import React from 'react';
import formFields from './formFields';
import { submitSurvey } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const SurveyFormReview = ({
  onCancel,
  formValues,
  submitSurvey,
  history
}) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{formValues[name]}</div>
    </div>
  ));


  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

export default connect(
  null,
  { submitSurvey }
)(withRouter(SurveyFormReview));
