import React, { useState } from 'react';
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
    file1: null,
    file2: null,
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e, fileNumber) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        [fileNumber]: file
      }));
    } else if (file) {
      alert('Palun laadige üles ainult PDF-fail.');
      e.target.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert('Palun nõustuge andmekaitsetingimustega.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      
      if (formData.file1) formDataToSend.append('files', formData.file1);
      if (formData.file2) formDataToSend.append('files', formData.file2);

      const emailData = {
        to: 'maimardo@gmail.com', 
        from: formData.email,
        subject: `Uus päring - ${formData.name}`,
        text: `
Nimi: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || 'Pole määratud'}

Kirjeldus:
${formData.description}
        `.trim()
      };

      Object.keys(emailData).forEach(key => {
        formDataToSend.append(key, emailData[key]);
      });

      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) {
        throw new Error('Viga emaili saatmisel');
      }

      setSubmitStatus('success');

      setFormData({
        name: '',
        phone: '',
        email: '',
        description: '',
        file1: null,
        file2: null,
        privacyAccepted: false
      });
      alert('Teie päring on edukalt saadetud!');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Vabandame, päringu saatmisel tekkis viga. Palun proovige hiljem uuesti.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-black mb-8">
        Küsi nõu ja küsi hinda
      </h1>
      
      <div className="space-y-8 text-lg text-gray-700">
        <p>
          Kui sa ei ole päris kindel, mis oleks parim lahendus sinu katusele või fassaadile, küsi meilt nõu!
        </p>

        <p>
          Võid ka saata oma küsimused ja joonised ning võtame sinuga ühendust täpse hinnapakkumise koostamiseks.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg shadow-sm p-6 border">
          <h2 className="text-2xl font-bold text-black mb-6">Saada päring</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nimi *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-post *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="file1" className="block text-sm font-medium text-gray-700 mb-1">
                Lisa joonis ja või projekt (PDF)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="file1"
                  name="file1"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'file1')}
                  className="hidden"
                />
                <label
                  htmlFor="file1"
                  className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <DocumentArrowUpIcon className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">
                    {formData.file1 ? formData.file1.name : 'Vali fail'}
                  </span>
                </label>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="file"
                  id="file2"
                  name="file2"
                  accept=".pdf"
                  onChange={(e) => handleFileChange(e, 'file2')}
                  className="hidden"
                />
                <label
                  htmlFor="file2"
                  className="flex items-center gap-2 px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-50"
                >
                  <DocumentArrowUpIcon className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">
                    {formData.file2 ? formData.file2.name : 'Vali fail'}
                  </span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Kirjeldus *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacyAccepted"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
              <label htmlFor="privacyAccepted" className="text-sm text-gray-700">
                Nõustun{' '}
                <Link to="/privacy-policy" className="text-black hover:text-gray-700 underline">
                  andmekaitsetingimustega
                </Link> *
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-md transition-colors duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isSubmitting ? 'Saadan...' : 'Saada'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-center mt-4">
              Teie päring on edukalt saadetud!
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center mt-4">
              Vabandame, päringu saatmisel tekkis viga. Palun proovige hiljem uuesti.
            </p>
          )}
        </form>

        <p className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span>Ja alati võid lihtsalt helistada</span>
          <a 
            href="tel:+37255582203" 
            className="text-black hover:text-gray-700 font-semibold"
          >
            +372 5558 2203
          </a>
          <span>või kirjutada</span>
          <a 
            href="mailto:info@kortek.ee" 
            className="text-black hover:text-gray-700 font-semibold"
          >
            info@kortek.ee
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact; 