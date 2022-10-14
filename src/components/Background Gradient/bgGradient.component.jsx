import './bgGradient.style.scss'

const BackgroundGradient = ({bottom, right, hide}) => {
    return (
        <div>
            <div style={{bottom: bottom, right: right}} className={`bg1 ${hide}`}></div>
        </div>
    )
}

export default BackgroundGradient