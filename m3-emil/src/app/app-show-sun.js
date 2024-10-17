'use client';

export default function AppShowSun({date}){
    function getBrightness(isoDateString) {
        const mydate = new Date(isoDateString);
        const totalMinutes = mydate.getHours() * 60 + mydate.getMinutes();
        const noonInMinutes = 12 * 60;
        console.log(date);
        if (totalMinutes >= 7 * 60 && totalMinutes < 18 * 60) {
          const minutesFromNoon = Math.abs(totalMinutes - noonInMinutes);
          const brightnessRatio = 1 - minutesFromNoon / noonInMinutes;
          return 100.0 - brightnessRatio * 100.0;
        }
        return 100.0;
      }
    const brightness = getBrightness(date);
    const style = {
        filter: `grayscale(${brightness}%)`,
        visibility: brightness === 100.0 ? 'hidden' : 'visible',
    }
    return (
        <div>
            <img src='../images/sun.png' style={style} alt='En sol'/>
        </div>
    )
}