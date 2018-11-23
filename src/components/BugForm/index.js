import React from "react";
import { compose, withState, withHandlers } from "recompose";
import Select from "react-select";

import "./styles.css";

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
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

export default function BugForm(props) {
  const feelingLike = [
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
    <form className="bugForm flex flex-column tc pa4 ph7">
      <div className="inputFields flex flex-column">
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
              options={feelingLike}
            />
          </div>
          <div className="dueDate">
            <label className="label f5 tl black-60">
              <span>Due date</span>
            </label>
            <Select
              id="dueDate"
              value={props.selectedOption}
              onChange={props.onChange}
              options={feelingLike}
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
              id="dueDate"
              value={props.selectedOption}
              onChange={props.onChange}
              options={asignee}
            />
          </div>
          <button
            onClick={e => {
              e.preventDefault();
              props.handleSubmit();
              if (props.errors.description === "") {
                props.createBug({
                  title: props.values.title,
                  description: props.values.description
                });
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
