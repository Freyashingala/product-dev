import React, { useState, useEffect, useRef, useCallback } from "react";
import '../css/about.css';
import Box from "./box";
import c from '../images/c.jpg';
import cpp from '../images/c++.jpg';
import css from '../images/css.jpg';
import js from '../images/javascript.jpg';
import react from '../images/react.jpg';
import python from '../images/python.jpg';

const About = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);

    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);

    const checkVisibility = (ref, setVisible) => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
            setVisible(isInView);
        }
    };

    const handleScroll = useCallback(() => {
        checkVisibility(textRef1, setIsVisible1);
        checkVisibility(textRef2, setIsVisible2);
        checkVisibility(textRef3, setIsVisible3);
        checkVisibility(textRef4, setIsVisible4);
    }, []);

    useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          handleScroll();

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
    }, [handleScroll]);

    const boxData = [
        { imageSrc: c, text: 'C' },
        { imageSrc: cpp, text: 'C++' },
        { imageSrc: css, text: 'CSS' },
        { imageSrc: js, text: 'JavaScript' },
        { imageSrc: react, text: 'React' },
        { imageSrc: python, text: 'Python' }
    ];

    return (
        <div id="About">
            <div className="layout">
                <main className="main-content">
                    <div className="heading">
                        <h1 ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>{ /* heading */ }</h1>
                    </div>
                    <p ref={textRef1} className={`dynamic-text ${isVisible1 ? 'visible' : ''}`}>
                        {/* sub-heading */}
                    </p>
                    <div className="tp-h">
                        <div ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}>{ /* About heading 1 */ }</div>
                    </div>
                    <div className="tp">
                        <div ref={textRef2} className={`dynamic-text ${isVisible2 ? 'visible' : ''}`}>
                            {/* data 1 */}
                        </div>
                    </div>
                    <div className="tp-h">
                        <div ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}>{ /* About heading 2 */ }</div>
                    </div>
                    <div className="tp">
                        <div ref={textRef3} className={`dynamic-text ${isVisible3 ? 'visible' : ''}`}>
                        { /* data 2 */ }
                        </div>
                    </div>

                    <div ref={textRef4} className={`dynamic-text ${isVisible4 ? 'visible' : ''}`}>
                    <div className="box-container">
                        {boxData.map((box, index) => (
                            <Box 
                                key={index}
                                imageSrc={box.imageSrc}
                                text={box.text} 
                            />
                        ))}
                    </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default About;
