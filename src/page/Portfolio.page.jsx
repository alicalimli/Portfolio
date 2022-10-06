import { Fragment } from "react"

import Header from "../components/Header/Header.component"
import Project from "../components/Project/Project.component"

const Portfolio = () => {

    const information = {
        name: "Ali Reza",
        job: "Front-End Developer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reprehenderit molestiae perspiciatis quibusdam, optio est repellat odio esse voluptas commodi, minima numquam expedita, adipisci asperiores nostrum. Dolor nisi voluptatum cupiditate!"
    }

    return (
        <Fragment>
            <Header data={ information } />
            <Project />
        </Fragment>
    )
}

export default Portfolio