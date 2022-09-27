import Logo from "../assets/logo.svg";
import "../styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <img 
                className="header-logo"
                src={Logo} 
                alt="base-apparel-logo"
            />
        </div>
    );
}

export default Header;