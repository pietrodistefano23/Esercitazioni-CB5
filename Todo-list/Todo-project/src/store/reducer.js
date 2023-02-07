const mainReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO_TO_LIST":
        console.log( action.payload.status);
        return {
          ...state,
          todoList: [...state.todoList, action.payload],
        };
      case "SET_DONE_UNDONE_TODO":
        return {
            ...state,
            todoList: [...state.todoList, !action.payload]
        }

    //   case "REMOVE_TODO_FROM_LIST":
    //     return {
    //       ...state,
    //       todoList: state.todoList.filter((todo) => todo.id !== action.payload),
    //     };
      default:
        return state;
    }
  };
  
  export default mainReducer;