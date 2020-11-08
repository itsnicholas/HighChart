import React from 'react';

interface Props {
  message: string;
}

// Displaying possible error or other message
const ErrorNotification: React.FC<Props> = ({ message }) => {
  return (
    <div className="message" id="message">
      {message}
    </div>
  )
};

export default ErrorNotification;