export function createReducer(defaultStateFn, reducerMap) {
  return function reducer(state = defaultStateFn(), { type, payload }) {
    return (reducerMap[type] || ((e) => e))(state, payload);
  };
}
