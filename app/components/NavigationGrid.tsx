import Link from "next/link"

export default function NavigationGrid() {
    return (
        <section className="px-6 pb-32 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link className="p-6 border border-zinc-800 rounded hover:border-zinc-600" href="/experience">
                    Experience
                </Link>
                <Link className="p-6 border border-zinc-800 rounded hover:border-zinc-600" href="/projects">
                    Projects
                </Link>
                <Link className="p-6 border border-zinc-800 rounded hover:border-zinc-600" href="/contact">
                    Contact
                </Link>
            </div>
        </section>
    )
}