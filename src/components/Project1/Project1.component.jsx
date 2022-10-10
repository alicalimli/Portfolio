import './Project1.style.scss'

import Stack from '../Stacks/Stack.components'
import Technology from '../Technology/Technology.component'
import Button from '../Button/Button.component'

import { Link } from 'react-router-dom'

const Project1 = ({data, image}) => {

    const { id, name, stacks, technology, description, path } = data;

    return (
        <div className='project-1'>
            <div className='information'>
                <h2> { name } </h2>
                <p> { description } </p>
                <Stack stacks={stacks} />
                <div>
                    <Link className='button' to={path}>More Information</Link>
                </div>
            </div>
            <div>
                <Technology nameOfTechnology={technology} />
                <img src={image} alt="" />
            </div>
        </div>
    )
}


export default Project1