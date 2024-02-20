import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() { 
    const router = useRouter()
    return (
        <>
            <div>
                <h1>Neurotech Conference Website</h1>
                <nav className={styles.headerNav}>
                    <ul>
                        <li>
                            <Link className={router.pathname == "/" ? "active" : ""} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/About" ? "active" : ""} href="/About">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/Event" ? "active" : ""} href="/Event">
                                Event
                            </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/Sponsors" ? "active" : ""} href="/Sponsors">
                                Sponsors
                            </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/Stream" ? "active" : ""} href="/Stream">
                                Stream
                            </Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/Register" ? "active" : ""} href="/Register">
                                Register
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}