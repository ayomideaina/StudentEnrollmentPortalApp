import StudentCard from "./StudentCard";

const StudentList = ({ students, title = "All Students", totalCount, children }) => {
  return (
    <section className="student-list">
      <h2>{title}</h2>
      {children && <div className="refresh-row">{children}</div>}

      {students.length === 0 ? (
        <p>No students to display yet</p>
      ) : (
        <>
          <div className="cards-grid">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>

          <footer>End of roster — {typeof totalCount === "number" ? totalCount : students.length}
            total
          </footer>
        </>
      )}
    </section>
  );
};

export default StudentList;
