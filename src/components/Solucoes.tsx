import React from 'react';
import { GrDocumentPerformance } from "react-icons/gr";
import { GrDocumentUser } from "react-icons/gr";
import { CgCalculator } from "react-icons/cg";
import { MdAccountBalance } from "react-icons/md";
import { SlGraph } from "react-icons/sl";

export default function Solucoes(): JSX.Element {
  return (
    <section id="solucoes" className="mt-60 mb-6 box-border">
      <h2 className="text-4xl font-bold mb-6 text-center">SOLUÇÕES</h2>
      <div className="flex max-w-7xl p-2 justify-center flex-wrap mx-auto">
        {/* Assessoria Contábil */}
        <div className="bg-white w-1/5 p-4 rounded mb-4 mr-4">
          <MdAccountBalance className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Assessoria Contábil</h3>
          <ul className="list-disc ml-4">
            <li className="font-light my-1">registros contábeis em conformidade com IFRS</li>
            <li className="font-light my-1">análise das demonstrações contábeis e indicadores financeiros</li>
            <li className="font-light my-1">gestão automatizada das declarações acessórias</li>
          </ul>
        </div>

        {/* Assessoria Fiscal/Tributária */}
        <div className="bg-white w-3/12 p-4 rounded mb-4 mr-4">
          <SlGraph className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Assessoria Fiscal/Tributária</h3>
          <ul className="list-disc ml-4">
            <li className="font-light my-1">automatização da escrituração fiscal por importação de XMLs</li>
            <li className="font-light my-1">análise de regime tributário com planejamento futuro</li>
            <li className="font-light my-1">gestão automatizada das declarações acessórias</li>
          </ul>
        </div>

        {/* Assessoria Trabalhista */}
        <div className="bg-white p-4 w-3/12 rounded mb-4 mr-4 flex-shrink-0">
        <CgCalculator className="text-5xl mx-auto mb-4" />

          <h3 className="text-xl font-bold mb-2">Assessoria Trabalhista</h3>
          <ul className="list-disc ml-4">
            <li className="font-light my-1">folha de pagamento mensal</li>
            <li className="font-light my-1">assessoria nas rotinas da área trabalhista e previdenciária</li>
            <li className="font-light my-1">assessoria proativa às mudanças legislativas</li>
            <li className="font-light my-1">gestão automatizada das declarações acessórias</li>
          </ul>
        </div>

        {/* Serviços Especializados para Pessoa Jurídica */}
        <div className="bg-white w-3/12 p-4 rounded mb-4 mr-4 flex-shrink-0">
          <GrDocumentPerformance className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Serviços Especializados para Pessoa Jurídica</h3>
          <ul className="list-disc ml-4">
            <li className="font-light my-1">abertura de empresas / alterações contratuais</li>
            <li className="font-light my-1">registro de sociedades de profissionais em cartórios</li>
            {/* Adicione mais detalhes conforme necessário */}
          </ul>
        </div>

        {/* Serviços Especializados para Pessoa Física */}
        <div className="bg-white p-4 w-3/12 rounded mb-4 flex-shrink-0">
          <GrDocumentUser className="text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Serviços Especializados para Pessoa Física</h3>
          <ul className="list-disc ml-4">
            <li className="font-light my-1">assessoria para IRPF / ganho de capital</li>
            <li className="font-light my-1">assessoria em inventários</li>
            <li className="font-light my-1">assessoria controle fiscal de ações em bolsa de valores</li>
            {/* Adicione mais detalhes conforme necessário */}
          </ul>
        </div>
      </div>
    </section>
  );
}
