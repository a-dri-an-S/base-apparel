import ComingSoonSection from "./ComingSoonSection";
import EmailInput from "./EmailInput";
import Header from "./Header";
import MobileHero from "./MobileHero";

const MainPage = () => {

    

    return (
        <main className="main">
            <Header />
            <MobileHero />
            <ComingSoonSection />
            <EmailInput />
        </main>
    );
}

export default MainPage;