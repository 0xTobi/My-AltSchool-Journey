let button = document.getElementById("getDetails");
document.addEventListener("click", getUserDetails)

const userStore = {
    "Ada": {
        firstName: "Ada",
        lastName: "Lovelace",
        email: "adalovelace@mail.com",
        profession: "Computer programmer",
        password: "12345Ada"
    },
    "Yemi": {
        firstName: "Yemi",
        lastName: "Adebisi",
        email: "yemi_adebisi@gmail.com",
        profession: "Software Engineer",
        password: "12345Yemi"
    },
    "Tobi": {
        firstName: "Tobi",
        lastName: "Aderibigbe",
        email: "aderibigbetobi1@gmail.com",
        profession: "Software Engineer",
        password: "boytobi123"
    }
}

function validateUsername(username) {
    if (!username) return false;
    if(username.length >= 10) return false;
    return true;
}

function validatePassword(password) {
    if (!password) return false;
    if (password.length < 6 || password.length > 15) return false;
    return true;
}


function getUserDetails() {
    let username = prompt("Enter your username")
    while (!validateUsername(username)) {
        if (username === null) return
        username = prompt("Enter your username. Username must be less than 10")
    }

    let password = prompt("Enter your password");
    while(!validatePassword(password)) {
        if (password === null) return
        password = prompt("Enter your pasowrd. Password must be more than 6 characters.")
    }

    let confirmPassword = prompt("Enter your password again");
    while (confirmPassword !== password) {
        if (confirmPassword === null) return
        confirmPassword = prompt("Password doesn't match. Enter password again");
    }

    const userDetails = userStore[username]

    if (!userDetails) {
        alert("Sorry! User not found")
        return
    }

    if (password !== userDetails.password) {
        alert("Incorrect password, please retry")
        return
    }
    
    alert(
        `Showing details for ${username}: \n
        First Name: ${userDetails.firstName} \n
        Last Name: ${userDetails.lastName} \n
        Email: ${userDetails.email} \n
        profession: ${userDetails.profession}`
    )

    let output = `
        <h2>Showing details for ${username}</h2>
        </br>
        <table>
            <tr>
                <td>First Name</td>
                <td>${userDetails.firstName}</td>
            </tr>
            <tr>
                <td>Last Name</td>
                <td>${userDetails.lastName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${userDetails.email}</td>
            </tr>
            <tr>
                <td>Profession</td>
                <td>${userDetails.profession}</td>
            </tr>
        </table>
    `
    document.body.innerHTML = output;
}