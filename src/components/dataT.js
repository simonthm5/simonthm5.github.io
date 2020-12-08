import React from "react";
import DataB from "./dataB";

function DataT({ headings, users, sortUsers}) {
    return (
        <div >
            <table id="table">
                    <thead>
                        <tr>
                            {headings.map(({ name, width }) => {
                                return (
                                    <th className="col"
                                        key={name}
                                        style={{ width }}
                                        onClick={() => {
                                            sortUsers(name.toLowerCase());
                                        }}>
                                            {name}
                                            <span className="pointer"><i></i></span>
                                    </th>);})}</tr>
                    </thead>

                <DataB users={users} />
            </table>
        </div>
    );
}

export default DataT;
