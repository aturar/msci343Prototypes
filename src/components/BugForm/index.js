import React from "react";
import { compose, withState, withHandlers } from "recompose";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

const InputFeedback = ({ error }) =>
  error !== "" ? <div className="input-feedback b f5 tl">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label f5 tl black-60" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className={className}
        type="text"
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

function BugForm(props) {
  const priorities = [
    { value: "0", label: "high" },
    { value: "1", label: "medium" },
    { value: "2", label: "low" }
  ];

  const asignee = [
    { value: "0", label: "Ayat Turar" },
    { value: "1", label: "Baraa Baraa" },
    { value: "2", label: "Altamash Potato" }
  ];
  return (
    <form className="bugForm flex flex-column tc pa4 ph7 pt4">
      <div className="inputFields flex flex-column">
        <div className="btns pa1 flex justify-center flex flex-column">
          <div className="tc">
            <button type="button" onClick={() => props.updateToFeature()} className={`bugsBtn ${props.issueType === "feature" && "active"}`}>
              Feature
            </button>
            <button type="button" onClick={() => props.updateToBug()} className={`bugsBtn ${props.issueType === "bug" && "active"}`}>
              Bug
            </button>
          </div>
        </div>
        <div className="pa3">
          <TextInput
            id="title"
            type="text"
            label="Title"
            className="titleField"
            placeholder="Please enter the title..."
            error={props.touched.title && props.errors.title}
            value={props.values.title}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            className={props.errors.title ? "titleField error" : "titleField"}
          />
        </div>
        <div className="priorityAndDueDate flex pv3">
          <div className="priority">
            <label className="label f5 tl black-60">
              <span>Priority</span>
            </label>
            <Select
              id="priority"
              value={props.selectedOption}
              onChange={props.onChange}
              options={priorities}
              className="priority"
              className={props.errors.title ? "priority error" : "priority"}
            />
            <InputFeedback error={props.errors.priority} />
          </div>
          <div className="dueDate">
            <label className="label f5 tl black-60">
              <span>Due date</span>
            </label>
            <DatePicker
              selected={props.startDate}
              onChange={date => props.setStartDate(date)}
              className="datePicker"
            />
            <InputFeedback error={props.errors.startDate} />
          </div>
        </div>
        <div className="pa3 pv4">
          <label className="label f5 tl black-60" {...props}>
            Description
          </label>
          <textarea
            id="description"
            type="text"
            label="description"
            className="descriptionField"
            placeholder="Please enter the description..."
            error={props.touched.description && props.errors.description}
            value={props.values.description}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            className={
              props.errors.title ? "descriptionField error" : "descriptionField"
            }
          />
          <InputFeedback error={props.errors.description} />
        </div>
        <div className="asigneeAndSubmitBtn flex flex-row">
          <div className="asignee">
            <label className="label f5 tl black-60">
              <span>Asignee</span>
            </label>
            <Select
              id="asignee"
              value={props.priority}
              onChange={value => props.onAsigneChange(value)}
              options={asignee}
            />
            <InputFeedback error={props.errors.asignee} />
          </div>
          <button
            onClick={e => {
              e.preventDefault();
              props.handleSubmit();
              if (props.errors.description === "") {
                debugger
                props.createBug({
                  title: props.values.title,
                  description: props.values.description,
                  status: props.values.status,
                  priority: props.values.priority,
                  date: props.values.startDate,
                });
                props.history.push("/loggedByMe");
              }
            }}
            className="submitBtn"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default compose(
  withState("issueType", "setIssueType", ""),
  withState("startDate", "setStartDate", () => ""),
  withState("priority", "setPriority", ""),
  withState("asignee", "setAsignee", ""),
  withHandlers({
    updateToBug: props => () => {
      props.setIssueType("bug");
    },
    updateToFeature: props => () => {
      props.setIssueType("feature");
    },
    onStartDateChange: props => value => {
      props.setFieldValue("startDate", value);
      props.setStartDate(value);
    },
    onPriorityChange: props => value => {
      props.setFieldValue("priority", value);
      props.setPriority(value);
    },
    onAsigneChange: props => value => {
      props.setFieldValue("asignee", value);
      props.setAsignee(value);
    }
  })
)(BugForm);
