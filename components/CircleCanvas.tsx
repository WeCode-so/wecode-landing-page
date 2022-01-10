import { useEffect, useRef, useState } from "react";
import { CANVAS_CODE } from "../lib/canvasCode";

const CircleCanvas: React.FC<{}> = () => {
  const canvas = useRef<any>();

  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  const loop = useRef<() => void>();

  loop.current = function () {
    if (canvas.current) {
      const completeness = window.scrollY / window.innerHeight / 1;
      const ctx = (canvas.current as HTMLCanvasElement).getContext("2d");
      if (ctx) {
        drawFrame(ctx, completeness);
      }
    }

    window.requestAnimationFrame(loop.current!);
  };

  useEffect(() => {
    const resizeCanvas = () => {
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    if (loop.current) window.requestAnimationFrame(loop.current);
  }, []);

  return (
    <canvas
      className="w-screen h-screen"
      ref={canvas}
      width={canvasWidth * window.devicePixelRatio}
      height={canvasHeight * window.devicePixelRatio}
    />
  );
};

const drawFrame = (ctx: CanvasRenderingContext2D, c: number) => {
  const r = window.devicePixelRatio;
  const targetText = CANVAS_CODE;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  putFont(ctx, 24 * r);

  const radius = 256;

  for (let i = 0.2; i < 1.7; i += 0.15) {
    drawTxtArc(ctx, targetText.substring((i / 0.15) * 120), radius, i, c);
  }
};

const drawTxtArc = (
  ctx: CanvasRenderingContext2D,
  txt: string,
  radius: number,
  level: number,
  completeness: number
) => {
  const r = window.devicePixelRatio;

  const inverseCompleteness = 3 - 2 * completeness;
  const leveledRadius = radius * level * inverseCompleteness;

  const arcLength = 2 * leveledRadius * Math.PI;
  const charsRendered = Math.floor(arcLength / 14.5);
  const renderedText = txt.substring(0, charsRendered);
  const renderedTextArr = Array.from(renderedText);

  const centerX = ctx.canvas.width / 2 / r;
  const centerY = ctx.canvas.height / 2 / r;

  ctx.fillStyle = `rgba(255, 255, 255, ${
    (1 - (0.25 - completeness / 4) * level) / 3 + (2 * completeness) / 3
  })`;

  renderedTextArr.forEach((v, i) => {
    const myPos = i / charsRendered;
    const isVisible = completeness > myPos;

    if (isVisible) {
      const targetFill = getColorAtPos(1 - (completeness - myPos));
      ctx.fillStyle = `rgba(${targetFill.r}, ${targetFill.g}, ${targetFill.b}, 1)`;
    } else {
      ctx.fillStyle = `rgba(255, 255, 255, ${
        (1 - (0.5 - completeness / 2) * level) / 3
      })`;
    }

    const vector = charVector(myPos + completeness + 0.875);

    const newX = centerX + leveledRadius * vector[0];
    const newY = centerY + leveledRadius * vector[1];

    ctx.save();
    ctx.translate(newX * r, newY * r);
    ctx.rotate(2 * (myPos + completeness + 0.875) * Math.PI);
    ctx.fillText(v, 0, 0);
    ctx.restore();
  });
};

const putFont = (ctx: CanvasRenderingContext2D, size: number) => {
  ctx.font = `${size}px DM Mono`;
};

const charVector = (c: number) => [
  Math.sin(2 * c * Math.PI),
  -Math.cos(2 * c * Math.PI),
];

type Color = {
  r: number;
  g: number;
  b: number;
};

const finalColor: Color = {
  r: 88,
  g: 50,
  b: 237,
};

const initialColor: Color = {
  r: 237,
  g: 50,
  b: 50,
};

function interpolateColor(c0: Color, c1: Color, f: number): Color {
  const deltaR = c1.r - c0.r;
  const deltaG = c1.g - c0.g;
  const deltaB = c1.b - c0.b;

  return {
    r: c0.r + deltaR * f,
    g: c0.g + deltaG * f,
    b: c0.b + deltaB * f,
  };
}

const getColorAtPos = (f: number) =>
  interpolateColor(initialColor, finalColor, f);

export default CircleCanvas;
