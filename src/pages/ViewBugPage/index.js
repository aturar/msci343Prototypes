import React from "react";
import { compose, withState, withHandlers } from "recompose";
import Select from "react-select";
import DatePicker from "react-datepicker";
import Moment from 'moment';

import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

function ViewBugPage(props) {
  const { original } = props.location.state
  const date = Moment(original.date, 'x')
  return (
    <form className="bugForm flex flex-column tc pa4 ph7 pt4 disabled">
      <div className="inputFields flex flex-column">
        <div className="btns pa1 flex justify-center flex flex-column">
          <div className="tc">
            <button type="button" onClick={() => props.updateToFeature()} className={`bugsBtn ${original.issueType === "feature" && "active"}`}>
              Feature
            </button>
            <button type="button" onClick={() => props.updateToBug()} className={`bugsBtn ${original.issueType === "bug" && "active"}`}>
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
            value={original.title}
          />
        </div>
        <div className="priorityAndDueDate flex pv3">
          <div className="priority">
            <label className="label f5 tl black-60">
              <span>Priority</span>
            </label>
            <Select
              id="priority"
              defaultInputValue={original.priority}
              className="priority"
            />
          </div>
          <div className="dueDate">
            <label className="label f5 tl black-60">
              <span>Due date</span>
            </label>
            <DatePicker
              selected={date._d}
              className="datePicker"
            />
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
            value={original.description}
          />
        </div>
        <div className="asigneeAndSubmitBtn flex flex-row">
          <div className="asignee">
            <label className="label f5 tl black-60">
              <span>Asignee</span>
            </label>
            <Select
              defaultInputValue={original.asignee.label}
            />
          </div>
          <div className="status">
            <label className="label f5 tl black-60">
              <span>Status</span>
            </label>
            <Select
              defaultInputValue={original.priority}
            />
          </div>
        </div>
        <button
          onClick={e => {
            e.preventDefault();
            props.handleSubmit();
            if (props.errors.description === "") {
              props.createBug({
                title: props.values.title,
                description: props.values.description,
                priority: props.priority.label,
                date: props.startDate.toDateString(),
                asignee: props.asignee,
                issueType: props.issueType,
              });
              props.history.push("/loggedByMe");
            }
          }}
          className="editBtn"
          type="submit"
        >
          Edit
          </button>
      </div>
    </form>
  );
}

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

export default compose(
  withState("issueType", "setIssueType", ""),
  withState("startDate", "setStartDate", ""),
  withState("priority", "setPriority", "High"),
  withState("asignee", "setAsignee", ""),
  withHandlers({
    updateToBug: props => () => {
      props.setIssueType("bug");
    },
    updateToFeature: props => () => {
      props.setIssueType("feature");
    },
    onStartDateChange: props => value => {
      props.setStartDate(value);
    },
    onPriorityChange: props => value => {
      props.setPriority(value);
    },
    onAsigneChange: props => value => {
      props.setAsignee(value);
    }
  })
)(ViewBugPage);
