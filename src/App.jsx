import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <Dashboard
          user={user}
          onLogout={handleLogout}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;