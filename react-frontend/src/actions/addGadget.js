export const addGadget = (gadget, catId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/cats/${catId}/gadgets`, {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json' 
          },
          body: JSON.stringify(gadget)
        })
        .then(response => response.json())
        .then(cat => dispatch({type: 'ADD_GADGET', payload: cat}))
    }

}