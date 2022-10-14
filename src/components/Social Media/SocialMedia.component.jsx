import { useState } from 'react';
import './SocialMedia.style.scss'

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
                <a href='#' className='icons'>
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="" />
                    <p>Twitter</p>
                </a>
                <a href='#' className='icons'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="" />
                    <p>GitHub</p>
                </a>
                <a href='#' className='icons'>
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" />
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}

export default SocialMedia