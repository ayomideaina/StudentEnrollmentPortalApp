const StatusMessage = ({ type }) => {
  const messages = {
    loading: "Loading students...",
    error: "Failed to load students. Please try again.",
  };

  return (
    <div className={`status-message status-${type}`}>
      {messages[type]}
    </div>
  );
};

export default StatusMessage;
