import Header from "./components/Header";
import { FacebookIcon, Instagram, Mail, Phone, Timer, Twitter, WheatIcon } from "lucide-react";

export default function Main() {
  return (
    <div>
    <video autoPlay muted loop preload="true" className="absolute top-0 w-full h-full object-cover">
      <source src="/barbeariaVideo.mp4" type="video/mp4" />   
      <div className="vsc-controller hidden"/> 
    </video>
    <Header/>
    <div className="relative w-full flex flex-col justify-center text-[#ffffff]/80 px-20" >
      <h1 className="text-5xl pb-4">
        Nós Criaremos <br/>
        Sua Melhor Imagem
      </h1>

      <div className="flex my-2 pb-2">
        <div className="w-[30px] h-[5px] bg-white"></div>
        <div className="opacity-50 w-[30px] h-[5px] bg-white mx-1.5 my-0"></div>
        <div className="opacity-50 w-[30px] h-[5px] bg-white"></div>
      </div>     

      <article>
        <h3 className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac leo quis urna tincidunt congue.<br/> 
        Nulla eu arcu ex. Nulla facilisi. Morbi imperdiet malesuada erat eu ornare.
        </h3>
      </article>

      <div>
        <button type="button" className="bg-[#AC9374] p-3 my-5 font-semibold text-md rounded-md cursor-pointer transition-all hover:brightness-50">
        Agendar Horário
        </button>
      </div>

    </div>
      <section className="relative flex w-full mt-44 items-end">
        <div className="flex bg-[#1B181E] pl-20 pr-10 py-10 w-2/3">

          <div className="flex gap-6 w-1/3">
          <Phone 
            size={26}
          />
            <div >
              <p className="text-sm">
                3 (800) 412 2698</p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet,
              consectetu
              </p>
            </div>
          </div>
          

          <div className="flex gap-6 w-1/3">
          <Mail 
            size={26}
          />
            <div >
              <p className="text-sm">
              Loremipsum@mail.com</p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet,
              consectetu
              </p>
            </div>
          </div>

          <div className="flex gap-6 w-1/3">
          <Timer 
            size={26}
          />
            <div >
              <p className="text-sm">
              Das 09:00 ás 18:00</p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet,
              consectetu
              </p>
            </div>
          </div>

        </div>
        <div className="flex bg-[#AC9374] pl-20 pr-10 py-6 w-1/3 h-max">
          <div className="w-1/4 flex row gap-2 items-center">
          <Instagram
          size={30}
          />
          <p>Instagram</p>
          </div>
          <div className="w-1/4 flex row gap-2 items-center">
          <FacebookIcon
          size={30}
          />
          <p>Facebook</p>
          </div>
          <div className="w-1/4 flex row gap-2 items-center">
          <Twitter
          size={30}
          />
          <p>Instagram</p>
          </div>
          <div className="w-1/4 flex row gap-2 items-center">
          <WheatIcon
          size={30}
          />
          <p>Whatsapp</p>
          </div>
        </div>
      </section>
    </div>
  );
}
