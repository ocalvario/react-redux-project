
export default function catReducer(state = {cats: []}, action) {
    switch (action.type) {
     case 'FETCH_CATS':
         return {cats: action.payload}
    case 'ADD_CAT':
        return {...state, cats: [...state.cats, action.payload] }
     default:
         return state
    }
}