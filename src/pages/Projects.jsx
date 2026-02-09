import React, { useState } from 'react';

function About({ setProfile }) {
  const [Name, setName] = useState("");
    const [Bio, setBio] = useState("");


  const handleSubmit = () => {
    preventDefault();
    setProfile({ name: "", bio: "" });
    alert("Profile Updated!");
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={() => setName()} /><br/><br/>
        <textarea placeholder="Bio" onChange={() => setBio()} /><br/><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default About;