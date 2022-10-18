import './Footer.style.scss'

const Footer = ({owner}) => {
    return (
        <div className='footer'>
            <small>Designed & Built by <i><b>{owner}</b></i></small>
        </div>
    )
}

export default Footer