import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    // Simulated user information
    const user = {
      userId: 101,
      username: username,
      role: "user",
    };

    // Simulated JWT payload
    const token = btoa(JSON.stringify(user));

    // Store token
    localStorage.setItem("token", token);

    onLogin(user);
  };

  return (
    <div>
      <h1>Login System</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <br />

        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;