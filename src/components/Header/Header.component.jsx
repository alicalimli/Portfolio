import { gsap } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import './Header.style.scss';

const Header = ({ data, img }) => {
    
    const { name, job, about } = data;

    const imgIntro = useRef(null);
    const nameAnimation = useRef(null);
    const jobAnimation = useRef(null);
    const aboutAnimation = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(imgIntro.current, {
            opacity: 1,
            scale: 1,
            x: 0,
            ease: "Power4.easeOut",
            rotation: 0,
            duration: 1.5
        })
        .to(nameAnimation.current, {
            y: 0,
            opacity: 1,
            duration: .5
        }, "-=1")
        // .to(jobAnimation.current, {
        //     x: 0,
        //     opacity: 1,
        //     duration: .5
        // }, '-=.5')
        .to(aboutAnimation.current, {
            y: 0,
            opacity: 1,
            duration: .5
        })
        .to(nameAnimation.current, {
            rotation: 0,
            duration: .3
        })
        // .to(jobAnimation.current, {
        //     rotation: 0,
        //     duration: .3
        // })
        .to(aboutAnimation.current, {
            rotation: 0,
            duration: .3
        })
    }, [])


    const mouseEnter = () => {
        const myImg = document.querySelector('#myImg');
        myImg.style.transform = 'rotate(10deg) scale(1.1)';

        const reactBadge = document.querySelector('#reactBadge');
        reactBadge.style.opacity = "1";
        reactBadge.style.transform = "rotate(-30deg) scale(1)";
    }

    const mouseLeave = () => {
        const myImg = document.querySelector('#myImg');
        myImg.style.transform = 'rotate(0deg) scale(1)';

        const reactBadge = document.querySelector('#reactBadge');
        reactBadge.style.opacity = "0";
        reactBadge.style.transform = "rotate(-90deg) scale(0)";
    }

    return(
        <header id="about">
            <div className='container'>
                <div className='headerInfo'>
                    {/* <code className='htmlText'>&lt;Name&gt;</code> */}
                    <h1 ref={nameAnimation} id="name" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} > 
                        Hi There! <br />
                        I am <br />
                        <span>{ name }</span>
                    </h1>
                    {/* <code className='htmlText'>&lt;/Name&gt;</code> */}
                    <br />
                    {/* <h2 ref={jobAnimation}> { job } </h2> */}
                    {/* <br /> */}
                    <p ref={aboutAnimation}> { about } </p>
                </div>
                <div className='headerImg' ref={imgIntro}>
                    <img src={ img } alt="" id='myImg' />
                    <h1 id="reactBadge">React Developer</h1>
                </div>
            </div>

        </header>
    )
}

export default Header