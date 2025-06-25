import React, { useEffect, useState } from 'react';

const OptOut = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c === 1) clearInterval(timer);
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 font-inter ">
      <p>You have opted out.</p>
      <p>Redirecting in {count} seconds...</p>
    </div>
  );
};

export default OptOut;
