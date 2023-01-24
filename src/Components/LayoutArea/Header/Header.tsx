import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <span>📚</span>
            <h1>Books</h1>
            <p>hello guest <a href="#">Login</a> | <a href="#">Logout</a></p>
        </div>
    );
}

export default Header;
