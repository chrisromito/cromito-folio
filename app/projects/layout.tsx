import React from 'react'


export default function ProjectsLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-[#0b0d10] text-white overflow-hidden">
            {children}
        </div>
    )
}