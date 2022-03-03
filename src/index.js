function getRamenData() {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => console.log(data))
}
