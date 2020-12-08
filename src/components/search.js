import React from "react";

function SearchB ({ searchChange }){
    return (
        <div >
            <form >
                <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e=> searchChange(e)}
                />
            </form></div>
    );
}

export default SearchB;