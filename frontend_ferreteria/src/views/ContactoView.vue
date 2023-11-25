<script setup lang="ts"></script>

<template>
    <div class="find-us">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>DIRECCIÓN DE LA TIENDA</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
-->
                    <div id="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.7287435766582!2d-65.2441837368952!3d-19.034702611054836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc8d40a25b7ab%3A0xb8b7f8db876e5626!2sIndustrias%20Ferrotodo%20Ltda!5e0!3m2!1ses-419!2sbo!4v1700917358636!5m2!1ses-419!2sbo"
                            width="100%" height="330px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="left-content">
                        <h4>CONTÁCTANOS</h4>
                        <p>Nuestra prestigiosa industria se encuentra ubicada en sector del mercado campesino zona
                            gas center.<br><br>Nuestra tienda abre todos los dias en horarios de oficina.</p>
                        <ul class="social-icons">
                            <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="send-message">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>Enviar mensajes</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="contact-form">
                        <form id="contact" action="" method="post">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="name" type="text" class="form-control" id="name"
                                            placeholder="Full Name">
                                    </fieldset>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="email" type="text" class="form-control" id="email"
                                            placeholder="E-Mail Address">
                                    </fieldset>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="subject" type="text" class="form-control" id="subject"
                                            placeholder="Subject">
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" class="form-control" id="message"
                                            placeholder="Your Message"></textarea>
                                    </fieldset>
                                </div>
                                <div class="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" class="filled-button">Enviar mensaje</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <ul class="accordion">
                        <li>
                            <a>Accordion Title One</a>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester
                                    consectetur similiqu consectetur.<br><br>Lorem ipsum dolor sit amet, consectetur
                                    adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.
                                </p>
                            </div>
                        </li>
                        <li>
                            <a>Second Title Here</a>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester
                                    consectetur similiqu consectetur.<br><br>Lorem ipsum dolor sit amet, consectetur
                                    adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.
                                </p>
                            </div>
                        </li>
                        <li>
                            <a>Accordion Title Three</a>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester
                                    consectetur similiqu consectetur.<br><br>Lorem ipsum dolor sit amet, consectetur
                                adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.
                            </p>
                        </div>
                    </li>
                    <li>
                        <a>Fourth Accordion Title</a>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester
                                consectetur similiqu consectetur.<br><br>Lorem ipsum dolor sit amet, consectetur
                                adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div></template>