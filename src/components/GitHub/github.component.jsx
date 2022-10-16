import './github.style.scss'
import Button from '@mui/material/Button';

const Github = () => {

    const closingGithub = () => {
        const github = document.querySelector('.github');
        github.style.display = 'none';
    }

    return (
        <div className='github'>
            <p>Do you want to know how I made this website, then check out the <a href="https://github.com/AliReza1083/Portfolio" target='_blank'>Source Code</a></p>
            <Button className='button' variant="contained" onClick={closingGithub}>Close</Button>
        </div>
    )
}

export default Github