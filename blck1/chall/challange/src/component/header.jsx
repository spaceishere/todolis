import React from "react";
import App from "../App.css";
import bg from "../imgs/bg.svg";
import photo2 from "../imgs/photo2.jpg";

function Header() {
  const headerTitles = ["Product", "Servisces", "Contact", "Login"];
  return (
    <div className="header">
      <div className="row-1">
        <div className="txt1">
          <div className="team">team</div>
          <div className="bluee"></div>
        </div>
        <div className="tools">
          {headerTitles.map((title, index) => {
            return (
              <p key={index} className="titles">
                {title}
              </p>
            );
          })}
          <button className="header_bttn">Get access</button>
        </div>
      </div>
    </div>
  );
}
export default Header;
