const getGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

const StudentCard = ({
  student: { firstName, lastName, email, track, score, isActive, avatar },
}) => {
  return (
    <div className={`student-card ${isActive ? "card-active" : "card-inactive"}`}>
      <img src={avatar} alt={`${firstName} ${lastName}`} className="card-avatar" />
      <h3>{`${firstName} ${lastName}`}</h3>
      <p>{track} · {email}</p>
      <p>Score: {score} (Grade: {getGrade(score)})</p>
      <p>{isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default StudentCard;
