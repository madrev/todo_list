export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return keys.map( (id) => state.todos[id] );
};
