import React from 'react'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>

                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Ravindra Chaubey</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Singrauli M.p.</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title"><a
                                        href="mailto:ravindra.offi@gmail.com">ravindra.offi@gmail.com</a></div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fab fa-linkedin"></i>
                                <div className="info">
                                    <div className="head">Linkedin</div>
                                    <div className="sub-title">
                                        <a href="https://www.linkedin.com/in/ravindrachaubey">Ravindra chaubey</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fab fa-github"></i>
                                <div className="info">
                                    <div className="head">Github</div>
                                    <div className="sub-title"><a href="https://github.com/cypher1ravi">cypher1ravi</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" column right">
                        <div className="text">Message me</div>
                        <form id="contact-form" action="https://formspree.io/f/mdovdkaa" method="POST">
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" id="name" name="name" placeholder="Name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" id="email" name="email" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="field">
                                <input type="text" id="subject" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="field textarea">
                                <textarea cols="30" rows="10" id="message" name="message" placeholder="Message.."
                                    required></textarea>
                            </div>
                            <div className="button-area">
                                <button type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
