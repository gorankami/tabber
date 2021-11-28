function G({ width, height, i, j }) {
  return (
    <g
      fill="#fff"
      stroke="#707070"
      strokeWidth="2"
      transform={`translate(${i * width}, ${j * height})`}
    >
      <rect width={width} height={height} stroke="none" />
      <rect x="0.5" y="0.5" width={width - 1} height={height - 1} fill="none" />
    </g>
  );
}

export function Chord({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "3em"}
      height={size || "3em"}
      viewBox="0 0 272 252"
    >
      {Array(4)
        .fill()
        .reduce(
          (a, _, i) => [
            ...a,
            ...Array(5)
              .fill()
              .map((_, j) => (
                <G key={`${i}-${j}`} width={68} height={42} i={i} j={j} />
              )),
          ],
          []
        )}
    </svg>
  );
}
