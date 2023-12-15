import Contato from "../components/Contato";
import HeroSection from "../components/HeroSection";
import Solucoes from "../components/Solucoes";
import Footer from "../components/Footer";
export default function Home(): JSX.Element{
    return (
        < >
            <HeroSection/>
            <Solucoes />
            <Contato />
            <Footer/>
        </>
    );
}