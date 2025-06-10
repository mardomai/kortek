import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-6">Katuste ehitus ja renoveerimine</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Müüme ja paigaldame eri tüüpi katuseid ja teeme kõik vajalikud eeltööd. Lisame katusele aknad, vajalikud turvatooted ja vihmaveesüsteemid. Katusetööd, fassaadide renoveerimine ja ehitus Saaremaal ning materjalide müük üle Eesti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Ruukki Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-8">
              <img
                src="/images/ruukki.png"
                alt="Ruukki"
                className="h-16 object-contain mx-auto mb-8"
              />
              <h2 className="text-2xl font-bold text-black mb-4">Plekk-katused</h2>
              <p className="text-gray-700">
                Ruukkit usaldavad tuhanded koduomanikud nii Eestis kui ka kaugemal ja juba üle 25 aasta. Oleme Ruukki ametlik partner ja meie töö on sama kvaliteetne kui Ruukki tooted.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/?category=metal"
                className="inline-block border-2 border-red-600 text-red-600 px-8 py-2 hover:bg-red-600 hover:text-white transition-colors"
              >
                PLEKK-KATUSED
              </Link>
            </div>
          </div>
        </div>

        {/* BMI Monier Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-8">
                              <img
                  src="/images/monier.png"
                  alt="BMI Monier"
                  className="h-28 object-contain mx-auto mb-8"
                />
              <h2 className="text-2xl font-bold text-black mb-4">Kivikatused</h2>
              <p className="text-gray-700">
                Tootevalikus on erinevad kivi- ja bituumenkatuste materjalid. Suures tootevalikus orienteerumiseks on meil BMI partnerina pädevad teadmised ning saame need sinu kasuks tööle panna.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/?category=tile"
                className="inline-block border-2 border-red-600 text-red-600 px-8 py-2 hover:bg-red-600 hover:text-white transition-colors"
              >
                KIVIKATUSED
              </Link>
            </div>
          </div>
        </div>

        {/* Bestor Group Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-8">
                              <img
                  src="/images/bestor.png"
                  alt="Bestor Group"
                  className="h-24 object-contain mx-auto mb-8"
                />
              <h2 className="text-2xl font-bold text-black mb-4">Eterniitkatused</h2>
              <p className="text-gray-700">
                Eterniit kauakestev ja ohutu katusekattematerjal, mis on valmistatud tsemendist, lubjakivist, tselluloosist, veest ja kaasaegses materjalis asbesti asendanud PVA kiududest.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/?category=eternit"
                className="inline-block border-2 border-red-600 text-red-600 px-8 py-2 hover:bg-red-600 hover:text-white transition-colors"
              >
                ETERNIITKATUSED
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-black mb-4">Katuseaknad</h3>
          <p className="text-gray-600 mb-4">
            VELUX katuseaknad ja lisatarvikud
          </p>
          <Link
            to="/windows"
            className="text-black hover:text-gray-700 font-semibold"
          >
            Loe lähemalt →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-black mb-4">Turvatooted</h3>
          <p className="text-gray-600 mb-4">
            Katuse turvatooted ja paigaldus
          </p>
          <Link
            to="/safety"
            className="text-black hover:text-gray-700 font-semibold"
          >
            Loe lähemalt →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-black mb-4">Vihmaveesüsteemid</h3>
          <p className="text-gray-600 mb-4">
            Kvaliteetsed vihmaveesüsteemid
          </p>
          <Link
            to="/drainage"
            className="text-black hover:text-gray-700 font-semibold"
          >
            Loe lähemalt →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-black mb-4">Lisaplekid</h3>
          <p className="text-gray-600 mb-4">
            Katuse lisaplekid ja plekksepatööd
          </p>
          <Link
            to="/accessories"
            className="text-black hover:text-gray-700 font-semibold"
          >
            Loe lähemalt →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 