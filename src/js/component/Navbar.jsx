import React from "react"
/* import { AiOutlineHome } from "react-icons/ai" */

const Navbar = (props) => {
    return (
        <nav className
            ="navbar navbar-expand-lg bg-body-tertiary">
            <div className
                ="container-fluid ">
                <a className
                    ="navbar-brand" href="#">Start Boostrap</a>
                <button className
                    ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className
                        ="navbar-toggler-icon"></span>
                </button>
                <div className
                    ="collapse navbar-collapse  justify-content-end" id="navbarNav">
                    <ul className
                        ="navbar-nav" >
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link active" aria-current="page" href="#">Home</a>
                                {/* <AiOutlineHome /> */}
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#">About</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link" href="#">Services</a>
                        </li>
                        <li className
                            ="nav-item">
                            <a className
                                ="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar