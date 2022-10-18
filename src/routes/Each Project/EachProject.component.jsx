import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import './EachProject.style.scss';
import EachProjectData from '../../context/Project.data.json'

const EachProject = () => {

    const [ eachProjectData, setEachProjectData ] = useState(EachProjectData);
    const [ foundData, setFoundData ] = useState([])
    const {id} = useParams();

    const findingData = eachProjectData.find(EP => EP.params == id)

    useEffect(() => {
        setFoundData(findingData)
    }, [])

    // const banner = useRef(null);
    // const imgEP = useRef(null);
    // const nameEP = useRef(null);
    // const descriptionEP = useRef(null);
    // const buttonEP = useRef(null);

    const EachProject = useRef(null)
    const q = gsap.utils.selector(EachProject);

    useEffect(() => {
        const tl = gsap.timeline()

        tl.to(q('.loading'), {
            opacity: 0,
            duration: 2
        })
        .to(q('.loading'), {
            display: "none",
            duration: .1
        })
        .to(q('img'), {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1
        }, '-=1')
        .to(q('.bannerImg img'), {
            scale: 1,
            opacity: 1,
            duration: .5
        }, '-=.5')
        .to(q('h1'), {
            x: 0,
            opacity: 1,
            duration: .5
        }, '-=.2')
        .to(q('p'), {
            x: 0,
            opacity: 1,
            duration: .5
        }, '-=.2')
    }, [])

    return (
        <div className="eachProject" ref={EachProject}>
            <div className="loading"></div>
            <div className="bannerImg">
                <img src={foundData.img} alt="" />
                <div></div>
            </div>
            <img src={foundData.img} alt="" />
            <h1> { foundData.name } </h1>
            <p> { foundData.description } </p>
            <div className="websites">
                <a href={ foundData.github } className="websiteLink1" target="_blank">Source</a>
                { foundData.website != null ? <a href={ foundData.website } className="websiteLink2" target="_blank">Website</a> : '' }
            </div>
        </div>
    )
}

export default EachProject