import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return <>
        <Link to="/">About</Link> | <Link to ="/discover">Discover</Link> | <Link to="/search">Search</Link>
    </>
}

export default Navbar