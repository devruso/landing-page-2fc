 import Contato from "../components/Contato";
import HeroSection from "../components/HeroSection";
import Solucoes from "../components/Solucoes";
import Layout from "../components/Layout";

export default function Home(): JSX.Element{
    return (
        < >
            <Layout/>
            <HeroSection/>
            <Solucoes />
            <Contato />
        </>
    );
}