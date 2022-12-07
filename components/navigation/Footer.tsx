import Link from "next/link";
import {FaDiscord, FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/all";

export const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link href={"/legal/terms"} className="link link-hover">Nutzungsbedingungen</Link>
                <Link href={"/legal/privacy-policy"} className="link link-hover">Datenschutz</Link>
                <Link href={"/legal/impressum"} className="link link-hover">Impressum</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link href={"https://www.facebook.com/HexagonMC.eu"} target={"_blank"}>
                        <FaFacebookF size={"24px"} className={"hover:text-white"}/>
                    </Link>
                    <Link href={"https://discordapp.com/invite/f99rk3F"} target={"_blank"}>
                        <FaDiscord size={"24px"} className={"hover:text-white"}/>
                    </Link>
                    <Link href={"https://www.instagram.com/hexagram_mc/"} target={"_blank"}>
                        <FaInstagram size={"24px"} className={"hover:text-white"}/>
                    </Link>
                    <Link href={"https://twitter.com/hexagonmceu"} target={"_blank"}>
                        <FaTwitter size={"24px"} className={"hover:text-white"}/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UC8LqKUayA-e_kwEW8i2igEw"} target={"_blank"}>
                        <FaYoutube size={"24px"} className={"hover:text-white"}/>
                    </Link>
                </div>
            </div>
            <div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by HexagonMC</p>
            </div>
        </footer>
    )
}