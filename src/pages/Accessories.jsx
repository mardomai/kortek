import React from 'react';
import { Link } from 'react-router-dom';

function Accessories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuse lisaplekid ja plekksepatööd</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="prose prose-lg">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Oleme Ruukki ametlik partner ja edasimüüja.
            </p>
            <p className="text-lg text-gray-700">
              Ruukki toodete põhjamaine kvaliteet on tuntud üle maailma. Müüme ja paigaldame erinevaid katuseprofiile, turvaelemente ja vihmaveesüsteeme.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Lisaplekkide vajaduse tingib katuse kuju keerukus. On hulk vältimatuid lisaplekke (harjaplekk, otsaplekk, liiteplekk), milleta katust paigaldada ei saa. Lisaplekkide värvi- ja pinnakatete valik on sama, mis profiilplekkidel – lisaplekid saab tellida katusega samas toonis!
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Peale allpool toodud lisaplekkide pakume kõiki ehitusel tarvilikke lisaplekke ka n-ö rätsepatööna.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Miks valida meie lisaplekid?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Kõrge kvaliteet ja vastupidavus</li>
              <li>• Täpne sobivus katusega</li>
              <li>• Lai värvivalik</li>
              <li>• Professionaalne paigaldus</li>
              <li>• Kohandatud lahendused</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/ruukki.png"
              alt="Ruukki katuse lisaplekid"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Põhilised lisaplekid</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Harjaplekid</li>
                <li>✓ Otsaplekid</li>
                <li>✓ Liiteplekid</li>
                <li>✓ Räästaplekid</li>
                <li>✓ Neeluplekid</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Tasuta konsultatsioon</li>
                <li>✓ Mõõtmine objektil</li>
                <li>✓ Eritellimuste valmistamine</li>
                <li>✓ Professionaalne paigaldus</li>
                <li>✓ Garantii kõikidele töödele</li>
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

export default Accessories; 