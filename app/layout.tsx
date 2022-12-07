import './globals.css'
import {Navbar} from "../components/navigation/Navbar";
import {Footer} from "../components/navigation/Footer";

export default function RootLayout({children,}: { children: React.ReactNode }) {


    return (
        <html lang="de" data-theme="dark">
        <head/>
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
