import React from "react";

import classes from "./Hamburger.module.css";

const hamburger = props => {
  let attachedClasses;
  if (props.open) {
    attachedClasses = [
      classes.hamburger,
      classes.hamburgerSpin,
      classes.isActive
    ];
  } else {
    attachedClasses = [classes.hamburger, classes.hamburgerSpin];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <div className={classes.hamburgerBox} onClick={props.parentCallback}>
        <div className={classes.hamburgerInner}></div>
      </div>
    </div>
  );
};

export default hamburger;
