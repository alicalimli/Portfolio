import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar.component"

const NavbarRoute = () => {
    return (
        <Fragment>
            <div>
                <Navbar />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavbarRoute