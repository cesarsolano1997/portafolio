import React from 'react'

const Portafolio = () => {
   return (
      <section id="portfolio">

         <div className="row">

            <div className="twelve columns collapsed">

               <h1>Mira algunos de mis trabajos</h1>


               <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-01" title="">
                           <img alt="" src="images/portfolio/viru.jpg"/>
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Tic Viru</h5>
                                 <p>Asp.Net</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-02" title="">
                           <img alt="" src="images/portfolio/joselito.png" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Transportes Joselito</h5>
                                 <p>Laravel</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-03" title="">
                           <img alt="" src="images/portfolio/github.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>GitHub</h5>
                                 <p>Repositorio</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>

                  </div>
                  {/* <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-04" title="">
                           <img alt="" src="images/portfolio/into-the-light.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Into The Light</h5>
                                 <p>Photography</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-05" title="">
                           <img alt="" src="images/portfolio/farmerboy.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Farmer Boy</h5>
                                 <p>Branding</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-06" title="">
                           <img alt="" src="images/portfolio/girl.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Girl</h5>
                                 <p>Photography</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-07" title="">
                           <img alt="" src="images/portfolio/origami.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Origami</h5>
                                 <p>Illustrration</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div>

                  <div className="columns portfolio-item">
                     <div className="item-wrap">

                        <a href="#modal-08" title="">
                           <img alt="" src="images/portfolio/retrocam.jpg" />
                           <div className="overlay">
                              <div className="portfolio-item-meta">
                                 <h5>Retrocam</h5>
                                 <p>Web Development</p>
                              </div>
                           </div>
                           <div className="link-icon"><i className="icon-plus"></i></div>
                        </a>

                     </div>
                  </div> */}

               </div>

            </div>

            <div id="modal-01" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/viru.jpg" alt="" />

               <div className="description-box">
                  <h4>ASP net</h4>
                  <p>Sistema desarrollodo en asp.net con diferntes módulos enlazados al ERP SAP.</p>
                  <span className="categories"><i className="fa fa-tag"></i>C#, Desarrollo Web</span>
               </div>

               <div className="link-box">
                  <a href="https://tic.viru.com.pe">Detalles</a>
                  <a className="popup-modal-dismiss">Cerrar</a>
               </div>

            </div>

            <div id="modal-02" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/joselito.jpg" alt="" />

               <div className="description-box">
                  <h4>Laravel</h4>
                  <p>Se desarrolló un sistema web tanto para el público como una intranet</p>
                  <span className="categories"><i className="fa fa-tag"></i>PHP, Desarrollo Web</span>
               </div>

               <div className="link-box">
                  <a href="https://www.transportesjoselito.com/">Detalles</a>
                  <a className="popup-modal-dismiss">Cerrar</a>
               </div>

            </div>

            <div id="modal-03" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/github.png" alt="" />

               <div className="description-box">
                  <h4>Github</h4>
                  <p>Este es mi repositorio personal donde encontrará muchos de mis proyetos personales.</p>
                  <span className="categories"><i className="fa fa-tag"></i>Repositorio</span>
               </div>

               <div className="link-box">
                  <a href="https://github.com/cesarsolano1997">Detalle</a>
                  <a className="popup-modal-dismiss">Cerrar</a>
               </div>

            </div>

            <div id="modal-04" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />

               <div className="description-box">
                  <h4>Into the Light</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag"></i>Photography</span>
               </div>

               <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
               </div>

            </div>

            <div id="modal-05" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />

               <div className="description-box">
                  <h4>Farmer Boy</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag"></i>Branding, Webdesign</span>
               </div>

               <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
               </div>

            </div>

            <div id="modal-06" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />

               <div className="description-box">
                  <h4>Girl</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag"></i>Photography</span>
               </div>

               <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
               </div>

            </div>

            <div id="modal-07" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />

               <div className="description-box">
                  <h4>Origami</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag"></i>Branding, Illustration</span>
               </div>

               <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
               </div>

            </div>

            <div id="modal-08" className="popup-modal mfp-hide">

               <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />

               <div className="description-box">
                  <h4>Retrocam</h4>
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <span className="categories"><i className="fa fa-tag"></i>Webdesign, Photography</span>
               </div>

               <div className="link-box">
                  <a href="http://www.behance.net">Details</a>
                  <a className="popup-modal-dismiss">Close</a>
               </div>

            </div>


         </div>

      </section>


   )
}

export default Portafolio;