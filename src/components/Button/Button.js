import React from 'react';

export default function Button() {
  const handleClick = () => {
    console.log(`THOU HAST CLICKITHED ME!`);
  };

  return <button onClick={handleClick}>Button</button>;
}
