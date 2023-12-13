import AreasAtuacao from "../components/AreasAtuacao";
import Contato from "../components/Contato";
import HeroSection from "../components/HeroSection";
import Solucoes from "../components/Solucoes";

export default function Home(): JSX.Element{
    return (
        < >
            <HeroSection/>
            <Solucoes />
            <AreasAtuacao />
            <Contato />
        </>
    );
}