// Get data from local localStorage
let user = JSON.parse(localStorage.getItem("user"))
console.log(user);

// Check if not logged in, and push to login page
if (!user){
    window.location.href = "./login.html"
}

// Write data to element
document.getElementById('user-info').innerHTML = `
<div class="test">
    <div class="container">
        <h2> Name: ${ user.name }</h2>
        <p> Surname: ${ user.surname }</p>
        <p> E-mail: ${ user.email }</p>
        <p> Address: ${ user.address }</p>
        <p> Suburb: ${ user.suburb }</p>
        <p> City: ${ user.city }</p>
        <p> Zipcode: ${ user.zipcode }</p>
    </div>
</div>
`