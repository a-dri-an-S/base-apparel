import ComingSoonSection from "./ComingSoonSection";
import EmailInput from "./EmailInput";
import Header from "./Header";
import HeroImageMobile from "./HeroImageMobile";

const MainPage = () => {

    

    return (
        <main className="main">
            <Header />
            <HeroImageMobile />
            <ComingSoonSection />
            <EmailInput />
        </main>
    );
}

export default MainPage;