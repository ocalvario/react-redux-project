export const editCat = (data) => {
    return (dispatch) => {
    fetch( `http://localhost:3000/api/v1/cats/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(cat => dispatch({type: 'EDIT_CAT', payload: cat}))
    }
  }