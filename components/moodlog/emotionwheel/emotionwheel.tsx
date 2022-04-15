import React, { useEffect, useState } from 'react'
import styles from './emotionwheel.module.css'
var fromAngle, toAngle, 
		fromCoordX, fromCoordY, 
    toCoordX, toCoordY, 
    path, d;

let emotions = ["anger", "fear", "sadness", "happiness", "disgust", "hope", "love", "hate", "contempt", "guilt", "compassion", "shame", "gratefulness", "envy", "disappointment", "jealousy"]
console.log(styles)
function createPie(cx, cy, r, emotions) {
  let slices = emotions.length
  for (var i = 0; i < slices; i++) {
    path = document.createElementNS("http://www.w3.org/2000/svg", "path") as SVGPathElement;
    fromAngle = i * 360 / slices;
    toAngle = (i + 1) * 360 / slices;
    //console.log(fromAngle + ' ' + toAngle);
    fromCoordX = cx + (r * Math.cos(fromAngle * Math.PI / 180));
    fromCoordY = cy + (r * Math.sin(fromAngle * Math.PI / 180));
    toCoordX = cx + (r * Math.cos(toAngle * Math.PI / 180));
    toCoordY = cy + (r * Math.sin(toAngle * Math.PI / 180));
    //console.log(fromCoord + ' ' + toCoord);
    d = 'M' + cx + ',' + cy + ' L' + fromCoordX + ',' + fromCoordY + ' A' + r + ',' + r + ' 0 0,1 ' + toCoordX + ',' + toCoordY + 'z';
    //console.log(d);
    (path as SVGPathElement).setAttribute("emotion",emotions[i])
    path.setAttributeNS(null, "d", d);
    (path as SVGPathElement).style.fill = `hsl(${22.5+i*22.5}, 100%, 50%)`
    path.classList.add(styles.path);
    path.classList.add(styles[emotions[i]])

    document.getElementById('pie').appendChild(path);
  }
}




const emotionwheel = () => {
  const [emotion,setEmotion] = useState()
  useEffect(()=>{
    createPie(55, 55, 50, emotions);
  })
  return (
    <div>
      <h1>{emotion}</h1>
        <svg viewBox="0 0 110 110" id="pie" className={styles.svg} onMouseOver={(e)=>{setEmotion(e.target.getAttribute("emotion"))}} onClick={(e)=>{console.log(e.target.getAttribute("emotion"))}}>
        <defs>
    <radialGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    {/* rgba(255, 0, 0, 1) 0%,
        10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100% */}
        <stop offset="0%"   stop-color="rgba(255, 0, 0, 1)"/>
      <stop offset="10%"   stop-color="rgba(255, 154, 0, 1)"/>
      <stop offset="20%"   stop-color="rgba(208, 222, 33, 1)"/>
      <stop offset="30%"   stop-color="rgba(79, 220, 74, 1)"/>
      <stop offset="40%"   stop-color="rgba(63, 218, 216, 1)"/>
      <stop offset="50%"   stop-color="rgba(47, 201, 226, 1)"/>
      <stop offset="60%"   stop-color="rgba(28, 127, 238, 1)"/>
      <stop offset="70%"   stop-color="rgba(95, 21, 242, 1)"/>
      <stop offset="80%"   stop-color="rgba(186, 12, 248, 1)"/>
      <stop offset="90%"   stop-color="rgba(251, 7, 217, 1)"/>
      <stop offset="100%" stop-color="rgba(255, 0, 0, 1)"/>
    </radialGradient>
  </defs>
</svg>

        </div>
  )
}

export default emotionwheel