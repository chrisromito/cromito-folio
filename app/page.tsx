import Hero from '@/app/components/Hero'
import NavigationGrid from '@/app/components/NavigationGrid'
import Proof from '@/app/components/Proof'
import ExperienceTimeline from '@/app/components/ExperienceTimeline'

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#0b0d10] text-white overflow-hidden">
            <Hero/>
            <main className="relative z-10">
                <Proof/>
                <ExperienceTimeline />
                <NavigationGrid/>
            </main>
        </div>
    )
}
