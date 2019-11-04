import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {

    const data = useStaticQuery(
        graphql`
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
    );

    return (
        <div>
            <div className="container mx-auto lg:flex lg:mb-4">
                <div className="px-4 mb-4 lg:w-1/2">
                    <h1 className="text-3xl mb-4">Salut c’est Jimmy <span role="img" aria-label="Salut de la main">👋</span>,
                        développeur PHP <span role="img" aria-label="Elephant">🐘</span> et React <span role="img" aria-label="Symbole d'atome">⚛</span>️️, guitariste <span role="img" aria-label="Signe des cornes">🤘</span> et apprenti minimaliste.</h1>
                    <p className="font-thin text-2xl">Passionné d’informatique et de développement depuis mon adolescence, je m’intéresse plus particulièrement au <span className="font-medium">clean code</span> et au <span className="font-medium">TDD</span>. Vous pouvez retrouver <span className="font-medium">mes conseils de code</span> sur <a href={data.site.siteMetadata.links.twitter} className="underline">twitter</a> ainsi que <span className="font-medium">mes vidéos autour du développement</span> sur ma <a href={data.site.siteMetadata.links.youtube} className="underline">chaîne youtube</a>. </p>
                </div>
                <div className="text-2xl lg:w-1/2">
                    <div className="bg-blue-100 px-4 py-4">
                    <p className="font-thin mb-4">Et si vous voulez qu’on reste en contact, inscrivez-vous à ma <span className="font-bold">dev letter</span> pour recevoir régulièrement dans votre boîte mail mes nouveaux articles, des vidéos à voir, des outils à découvrir et encore bien d’autres choses.</p>
                    <a href={data.site.siteMetadata.links.devletter} className="bg-blue-200 w-full block py-4 px-4 font-bold text-blue-700 mb-4 text-center">Je m'inscris</a>
                    </div>
                </div>
            </div>
        </div>
    )
}