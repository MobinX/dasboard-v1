import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-background rounded-lg shadow-md p-4 md:p-5 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
