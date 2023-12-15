import logo from "../assets/NEWLOGO.svg"
export default function Footer(): JSX.Element{
    return(
    <footer className="h-2/3 w-full bg-pistache text-vinho">
        <img src={logo} alt="Logo 2FC" className="text-5xl" />
        <p className="">Escritório de Contabilidade em Salvador - Bahia</p>
        <p><b>2FC Inovação e Gestão Contábil</b> | © 2023 - Todos os direitos reservados</p>
    </footer>
    
)}