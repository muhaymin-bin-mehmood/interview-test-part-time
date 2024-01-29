import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { IoSearch } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import Header from "@/container/header";

export default function Footer() {
    return (
        <footer className="px-3 mt-[72px] bg-bg-footer">
            <div className="w-full max-w-[1425px] mx-auto">
                <div className="follow_sec">
                    <span className="text-base font-medium text-text-dark">Follow us</span>
                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="https://www.youtube.com/" className="text-text-default hover:text-text-dark">
                                <FaYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" className="text-text-default hover:text-text-dark">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" className="text-text-default hover:text-text-dark">
                                <FaFacebookF />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer_links">
                    <div>
                        <h3 className="pb-6 text-base font-semibold text-text-dark">Internal Links</h3>
                        <ul className="flex flex-col">
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Documentaries</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/themes/">Themes</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome casts</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-6 text-base font-semibold text-text-dark">Enterprise</h3>
                        <ul className="flex flex-col">
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Download Chrome Browser</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome Browser for Enterprise</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome Browser Devices</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">ChromeOS</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Google Cloud</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Google Workspace</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-6 text-base font-semibold text-text-dark">Internal Links</h3>
                        <ul className="flex flex-col">
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Documentaries</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/themes/">Themes</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome casts</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-6 text-base font-semibold text-text-dark">Enterprise</h3>
                        <ul className="flex flex-col">
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Download Chrome Browser</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome Browser for Enterprise</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome Browser Devices</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">ChromeOS</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Google Cloud</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Google Workspace</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-6 text-base font-semibold text-text-dark">Internal Links</h3>
                        <ul className="flex flex-col">
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/documentaries/">Documentaries</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="/themes/">Themes</a>
                            </li>
                            <li>
                                <a className="block py-2 leading-6 hover:text-text-dark text-text-default text-default" href="#">Chrome casts</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="logo">
                        <Link href={'/'}>ZinTools</Link>
                    </div>
                    <ul className="flex flex-wrap items-center gap-8 gap-y-2">
                        <li>
                            <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/privacy/">Privacy Policy</a>
                        </li>
                        <li>
                            <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/terms/">Terms and conditions</a>
                        </li>
                        <li>
                            <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/cookies/">Cookies Policy</a>
                        </li>
                        <li>
                            <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/about/">About us</a>
                        </li>
                        <li>
                            <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/eula/">EULA</a>
                        </li>
                        <li>
                            <a className="text-sm text-text-default whitespace-nowrap hover:text-text-dark hover:underline" href="/contact/">Contact</a>
                        </li>
                    </ul>
                    <div className="dark_light_icon">
                        <button data-tooltip-id="ts-tooltip" data-tooltip-content="Change Theme" className="flex items-center justify-center w-12 rounded-full aspect-square text-text-dark bg-bg-controls-hover dark:bg-bg-controls">
                            <MdOutlineDarkMode />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
