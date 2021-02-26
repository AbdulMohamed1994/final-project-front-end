let users;

function fetchData(){
    fetch('http://127.0.0.1:5000/show-records/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        users = data;
    });
}

fetchData()

function login(){
    
    let loginForm = document.getElementById("login");
    let inputs = loginForm.getElementsByTagName('input');

    let email = inputs[0].value;
    let password = inputs[1].value;

    console.log(users, email, password);

    let loggedIn = users[0].filter(user => {
        return user.email == email && user.password == password;
    })

    console.log(loggedIn)

    if (loggedIn.length >= 1) {
        alert('You have been successfully logged in!');
        window.location.href='./index.html'
    } else {
        alert('Invalid Login');
    }
    loginForm.reset();
}

function register(){
    let registerForm = document.getElementById('register');
    let inputs = registerForm.getElementsByTagName('input');

    let name = inputs[0].value
    let surname = inputs[1].value
    let email = inputs[2].value
    let address = inputs[3].value
    let suburb = inputs[4].value
    let city = inputs[5].value
    let zipcode = inputs[6].value
    let password = inputs[7].value

    fetch('http://127.0.0.1:5000/add-new-record/', {
        method: 'POST',
        body: JSON.stringify({
            name,
            surname,
            email,
            address,
            suburb,
            city,
            zipcode,
            password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => log.error(err))

    registerForm.reset();
    fetchData();

}