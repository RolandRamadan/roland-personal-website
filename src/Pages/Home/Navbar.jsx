import {useState, useEffect} from "react"
// import { Link } from "react-router-dom"
export default function Navbar(){
    const [navActive, setNavActive] = useState(false);

    // const toggleNav = () => {
    //     setNavActive(!navActive);
    // };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500){
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200){
            closeMenu();
        }
    }, []);


    return(
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                {/* logo roland */}
                {/* <img src=""></img> */}
            </div>
        </nav>
    )

}