import React from 'react';
import { Link } from 'react-router-dom';

function Safety() {
  const products = [
    {
      id: 6,
      name: 'Katuse Turvarööbas Pro',
      description: 'Professionaalne turvarööbaste süsteem katuse hoolduseks ja kaitseks',
      price: 159.99,
      image: '/products/roof-safety.jpg',
      features: [
        'Vastupidav tsingitud teras',
        'Lihtne paigaldus',
        'Sobib kõikidele katusematerjalidele',
        'Vastab EN 795 standardile',
        'Komplektis kinnitustarvikud',
        'Kuni 2 inimese samaaegne kasutus',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '3000 mm',
        'Koormustaluvus': '12 kN',
        'Kaal': '4.5 kg/m',
        'Garantii': '10 aastat',
      }
    },
    {
      id: 7,
      name: 'Lumetõke Standard',
      description: 'Kvaliteetne lumetõkkesüsteem katusele, mis kaitseb inimesi ja vara kukkuva lume eest',
      price: 89.99,
      image: '/products/snow-guard.jpg',
      features: [
        'Tugev konstruktsioon',
        'UV-kindel pulbervärv',
        'Sobib kõikidele katusematerjalidele',
        'Lihtne paigaldada',
        'Vastupidav ilmastikule',
        'Esteetiline välimus',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '3000 mm',
        'Kõrgus': '150 mm',
        'Värv': 'Must/Pruun/Hall',
        'Garantii': '5 aastat',
      }
    },
    {
      id: 8,
      name: 'Katuseaste Komfort',
      description: 'Turvaline ja vastupidav katuseaste katuse hoolduseks ja korstnapühkijale',
      price: 45.99,
      image: '/products/roof-step.jpg',
      features: [
        'Mittelibisev pind',
        'Reguleeritav kalle',
        'Vastupidav konstruktsioon',
        'Sobib kõikidele katusematerjalidele',
        'Lihtne paigaldada',
        'Ilmastikukindel',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Laius': '350 mm',
        'Koormustaluvus': '150 kg',
        'Värv': 'Must/Pruun/Hall',
        'Garantii': '5 aastat',
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuse turvatooted</h1>
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
            Kõikidel hoonetel peab olema ohutu juurdepääs katusele, katusel liikumiseks harjale ning korstna, katuseluukide ja muude hooldatavate kohtade juurde. Uue katuse hankimisel tuleb mõelda ka selle hilisemale hooldusele:
          </p>

          <ul className="list-disc pl-6 mb-8 text-lg text-gray-700">
            <li>korstna puhastamine;</li>
            <li>katuse ja vihmaveerennide puhastamine puulehtedest ja muust prahist;</li>
            <li>lume ja jää kukkumise tõkestamine maja vahetus läheduses;</li>
            <li>ventilatsioonisüsteemide, päikesepaneelide hooldamine;</li>
            <li>muud hooldustööd, mida tuleb teha katusel.</li>
          </ul>

          <p className="text-lg text-gray-700 mb-8">
            Turvaline ligipääs katusele on selle hooldamise puhul väga oluline. See tagab südamerahu nii majaomanikule kui ka näiteks korstnapühkijale. Alates 7.04.2017 on koduomanikul seadusest<sup>1</sup> tulenev kohustus tagada statsionaarsete ühendusteedega ja/või redeliga juurdepääs korstnale, vastasel juhul ei väljastata uuele/renoveeritavale ehitisele kasutusluba. Soovitame katuse turvatooted paigaldada koos katuse paigaldamisega, et säästa nii raha kui ka aega.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            <sup>1</sup> Siseministri määrus "Ehitisele esitatavad tuleohutusnõuded ja nõuded tuletõrje veevarustusele" § 26 lg 2
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Propageerime alati turvalisust ja õnnetustevaba keskkonda – seda nii tarnijate valikul, tootmises, teenuste pakkumisel kui mõistagi ka siis, kui toode on lõppkliendi kasutuses. Ruukki toodete projekteerimisel on silmas peetud ohutut valmistamist, paigaldust ja lõppkasutust.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/ruukki.png"
              alt="Ruukki katuse turvatooted"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Tasuta konsultatsioon</li>
                <li>✓ Professionaalne paigaldus</li>
                <li>✓ Garantiiremont</li>
                <li>✓ Hooldus ja remont</li>
                <li>✓ Turvatoodete paigaldus</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Peamised turvatooted</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Katusesillad</li>
                <li>✓ Turvapollarid</li>
                <li>✓ Lumetõkked</li>
                <li>✓ Katuseredel</li>
                <li>✓ Seinaredel</li>
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

export default Safety; 