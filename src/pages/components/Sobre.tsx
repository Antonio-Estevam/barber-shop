export default function Sobre() {
    return (
        <div className="absolute top-full bg-[#1B181E] text-white min-h-screen px-4 md:px-40 py-12 space-y-16">
      
        {/* SOBRE */}
        <section className="relative flex flex-col lg:flex-row items-center gap-8 mt-28">
          <div className="flex-1 relative z-10">
            <h1 className="text-4xl font-bold text-[#dd8546]">Barber<br/> Shop</h1>
            <p className="mt-6 text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu placerat ex. Nullam sagittis posuere ipsum ac lacinia. Etiam fermentum enim at lectus fermentum bibendum. Donec sodales pretium risus nec suscipit. Sed feugiat malesuada gravida. Aliquam maximus, ipsum in consectetur dapibus, odio magna mollis urna, a rhoncus magna mi congue mi. Sed dolor nisl, eleifend et consequat nec, posuere at risus.
            Vestibulum efficitur ipsum eu congue convallis. Donec in lacus ullamcorper, imperdiet enim eget, aliquam nulla. Nunc risus felis, semper sed mauris ac, dictum pharetra magna. Vestibulum aliquet egestas tortor sit amet suscipit. Sed odio mauris, ultricies cursus ornare sed, placerat eget ipsum. Cras malesuada suscipit aliquam. Aliquam dignissim volutpat neque eu lacinia.
            Vivamus venenatis magna a odio lobortis ultricies. Integer at elit ut felis porttitor elementum. Sed a rutrum nunc. Sed eu nisl convallis, volutpat mi non, congue nisl. Mauris ullamcorper velit a mauris laoreet gravida. Vivamus ut nibh enim. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec gravida ante ipsum, nec rhoncus orci consequat a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean vestibulum quam lacus, id iaculis mi egestas ac. Aenean aliquet varius arcu faucibus luctus.
              {/* Coloque o texto real aqui */}
            </p>
          </div>
  
          <div className="flex-1 relative z-10">
            {/* Imagem da barbearia */}
            {/*<div className="w-full h-64 lg:h-96 bg-gray-800 rounded-md overflow-hidden">
               Coloque a imagem aqui 
            </div>*/}
          </div>
  
          {/* Marca d'água 
          <h2 className="absolute text-[8rem] lg:text-[12rem] font-bold text-red-700 opacity-5 top-0 left-0 z-0 select-none">
            SOBRE
          </h2>*/}
        </section>
  
        {/* SERVIÇOS */}
        <section className="relative z-10">
          {/*<h2 className="absolute text-[8rem] font-bold text-gray-700 opacity-5 top-0 left-0 select-none">
            SERVIÇOS
          </h2>*/}
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 relative z-10">
            {["Corte cabelo", "Barba", "Pintura"].map((servico, index) => (
              <div key={index} className="border border-gray-600 h-40 flex items-center justify-center text-xl">
                {servico}
              </div>
            ))}
          </div>
        </section>
</div>   
);
}