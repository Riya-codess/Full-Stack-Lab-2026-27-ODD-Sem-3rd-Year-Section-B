import React, { useState } from "react";

function LoginToggle() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome!</h2>

          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => setLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
}

export default LoginToggle;