import React from 'react';
import './Home.css';
function Home() {
  return(
  <div className="main">
    <div className="Main-Container">
     <h1 className="fade-in-slide">Welcome To FBE Library Management</h1>
     <div className="Image-container">
      <img
        src="https://www.master-egei.eu/wp-content/uploads/2020/12/AAU-logo.png"
        alt="AAU Logo"
        className="Image"
      />
    </div>
     <div class="search-container">
       <input type="text" placeholder="Search Books, Author and Articles"></input>
       <button type="submit">Search</button>
     </div>
   </div>
  </div>
  ) 
};

export default Home;