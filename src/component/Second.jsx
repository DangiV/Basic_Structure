import React, { useState } from 'react';

function Second() {
  const [container1, setContainer1] = useState([1, 2, 3, 4, 5]);
  const [container2, setContainer2] = useState([]);

  const handleBallClick = (ball) => {
    setContainer1(container1.filter(item => item !== ball));
    setContainer2([...container2, ball]);
  };

  return (
    <div>
      <h2>Container 1</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {container1.map(ball => (
          <div 
            key={ball} 
            onClick={() => handleBallClick(ball)} 
            style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', cursor: 'pointer' }}
          >
            {ball}
          </div>
        ))}
      </div>
      
      <h2>Container 2</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {container2.map(ball => (
          <div 
            key={ball} 
            style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}
          >
            {ball}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Second;
