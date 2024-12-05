import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import JobList from './components/JobList';

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <JobList />
    </div>
  );
}

export default App;
