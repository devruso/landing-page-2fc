import logo from "../assets/NEWLOGO.svg"
export default function Footer(): JSX.Element{
    return(
    <footer className="h-2/3 w-full bg-pistache text-vinho p-6 flex flex-col md:flex-row justify-around">
        <img src={logo} alt="Logo 2FC" className="w-28 lg:w-44 lg:ml-10" />
        <div className="">
        <p className="mt-8 text-lg tracking-wide">Escritório de Contabilidade em Salvador - Bahia</p>
        <p className="mt-8 mb-6 text-lg tracking-wide"><b>2FC Inovação e Gestão Contábil</b> | © 2023 - Todos os direitos reservados</p>
        </div>
    </footer>
    
)}