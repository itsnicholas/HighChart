import React from 'react';

interface Props {
  message: string;
}

const ErrorNotification: React.FC<Props> = ({ message }) => {
  return (
    <div className="message" id="message">
      {message}
    </div>
  )
};

export default ErrorNotification;