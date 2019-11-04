import React from 'react'

export default () => {
    return (
        <div className="bg-blue-700">
            <div className="container mx-auto text-white text-2xl px-4 py-8">
                <h1 className="text-4xl font-bold mb-6">Mes projets</h1>
                <div className="md:flex md:justify-start">
                    <div className="mb-8 md:w-1/2 md:pr-4">
                        <div className="mb-2">
                            <img src="/Servicenav-coservit.png" alt="ServiceNav" title="ServiceNav" className="w-full" />
                        </div>
                        <p>Lead developpeur sur le produit de supervision <a href="https://coservit.com/servicenav/fr/" className="underline">ServiceNav</a>.</p>
                    </div>
                    <div className="mb-8 md:w-1/2 md:pl-4">
                        <div className="mb-2">
                            <img src="/afup.png" alt="Association Française des utilisateurs de PHP" title="Association Française des utilisateurs de PHP" className="w-full" />
                        </div>
                        <p>
                            Contribution au pôle outil de l’Association Française des utilisateurs de PHP, plus particulièrement sur le <a href="https://barometre.afup.org/campaign/2019" className="underline">baromètre des salaires</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}