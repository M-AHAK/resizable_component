// import React, { useState } from 'react';
// import { Resizable } from 'react-resizable';

// import Component1 from './components/Component1';
// import Component2 from './components/Window2';
// import Component3 from './components/Window3';

// const App = () => {
//   const [widths, setWidths] = useState({
//     component1Width: 300,
//     component2Width: 300,
//     component3Width: 300,
//   });

//   const handleResize = (key, e, { size }) => {
//     setWidths({
//       ...widths,
//       [key]: size.width,
//     });
//   };

//   return (
//     <div className="app">
//       <Resizable
//         className="resizable-component"
//         width={widths.component1Width}
//         height={300}
//         onResize={(e, { size }) => handleResize('component1Width', e, { size })}
//       >
//         <Component1/>
//       </Resizable>
//       <Resizable
//         className="resizable-component"
//         width={widths.component2Width}
//         height={300}
//         onResize={(e, { size }) => handleResize('component2Width', e, { size })}
//       >
//         <Component2/>
//       </Resizable>
//       <Resizable
//         className="resizable-component"
//         width={widths.component3Width}
//         height={300}
//         onResize={(e, { size }) => handleResize('component3Width', e, { size })}
//       >
//         <Component3/>
//       </Resizable>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import ResizableComponent from './ResizableComponent';

const App = () => {
  return (
    <div className="App">
      <div className="top">
        <ResizableComponent title="Component 1" />
        <ResizableComponent title="Component 2" />
      </div>
      <ResizableComponent title="Component 3" />
    </div>
  );
};

export default App;

