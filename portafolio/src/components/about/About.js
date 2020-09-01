import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>

                <div className="nine columns main-col">
                    <h2>Acerca de mí</h2>

                    <p>Apasionado programador en cualquier plataforma: web, desktop, mobile. Entuasiasta, proactivo
                        y con ganas de seguir aprendiendo. Gran sentido del compromiso y compañerismo. Soy amigable y 
                        me desenvuelvo bien ante cualquier situación. La puntualidad es uno de mis fuertes con gran 
                        sentido de responsabilidad.
                    </p>

                    <div className="row">

                        <div className="columns contact-details">
                            <h2>Detalles del contacto</h2>
                            <p className="address">
                                <span>César Solano Robles</span> <br />
                                <span>La Libertad, Trujillo
                                </span><br />
                                <span>947419653</span><br />
                                <span>cesarsolanorobles@gmail.com</span>
                            </p>
                        </div>

                        <div className="columns download">
                            <p>
                                <a href="#" className="button"><i className="fa fa-download"></i>Descargar Resumen</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;
