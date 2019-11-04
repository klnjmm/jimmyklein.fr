import React from "react"
import { Link } from 'gatsby'
import { FaBars, FaTimes } from "react-icons/fa"
import SubMenu from './submenu.js'

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showSubMenu: false};
    }

    toggleMenu = (event) => {
        const showSubMenu = !this.state.showSubMenu;
        this.setState({ showSubMenu });
    };

    render() {

        const subMenu = this.state.showSubMenu ? <SubMenu/> : null;
        const subMenuButtonIcon =  this.state.showSubMenu ? <FaTimes /> : <FaBars/>;
        return (
            <div>
                <div className="container mx-auto mb-4">
                    <header className="w-full flex justify-between py-4 px-4 text-xl items-center">
                        <a href="/" className="font-bold flex items-center">
                            <img src="/avatar.jpg" alt="Jimmy KLEIN" className="h-10 w-10 rounded-full" />
                            <span className="pl-4">Jimmy KLEIN</span>
                        </a>
                        <nav>
                            <button className="sm:hidden" title="Menu" onClick={event => this.toggleMenu(event)}>
                                {subMenuButtonIcon}
                            </button>
                            <ul className="hidden sm:block sm:flex sm:items-baseline">
                                <li className="px-4">
                                    <Link to={`/`} className="tracking-wider text-gray-700 hover:text-gray-800 hover:underline">
                                        Accueil
                                    </Link>
                                </li>
                                <li className="px-4">
                                    <Link to={`/commencer-ici`} className="text-gray-700 hover:text-gray-800 hover:underline tracking-wider">
                                        A propos
                                    </Link>
                                </li>
                                <li className="px-4">
                                    <Link to={`/blog`} className="text-gray-700 hover:text-gray-800 hover:underline tracking-wider">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {subMenu}
                </div>
            </div>
        )
    }
}
