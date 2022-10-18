import './Loading.style.scss'

import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'

const Loading = () => {

    return (
        <div className="loading">
            <div class="showbox">
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                    <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Loading