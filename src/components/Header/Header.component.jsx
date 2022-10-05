import { gsap } from 'gsap';
import { Power4 } from 'gsap/src/all';
import { useRef, useEffect } from 'react';
import './Header.style.scss';


import HeaderImg from '../../assets/header img 2.png'

import BackgroundGradient from '../Background Gradient/bgGradient.component'
import Loading from '../LoadingPage/Loading.component'
import Constructor from '../Constuction/Constuction.component';

const Header = () => {

    const imgIntro = useRef(null);
    const name = useRef(null);
    const job = useRef(null);
    const about = useRef(null);

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
        .to(name.current, {
            y: 0,
            opacity: 1,
            duration: .5
        }, "-=1")
        .to(job.current, {
            x: 0,
            opacity: 1,
            duration: .5
        }, '-=.5')
        .to(about.current, {
            y: 0,
            opacity: 1,
            duration: .5
        })
        .to(name.current, {
            rotation: 0,
            duration: .3
        })
        .to(job.current, {
            rotation: 0,
            duration: .3
        })
        .to(about.current, {
            rotation: 0,
            duration: .3
        })
    }, [])

    return(
        <header>
            {/* <Loading /> */}
            <BackgroundGradient />
            <Constructor />
            <div className='container'>
                <div className='headerInfo'>
                    {/* <code className='htmlText'>&lt;Name&gt;</code> */}
                    <h1 ref={name}>Ali Reza</h1>
                    {/* <code className='htmlText'>&lt;/Name&gt;</code> */}
                    <br />
                    <h2 ref={job}>Front-End Developer</h2>
                    <br />
                    <p ref={about}>
                        it is just for testing, you can write about yourself here. Wish you all the best...
                    </p>
                </div>
                <div className='headerImg' ref={imgIntro}>
                    <img src={HeaderImg} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header