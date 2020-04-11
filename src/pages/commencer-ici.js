import React from 'react';
import { graphql } from 'gatsby';
import { FaPodcast, FaYoutube } from 'react-icons/fa';
import Layout from '../components/layout';

export default class CommencerIci extends React.Component {

    render() {
        return (
            <Layout>
                <div className="px-4 mb-6 container mx-auto">
                    <p className="mb-2">
                        <img src="/jimmy-bio.jpg" title="Jimmy Klein" alt="Jimmy Klein" className="h-full w-full" />
                    </p>
                    <h1 className="text-3xl mb-2">Ma bio</h1>
                    <ul>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Marié et père de deux filles extraordinaires</li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Lead développeur <a href="https://www.coservit.com" className="underline">@coservit</a></li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">PHP et React lover</li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Je vis près de Lyon</li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Télétravailleur 4 jours sur 5</li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Je participe au pôle outil de l'<a href="https://www.afup.org" className="underline">AFUP</a></li>
                        <li className="text-gray-800 mb-2 text-lg pl-4"><a href={this.props.data.site.siteMetadata.links.twitter} className="underline">Twitter</a> et <a href={this.props.data.site.siteMetadata.links.youtube} className="underline">Youtube</a> addict</li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Guitariste dans <a href="http://www.narvalband.com" className="underline">Narval</a></li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Groupe préféré : <a href="https://www.youtube.com/watch?v=NeQM1c-XCDc" className="underline">Rammstein</a></li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Le pays que j'ai préféré visité : le Japon</li>
                        <li className="text-gray-800 mb-2 text-lg pl-4">Série préférée : Dexter</li>
                    </ul>
                    <hr className="border className=text-gray-800 border-gray-400 my-6" />
                    <h1 className="text-3xl mb-2">Les créations que j'apprécie</h1>
                    <p className="text-gray-800">J'aime découvrir de nouvelles choses, que ce soit dans le domaine du développement web, du développement personnel, de la vidéo et de l'entreprenariat.</p>
                    <h3 className="text-2xl mb-4 mt-8 flex items-center"><FaPodcast className="inline mr-1 text-gray-700"/>Podcasts</h3>
                    <ul>
                        <li className="mb-6">
                            <a href="https://www.theminimalists.com/podcast/">
                                <p className="text-xl underline text-gray-900 hover:text-gray-700">The minimalists</p>
                                <p className="text-gray-700">Joshua Fields Millburn & Ryan Nicodemus (en anglais).</p>
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="http://www.fullstackradio.com">
                                <p className="text-xl underline text-gray-900 hover:text-gray-700">Full Stack Radio</p>
                                <p className="text-gray-700">Adam Wathan pour les développeurs (en anglais).</p>
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="https://www.generationxx.fr">
                                <p className="text-xl underline text-gray-900 hover:text-gray-700">GenerationXX</p>
                                <p className="text-gray-700">Siham Jibril interview des femmes qui entreprennent.</p>
                            </a>
                        </li>
                    </ul>

                    <h3 className="text-2xl mb-4 mt-10 flex items-center"><FaYoutube className="inline mr-1 text-gray-700"/>Youtube</h3>
                    <ul>
                        <li className="mb-6">
                            <a href="https://www.youtube.com/channel/UCb-D560WkMEPE7dwNta_nqA">
                                <p className="text-xl underline text-gray-900 hover:text-gray-700">AFUP PHP</p>
                                <p className="text-gray-700">Conférences sur le développement Web, le PHP, le DevOps...</p>
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="https://www.youtube.com/channel/UCJ24N4O0bP7LGLBDvye7oCA">
                                <p className="text-xl underline text-gray-900 hover:text-gray-700">Matt D'Avella</p>
                                <p className="text-gray-700">Minimalisme, création de film et expériences (en anglais).</p>
                            </a>
                        </li>
                        <li className="mb-6">
                            <a href="https://www.youtube.com/channel/UCFIRm1Fv1VC4DZxmYyvNOTQ">
                                <p className="text-xl underline text-gray-900 hover:text-gray-700">Jeven Dovey</p>
                                <p className="text-gray-700">Tutoriels et revues sur la création de films, matériels et sur Youtube (en anglais).</p>
                            </a>
                        </li>
                    </ul>
                    <hr className="border border-gray-400 my-6" />

                    <h1 className="text-3xl mb-2">Entrez en contact</h1>
                    <p className="text-gray-800">Si vous voulez me contacter, vous pouvez me retrouver facilement sur <a href={this.props.data.site.siteMetadata.links.twitter} className="underline">Twitter</a>.<br/>
                        J'ai ouvert une <a href={this.props.data.site.siteMetadata.links.youtube} className="underline">chaîne Youtube</a> où vous pouvez me retrouver et commenter mes vidéos.</p>
                </div>
            </Layout>
        );
    }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        links {
          twitter
          youtube
          github
          devletter
        }
      }
    }
  }
`