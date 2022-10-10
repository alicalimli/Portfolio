import './Project1.style.scss'

import Stack from '../Stacks/Stack.components'
import Technology from '../Technology/Technology.component'


const Project1 = ({data, image}) => {

    const { name, stacks, technology, description } = data;

    return (
        <div className='project-1'>
            <div className='information'>
                <h2> { name } </h2>
                <p> { description } </p>
                <Stack stacks={stacks} />
            </div>
            <div>
                <Technology nameOfTechnology={technology} />
                <img src={image} alt="" />
            </div>
        </div>
    )
}


export default Project1