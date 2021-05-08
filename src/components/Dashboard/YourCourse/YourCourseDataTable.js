import React from "react";

const YourCourseDataTable = ({ courses }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            email
          </th>
          <th className="text-secondary" scope="col">
            Course Name
          </th>
          <th className="text-secondary" scope="col">
            status
          </th>
        </tr>
      </thead>
      <tbody>
        {courses.map((crs, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{crs.name}</td>
            <td>{crs.email}</td>
            <td>{crs.course}</td>
            <td>  
                {
                  crs.status === "end" ? <option style={{color:"red"}} value={crs.status}>{crs.status}</option>:<option style={{color:"green"}} value={crs.status}>{crs.status}</option>
                }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default YourCourseDataTable;
