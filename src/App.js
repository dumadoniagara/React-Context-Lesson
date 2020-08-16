import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import './index.css';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
