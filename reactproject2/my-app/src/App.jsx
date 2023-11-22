import React, { useState } from 'react';


function App() {

const [click, setClick] = useState(false);

  return (
    <div className='App'>
      <button onClick={()=>setClick(true)}>open modal</button>
    
    {click &&m<Modal setClick={}} 
</div>

  )
}

export default App

// import React from 'react';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';


// function App() {
//   const [count, setCount] = useState(0);
//   const increase=()=>{
//     setCount(count=>count+1)
//   };
//   const decrease=()=>{
//     setCount(count=>count-1)
//   };
  
//   return (
//   <div >
//     <button onClick={increase}> Increase
//     <FontAwesomeIcon icon={faHouse}  /></button>
//     <h1>{count}</h1>
//     <button onClick={decrease}>decrease</button>

//   </div>
//   )

// }

// export default App;