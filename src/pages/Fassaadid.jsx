import React from 'react';

function Fassaadid() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8">Fassaaditööd</h1>
      <img
        src="/image.png"
        alt="Fassaaditööd"
        className="w-full max-h-96 object-cover rounded-lg shadow mb-8"
      />
      <div className="space-y-6 text-lg text-black">
        <p>
          Fassaaditööd on üks olulisemaid osi välitöödest – just need kujundavad maja välisilme ja me tahame, et teie maja näeks välja täiuslik. Teeme kõiki fassaadidega seotud töid: soojustame ja renoveerime. Peamiselt ehitame puit- ja krohvfassaade.
        </p>
      </div>
    </div>
  );
}

export default Fassaadid; 