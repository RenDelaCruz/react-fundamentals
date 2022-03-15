// Styling
// 💯 Create a custom component
// http://localhost:3000/isolated/final/05.extra-1.js

import * as React from 'react';
import '../box-styles.css';

function Box({ style, size, className = '', ...otherProps }) {
  let boxSize;
  switch (size) {
    case 'small':
      boxSize = 'box--small';
      break;
    case 'medium':
      boxSize = 'box--medium';
      break;
    case 'large':
      boxSize = 'box--large';
      break;
    default:
      boxSize = 'box--large'
  }

  return (
    <div
      className={`box ${boxSize}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  );
}

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box className="box--large" style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  );
}

export default App;
