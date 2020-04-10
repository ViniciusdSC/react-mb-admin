export default function system(state = [], action) {
  switch (action.type) {
    case 'CREATE':
      return [...state, { id: state.length, ...action.payload }];
    case 'DELETE':
      return state.filter((model) => model.id !== action.payload.id);
    case 'UPDATE':
      return state.map((model) => {
        if (model.id === action.payload.id) {
          return action.payload;
        }
        return model;
      });
    case 'VIEW':
      return state.find((model) => model.id === action.payload.id);
    default:
      return state;
  }
}
