import React from "react";
import { useInput } from "../hooks/input";

export default function FormFCHooks() {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={setName}
        placeholder="Your name"
      />
      <input
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="Your email"
      />
      <input
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Your password"
      />
      <button type="submit">Sumit</button>
    </form>
  );
}
