"use client"

import { motion } from "motion/react"

function LoadingCircleSpinner() {
    return (
        <div className="container w-full h-screen flex justify-center items-center bg-black">
            <motion.div
                className="spinner w-[60px] h-[60px] border-[color:#1a1e26] will-change-transform rounded-[50%] border-t-[#dd8546] border-4 border-solid"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    )
}

export default LoadingCircleSpinner
