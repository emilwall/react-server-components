'use client';
import {useEffect, useState} from 'react';
import AppShowSun from "./app-show-sun";

export default function AppHeaderClock({ isoDateString }) {
  const [date, setDate] = useState(new Date(isoDateString));
  useEffect(() =>{
    const interval = setInterval(() =>{
      setDate(old => new Date(old.getTime() + 1000*3600));
    }, 1000);
    return () => { clearInterval(interval); };
  }, [])
  return (
    <div>Servertid just nu: {new Date(date).toLocaleTimeString()}
      <div><AppShowSun date={date} /></div>
    </div>
  );
}
