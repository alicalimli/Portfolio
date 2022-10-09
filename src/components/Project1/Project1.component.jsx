import './Project1.style.scss'

import Stack from '../Stacks/Stack.components'
import Technology from '../Technology/Technology.component'


const Project1 = ({data, technology, description, img}) => {


    return (
        <div className='project-1'>
            <div className='information'>
                <h2>Ultra Movies</h2>
                <p> { description } </p>
                <Stack Stacks={data} />
            </div>
            <div>
                <Technology nameOfTechnology={technology} />
                <img src={img} alt="" />
            </div>
        </div>
    )
}


export default Project1