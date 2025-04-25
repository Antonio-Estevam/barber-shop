import HamburgerMenu from "./HamburgerMenu"
import { Scissors } from "lucide-react"
export default function Header(){
    return(
        <div className="relative z-60 flex justify-between items-center mt-5 mx-6 mb-16 md:px-20 md:pt-20 md:mx-0">
            <div className="">
                    <Scissors
                    width={"3rem"}
                    height={"3rem"}
                    color="#dd8546"
                 />
            </div>
            <nav className="">
                <HamburgerMenu/>
            </nav>
        </div>
    )
}