'use client';

import { useState } from 'react';

const lightingProducts = [
  { name: 'BEAM', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'BEAM SQ', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'DAZZLE', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'GLOSS', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'GLAZE', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'APOLLO', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'SAPPHIRE', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'AURA', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'TITAN', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
  { name: 'AMBER RD', image: 'https://png.pngtree.com/element_pic/16/12/06/5d79b5dd066400e188713f7dd417a3f4.png' },
];

export default function Objects() {
  const [filters, setFilters] = useState({});

  return (
    <div className="flex flex-col md:flex-row p-8  min-h-screen mt-48">
      {/* Sidebar Filters */}
      {/* Breadcrumb */}
      <div className="p-4 text-sm absolute top-32 left-20">
        <div className="max-w-6xl mx-auto">HOME / PRODUCTS / CATEGORY / OBJECTS</div>
      </div>

      <aside className="w-full md:w-72 p-4 mt-12">
        

        <h2 className="text-xl font-semibold mb-2">Mounting type</h2>
        {['Ceiling recessed', 'Recessed Suspended', 'Surface Mounted', 'Suspended', 'Surface Suspended Recessed'].map((item) => (
          <label key={item} className="block text-gray-700">
            <input type="checkbox" className="mr-2" /> {item}
          </label>
        ))}

        <h2 className="text-xl font-semibold mt-6 mb-2">Light Distribution</h2>
        {['A10-A32 wide 100% direct', 'A40-A44 medium 100% direct', 'A50-A80 narrow 100% direct', 'B41-B63 narrow direct'].map((item) => (
          <label key={item} className="block text-gray-700">
            <input type="checkbox" className="mr-2" /> {item}
          </label>
        ))}

        <h2 className="text-xl font-semibold mt-6 mb-2">Lamp Type</h2>
        {['LED', 'CONLGB'].map((item) => (
          <label key={item} className="block text-gray-700">
            <input type="checkbox" className="mr-2"  /> {item}
          </label>
        ))}
      </aside>
      <h1 className="absolute top-44 left-10 lg:left-24 text-5xl font-bold">SPOT DOWN SERIES</h1>
      <div className="hidden md:block w-px bg-black mx-4 relative mt-8">
      </div>
      {/* Lighting Products Grid */}
      <main className="w-full md:w-3/4 p-4 mt-8">

        <p className="text-gray-600 mb-4">{lightingProducts.length} Results</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {lightingProducts.map((product, index) => (
            <a href="/products/category/objects/item" key={index}>
            <div  className="p-1 ">
              <img src={product.image} alt={product.name} className="w-50 h-52 object-cover mb-2 border-2 border-solid border-black bg-gray-300 rounded-lg" />
              <h3 className="text-lg font-medium">{product.name}</h3>
            </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
