import { useState, useRef } from "react";
import Button from "./Button";

const EnrollForm = ({ tracks, onEnroll }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [track, setTrack] = useState(tracks[0] || "");
  const [score, setScore] = useState("");

  const [errors, setErrors] = useState({});

  const emailRef = useRef(null);
  const activeRef = useRef(null);

  const validate = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (score < 0 || score > 100 || score === "") {
      newErrors.score = "Score must be between 0 and 100";
    }

    if (!emailRef.current.value.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validate();

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    const newStudent = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      track,
      score: Number(score),
      email: emailRef.current.value,
      isActive: activeRef.current.checked,
      avatar: "https://i.pravatar.cc/150",
    };

    onEnroll(newStudent);

    setFirstName("");
    setLastName("");
    setTrack(tracks[0] || "");
    setScore("");

    emailRef.current.value = "";
    activeRef.current.checked = false;
    setErrors({});
  };

  const hasErrors =
    !firstName.trim() || !lastName.trim() || score === "" || score < 0 || score > 100;

  return (
    <form className="enroll-form" onSubmit={handleSubmit}>
      <h2>Enroll New Student</h2>

      <div>
        <label>First Name</label>

        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div>
        <label>Last Name</label>

        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div>
        <label>Track</label>

        <select value={track} onChange={(e) => setTrack(e.target.value)}>
          {tracks.map((trackOption) => (
            <option key={trackOption} value={trackOption}>
              {trackOption}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Score</label>

        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />

        {errors.score && <p className="error">{errors.score}</p>}
      </div>

      <p className="preview">
        Preview: {firstName} {lastName} — {track} ({score})
      </p>

      <div>
        <label>Email</label>
        <input type="email" ref={emailRef} defaultValue="" />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>
          <input type="checkbox" ref={activeRef} defaultChecked={false} />
          Active Student
        </label>
      </div>

      <Button title="Enroll Student" className="submit-btn" disabled={hasErrors} />
    </form>
  );
};

export default EnrollForm;
