import React from 'react'

const Contactus = () => {
    return (
        <section id="contact">

            <div className="row section-head">

                <div className="two columns header-col">

                    <h1><span>Get In Touch.</span></h1>

                </div>

                <div className="ten columns">

                    <p className="lead">Si les interesó lo que vieron por favor ponerse en contacto conmigo 
                                escribiéndome a los siguientes números telefónicos o enviarme un correo electrónico.
                 </p>

                </div>

            </div>

            <div className="row">

                <div className="eight columns">

                    <form id="contactForm" name="contactForm">
                        <fieldset>

                            <div>
                                <label htmlFor="contactName">Nombre <span className="required">*</span></label>
                                <input type="text" size="35" id="contactName" name="contactName" />
                            </div>

                            <div>
                                <label htmlFor="contactEmail">Correo Electrónico <span className="required">*</span></label>
                                <input type="text" size="35" id="contactEmail" name="contactEmail" />
                            </div>

                            <div>
                                <label htmlFor="contactSubject">Asunto</label>
                                <input type="text" size="35" id="contactSubject" name="contactSubject" />
                            </div>

                            <div>
                                <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                                <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                            </div>

                            <div>
                                <button className="submit">Enviar</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                </span>
                            </div>

                        </fieldset>
                    </form>
                    <div id="message-warning"> Error</div>

                    <div id="message-success">
                        <i className="fa fa-check"></i>Tu mensaje fue enviado con éxito, gracias<br />
                    </div>

                </div>


                <aside className="four columns footer-widgets">

                    <div className="widget widget_contact">

                        <h4>Dirección y teléfono</h4>
                        <p className="address">
                            Cesar Solano<br />
                            La Libertad, Trujillo <br />
                            <span>947419653</span>
                        </p>

                    </div>

                    {/* <div className="widget widget_tweets">

                        <h4 className="widget-title">Latest Tweets</h4>

                        <ul id="twitter">
                            <li>
                                <span>
                                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                       <a href="#">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b><a href="#">2 Days Ago</a></b>
                            </li>
                            <li>
                                <span>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                    eaque ipsa quae ab illo inventore veritatis et quasi
                       <a href="#">http://t.co/CGIrdxIlI3</a>
                                </span>
                                <b><a href="#">3 Days Ago</a></b>
                            </li>
                        </ul>

                    </div> */}

                </aside>

            </div>

        </section>

    )
}

export default Contactus
