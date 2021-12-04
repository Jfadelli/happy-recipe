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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={logo} aria="food logo" alt="food logo" style={{ width: "50px" }} /></a>

                    {dropDown === true ? <div style={{ position: "absolute", top: "17px", right: "175px", width: "150px", color: 'black' }}>
                        <div style={{display:"flex", flexDirection:"row", width: "250px", padding: "2px",backgroundColor:'#3f474f', borderRadius: "6px"}}class="navbar-nav me-auto mb-2 mb-lg-0">

                            <a style={{border: "1px solid gray",  padding:"6px", borderRadius:"6px",margin:"0 0 0 10px"}}class="nav-link active" aria-current="page" href="/">Home</a>
                            <a style={{ textAlign: "center",border: "1px solid gray",  padding:"6px", borderRadius:"6px", margin:"0 0 0 10px", width:"150px"}}class="nav-link active" href="/add-recipe/">Add Recipe</a>

                        </div>
                    </div> : null}

                    <button onClick={handleClick} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/add-recipe/">Add Recipe</a>
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