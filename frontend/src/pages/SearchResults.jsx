import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/seed-data.json'
export default function SearchResults(){ const q = new URLSearchParams(useLocation().search).get('q')?.toLowerCase()||''; const results = products.filter(p=> p.name.toLowerCase().includes(q) || p.brand?.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q)); return (<div className='p-8'><h2 className='text-2xl font-bold mb-4'>Resultados: <span className='text-[#007BFF]'>{q}</span></h2><div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>{results.map(p=> <ProductCard key={p.id} p={p} />)}</div></div>) }
