import React from "react";
import moreicon from "../../assets/icons/more.png"
import logo from "../../assets/images/libertlogo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-bar">
                <div className="nav-element">
                    <Link to={"#"}/>Home
                </div>
                <div className="nav-element">
                    <Link to={"#"}/>Services
                </div>
                <div className="nav-element">
                    <Link to={"#"}/>About us
                </div>
                <div className="nav-element">
                    <Link to={"#"}/>Contacts
                </div>
            </div>
        </div>
    );
}

export default Header;