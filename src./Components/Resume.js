import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>Resumen accesorios</h3>
        <img src="https://m.media-amazon.com/images/I/71eJ6kPqo5L._AC_SY355_.jpg" alt="" />
        <p className="info">Accesorios<span>&bull;</span><em className="date"></em></p>
        <p></p></div>
        
      })
      
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>Resumen herramientas</h3>
            <img src="https://previews.123rf.com/images/onyxprj/onyxprj1801/onyxprj180100283/93385834-strumenti-isometrici-per-l-edilizia-strumenti-3d-e-cacciavite-industriali-elettronici-delle-illustra.jpg" alt="" />
            <p className="info">Herramientas<span>&bull;</span> <em className="date"></em></p>
            <p></p>
        </div> 
      })

      
       var skills = this.props.data.skills.map(function(skills){
       })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Accesorios</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Herramientas</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Servicios</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
