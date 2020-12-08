import DataT from "./dataT";
import Nav from "./nav";
import API from "../utils/API";
import React, { Component } from "react";


export default class DataA extends Component {

    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }


    headings = [
        { name: "Image", width: "15%" },
        { name: "Name", width: "25%" },
        { name: "Email", width: "15%" },
        { name: "Phone", width: "15%" },
        { name: "DOB", width: "20%" }
    ]



    componentDidMount(){
        API.getUsers().then(results => {this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }


    //
    searchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            //merge data together, then see if user input is antwhere inside
            let values = Object.values(item)
            .join("")
            .toLowerCase();  return values.indexOf(filter.toLowerCase()) !== -1;
        });  this.setState({filteredUsers: filteredList});
    }



    //
    sortUsers= heading => {
        if(this.state.order === "descend") {this.setState({order: "ascend"
        })} else {this.setState({order: "descend"})}

        const compareFunction = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                else if (heading === "name") {return a[heading].first.localeCompare(b[heading].first);
                } else {return a[heading] - b[heading];
                } } else {
                if (a[heading] === undefined) {
                    return 1; } else if (b[heading] === undefined) {
                    return -1; }    
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else {
                    return b[heading] - a[heading];
                } } }
        const sortComplete = this.state.filteredUsers.sort(compareFunction);
        this.setState({filteredUsers: sortComplete });
    }
    render() {
        return (
            <>
                <Nav handleSearchChange={this.searchChange} />
                <div className="data-area">    <DataT
                    headings={this.headings}
                    users={this.state.filteredUsers}
                    sortUsers={this.sortUsers}
                    /> </div></>);}}
