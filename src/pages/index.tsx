import Header from "./components/Header";
import { FacebookIcon, Instagram, Mail, Phone, Timer, Twitter, WheatIcon } from "lucide-react";
import MaskBackground from "./components/MaskBackground";
import VideoBackground from "./components/BackgroundVideo";
import LoadingCircleSpinner from "./components/LoadingCircleSpinner";
import { Suspense } from "react";

export default function Main() {
  return(
    <div>
      <Suspense fallback={<LoadingCircleSpinner />}> 
        <VideoBackground/>  
        <MaskBackground/>    
        <Header/>
        <div className="absolute top-[20vh] w-full flex flex-col justify-center text-[#ffffff]/80 px-6 md:px-20 max-w-screen-xl mx-auto lg:top-[30vh]" >
          <h1 className="text-5xl pb-4">
            Nós Criaremos <br/>
            Sua Melhor Imagem
          </h1>

          <div className="flex my-2 pb-2">
            <div className="w-[30px] h-[5px] bg-[#dd8546]"></div>
            <div className="opacity-30 w-[30px] h-[5px] bg-[#dd8546] mx-1.5 my-0"></div>
            <div className="opacity-30 w-[30px] h-[5px] bg-[#dd8546]"></div>
          </div>     

          <article>
            <h3 className="text-base text-left whitespace-normal md:text-xl md:max-w-[806px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac leo quis urna tincidunt congue. 
            Nulla eu arcu ex. Nulla facilisi. Morbi imperdiet malesuada erat eu ornare.
            </h3>
          </article>

          <div>
            <button type="button" className="bg-[#dd8546] w-full p-3 my-8 font-semibold text-md rounded-md cursor-pointer transition-all hover:brightness-50 md:w-auto">
            Agendar Horário
            </button>
          </div>

        </div>
          <section className="absolute z-20 flex w-full bottom-[-9vh] place-items-end flex-col md:flex-row md:bottom-[0vh] ">
            <div className="flex flex-row items-center bg-[#1B181E]/50 px-6 md:px-20 py-8 w-full gap-3 backdrop-blur-lg md:flex-row md:gap-8">

              <div className="flex w-1/2 items-center gap-3 lg:w-1/3">
                <Timer 
                  size={26}
                />
                <div >
                  <p className="text-sm w-max">
                  Das 09:00 ás 18:00
                  </p>
                  <p className="text-xs hidden lg:flex">
                    Lorem ipsum dolor sit amet,
                    consectetu
                  </p>
                </div>
              </div>  

              <div className="flex w-1/2 items-center gap-3 lg:w-1/3">
                <Phone 
                  size={26}              
                />
                <div >
                  <p className="text-sm w-max">
                    3 (800) 412 2698
                  </p>
                  <p className="text-xs hidden lg:flex">
                    Lorem ipsum dolor sit amet,
                    consectetu
                  </p>
                </div>
              </div> 

              <div className="hidden items-center gap-3 lg:w-1/3 lg:flex">
                <Mail 
                  size={26}
                />
                <div >
                  <p className="text-xs">
                  loremipsum@mail.com
                  </p>
                  <p className="text-xs hidden lg:flex">
                    Lorem ipsum dolor sit amet,
                    consectetu
                  </p>
                </div>
              </div>
            </div>
            <div className="flex bg-[#dd8546] px-6 py-6 w-full gap-4 text-white">
              <div className="w-1/4 flex row gap-2 items-center">
              <Instagram
              size={26}
              />
              <p className="hidden">Instagram</p>
              </div>
              <div className="w-1/4 flex row gap-2 items-center">
              <FacebookIcon
              size={26}
              />
              <p className="hidden">Facebook</p>
              </div>
              <div className="w-1/4 flex row gap-2 items-center">
              <Twitter
              size={26}
              />
              <p className="hidden">Instagram</p>
              </div>
              <div className="w-1/4 flex row gap-2 items-center">
              <WheatIcon
              size={26}
              />
              <p className="hidden">Whatsapp</p>
              </div>
            </div>
          </section>
      </Suspense>
    </div>
  )
}
