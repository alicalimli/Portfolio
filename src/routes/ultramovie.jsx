import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './EachProject.style.scss';
import EachProjectData from '../context/Project.data.json'

const UltraMovie = () => {

    const [ eachProjectData, setEachProjectData ] = useState(EachProjectData);
    const [ foundData, setFoundData ] = useState([])
    const {id} = useParams();

    const findingData = eachProjectData.find(EP => EP.params == id)

    useEffect(() => {
        setFoundData(findingData)
    }, [])


    return (
        <div className="eachProject">
            <div className="bannerImg">
                <img src={foundData.img} alt="" />
                <div></div>
            </div>
            <img src={foundData.img} alt="" />
            <h1> { foundData.name } </h1>
            <p> { foundData.description } </p>
        </div>
    )
}

export default UltraMovie