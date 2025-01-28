import React, { useState } from 'react';
import CandidateList from './CandidateList';
import CandidateForm from './CandidateForm';

function App() {
  const [candidates, setCandidates] = useState([]);

  // Add a new candidate
  const addCandidate = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  // Delete a candidate
  const deleteCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  return (
    <div className="App">
      <h1>Candidate Management System</h1>
      <CandidateForm addCandidate={addCandidate} />
      <CandidateList candidates={candidates} deleteCandidate={deleteCandidate} />
    </div>
  );
}

export default App;
