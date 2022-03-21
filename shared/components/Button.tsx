import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(prev => prev + 1)}>shared button {count}</button>;
};

// const Button = () => {
//   return React.createElement('button', null, `shared button`);
// };

export default Button;
