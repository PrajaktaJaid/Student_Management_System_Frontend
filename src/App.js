import React from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import SearchStudent from "./components/SearchStudent";
import UpdateStudent from "./components/UpdateStudent";

const App = () => {
  return (
    <div>
      <h1>Student Management Application</h1>
      <AddStudent />
      <SearchStudent />
      <StudentList />
      <UpdateStudent />
    </div>
  );
};

export default App;
