
export function fetchCats() {
    fetch ('http://localhost:3000/api/v1/cats')
    .then(resp => resp.json())
    .then(data => console.log(data))
}