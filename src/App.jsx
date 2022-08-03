import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <h1>Value = ${state}</h1>
      <button onClick={() => setState(state + 1)}>CLICK</button>
    </div>
  );
}

export default App;
