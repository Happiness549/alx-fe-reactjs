const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("authToken", "my-token");
    window.location.href = "/profile"; 
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
