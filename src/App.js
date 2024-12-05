import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import JobList from './components/JobList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
