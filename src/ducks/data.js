import { bufferToChord } from "../utils/bufferToChord";
import { sectionToTab } from "../utils/sectionToTab";

const getDefaultState = () => ({
  sections: [],
  buffer: Array(6).fill(null),
  keyHold: null,
  isMultipleOn: false,
  currentSection: [],
});
const SET_BUFFER = "data SET_BUFFER";
const SET_KEY_HOLD = "data SET_KEY_HOLD";
const SET_IS_MULTIPLE_ON = "data SET_IS_MULTIPLE_ON";
const UNDO = "data UNDO";
const ADD_LINE = "data ADD_LINE";
const COMPLETE_SECTION = "data COMPLETE_SECTION";

export default function data(state = getDefaultState(), { type, payload }) {
  switch (type) {
    case SET_BUFFER:
      return { ...state, buffer: payload };
    case SET_KEY_HOLD:
      return { ...state, keyHold: payload };
    case SET_IS_MULTIPLE_ON:
      return { ...state, isMultipleOn: payload };
    case UNDO:
      let sections = [...state.sections];
      if (!state.currentSection.length && !sections.length) {
        return state;
      }
      if (state.currentSection.length) {
        return {
          ...state,
          currentSection: state.currentSection.slice(0, -1),
        };
      } else {
        let currentSection = sections.pop();
        return {
          ...state,
          sections,
          currentSection,
        };
      }

    case ADD_LINE:
      return {
        ...state,
        currentSection: [...state.currentSection, bufferToChord(payload)],
      };
    case COMPLETE_SECTION:
      if (!state.currentSection.length) return state;
      return {
        ...state,
        sections: [...state.sections, state.currentSection],
        currentSection: [],
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

export function completeSection() {
  return { type: COMPLETE_SECTION };
}

export const selectSections = (state) => state.data.sections;
export const selectPreRows = (state) => state.data.preRows;
export const selectBuffer = (state) => state.data.buffer;
export const selectKeyHold = (state) => state.data.keyHold;
export const selectIsMultipleOn = (state) => state.data.isMultipleOn;

export const selectCurrentSectionForPrint = (state) => {
  return sectionToTab(state.data.currentSection);
};
