import React from 'react';
import {NavLink} from "react-router-dom";

function Nav() {

    const navStyle ={
        padding:"20px",
        backgroundColor:"red",
        marginBottom:"20px"
    }

    const linkStyle = {
        color: "white",
        fontWeight:"bold",
        marginRight:"20px",
        fontSize:"20px",
        textDecoration:"none",
        padding: "10px"
    }

    const linkActive = {
        backgroundColor: "white",
        color:"red",
        padding: "10px"

    }

    return(
        <div style={navStyle}>
        <nav>
            {/* for indv active styling : activeStyle={{fontSize: "35px"}}*/}

            <NavLink style={linkStyle} exact to={"/"}  activeStyle={linkActive}>Store</NavLink>
            <NavLink style={linkStyle} exact to={"/cart"} activeStyle={linkActive}>Cart</NavLink>
            <NavLink style={linkStyle} exact to={"/admin"} activeStyle={linkActive}>Admin</NavLink>
            {/*<NavLink exact to={"/items"}>Items</NavLink>*/}
        </nav>
        </div>
    );
}

export default Nav;