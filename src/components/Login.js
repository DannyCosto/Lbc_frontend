import { useState } from "react";

function Login({ setItems }) {
  //login logic
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
        items: [],
        current_cart: {
          id: 0,
          item_orders: [],
        },
        past_orders: [],
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        if (!userInfo.token) {
          alert("Invalid Username or Password");
          return null;
        }
        localStorage.token = userInfo.token;
        localStorage.setItem(`userId`, `${userInfo.user.id}`);
      });
    console.log(localStorage.token);
  }
  return (
    <>
      <label>Login</label>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button as="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
