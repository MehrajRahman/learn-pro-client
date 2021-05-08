import React from "react";

const CourseDataTable = ({ courses, callApi }) => {
   function addStatus(crs) {
       const updateStatus = {...crs};
       const index= crs.ind;
       const id = "c"+index;
       updateStatus.status = document.getElementById(id).value;
       callApi(updateStatus)
      }
    
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
            crs.ind = index,
          <tr>
            <td>{index + 1}</td>
            <td>{crs.name}</td>
            <td>{crs.email}</td>
            <td>{crs.course}</td>
            <td>
              <select onBlur={()=>addStatus(crs)} id={"c"+index}>
                
                <option value={crs.status}>{crs.status}</option>
                <option value="pending">pending</option>
                <option  value="Running">Running</option>
                <option  value="end">end</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseDataTable;
