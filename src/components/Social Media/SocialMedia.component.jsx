import { useState } from 'react';
import './SocialMedia.style.scss'

import GitHubIcon from '@mui/icons-material/GitHub';

const SocialMedia = () => {

    const [ socialMediaImg, setSocialMediaImg ] = useState('https://cdn-icons-png.flaticon.com/512/1968/1968750.png')

    const SocialMedia = () => {
        const socialMediaIcons = document.querySelector('.socialMedia > div');
        const socialMediaAttribute = socialMediaIcons.getAttribute('data-socialMedia-toggle');
        if (socialMediaAttribute == 'false') {
            socialMediaIcons.setAttribute('data-socialMedia-toggle', 'true');
            setSocialMediaImg('https://cdn-icons-png.flaticon.com/512/753/753345.png');
        } else {
            socialMediaIcons.setAttribute('data-socialMedia-toggle', 'false');
            setSocialMediaImg('https://cdn-icons-png.flaticon.com/512/1968/1968750.png')
        }
    }

    return (
        <div className='socialMedia' onClick={SocialMedia}>
            <img src={socialMediaImg} alt="" />
            <div data-socialMedia-toggle='false'>
                <a href='https://twitter.com/Ali_Developer05' target="_blank" className='icons'>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="" />
                    <p>Twitter</p>
                </a>
                <a href='https://github.com/AliReza1083' target="_blank" className='icons'>
                    <GitHubIcon />
                    <p>GitHub</p>
                </a>
                <a href='https://www.linkedin.com/in/alireza17/' target="_blank" className='icons'>
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia