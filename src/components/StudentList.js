import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} - {student.studentClass} - {student.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
