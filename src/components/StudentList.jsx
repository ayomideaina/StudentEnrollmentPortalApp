import StudentCard from "./StudentCard";

const StudentList = ({ students, title = "All Students", children }) => {
  return (
    <section className="student-list">
      <h2>{title}</h2>

      {students.length === 0 ? (
        <p>No students to display yet</p>
      ) : (
        <div className="cards-grid">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}

      {children && <footer>{children}</footer>}
    </section>
  );
};

export default StudentList;
