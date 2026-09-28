function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h1>Protected Dashboard</h1>

      <h2>Welcome, {user.username}</h2>

      <p>User ID: {user.userId}</p>

      <p>
        Role: <strong>{user.role}</strong>
      </p>

      <p>Authentication Status: Logged In</p>

      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;