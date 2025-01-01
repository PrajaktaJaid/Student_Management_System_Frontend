import React, { useState } from "react";
import axios from "axios";

const SearchStudent = () => {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/api/students/search?name=${query}`
      );
      setStudents(response.data);
    } catch (err) {
      alert("Error fetching students.");
    }
  };

  return (
    <div>
      <h2>Search Student</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter student name"
        />
        <button type="submit">Search</button>
      </form>
      {students.length > 0 && (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.age} - {student.studentClass} - {student.phoneNumber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchStudent;
