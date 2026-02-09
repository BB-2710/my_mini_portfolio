import React, { useState } from 'react';

function About({ setProfile }) {
  const [Name, setName] = useState("");
    const [Bio, setBio] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ name: "", bio: "" });
    alert("Profile Updated!");
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setName(e)} /><br/><br/>
        <textarea placeholder="Bio" onChange={(e) => setBio()} /><br/><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default About;