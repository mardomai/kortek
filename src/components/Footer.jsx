import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 text-black mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Kortek Katused OÜ</h3>
          <address className="not-italic">
            <p>Ringtee 11, Kuressaare</p>
            <p>93815 Saaremaa</p>
            <p className="mt-4">
              <a href="tel:+37255582203" className="hover:underline">+372 5558 2203</a>
            </p>
            <p>
              <a href="mailto:info@kortek.ee" className="hover:underline">info@kortek.ee</a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Kiirlingid</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Isikuandmete kaitse
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Miks usaldada just meid?</h3>
          <p className="text-black leading-relaxed">
            Oleme Saaremaa ettevõte ja siin tead alati, kust meid leida! Meil on piisavalt kogemusi, 
            oleme uhked oma kvaliteetse töö üle ning pakume hea hinnaga katuse- ja fassaadimaterjale 
            oma partneritelt Ruukki, BMI, Bestor ja Velux.
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Kortek Katused OÜ. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 