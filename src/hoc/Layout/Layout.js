import React, { Component } from "react";

import Aux from "../Aux";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Burger/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Burger/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          open={this.state.showSideDrawer}
          hamburgerClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
