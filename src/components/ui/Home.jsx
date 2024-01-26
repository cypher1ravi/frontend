import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Home() {
    useEffect(() => {
        const typed = new Typed('.typing', {
            strings: ['Developer', 'Blogger', 'Designer', 'Freelancer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            showCursor: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Ravindra Chaubey</div>
                    <div className="text-3">
                        And I'm a <span className="typing"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
