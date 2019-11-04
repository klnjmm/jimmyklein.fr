import React from "react"
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa"

export default class Footer extends React.Component {

    render() {
        console.log(this.props.links.devletter);
        return (
            <footer className="bg-gray-800 px-4 py-4 text-white text-2xl font-bold">
                <div className="container mx-auto md:flex md:justify-between md:items-baseline">
                    <div className="flex justify-center mb-4 items-baseline md:w-1/2">
                        <span>Retrouvez-moi sur </span>
                        <div>
                            <a
                                href={this.props.links.twitter}
                                className="pl-6"
                            >
                                <FaTwitter className="inline" />
                            </a>
                            <a
                                href={this.props.links.youtube}
                                className="px-4"
                            >
                                <FaYoutube className="inline" />
                            </a>
                            <a href={this.props.links.github}>
                                <FaGithub className="inline" />
                            </a>
                        </div>
                    </div>
                    <a href={this.props.links.devletter} className="w-full md:w-1/2 block bg-white text-xl font-black text-gray-800 py-4 px-4 mb-4 text-center">Inscrivez-vous à la dev letter</a>
                </div>
            </footer>
        );
    }
}