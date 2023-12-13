import bg from "../assets/HeroImage.png";

export default function Contato(): JSX.Element {
  return (
    <section
      className="w-full bg-textColor bg-cover bg-center flex flex-col  py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-3xl text-white text-left ml-96">
        <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
        <p className="mb-4 text-lg">Telefone e Whatsapp: 71 99723-0152 / 71 99662-60059</p>
        <p className="mb-8 text-lg">E-mail: contato@2fc.com.br</p>
      </div>
    </section>
  ); 
}
