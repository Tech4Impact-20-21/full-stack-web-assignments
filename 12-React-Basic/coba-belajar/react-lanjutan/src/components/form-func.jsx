import React from "react";

function TextInput(props) {
  const [value, setValue] = React.useState("");

  console.log(value);

  return (
    <input
      type={props.type}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      placeholder={props.placeholder}
    />
  );
}

export default function FormFC() {
  // https://reactjs.org/docs/uncontrolled-components.html
  const [name, setName] = React.useState("Bob");
  const [email, setEmail] = React.useState("bob@mail.com");
  const [password, setPassword] = React.useState("");

  return (
    <React.Fragment>
      <form action="">
        {/* <TextInput type="text" placeholder="Your name" />
        <TextInput type="email" placeholder="Your Email" />
        <TextInput type="password" placeholder="Your Password" /> */}

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          placeholder="Your name..."
        />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          placeholder="Your email..."
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          placeholder="Your password..."
        />
      </form>

      <ul>
        <li>name: {name}</li>
        <li>email: {email}</li>
        <li>password: {password}</li>
      </ul>
    </React.Fragment>
  );
}
