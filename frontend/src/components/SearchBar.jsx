import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function SearchBar(){ const [q, setQ] = useState(''); const nav = useNavigate(); const submit = (e)=>{ e.preventDefault(); if(q.trim()) nav('/search?q='+encodeURIComponent(q.trim())) }; return (<form onSubmit={submit} className='flex items-center bg-gray-100 rounded-full overflow-hidden'><input value={q} onChange={e=>setQ(e.target.value)} className='px-3 py-2 w-44 outline-none bg-transparent' placeholder='Buscar productos...' /><button className='px-3'>🔍</button></form>) }
