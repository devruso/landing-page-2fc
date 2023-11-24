import AreasAtuacao from "../components/AreasAtuacao";
import Contato from "../components/Contato";
import QuemSomos from "../components/QuemSomos";
import Solucoes from "../components/Solucoes";

export default function Home(): JSX.Element{
    return (
        < >
            <QuemSomos/>
            <Solucoes />
            <AreasAtuacao />
            <Contato />
        </>
    );
}