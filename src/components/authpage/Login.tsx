import React, { useState } from 'react'

export default function login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  return (
    <div>
        <div>
            <input placeholder='username' type="text" />
            <input placeholder='password' type="text" />
            <button>login</button>
        </div>
    </div>
  )
}
