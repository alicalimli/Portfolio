import './Stack.style.scss'

const Stack = ({Stacks}) => {

    return (
        <div className='stacks'>
            { Stacks.map(M => {
                return (
                    <p> { M } </p>
                )
            }) } 
        </div>
    )
}

export default Stack