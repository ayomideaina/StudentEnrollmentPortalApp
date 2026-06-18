import { useNavigate } from "react-router-dom";
import EnrollForm from "../components/EnrollForm";

const EnrollPage = ({ tracks, onEnroll }) => {
  const navigate = useNavigate();

  const handleEnrollAndRedirect = (newStudent) => {
    onEnroll(newStudent);
    navigate("/");
  };

  return (
    <div className="enroll-page">
      <EnrollForm tracks={tracks} onEnroll={handleEnrollAndRedirect} />
    </div>
  );
};

export default EnrollPage;
