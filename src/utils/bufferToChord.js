export function countMaxFretLength(buffer) {
  return buffer.reduce(
    (accum, current) => Math.max(accum, current === null ? 0 : current.length),
    0
  );
}

export function bufferToChord(buffer) {
  const length = countMaxFretLength(buffer);
  if(!length) return null;

  let emptySpace = "--";
  emptySpace = emptySpace.substring(0, length);
  return buffer.map((b) => {
      if(b === null) {
          return emptySpace
      }
      if(b.length < length) return `-${b}`;
      return b;
  });
}
