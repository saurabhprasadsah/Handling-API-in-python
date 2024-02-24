fetch('https://api.github.com/users/saurabhprasadsah')

.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))




