import Link from "next/link";;
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <button className="hamburger"><span></span></button>
          <Link className="logo" href={'/'}>ZinTools</Link>
        </div>
        <form className="search_form">
          <input type="text" className="search_input__tEifi" placeholder="Search for Movies, TV Shows, Themes &amp; Cast " />
          <span className="search_submit__AlnBT"><IoSearch /></span>
        </form>
        <div className="user_auth_btn">
          <Link href={'/'}>Log in</Link>
          <Link href={'/'}>Sign up</Link>
        </div>
        <span className="responsive_search"><IoSearch /></span>
      </nav>
      <ul className="menu">
        <li>
          <Link href="/#">Stock Video</Link>
        </li>
        <li>
          <Link href="/#">Video Templates</Link>
        </li>
        <li>
          <Link href="/#">Music</Link>
        </li>
        <li>
          <Link href="/#">Sound Effects</Link>
        </li>
        <li>
          <Link href="/#">Graphic Templates</Link>
        </li>
        <li>
          <Link href="/#">Graphics</Link>
        </li>
        <li>
          <Link href="/#">Presentation Templates</Link>
        </li>
        <li>
          <Link href="/#">Photos</Link>
        </li>
        <li>
          <Link href="/#">Fonts</Link>
        </li>
        <li>
          <Link href="/#">Add-ons</Link>
        </li>
        <li>
          <Link href="/#">Web Templates</Link>
        </li>
        <li>
          <Link href="/#">More</Link>
        </li>
      </ul>
    </header>
  );
}
