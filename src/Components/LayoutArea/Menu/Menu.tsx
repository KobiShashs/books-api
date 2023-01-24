import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            {/* <a href="Search">Search Books</a>
            <a href="Search">History</a>
            <a href="About">About</a> */}

            <Link to="/home">Search Book</Link>
            <Link to="/history">Search result History</Link>
            <Link to="/about">Tell me more</Link>
        </div>
    );
}

export default Menu;
