import React from "react";

export default function Alert(props) {
  return ( props.alert &&
    <div style={{display: "flex", justifyContent: "end"}}>
      <div style={{zIndex: '5', position: 'absolute', width: '30vw'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.msg}
      </div>
    </div>
  );
}