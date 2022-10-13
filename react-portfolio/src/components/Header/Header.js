import React from "react";
import Navigation from "../Navigation/Navigation"
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css"
const Header=()=>{
    return (
      <header >
        <div className="content fixed-top header">
          <Navigation></Navigation>
        </div>
      </header>
    );

}

export default Header;
