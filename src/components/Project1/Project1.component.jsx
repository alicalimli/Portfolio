import './Project1.style.scss'

import Stack from '../Stacks/Stack.components'
import Technology from '../Technology/Technology.component'

import UltraMovies from '../../assets/Ultra Movies.png'

const Project1 = ({data, technology}) => {


    return (
        <div className='project-1'>
            <div className='information'>
                <h2>Ultra Movies</h2>
                <p>This Website is all about Downloading Movie, but it's fake, I just made it for practising. The tools that I used to make this Full Responsive Website:</p>
                <Stack Stacks={data} />
            </div>
            <div>
                <Technology nameOfTechnology={technology} />
                <img src={UltraMovies} alt="" />
            </div>
        </div>
    )
}


export default Project1