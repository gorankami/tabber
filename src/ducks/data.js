const getDefaultState = () => ({
  sections: [],
  preRows: Array(6).fill(""),
  buffer: Array(6).fill(null),
  keyHold: null,
  isMultipleOn: false,
});
const SET_BUFFER = "data SET_BUFFER";
const SET_KEY_HOLD = "data SET_KEY_HOLD";
const SET_IS_MULTIPLE_ON = "data SET_IS_MULTIPLE_ON";
const UNDO = "data UNDO";
const ADD_LINE = "data ADD_LINE";

export default function data(state = getDefaultState(), { type, payload }) {
  switch (type) {
    case SET_BUFFER:
      return { ...state, buffer: payload };
    case SET_KEY_HOLD:
      return { ...state, keyHold: payload };
    case SET_IS_MULTIPLE_ON:
      return { ...state, isMultipleOn: payload };
    case UNDO:
      return {
        ...state,
        preRows: state.preRows.map((row) => row.substring(0, row.length - 1)),
      };
    case ADD_LINE:
      const line = payload;
      let maxFret = line.reduce((maximum, fret) => {
        return Math.max(maximum, fret);
      }, null);
      let empty = maxFret > 9 ? "--" : "-";
      const newPreRows = [];
      for (let i = 0; i < 6; i++) {
        newPreRows.push(
          (state.preRows[i] += "-" + (line[i] !== null ? line[i] : empty))
        );
      }
      return {
        ...state,
        preRows: newPreRows,
      };
    default:
      return state;
  }
}

export function setBuffer(payload) {
  return { type: SET_BUFFER, payload };
}

export function setKeyHold(payload) {
  return { type: SET_KEY_HOLD, payload };
}

export function setIsMultipleOn(payload) {
  return { type: SET_IS_MULTIPLE_ON, payload };
}

export function addLine(payload) {
  return { type: ADD_LINE, payload };
}

export function undo() {
  return { type: UNDO };
}

export const selectSections = (state) => state.data.sections;
export const selectPreRows = (state) => state.data.preRows;
export const selectBuffer = (state) => state.data.buffer;
export const selectKeyHold = (state) => state.data.keyHold;
export const selectIsMultipleOn = (state) => state.data.isMultipleOn;
