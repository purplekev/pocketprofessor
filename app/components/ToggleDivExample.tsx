import { useState } from 'react';

const ToggleDivExample = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleDiv = () => {
      setIsVisible(prevState => !prevState);
    };
  
    return (
      <div>
        <button onClick={toggleDiv}>
          {isVisible ? 'Hide' : 'Show'} Div
        </button>
        {isVisible && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'lightblue' }}>
            This is a toggleable div!
          </div>
        )}
      </div>
    );
  };
  
  export default ToggleDivExample;