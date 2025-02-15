// import React, { useReducer } from 'react';

// function appleReducer(state = 3, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'REMOVE_APPLE':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(appleReducer, 3);

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1 style={{ color: 'orange' }}>APPLE Counter</h1>
//       <p style={{color: 'bule' }}> Number of APPLES: {state}</p>
//       <button
//         onClick={() => dispatch({ type: 'ADD_APPLE' })}
//         style={{
//           backgroundColor: 'green',
//           color: 'white',
//           padding: '10px 20px',
//           margin: '10px',
//           border: 'none',
//           borderRadius: '20px',
//           cursor: 'pointer',
//         }}
//       >
//         ADD APPLE
//       </button>
//       <button
//         onClick={() => dispatch({ type: 'REMOVE_APPLE' })}
//         style={{
//           backgroundColor: 'red',
//           color: 'white',
//           padding: '10px 20px',
//           margin: '10px',
//           border: 'none',
//           borderRadius: '20px',
//           cursor: 'pointer',
//         }}
//       >
//         REMOVE APPLE
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useReducer } from 'react';
// Reducer function to track the number of apples
function appleReducer(state = 3, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'Eat_APPLE':
      return state - 1;
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(appleReducer, 3);
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px', backgroundColor: 'lightblue', margin: 'auto', width: '50%', borderRadius: '10px', marginTop: '50px' }}>
      {Array.from({ length: count }).map((_, index) => (
        <img key={index} src={require('./apple.jpg')} alt='Apple' style={{ width: '100px', height: '100px', margin: '5px', borderRadius: '10px' }} />
      ))}
      <h1>Apple Counter</h1>
      <p>Number of apples: {count}</p>
      <button
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => dispatch({ type: 'ADD_APPLE' })}
      >
        Add Apple
      </button>
      <button
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => dispatch({ type: 'Eat_APPLE' })}
      >
        Eat Apple
      </button>
    </div>
  );
}
export default App;


