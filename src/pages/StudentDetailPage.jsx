import { useParams, Link } from "react-router-dom";

const StudentDetailPage = ({ students }) => {
  const { id } = useParams();

  const student = students.find((s) => String(s.id) === id);

  if (!student) {
    return (
      <div className="student-detail-page">
        <h2>Student not found</h2>
        <p>We couldn't find a student matching that id.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  const { firstName, lastName, email, track, score, isActive, avatar, grade } = student;

  return (
    <div className="student-detail-page">
      <img src={avatar} alt={`${firstName} ${lastName}`} className="detail-avatar" />

      <h2>{`${firstName} ${lastName}`}</h2>

      <p>Email: {email}</p>
      <p>Track: {track}</p>
      <p>Score: {score} (Grade: {grade})</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>

      <Link to="/">← Back to Roster</Link>
    </div>
  );
};

export default StudentDetailPage;
