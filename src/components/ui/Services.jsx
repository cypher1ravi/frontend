import React from 'react'

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My services</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Design</div>
                            <p>"Elevate your online presence with tailored, captivating, and responsive web designs. Unlock
                                digital brilliance today."
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Web Development</div>
                            <p>"Empowering businesses through dynamic web solutions. Your vision, brought to life with
                                expert web development."
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Web Apps </div>
                            <p>"Crafting exceptional app experiences through innovative design. Elevate your brand with
                                captivating user interfaces."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
