const Button = ({ title, onClick, className = "", disabled = false }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
