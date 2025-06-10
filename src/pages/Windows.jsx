import React from 'react';
import { Link } from 'react-router-dom';

function Windows() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuseaknad</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="prose prose-lg">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Oleme Veluxi ametlik partner ja edasimüüja.
            </p>
            <p className="text-lg text-gray-700">
              Juba aastakümneid on Velux olnud turuliider innovatiivsete katuseakende, kardinate, aknakatete ja tarvikute tootmises.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Päevavalguse ja tervisliku sisekliima spetsialistidena on Velux teadlik sellest, kui oluline on juba projekteerimisetapis planeerida ruumidesse piisav kogus päevavalgust. Katuseakende kaudu tuleb ruumi kaks korda rohkem päevavalgust kui sama suurtest vertikaalsetest akendest, samal ajal muudavad need ruumi tunduvalt valgemaks ja parandavad sealset sisekliimat.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Velux pakub aknaid kõigile katusetüüpidele, lisaks ka kardinaid, suitsueemaldussüsteeme jms.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">VELUX ACTIVE with NETATMO</h2>
            <p className="text-lg text-gray-700">
              Juhtimissüsteem VELUX ACTIVE with NETATMO aitab luua tervisliku sisekliima – see kontrollib niiskust, CO2 ja temperatuuri taset ning avab või sulgeb automaatselt aknad ja kardinad. Juhtimissüsteemiga VELUX ACTIVE saab aknaid ja kardinaid juhtida ka mobiiltelefonist.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/velux.png"
              alt="VELUX katuseaknad"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Peamised eelised</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ 2x rohkem päevavalgust kui vertikaalsetest akendest</li>
                <li>✓ Parem sisekliima ja ventilatsioon</li>
                <li>✓ Sobivad lahendused kõigile katusetüüpidele</li>
                <li>✓ Lai valik lisatarvikuid</li>
                <li>✓ Nutikad juhtimislahendused</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Tasuta konsultatsioon</li>
                <li>✓ Professionaalne paigaldus</li>
                <li>✓ Garantiiremont</li>
                <li>✓ Hooldus ja remont</li>
                <li>✓ Lisatarvikute paigaldus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/contact"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Küsi pakkumist
        </Link>
      </div>
    </div>
  );
}

export default Windows; 