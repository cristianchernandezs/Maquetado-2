import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return ( 
      <section id="about">
      <div className="row">
         
         <div className="nine columns main-col">
            <h2>Acerca de nosotros</h2>
 
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Datos de contacto</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city},
                   </span><br />
						   <span>5555555</span><br />
                     <span>Cristianc.hernandezs@utadeo.edu.co</span>
					   </p>
               </div>
              
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
