import React from 'react';

function CompletedWorks() {
  const projects = [
    {
      id: 1,
      title: 'Ruukki Classic NextGen 50',
      image: '/images/image1.png',
      features: [
        'tumehall, matt',
        'otsaviilud',
        'Velux katuseaknad',
        'vihmavesi',
        'redelid, käigusild',
        'SBS bituumen pealiskatte paigaldus'
      ]
    },
    {
      id: 2,
      title: 'Ruukki Feb Forma',
      image: '/images/image2.png',
      features: [
        'tumepruun',
        'kortsnaplekk ja redel',
        'tuulekastide ja otsaviilu laudade paigaldus',
        'fassaadi soojustamine ja fassaadilaua paigaldus'
      ]
    },
    {
      id: 3,
      title: 'Eterniit Gotika',
      image: '/images/image3.png',
      features: [
        'tumepruun',
        'Velux katuseaknad',
        'redel ja käigusild'
      ]
    },
    {
      id: 4,
      title: 'Ruukki Kiviprofiil Hyygge',
      image: '/images/image4.png',
      features: [
        'antrasiithall',
        'Ruukki vihmaveesüsteem',
        'lumetõke ja katuseredelid'
      ]
    },
    {
      id: 5,
      title: 'Monier EVO silekivi',
      image: '/images/image5.png',
      features: [
        'must',
        'Monieri lumetõke, redeliastmed',
        'Ruukki vihmavesi',
        'korstnaplekk'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-black mb-12">Tehtud Tööd</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-200"
          >
            <div className="relative h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-black mb-4">
                {project.title}
              </h2>
              
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-gray-700"
                  >
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedWorks; 