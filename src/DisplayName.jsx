import React, { useState } from "react";
import "./DisplayName.css"

function DisplayName() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        if (firstName.trim() && lastName.trim()) {
          setFullName(`${firstName} ${lastName}`);
        }
    };
    return (
        <div className="App">
          <h1>Full Name Display</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                First Name:{" "}
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Last Name:{" "}
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
          {fullName && <div>Full Name: {fullName}</div>}
        </div>
      );

}

export default DisplayName