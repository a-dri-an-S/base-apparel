import MobileHero from "../assets/hero-mobile.jpg";
import "../styles/MobileHero.css";

const ImageHeroMobile = () => {
    return (
        <img 
            className="hero-mobile"
            src={MobileHero} 
            alt="mobile-hero" 
        />
    );
}

export default ImageHeroMobile;