import React from 'react';

const Header = () => {
    return (
        <header id="home">

            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
                    <li><a className="smoothscroll" href="#about" >Acerca de mi</a></li>
                    <li><a className="smoothscroll" href="#resume">Resumen</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Trabajos</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonios</a></li>
                    <li><a className="smoothscroll" href="#contact">Contacto</a></li>
                </ul> 

        </nav> 

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Hola, soy César Solano.</h1>
                    <h3>Soy un <span>desarrollador frontend</span>, <span>backend</span> y <span> mucho más</span> creando increíbles
                    arquitecturas de software con las últimas tecnologías del mercado. Comenzemos <a className="smoothscroll" href="#about">deslizándonos </a>
                    y aprendamos más <a className="smoothscroll" href="#about">sobre mí</a>.</h3>
                    <hr />
                    <ul className="social">
                        <li><a href="https://www.facebook.com/cesaranthony.solanorobles/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                        {/* <li><a href="#"><i className="fa fa-google-plus"></i></a></li> */}
                        {/* <li><a href="#"><i className="fa fa-linkedin"></i></a></li> */}
                        <li><a href="https://www.instagram.com/cesarrrsolano/?hl=es-la"><i className="fa fa-instagram"></i></a></li>
                        {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                        {/* <li><a href="#"><i className="fa fa-skype"></i></a></li> */}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )
}

export default Header
