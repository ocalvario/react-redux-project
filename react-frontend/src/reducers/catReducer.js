
export default function catReducer(state = {cats: []}, action) {
    switch (action.type) {
     case 'FETCH_CATS':
         return {cats: action.payload}
    case 'ADD_CAT':
        return {...state, cats: [...state.cats, action.payload] }
    case 'ADD_GADGET':
        let cats = state.cats.map(cat => {
            if (cat.id === action.payload.id) {
                return action.payload
            } else {
                return cat
            }
        })
        return {...state, cats: cats }
        default:
         return state
    }
}