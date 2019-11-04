import React from "react"
import { Link } from "gatsby"

export default () => {
    return (
        <div className="w-full text-center mb-4">
            <ul>
                <li className="py-4 border-t border-gray-500">
                    <Link to={`/`} className="uppercase font-bold tracking-wider text-gray-700 hover:text-gray-800 hover:underline">
                        Accueil
                    </Link>
                </li>
                <li className="py-4 border-t border-gray-500">
                    <Link to={`/commencer-ici`} className="uppercase font-bold text-gray-700 hover:text-gray-800 hover:underline tracking-wider">
                        A propos
                    </Link>
                </li>
                <li className="py-4 border-t border-b border-gray-500">
                    <Link to={`/blog`} className="uppercase font-bold text-gray-700 hover:text-gray-800 hover:underline tracking-wider">
                        Blog
                    </Link>
                </li>
            </ul>
        </div>
    )
}