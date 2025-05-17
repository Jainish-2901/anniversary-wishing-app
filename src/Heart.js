import { useEffect } from 'react';
import './Heart.css';

function createHeart(side) {
  const container = document.querySelector(`.heart-side.${side}`);
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const size = 15 + Math.random() * 15;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * (80 - size)}px`;
  heart.style.bottom = "-40px";
  heart.style.opacity = 0.8 + Math.random() * 0.2;
  heart.style.animationDuration = `${4 + Math.random() * 3}s`;
  heart.style.animationTimingFunction = "linear";
  heart.style.animationFillMode = "forwards";
  heart.style.animationName = side === "left" ? "floatUpLeft" : "floatUpRight";
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}

export default function HeartAnimation() {
  useEffect(() => {
    const leftInterval = setInterval(() => createHeart("left"), 600);
    const rightInterval = setInterval(() => createHeart("right"), 600);
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);
  return null;
}
