import { FaWhatsapp } from "react-icons/fa";

export default function Contato(): JSX.Element {
  return (
    <section
      className="w-full bg-center flex flex-col py-16 md:items-center text-vinho"
    >
        <h1 className="text-5xl bg-vinho text-center h-16 pt-1 text-pistache mb-4 w-full">Entre em Contato</h1>
        <div className="md:w-3/6 justify-between text-left flex flex-col md:flex-row mt-8 ml-12 md:ml-0">
        <p className="mb-4 text-3xl">WhatsApp: </p>
       <div className="flex flex-col md:flex-row">
       <div className="">
       <FaWhatsapp className="text-2xl text-green-700 inline mr-2"/>
        <p className="text-2xl inline">71 99723-0152 </p>
       </div>
        <div className="md:ml-8">
          <FaWhatsapp className="text-2xl text-green-700 md:ml-5 inline mr-2"/>
          <p className="text-2xl inline">71 99662-60059</p>
        </div>
       </div>
      </div>
      <div className="mt-3 flex flex-col md:flex-row md:w-3/6 text-left justify-between ml-12 md:ml-0">
      <p className="md:mb-8 mb-3 mt-4 md:mt-0 text-3xl">E-mail: </p>
      <p className="text-2xl">contato@2fc.com.br</p>
      </div>
    </section>
  ); 
}
