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
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-4 text-center">Plekk-katused</h2>
              <p className="text-gray-700 mb-8">
                Ruukkit usaldavad tuhanded koduomanikud nii Eestis kui ka kaugemal ja juba üle 25 aasta. Oleme Ruukki ametlik partner ja meie töö on sama kvaliteetne kui Ruukki tooted.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/contact"
                className="block text-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Küsi pakkumist
              </Link>
            </div>
          </div>
        </div>

        {/* BMI Monier Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-black mb-4 text-center">Kivikatused</h2>
              <p className="text-gray-700 mb-8">
                Tootevalikus on erinevad kivi- ja bituumenkatuste materjalid. Suures tootevalikus orienteerumiseks on meil BMI partnerina pädevad teadmised ning saame need sinu kasuks tööle panna.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="/contact"
                className="block text-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Küsi pakkumist
              </Link>
            </div>
          </div>
        </div>

        {/* Bestor Group Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="h-24 flex items-center justify-center mb-6">
              <img
                src="/images/bestor-logo.png"
                alt="Bestor Group"
                className="h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-black mb-4 text-center">Eterniitkatused</h2>
            <p className="text-gray-700">
              Eterniit kauakestev ja ohutu katusekattematerjal, mis on valmistatud tsemendist, lubjakivist, tselluloosist, veest ja kaasaegses materjalis asbesti asendanud PVA kiududest.
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <Link
              to="/contact"
              className="block text-center text-black hover:text-gray-700 font-semibold"
            >
              Küsi pakkumist →
            </Link>
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