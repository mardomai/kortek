import { useEffect, useRef } from 'react';

function Company() {
  const mapRef = useRef(null);
  const location = { lat: 58.26707, lng: 22.49659 }; // Coordinates for Ringtee 11, Kuressaare

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD1CjXn507guHFrVxdycC347nwoYlxE3Cg`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
    });

    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: 'Kortek Katused OÜ',
    });

    const infowindow = new window.google.maps.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h3 style="margin: 0 0 8px 0;">Kortek Katused OÜ</h3>
          <p style="margin: 0 0 8px 0;">Ringtee 11, Kuressaare<br>93815 Saaremaa</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Ringtee+11+Kuressaare+93815+Saaremaa" 
             target="_blank" 
             style="color: #1a73e8; text-decoration: none;">
            Ava Google Maps
          </a>
        </div>
      `
    });

    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8">Ettevõte</h1>
      
      <div className="space-y-6 text-black">
        <p className="text-lg">
          Kortek on saarlaste loodud ettevõte, mis alustas tegevust juba 2007. aastal.
        </p>

        <p className="text-lg">
          Personaalne lähenemine ja piisav eelnev konsultatsioon on see, mis aitab meil jõuda teie soovitud tulemuseni.
        </p>

        <p className="text-lg">
          Oleme spetsialiseerunud kvaliteetsete katuste ja fassaadide loomisele. Seepärast oleme partneriteks valinud sellised kvaliteettootjad nagu Ruukki, BMI (Est-Stein), Bestor ja Velux.
        </p>

        <p className="text-lg">
          Pakume teenuseid Saaremaal ja müüme katusetooteid üle Eesti.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Meie Asukoht</h2>
          <p className="mb-4">
            Kortek Katused OÜ<br />
            Ringtee 11, Kuressaare<br />
            93815 Saaremaa
          </p>
          <div 
            ref={mapRef} 
            className="w-full h-[400px] rounded-lg shadow-lg"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Company; 