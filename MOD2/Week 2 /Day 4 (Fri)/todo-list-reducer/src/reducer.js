export default function reducer(state, action) {
    switch(action.type) {
      case 'ADD': 
        let item = {
          text: action.payload,
          completed: false,
          id: crypto.randomUUID() 
        };
        return { ...state, list: [...state.list, item] }
      case 'DELETE':
        return { ...state, list: state.list.filter((item) => item.id !== action.payload) }
      case 'COMPLETE':
        return { ...state, list: state.list.map((item) =>
          item.id === action.payload ? { ...item, completed: !item.completed } : item )
        }
      case 'TYPE':
        return { ...state, listType: action.payload }
      default:
        return state
    }
  }