import logo from '../static/logo.png'
import { useState } from 'react'


const NavBar = () => {
    const [dropDown, setDropDown] = useState(false)

    const handleClick = () => {
        if (dropDown === false) { setDropDown(true) } else { setDropDown(false) }
        console.log(dropDown)
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} alt="food logo" style={{ width: "50px" }} /></a>

                    {dropDown === true ? <div style={{ position: "absolute", top: "17px", right: "175px", width: "150px", color: 'black' }}>
                        <div style={{ display: "flex", flexDirection: "row", width: "250px", padding: "2px", backgroundColor: '#3f474f', borderRadius: "6px" }} className="navbar-nav me-auto mb-2 mb-lg-0">

                            <a style={{ border: "1px solid gray", padding: "6px", borderRadius: "6px", margin: "0 0 0 10px" }} className="nav-link active" href="/">Home</a>
                            <a style={{ textAlign: "center", border: "1px solid gray", padding: "6px", borderRadius: "6px", margin: "0 0 0 10px", width: "150px" }} className="nav-link active" href="/add-recipe/">Add Recipe</a>

                        </div>
                    </div> : null}

                    <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add-recipe/">Add Recipe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <div style={{ borderBottom: "2px solid white" }}></div>

        </div>
    );
}

export default NavBar;