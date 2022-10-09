import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import './Header.style.scss';


import HeaderImg from '../../assets/header img 2.png'

import BackgroundGradient from '../Background Gradient/bgGradient.component'
import Loading from '../LoadingPage/Loading.component';

const Header = ({ data }) => {
    
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
        .to(jobAnimation.current, {
            x: 0,
            opacity: 1,
            duration: .5
        }, '-=.5')
        .to(aboutAnimation.current, {
            y: 0,
            opacity: 1,
            duration: .5
        })
        .to(nameAnimation.current, {
            rotation: 0,
            duration: .3
        })
        .to(jobAnimation.current, {
            rotation: 0,
            duration: .3
        })
        .to(aboutAnimation.current, {
            rotation: 0,
            duration: .3
        })
    }, [])

    return(
        <header id="about">
            {/* <Loading /> */}
            {/* <BackgroundGradient /> */}
            <div className='container'>
                <div className='headerInfo'>
                    {/* <code className='htmlText'>&lt;Name&gt;</code> */}
                    <h1 ref={nameAnimation}> { name } </h1>
                    {/* <code className='htmlText'>&lt;/Name&gt;</code> */}
                    <br />
                    <h2 ref={jobAnimation}> { job } </h2>
                    <br />
                    <p ref={aboutAnimation}> { about } </p>
                </div>
                <div className='headerImg' ref={imgIntro}>
                    <img src={HeaderImg} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header