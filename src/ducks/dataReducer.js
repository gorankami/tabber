import { bufferToChord } from "../utils/bufferToChord";
import { sectionToTab } from "../utils/sectionToTab";
import { createReducer } from "./createReducer";

const SET_BUFFER = "data SET_BUFFER";
const SET_IS_MULTIPLE_ON = "data SET_IS_MULTIPLE_ON";
const UNDO = "data UNDO";
const ADD_LINE = "data ADD_LINE";
const COMPLETE_SECTION = "data COMPLETE_SECTION";

// STATE
const getDefaultState = () => ({
  sections: [],
  buffer: Array(6).fill(null),
  isMultipleOn: false,
  currentSection: [],
});

// REDUCER MAP

const reducerMap = {
  [SET_BUFFER]: (state, buffer) => ({ ...state, buffer }),
  [SET_IS_MULTIPLE_ON]: (state, isMultipleOn) => ({ ...state, isMultipleOn }),
  [UNDO]: (state) => {
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
  },
  [ADD_LINE]: (state, payload) => ({
    ...state,
    currentSection: [...state.currentSection, bufferToChord(payload)],
  }),
  [COMPLETE_SECTION]: (state) => {
    if (!state.currentSection.length) return state;
    return {
      ...state,
      sections: [...state.sections, state.currentSection],
      currentSection: [],
    };
  },
};

export default createReducer(getDefaultState, reducerMap);

// ACTIONS

export const setBuffer = (payload) => ({ type: SET_BUFFER, payload });
export const setIsMultipleOn = (payload) => ({
  type: SET_IS_MULTIPLE_ON,
  payload,
});
export const addLine = (payload) => ({ type: ADD_LINE, payload });
export const undo = () => ({ type: UNDO });
export const completeSection = () => ({ type: COMPLETE_SECTION });

// SELECTORS

export const selectSections = (state) => state.data.sections;
export const selectPreRows = (state) => state.data.preRows;
export const selectBuffer = (state) => state.data.buffer;
export const selectIsMultipleOn = (state) => state.data.isMultipleOn;
export const selectCurrentSectionForPrint = (state) =>
  sectionToTab(state.data.currentSection);
