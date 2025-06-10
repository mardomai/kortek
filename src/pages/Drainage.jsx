import React from 'react';
import { Link } from 'react-router-dom';

function Drainage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Vihmaveesüsteemid</h1>
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
            Ruukki pakub nutikaid ja elegantseid vihmaveelahendusi kõigile katusetüüpidele. Vihmaveesüsteemid koguvad katuselt vihmavee kokku ja tagavad vee eemalejuhtimise konstruktsioonidest. Ruukki vihmaveesüsteeme on lihtne paigaldada ja hooldada.
          </p>

          <p className="text-lg text-gray-700 mb-8">
            Kvaliteetsed materjalid tagavad süsteemi täpse ja kiire paigalduse ning garanteerivad selle maksimaalse eluea. Samal ajal kindlustab toodete lai värvivalik igale katusele sobiva äravoolusüsteemi.
          </p>

          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Katuselt otse pinnasele kukkuv vihmavesi märgab fassaadi, kahjustab selle välisilmet ja lühendab konstruktsiooni eluiga.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Ruukki garanteerib ostjale, et vastavalt juhistele paigaldatud ja hooldatud vihmaveesüsteem kestab aastakümneid. Selle tõenduseks on toodete 20-aastane garantii.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/ruukki.png"
              alt="Ruukki vihmaveesüsteemid"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Vihmaveesüsteemi komponendid</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Vihmaveerennid</li>
                <li>✓ Vihmaveetorud</li>
                <li>✓ Rennikinnitused</li>
                <li>✓ Torukinnitused</li>
                <li>✓ Nurgad ja üleminekud</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Tasuta konsultatsioon</li>
                <li>✓ Professionaalne paigaldus</li>
                <li>✓ Garantiiremont</li>
                <li>✓ Hooldus ja remont</li>
                <li>✓ Süsteemi puhastus</li>
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

export default Drainage; 