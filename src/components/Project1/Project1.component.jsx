import './Project1.style.scss'
import Button from '@mui/material/Button';

import Stack from '../Stacks/Stack.components'
import Technology from '../Technology/Technology.component'
import Responsive from '../Responsive/Responsive.component'

import { Link } from 'react-router-dom'

const Project1 = ({data, image}) => {

    const { id, name, stacks, technology, description, path } = data;

    return (
        <div className='project-1'>
            <div className='information'>
                <p className='projectQuantity'>{ id }</p>
                <h2> { name } </h2>
                <p> { description } </p>
                <Stack stacks={stacks} />
                <div>
                    {/* <Link className='button' to={path}>More Information</Link> */}
                    <Link to={path}><Button className='button' variant="contained">More Information</Button></Link>
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