import Image from "next/image"
export default function Header(){
    return(
        <div className=" relative w-full flex justify-between p-20">
            <div className="">
                    <Image
                    src="/logo.png"
                    width={80}
                    height={80}
                    alt="Logo barber shop"/>
            </div>
            <nav className="">
                <ul>home</ul>
                <ul>sobre</ul>
            </nav>
        </div>
    )
}