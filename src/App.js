import React from 'react';
import "./App.css";
import Sidebar from './Sidebar.js';

function App() {
  return (
    // BEM Convention
    <div className="app">
    	<div className="app__body">
		<Sidebar />
		{/* Chat */}
    	</div>
    </div>
  );
}

export default App;
