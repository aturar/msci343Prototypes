import React from "react";
import { withFormik } from "formik";
// components
import BugForm from "components/BugForm";

const EnhancedBugForm = withFormik({
  mapPropsToValues: props => ({
    title: props.title,
    description: props.description,
    startDate: props.startDate,
    asignee: props.asignee,
    priority: props.priorty,

  }),
  // Custom sync validation
  validate: values => {
    let errors = {};
    if (!values.title) {
      errors.title = "Required";
    } else {
      errors.title = "";
    }

    if (!values.description) {
      errors.description = "Required";
    } else {
      errors.description = "";
    }
    return errors;
  }
})(BugForm);

export default function FileABugPage(props) {
  return (
    <div>
      <EnhancedBugForm {...props} />
    </div>
  );
}
