"use client"
import React from 'react'
import Link from "next/link"
import {usePathname} from "next/navigation"

export type TNavLink = {
    href: string
    children: React.ReactNode
} & Record<string, any>

export default function NavLink({href, children, ...props}: TNavLink) {
    const pathname = usePathname()
    const {className, ...rest} = props
    const active =
        pathname === href ||
        pathname.startsWith(`${href}/`)
    const cls = (
                    className || ''
                ) + (
                    active
                        ? " text-white"
                        : " text-zinc-400 hover:text-white"
                )

    return (
        <Link
            href={href}
            className={cls}
            {...props}
        >
            {children}
        </Link>
    )
}