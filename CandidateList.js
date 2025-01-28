import React from 'react';
import CandidateCard from './CandidateCard';

function CandidateList({ candidates, deleteCandidate }) {
  return (
    <div>
      <h2>Candidate List</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>
            <CandidateCard candidate={candidate} deleteCandidate={deleteCandidate} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateList;
