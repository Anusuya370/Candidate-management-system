import React from 'react';

function CandidateCard({ candidate, deleteCandidate }) {
  return (
    <div className="candidate-card">
      <h3>{candidate.name}</h3>
      <p>{candidate.email}</p>
      <p>{candidate.position}</p>
      <button onClick={() => deleteCandidate(candidate.id)}>Delete</button>
    </div>
  );
}

export default CandidateCard;
