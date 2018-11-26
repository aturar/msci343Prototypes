import React from "react";
import ReactTable from "react-table";
import { compose, withState, withHandlers } from "recompose"
import "react-table/react-table.css";
import "./styles.css";

function AssignedToMePage(props) {
  const columns = [
    {
      Header: "Title",
      accessor: "title" // String-based value accessors!
    },
    {
      Header: "Status",
      accessor: "status"
    },
    {
      Header: "Priority",
      accessor: "priority"
    },
    {
      Header: "Date",
      accessor: "date"
    }
  ];

  return (
    <div className="loggedByMe flex flex-column">
      <div className="searchAndBtns pa3 pb4">
        <div className="btns pa3 flex justify-center flex flex-column">
          <div className="tc">
            <button className="actionBtn">
              <div className="b f3">{props.numberOfFeatures} Features</div>
              <div className="black-60 f5">Completed last week: 3</div>
            </button>
            <button className="actionBtn">
              <div className="b f3">{props.numberOfBugs} Bugs</div>
              <div className="black-60 f5">Completed last week: 5</div>
            </button>
          </div>
          <div className="tc middle center pt5">
            <input className="search" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className="grid">
        <ReactTable
          getTrProps={(state, rowInfo, column, instance) => ({
            onClick: e => props.history.push({
              pathname: "/viewBug",
              state: rowInfo,
            })
          })}
          data={props.bugsArray} columns={columns} />
      </div>
    </div>
  );
}

export default compose(
  withState("selected", "setSelected", null),
)(AssignedToMePage)
