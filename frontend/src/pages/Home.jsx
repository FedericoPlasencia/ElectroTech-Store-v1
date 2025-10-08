import React from 'react'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/seed-data.json'
export default function Home(){ const featured = products.slice(0,8); return (<div className='p-8'><h1 className='text-4xl font-bold text-[#007BFF] mb-6'>Ofertas destacadas</h1><div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>{featured.map(p=> <ProductCard key={p.id} p={p} />)}</div></div>) }
