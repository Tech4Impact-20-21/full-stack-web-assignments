import React from "react";
import Card from './components/proptypes/card';

import { Todo } from "./components/todo";

// function App() {
//   const [view, setView] = React.useState(true);
//   return (
//     <React.Fragment>
//       {view === true ? <Todo /> : <p>No Todos</p>}

//       <button onClick={() => setView(!view)}>Show Todo</button>
//     </React.Fragment>
//   );
// }

function App() {
  return (
    <React.Fragment>
      <Card></Card>
    </React.Fragment>
  )

}

export default App;
