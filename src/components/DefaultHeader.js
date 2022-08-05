import { NavLink } from "react-router-dom";

const DefaultHeader = () => {
    <div className="Default-Header">
        <h1>test</h1>
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/main">Get Started</NavLink>
    </div>
}

export default DefaultHeader