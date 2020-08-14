
export function fetchCats() {
    return (dispatch) => {
        fetch ('http://localhost:3000/api/v1/cats')
        .then(resp => resp.json())
        .then(cats => dispatch({
            type: 'FETCH_CATS',
            payload: cats
        }) )
    }
}