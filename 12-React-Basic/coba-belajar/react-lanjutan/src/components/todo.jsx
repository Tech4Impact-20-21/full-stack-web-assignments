import React from "react";

export function Todo() {
  const [todos, addTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  React.useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const slice = data.slice(0, 10).map((item) => item.title);
        console.log(slice);
        addTodos(slice);
      })
      .catch((err) => console.error(err));

    const interval = setInterval(() => {
      console.log("stream data");
    }, 500);

    return () => {
      // code yang kita gunakan untuk memberishkan state.
      // componentWillUnmount
      clearInterval(interval);
    };
  }, []); // kosong. artinya => componentDidMount

  console.log("render");
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
          placeholder="add todo..."
        />
        <button
          onClick={() => {
            // const cloned = todos.concat([newTodo]);
            const cloned = [...todos, newTodo];
            addTodos(cloned);
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </React.Fragment>
  );
}
