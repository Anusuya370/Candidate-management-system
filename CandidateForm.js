import React, { useState } from 'react';

function CandidateForm({ addCandidate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && position) {
      const newCandidate = { id: Date.now(), name, email, position };
      addCandidate(newCandidate);
      setName('');
      setEmail('');
      setPosition('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">Add Candidate</button>
    </form>
  );
}

export default CandidateForm;
