export const addCat = (data) => {

    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/cats', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(cat => dispatch({type: 'ADD_CAT', payload: cat}))
    }
  }