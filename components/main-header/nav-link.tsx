'use client'
import classes from "./nav-link.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {NavLinkProps} from "@/interfaces/interfaces";

export default function NavLink({ href, children } : NavLinkProps) {
    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    );
}