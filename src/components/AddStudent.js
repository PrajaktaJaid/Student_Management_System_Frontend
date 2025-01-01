import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    studentClass: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/students", student);
      alert("Student added successfully!");
      setStudent({ name: "", age: "", studentClass: "", phoneNumber: "" });
    } catch (err) {
      alert("Error adding student! Please check the form.");
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="studentClass"
          value={student.studentClass}
          onChange={handleChange}
          placeholder="Class"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={student.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
