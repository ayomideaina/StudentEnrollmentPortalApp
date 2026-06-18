import Header from "../components/Header";
import StatusMessage from "../components/StatusMessage";
import StudentList from "../components/StudentList";
import ClassButton from "../components/ClassButton";

const HomePage = ({ students, status, studentCount, averageScore, onRefresh }) => {
  return (
    <div className="home-page">
      <Header
        title="KodeCamp 6.0 — Enrollment Portal"
        studentCount={studentCount}
        averageScore={averageScore}
      />

      {status === "loading" || status === "error" ? (
        <StatusMessage type={status} />
      ) : (
        <StudentList students={students} title="All Students">
          <ClassButton
            title="↻ Refresh Roster"
            className="refresh-btn"
            onClick={onRefresh}
          />
        </StudentList>
      )}
    </div>
  );
};

export default HomePage;
