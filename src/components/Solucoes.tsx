import { GrDocumentPerformance } from "react-icons/gr";
import { CgCalculator } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { BsGraphUp } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Solucoes(): JSX.Element {
  return (
    <section id="solucoes" className="mt-24 mb-6 box-border text-vinho">
      <h2 className="text-5xl font-medium tracking-wide  mb-6 text-center">Soluções</h2>
      <div className="flex max-w-7xl p-2 justify-center flex-wrap mx-auto">
        {/* Assessoria Contábil */}
        <div className="bg-white md:w-3/12 p-2 rounded mb-4 mr-4 flex md:flex-row w-5/6  md:items-start">
          <CgCalculator className="text-5xl bg-pistache rounded mr-4 w-20 h-12 mt-6 md:mt-3 p-1" />
          <div className='mt-3 md:mt-2'>
            <h3 className="text-3xl  mb-2">Assessoria Contábil</h3>
            <ul className="list-disc ml-4 space-y-2">
              <li className="font-light my-1">Registros contábeis em conformidade com IFRS</li>
              <li className="font-light my-1">Apuração e análise das demonstrações contábeis</li>
              <li className="font-light my-1">Cálculo e análise de índices</li>
              <li className="font-light my-1">Gestão do ativo imobilizado</li>
              <li className="font-light my-1">Gestão das obrigações acessórias</li>
            </ul>
          </div>
        </div>

        {/* Assessoria Fiscal/Tributária */}
        <div className="bg-white md:w-3/12 p-2 rounded mb-4 mr-4 flex md:flex-row w-5/6  md:items-start">
          <BsGraphUp className="text-5xl bg-pistache rounded mr-4 w-20 h-12 mt-6 md:mt-3 p-1" />
          <div className='mt-3 md:mt-2'>
            <h3 className="text-3xl  mb-2">Assessoria Fiscal e tributária</h3>
            <ul className="list-disc ml-4 space-y-2">
              <li className="font-light my-1">Análise de regime tributário com planejamento futuro</li>
              <li className="font-light my-1">Parametrização fiscal no ERP do cliente</li>
              <li className="font-light my-1">Apuração dos tributos</li>
              <li className="font-light my-1">Regularização fiscal/ tributária</li>
              <li className="font-light my-1">Parcelamentos</li>
            </ul>
          </div>
        </div>

         {/* Assessoria Trabalhista */}
         <div className="bg-white md:w-3/12 p-2 rounded mb-4 mr-4 flex md:flex-row w-5/6 md:items-start">
          <GrDocumentPerformance className="text-5xl bg-pistache rounded mr-4 w-20 h-12 mt-6 md:mt-3 p-1" />
          <div className='mt-3 md:mt-2'>
            <h3 className="text-3xl  mb-2">Assessoria Trabalhista</h3>
            <ul className="list-disc ml-4 space-y-2">
              <li className="font-light my-1">Folha de pagamento mensal</li>
              <li className="font-light my-1">Assessoria nas rotinas da área trabalhista e previdenciária</li>
              <li className="font-light my-1">Assessoria proativa às mudanças legislativas</li>
              <li className="font-light my-1">Gestão automatizada das declarações acessórias</li>
            </ul>
          </div>
        </div>

        {/* Assessoria Societária */}
        <div className="bg-white md:w-3/12 p-2 rounded mb-4 mr-4 flex md:flex-row w-5/6 md:items-start">
          <GrGroup className="text-5xl bg-pistache rounded mr-4 w-16 h-12 mt-6 md:mt-3 p-1" />
          <div className='mt-3 md:mt-2'>
            <h3 className="text-3xl  mb-2">Assessoria Societária</h3>
            <ul className="list-disc ml-4 space-y-2">
              <li className="font-light my-1">Reestruturação societária</li>
              <li className="font-light my-1">Elaboração de contrato social</li>
              <li className="font-light my-1">Abertura de empresa</li>
              <li className="font-light my-1">Encerramento de empresa</li>
              <li className="font-light my-1">Suspensão das atividades da empresa</li>
            </ul>
          </div>
        </div>

       {/* Assessoria Pessoa Física */}
       <div className="bg-white md:w-3/12 p-2 rounded mb-4 mr-4 flex md:flex-row w-5/6 md:items-start">
          <GoPerson className="text-5xl bg-pistache rounded mr-4 w-20 h-12 mt-6 md:mt-3 p-1" />
          <div className='mt-3 md:mt-2'>
            <h3 className="text-3xl  mb-2">Assessoria Pessoa Física</h3>
            <ul className="list-disc ml-4 space-y-2">
              <li className="font-light my-1">IRPF / ganho de capital</li>
              <li className="font-light my-1">Assessoria em inventários</li>
              <li className="font-light my-1">Assessoria controle fiscal de ações em bolsa de valores</li>

            </ul>
          </div>
        </div>

        {/* Legalização */}
        <div className="bg-white md:w-3/12 p-2 rounded mb-4 mr-4 flex md:flex-row w-5/6 md:items-start">
          <IoDocumentTextOutline className="text-5xl bg-pistache rounded mr-4 w-20 h-12 mt-6 md:mt-3 p-1" />
          <div className='mt-3 md:mt-2'>
            <h3 className="text-3xl  mb-2 md:mb-3 ">Legalização</h3>
            <ul className="list-disc ml-4 space-y-2">
              <li className="font-light my-1">Emissão de certidões</li>
              <li className="font-light my-1">Regularização fiscal  para liberação de alvarás</li>
              <li className="font-light my-1">Emissão de alvarás</li>
              <li className="font-light my-1">Parcelamento das prefeituras</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
