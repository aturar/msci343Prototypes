import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./styles.css";

export default function LoggedByMePage(props) {
  const columns = [
    {
      Header: "Title",
      accessor: "title" // String-based value accessors!
    },
    {
      Header: "Description",
      accessor: "description"
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

  const data = [{ title: "Ayat", description: "HAHAHAHAHAHAHAHAH" }];

  console.log(props);
  return (
    <div className="loggedByMe flex flex-column">
      <div className="searchAndBtns pa3 pb4">
        <div className="btns pa3 flex justify-center">
          <button className="actionBtn">
            <div className="b f3">{props.numberOfFeatures} Features</div>
            <div className="black-60 f5">Completed last week: 3</div>
          </button>
          <button className="actionBtn">
            <div className="b f3">{props.numberOfBugs} Bugs</div>
            <div className="black-60 f5">Completed last week: 5</div>
          </button>
        </div>
      </div>
      <div className="grid">
        <ReactTable data={data} columns={columns} />
      </div>
    </div>
  );
}
