import React, { Component } from "react";
// const data={
//     "id": 1,
//     "email": "george.bluth@reqres.in",
//     "first_name": "George",
//     "last_name": "Bluth",
//     "avatar": "https://reqres.in/img/faces/1-image.jpg"
// }
export class table extends Component {
  constructor(props) {
    super(props);
    // console.log()
    console.log("table", props);
  }
  render() {
    console.log("table1", this.props);

    return (
      <table border="1">
          <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
        </tr>
        </thead>
        <tbody>
        {this.props.data.map((row,index)=>{
            // console.log(row);
                   return( <tr key={index}>
                    <td>{row.email}</td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.avatar}</td>
                  </tr>)
        })}
        </tbody>
      </table>
    );
  }
}

export default table;
