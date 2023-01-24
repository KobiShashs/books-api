import "./Footer.css";

function Footer(): JSX.Element {

    const year = new Date().getFullYear();
    return (
        <div className="Footer">
            <p>&copy; {year} All rights reserved to Kobi Shasha</p>
        </div>
    );
}

export default Footer;
