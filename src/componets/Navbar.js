import React from 'react'

const Navbar = () => {
    return (
        <div className="header">
          <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
             
  <a class="navbar-brand" href="#">Doof</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <h1 className="navbar-heading">Doof Internship Assignment</h1>
    <ul class="navbar-nav ml-auto">
    
      <li class="nav-item ">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      
     
    </ul>
    
  </div>
</nav>  
        </div>
    )
}

export default Navbar
