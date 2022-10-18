import './Languages.style.scss'

const Languages = () => {

    const languages = [
        {
            duration: 1,
            img: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
            name: "HTML"
        },
        {
            duration: 1.2,
            img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
            name: "CSS"
        },
        {
            duration: 1.4,
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            name: "JavaScript"
        },
        {
            duration: 1.6,
            img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
            name: "NodeJs"
        },
        {
            duration: 1.8,
            img: "https://vectorified.com/images/express-js-icon-20.png",
            name: "Express"
        }
    ]

    const languages2 = [
        {
            duration: 2,
            img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            name: "React"
        },
        {
            duration: 2.2,
            img: "https://4.bp.blogspot.com/-Fxo_qnGJBj0/WRoDPNdlEII/AAAAAAAABF0/1mSHmv5gleQaCsHKEDgTB3DbNghjCXvZACLcB/s1600/logo_firebase_1920px_clr.png",
            name: "Firebase"
        },
        {
            duration: 2.4,
            img: "https://spectrum.imgix.net/communities/ebbb7e8c-6026-45ca-bee8-630fb824a7d6/3b81df29-3c4a-4b6a-b30e-c7849532516c-tailwind-logo.png?w=256&h=256&dpr=2&auto=compress&expires=1609804800000&ixlib=js-1.3.0&s=b51c602b2e5b23fe354f701117b1d2f0",
            name: "Tailwind"
        },
        {
            duration: 2.6,
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
            name: "Figma"
        }
    ]

    return (
        <div className='languages' data-language-toggle="false">
            <div>
                <h1>Skills</h1>
                <div className='categories'>
                    <div>
                        { languages.map(L => {
                            return (
                                <div className='language-category'>
                                    <img src={L.img} alt="" style={{animationDuration: `${L.duration}s`}} />
                                    <p style={{animationDuration: `${L.duration}s`}}>{ L.name }</p>
                                </div>
                            )
                        }) }
                    </div>
                    <div>
                        { languages2.map(L => {
                            return (
                                <div className='language-category'>
                                    <img src={L.img} alt="" style={{animationDuration: `${L.duration}s`}} />
                                    <p style={{animationDuration: `${L.duration}s`}}>{ L.name }</p>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        </div>
    )
} 


export default Languages