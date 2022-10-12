import './Stack.style.scss'

const Stack = ({stacks}) => {

    return (
        <div className='stacks'>
            { stacks.map(M => {
                return (
                    <p className={M}> { M } </p>
                )
            }) } 
        </div>
    )
}

export default Stack