import React from "react";
import SearchB from "./search.js";

function Nav({ searchChange }) {
    return (
        <nav>
            <div id="navbarNav">
                <SearchB searchChange={searchChange}/>
            </div>
        </nav>
    );
}

export default Nav;
