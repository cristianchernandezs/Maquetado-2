import React, { Component } from 'react';

class Header extends Component {
  render() {

   if(this.props.data){
   var name = this.props.data.name;
   var occupation= this.props.data.occupation;
    var description= this.props.data.description;
   var city= this.props.data.address.city;
   var networks= this.props.data.social.map(function(network){
   return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   })
   }
 
    return (
      <header id="home">

      <nav id="nav-wrap">

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Acerca de</a></li>
	         <li><a className="smoothscroll" href="#resume">productos</a></li>
            <li><a className="smoothscroll" href="#testimonials">Publicidad</a></li>
            <li><a className="smoothscroll" href="#contact">Contactenos</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">G'hetnos.</h1>
            <h2>¡Se vale soñar!.</h2>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
