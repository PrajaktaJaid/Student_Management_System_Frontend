import React, { useState } from "react";
import axios from "axios";

const UpdateStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState({
    name: "",
    age: "",
    studentClass: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/students/${studentId}`, student);
      alert("Student updated successfully!");
      setStudentId("");
      setStudent({ name: "", age: "", studentClass: "", phoneNumber: "" });
    } catch (err) {
      alert("Error updating student!");
    }
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="Student ID"
          required
        />
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
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
