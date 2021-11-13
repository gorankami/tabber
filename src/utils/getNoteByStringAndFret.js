import { notes, strings } from "./stringsAndNotes";

export function getNoteByStringAndFret(string, fret) {
  return notes[(fret + getOffset(string))  % 12];
}

function getOffset(string){
    switch (string) {
        case strings[0]: //e
        case strings[5]: //E
            return 7;
        case strings[1]: //B
            return 2;
        case strings[2]: //G
            return 10;
        case strings[3]: //D
            return 5;
        case strings[4]: //A
            return 0;
        default:
          return "";
      }
}
