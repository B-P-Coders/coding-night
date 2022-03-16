import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as styles from '../styles/canvas.module.css';

const sizes = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
]

function Canvas() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
      console.log(canvasRef.current.getBoundingClientRect())
    }
  }, []);

  const draw = useCallback((x, y) => {
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = selectedSize;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor, setPosition])

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const onMouseDown = (e) => {
    setPosition({
      x: e.clientX - canvasRef.current.getBoundingClientRect().left,
      y: e.clientY - canvasRef.current.getBoundingClientRect().top
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    draw(e.clientX - canvasRef.current.getBoundingClientRect().left, e.clientY - canvasRef.current.getBoundingClientRect().top)
  }

  return (
    <>
      <canvas
        width={700}
        height={400}
        ref={canvasRef}
        onPointerDown={onMouseDown}
        onPointerCancel={onMouseUp}
        onPointerMove={onMouseMove}
        onPointerUp={onMouseUp}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
      />
      <br />
      <input type="color" value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}/>
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        {
          sizes.map(
            size => <option key={size} value={size}>{size}</option>
          )
        }
      </select>
      <button onClick={clear}>Clear</button>
      <button onClick={download}>Download</button>
    </>
  );
}

export default Canvas;
