'use client';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme ();
    const  [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    },[]);

    if (!mounted) {
    return null
    }

  return (
    <button  onClick={() => {setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}}>
        {resolvedTheme === 'dark' ? (
            <SunIcon className='size-4 text-orange-300' />
        ) : ( 
        <MoonIcon className='size-4 text-sky-950'/>)}
    </button>
  )
}
