import { bufferToChord } from "../utils/bufferToChord";
import { sectionToTab } from "../utils/sectionToTab";

const SET_BUFFER = "data SET_BUFFER";
const SET_KEY_HOLD = "data SET_KEY_HOLD";
const SET_IS_MULTIPLE_ON = "data SET_IS_MULTIPLE_ON";
const UNDO = "data UNDO";
const ADD_LINE = "data ADD_LINE";
const COMPLETE_SECTION = "data COMPLETE_SECTION";
const SET_TITLE = "data SET_TITLE";

const getDefaultState = () => ({
  sections: [],
  buffer: Array(6).fill(null),
  keyHold: null,
  isMultipleOn: false,
  currentSection: [],
  title: "",
});

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
    case SET_TITLE:
      return { ...state, title: payload };
    default:
      return state;
  }
}

// ACTIONS

export const setBuffer = (payload) => ({ type: SET_BUFFER, payload });
export const setKeyHold = (payload) => ({ type: SET_KEY_HOLD, payload });
export const setIsMultipleOn = (payload) => ({
  type: SET_IS_MULTIPLE_ON,
  payload,
});
export const addLine = (payload) => ({ type: ADD_LINE, payload });
export const undo = () => ({ type: UNDO });
export const completeSection = () => ({ type: COMPLETE_SECTION });
export const setTitle = (payload) => ({ type: SET_TITLE, payload });

// SELECTORS

export const selectSections = (state) => state.data.sections;
export const selectPreRows = (state) => state.data.preRows;
export const selectBuffer = (state) => state.data.buffer;
export const selectKeyHold = (state) => state.data.keyHold;
export const selectIsMultipleOn = (state) => state.data.isMultipleOn;
export const selectCurrentSectionForPrint = (state) =>
  sectionToTab(state.data.currentSection);
export const selectTitle = (state) => state.data.title;
