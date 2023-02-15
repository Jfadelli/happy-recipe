import React, { useState } from 'react';
import './styles/LoginStyles.css'

export default function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  return (
    <div className="login-wrapper">

      {username === null ? setUsername('Jason') : null }
      {password === null ? setPassword('test') : null }

      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}