import { useState, useEffect } from "react";

import Header from "./components/Header";
import EnrollForm from "./components/EnrollForm";
import StudentList from "./components/StudentList";
import StatusMessage from "./components/StatusMessage";
import ClassButton from "./components/ClassButton";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const TRACKS = ["Frontend", "Backend", "Fullstack", "DevOps", "Design"];

const getGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

const getAverage = (list) => {
  if (list.length === 0) return 0;
  const total = list.reduce((sum, student) => sum + student.score, 0);
  return total / list.length;
};

const transformApiUser = (user) => {
  const [firstName, ...rest] = user.name.split(" ");
  const lastName = rest.join(" ") || "—";
  const score = (user.id * 7 + 43) % 101;

  return {
    id: user.id,
    firstName,
    lastName,
    email: user.email,
    track: TRACKS[user.id % TRACKS.length],
    score,
    isActive: user.id % 3 !== 0,
    avatar: `https://i.pravatar.cc/150?img=${user.id}`,
    grade: getGrade(score),
  };
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState("idle");
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const loadRoster = async () => {
      setStatus("loading");

      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const apiUsers = await response.json();
        const fetchedStudents = apiUsers.slice(0, 8).map(transformApiUser);

        setStudents((prev) => {
          const enrolledStudents = prev.filter((s) => typeof s.id === "string");
          return [...enrolledStudents, ...fetchedStudents];
        });
        setStatus("success");
      } catch (error) {
        console.error("Failed to fetch roster:", error);
        setStatus("error");
      }
    };

    loadRoster();
  }, [refreshCount]);

  const handleRefresh = () => {
    setRefreshCount((prev) => prev + 1);
  };

  const handleEnroll = (newStudent) => {
    const studentWithGrade = { ...newStudent, grade: getGrade(newStudent.score) };
    setStudents((prev) => [studentWithGrade, ...prev]);
  };

  const visibleStudents = students.slice(0, 8);
  const studentCount = visibleStudents.length;
  const averageScore = getAverage(visibleStudents);

  return (
    <div className="app">
      <Header
        title="KodeCamp 6.0 — Enrollment Portal"
        studentCount={studentCount}
        averageScore={averageScore}
      />

      <EnrollForm tracks={TRACKS} onEnroll={handleEnroll} />

      <section className="roster-section">
        {status === "loading" || status === "error" ? (
          <StatusMessage type={status} />
        ) : (
          <>
            <div className="roster-controls">
              <ClassButton
                title="↻ Refresh Roster"
                className="refresh-btn btn"
                onClick={handleRefresh}
              />
            </div>

            <StudentList students={visibleStudents} title="Student Roster" />
          </>
        )}
      </section>
    </div>
  );
};

export default App;
