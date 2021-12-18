import { createReducer } from "./createReducer";

const SET_TITLE = "data SET_TITLE";
const SET_ARE_NOTE_LABELS_SHOWN = "data SET_ARE_NOTE_LABELS_SHOWN";

// STATE

const getDefaultState = () => ({
    title: "",
    areNoteLabelsShown: false,
})

// REDUCER

const reducerMap = {
    [SET_TITLE]: (state, title) => ({ ...state, title }),
    [SET_ARE_NOTE_LABELS_SHOWN]: (state, areNoteLabelsShown) => ({
      ...state,
      areNoteLabelsShown,
    }), 
}


export default createReducer(getDefaultState, reducerMap);

// ACTIONS

export const setTitle = (payload) => ({ type: SET_TITLE, payload });

export const setAreNoteLabelsShown = (payload) => ({
  type: SET_ARE_NOTE_LABELS_SHOWN,
  payload,
});

// SELECTORS

export const selectTitle = (state) => state.settings.title;
export const selectAreNoteLabelsShown = (state) =>
  state.settings.areNoteLabelsShown;