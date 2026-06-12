import Image from "next/image"
import {FaLocationDot} from "react-icons/fa6"
import BackgroundImage from '@/public/AndromedaPyramidDark.png'

const startYear = 2017


export default function Hero() {
    const yoe: number = new Date().getUTCFullYear() - startYear

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-[#0b0d10] text-white">
            <div style={{position: 'absolute', inset: 0, zIndex: 0}}>
                <Image
                    src={BackgroundImage}
                    alt="Background"
                    fill
                    quality={75}
                    priority // Loads the image quickly if it is above the fold
                    style={{objectFit: 'cover', filter: 'opacity(0.3) brightness(0.5)'}}
                />
            </div>
            <main className="relative z-10 text-center">
                <h1 className="text-6xl font-bold tracking-tight">
                    Chris R.
                </h1>

                <p className="pt-4 text-4xl text-zinc-400">
                    Principal Software Engineer
                </p>
                <p className="pt-4 text-xl text-zinc-500">
                    Distributed Systems · Cloud · Infrastructure
                </p>
                <div className="flex items-center justify-center text-xl pt-4">
                    <FaLocationDot className="text-orange-400" size={16}/>
                    <span className="pl-1 text-zinc-400">
                        Denver, CO
                    </span>
                </div>
                <p className="pt-4 text-xl text-zinc-500">
                    {yoe} Years of Experience
                </p>
            </main>
        </div>
    )
}

// export default withGoldenTriangles(Hero)
