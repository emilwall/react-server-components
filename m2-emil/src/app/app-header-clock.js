'use client';
import {useEffect, useState} from 'react';

export default function AppHeaderClock({ isoDateString }) {
  const [date, setDate] = useState(new Date(isoDateString));
  useEffect(() =>{
    const interval = setInterval(() =>{
      setDate(old => new Date(old.getTime() + 1000));
    }, 1000);
    return () => { clearInterval(interval); };
  }, [])
  return <div>{new Date(date).toLocaleTimeString()}</div>;
}
