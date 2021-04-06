<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand"> Stock Trader</router-link> 
    
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/portfolio" activeClass="active" tag="li"><a> PortFolio </a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li"><a> Stocks </a></router-link>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End Day</a></li> 
        <li class="dropdown">
          <a class="dropdown-toggle" href="#" id="navbarDropdown" aria-haspopup="true"
          role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Save/Load <span class="caret"></span> </a>
          <ul class="dropdown-menu">
            <li><a href="#">Save Data</a></li>
            <li><a  href="#">Load Data</a></li>
        </ul>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</template>