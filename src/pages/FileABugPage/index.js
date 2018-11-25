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

    if (!values.startDate) {
      errors.startDate = "Required";
    } else {
      errors.startDate = "";
    }

    if (!values.asignee) {
      errors.asignee = "Required";
    } else {
      errors.asignee = "";
    }
    if (!values.priority) {
      errors.priority = "Required";
    } else {
      errors.priority = "";
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
