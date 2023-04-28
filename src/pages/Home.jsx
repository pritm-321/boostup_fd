import React from "react";
import SearchBar from "../component/SearchBar";

const Home = () => {
  return (
    <>
      <div className="container">
        <SearchBar />
        <div className="col-md-12">
            <button>Add Book</button>
          <table className="table" style={{ color: "#000" }}>
            <thead>
              <tr>
                <th>Sr. No </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            {/* <tbody>
                {
                  userData.map( (getUser, index)=>(
                  <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getUser.first_name}</td>
                  <td>{getUser.last_name}</td>
                  <td>{getUser.email}</td>
                  <td>{getUser.gender}</td>
                  </tr>
                   )) }  
                    
              </tbody> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
