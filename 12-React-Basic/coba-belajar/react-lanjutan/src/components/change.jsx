import React from "react";

export default function ChangeCounter() {
  const [nama, setNama] = React.useState(false);
  const [nama2, setNama2] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [counter2, setCounter2] = React.useState(0);

  React.useEffect(() => {
    const fn = (oldState) => {
      return oldState + 1;
    };

    setCounter(fn);
  }, [nama]); // componentDidUpdate

  React.useEffect(() => {
    const fn = (oldState) => {
      return oldState + 1;
    };

    setCounter2(fn);
  }, [nama2]); // componentDidUpdate

  return (
    <React.Fragment>
      <p>Perubahan Nama1: {counter}</p>
      <button onClick={() => setNama(!nama)}>Ubah</button>

      <p>Perubahan Nama2: {counter2}</p>
      <button onClick={() => setNama2(!nama2)}>Ubah</button>
    </React.Fragment>
  );
}
