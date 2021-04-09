import React, { useState } from "react";
import { MDBCollapse } from "mdbreact";
import { MDBIcon } from 'mdb-react-ui-kit'

const Collapse = ({ title, children }) => {
  const [collapseId, setCollapseId] = useState("");

  const toggleCollapse = (collapseId) => () => {
    setCollapseId(
      (prevState) => (collapseId = prevState !== collapseId ? collapseId : "")
    );
  };

  const style = {
    collapse: {
      backgroundColor: "#e0e0e0",
      padding: 10,
      fontSize: 20
    },
    icon: {
      padding: 10
    }
  }

  return (
    <div className="mb-4">
      <div style={style.collapse} onClick={toggleCollapse('basicCollapse')}>
        {title}
        {
          collapseId && <MDBIcon icon="angle-down" style={style.icon} className="float-right"/>
        }
        {
          !collapseId && <MDBIcon icon="angle-up" style={style.icon} className="float-right"/>
        }
      </div>
      <MDBCollapse id="basicCollapse" isOpen={collapseId}>
        {children}
      </MDBCollapse>
    </div>
  );
};

export default Collapse;
