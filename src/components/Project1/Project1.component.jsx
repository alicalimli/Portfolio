import './Project1.style.scss'
import Button from '@mui/material/Button';

import Stack from '../Stacks/Stack.components'
import Technology from '../Technology/Technology.component'
import Responsive from '../Responsive/Responsive.component'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Project1 = ({data, image}) => {

    const { id, name, stacks, technology, description, website, github } = data;

    return (
        <div className='project-1' data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="500">
            <div className='information'>
                <p className='projectQuantity'>{ id }</p>
                <h2> { name } </h2>
                <p> { description } </p>
                <Stack stacks={stacks} />
                <div>
                    <a href={github} target="_blank"><Button className='button' variant="contained">Source</Button></a>
                    { website != null ? <a href={website} target="_blank"><Button className='button' variant="contained">Website</Button></a> : "" }
                </div>
            </div>
            <div>
                <Technology nameOfTechnology={technology} />
                <Responsive />
                <img src={image} alt="" />
            </div>
        </div>
    )
}


export default Project1