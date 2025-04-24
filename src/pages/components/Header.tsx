import Image from "next/image"
import HamburgerMenu from "./HamburgerMenu"
export default function Header(){
    return(
        <div className=" relative z-60 w-full flex justify-between items-center px-20 pt-20 mb-16">
            <div className="">
                    <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="Logo barber shop"/>
            </div>
            <nav className="">
                <HamburgerMenu/>
            </nav>
        </div>
    )
}