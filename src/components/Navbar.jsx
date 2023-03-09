import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { createContext } from "react";
import ReactDark from '../pages/ReactDark';
import CountryNameCode from '../pages/CountryNameCode';

export const Navbar = () => {

    const styleDark = [{
        backgroundColor: "#000",
        color: "#fff"
    }]
    

    function myFunction(e) {
        e.preventDefault();
        var element = document.body;
        element.classList.toggle(styleDark);
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary m-0 p-0">
                <div className="container-fluid bg-light">
                    <Link className="navbar-brand text-danger border p-2 m-2 shadow myAmin" to="/"><b>NEWS Feed</b></Link>
                    <button className="navbar-toggler m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: "#ce0d0d;" }}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li>
                            <button className='pageText p-' ><Link to={"./post"} style={{textDecoration:"none",color:"white"}}>Post News</Link></button>
                            </li>
                            <li className="nav-item">
                                <CountryNameCode />
                            </li>
                            <li className="nav-item ">
                                <ReactDark />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.add('white-content');
                break;
            case themes.dark:
            default:
                document.body.classList.remove('white-content');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}


export const themes = {
    dark: "",
    light: "white-content",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => { },
});
