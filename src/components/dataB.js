import React from "react";

function DataB({ users }) {
    function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const daySpan = dateArray[2].split("T");
    const day = daySpan[0];
    const currentDate = [month, day, year].join("-");
    return currentDate;
    }

    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? ( users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image">
                                <img 
                                    src={picture.medium}
                                    alt={"image for profile" + name.first +  " " + name.last}
                                />
                            </td><td data-th="Name">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone">
                                {phone}
                            </td>
                            <td data-th="Email">
                                <a href={"mailto:" + email} target="_blank">{email}</a>
                            </td>
                            <td data-th="DOB">{formatDate(dob.date)}
                            </td> </tr>   ); })):(<></> )}</tbody> );}

export default DataB;