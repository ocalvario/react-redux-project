export const deleteGadget = (gadgetId, catId) => {
    return (dispatch) => {
        return fetch (`http://localhost:3000/api/v1/cats/${catId}/gadgets/${gadgetId}` , {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(cat => dispatch({type: 'DELETE_GADGET', payload: cat }))
    }

}