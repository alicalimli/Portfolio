const Technology = ({nameOfTechnology}) => {
    return (
        <div className={`technology ${ nameOfTechnology == 'NodeJS' ? 'nodejs' : 
                                        nameOfTechnology == 'ReactJS' ? 'reactjs' : 
                                        nameOfTechnology == 'HTML' ? 'html' :
                                        'NOTHING' }`}>
            {nameOfTechnology}
        </div>
    )
}


export default Technology