import { bufferToChord } from "../utils/bufferToChord";
import { sectionToTab } from "../utils/sectionToTab";

const SET_BUFFER = "data SET_BUFFER";
const SET_KEY_HOLD = "data SET_KEY_HOLD";
const SET_IS_MULTIPLE_ON = "data SET_IS_MULTIPLE_ON";
const UNDO = "data UNDO";
const ADD_LINE = "data ADD_LINE";
const COMPLETE_SECTION = "data COMPLETE_SECTION";
const SET_TITLE = "data SET_TITLE";
const SET_ARE_NOTE_LABELS_SHOWN = "data SET_ARE_NOTE_LABELS_SHOWN";

const getDefaultState = () => ({
  sections: [],
  buffer: Array(6).fill(null),
  keyHold: null,
  isMultipleOn: false,
  currentSection: [],
  title: "",
  areNoteLabelsShown: false,
});

const reducerMap = {
  [SET_BUFFER]: (state, buffer) => ({ ...state, buffer }),
  [SET_KEY_HOLD]: (state, keyHold) => ({ ...state, keyHold }),
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
  [SET_TITLE]: (state, title) => ({ ...state, title }),
  [SET_ARE_NOTE_LABELS_SHOWN]: (state, areNoteLabelsShown) => ({
    ...state,
    areNoteLabelsShown,
  }),
};

export default function dataReducer(state = getDefaultState(), { type, payload }) {
  return (reducerMap[type] || ((e) => e))(state, payload);
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
export const setAreNoteLabelsShown = (payload) => ({
  type: SET_ARE_NOTE_LABELS_SHOWN,
  payload,
});

// SELECTORS

export const selectSections = (state) => state.data.sections;
export const selectPreRows = (state) => state.data.preRows;
export const selectBuffer = (state) => state.data.buffer;
export const selectKeyHold = (state) => state.data.keyHold;
export const selectIsMultipleOn = (state) => state.data.isMultipleOn;
export const selectCurrentSectionForPrint = (state) =>
  sectionToTab(state.data.currentSection);
export const selectTitle = (state) => state.data.title;
export const selectAreNoteLabelsShown = (state) =>
  state.data.areNoteLabelsShown;
