import { Link } from "react-router-dom";

const StudentCard = ({
  student: { id, firstName, lastName, email, track, score, isActive, avatar, grade },
}) => {
  return (
    <div className={`student-card ${isActive ? "card-active" : "card-inactive"}`}>
      <img src={avatar} alt={`${firstName} ${lastName}`} className="card-avatar" />

      <h3>
        <Link to={`/students/${id}`}>{`${firstName} ${lastName}`}</Link>
      </h3>

      <p>{track} · {email}</p>
      <p>Score: {score} (Grade: {grade})</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default StudentCard;
