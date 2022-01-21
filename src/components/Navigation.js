import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <>
            <NavLink to="/" className={(navData) => navData.isActive ? "nav-active" : "" } >
                Login
            </NavLink>
            </>
            <>
            <NavLink to="/inscription" className={(navData) => navData.isActive ? "nav-active" : "" }>
                Inscription
            </NavLink>
            </>
        </div>
    );
};


export default Navigation;