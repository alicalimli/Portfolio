const Technology = ({nameOfTechnology}) => {
    return (
        <div className={`technology ${ nameOfTechnology == 'NodeJS' ? 'nodejs' : nameOfTechnology == 'ReactJS' ? 'reactjs' : 'NOTHING' }`}>
            {nameOfTechnology}
        </div>
    )
}


export default Technology