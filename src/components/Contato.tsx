import { FaWhatsapp } from "react-icons/fa";

export default function Contato(): JSX.Element {
  return (
    <section id="contato" className="w-full bg-center flex flex-col py-8 lg:pb-16 md:items-center text-vinho">
      <h1 className="text-4xl md:text-5xl bg-vinho text-center h-16 pt-2 md:pt-1 text-pistache mb-4 w-full">Entre em Contato</h1>

      <div className="md:w-3/6 justify-between text-left flex flex-col md:flex-row mt-8 ml-12 md:ml-0">
        <p className="mb-4 text-3xl">WhatsApp: </p>

        <div className="flex flex-col md:flex-row w-50">
          <div className="box-border">
            <FaWhatsapp className="text-2xl text-green-700 inline mr-2 box-"/>
            <a href="https://api.whatsapp.com/send?phone=5571997230152" target="_blank" rel="noopener noreferrer" className="text-2xl inline border-b-2 border-vinho hover:border-vinho2 hover:font-medium box-border">71 99723-0152</a>
          </div>

          <div className="md:ml-8 w-50  mt-3 lg:mt-0 box-border">
            <FaWhatsapp className="text-2xl text-green-700 md:ml-5 inline mr-2"/>
            <a href="https://api.whatsapp.com/send?phone=5571996626005" target="_blank" rel="noopener noreferrer" className="text-2xl inline border-b-2 border-vinho hover:border-vinho2 hover:font-medium box-border">71 99662-6005</a>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col md:flex-row md:w-3/6 text-left justify-between ml-12 md:ml-0 ">
        <p className="md:mb-8 mb-3 mt-4 md:mt-0 text-3xl">E-mail: </p>
        <a href="mailto:contato@2fc.com.br" className="text-2xl w-56 md:h-8  border-b-2 border-vinho hover:border-vinho2 ml-7 lg:mt-0 hover:font-medium box-border md:mr-40 lg:mr-[11.5rem]">contato@2fc.com.br</a>
      </div>
    </section>
  );
}
