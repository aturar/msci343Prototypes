import React from "react";
import ReactTable from "react-table";
import { compose, withState, withHandlers } from "recompose"
import "react-table/react-table.css";
import "./styles.css";

function LoggedByMePage(props) {
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
            <button onClick={props.updateToFeature} className={`actionBtn ${props.active === "feature" && "act"}`}>
              <div className="b f3">{props.numberOfFeatures} Features</div>
              <div className="black-60">Completed last week: 3</div>
            </button>
            <button onClick={props.updateToBug} className={`actionBtn ${props.active === "bug" && "act"}`}>
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
          data={props.dataToDisplay} columns={columns} />
      </div>
    </div>
  );
}

export default compose(
  withState("dataToDisplay", "setDataToDisplay", (props) => props.loggedByMeBugsArray),
  withState("active", "setActive", "bug"),
  withState("selected", "setSelected", null),
  withHandlers({
    updateToBug: props => () => {
      props.setActive("bug");
      props.setDataToDisplay(props.loggedByMeBugsArray)
    },
    updateToFeature: props => () => {
      props.setActive("feature")
      props.setDataToDisplay(props.loggedByMeFeaturesArray)
    },
  })
)(LoggedByMePage)
