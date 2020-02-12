import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Burger/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Burger/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar open={this.state.showSideDrawer} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
