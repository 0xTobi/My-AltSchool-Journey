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


/* 
Javascript arrow function have to be declared before they can be used, 
unlike Function Declaration which are not part of the regular top to-bottom flow of control. 
They are conceptually moved to the top of their
scope and can be used by all the code in that scope
*/

let getUserDetails = () => {
    let username = prompt("Enter your Username");

    const validateUsername = (username) => {
        if (!username) return false;
        if(username.length >= 10) return false;
        return true;
    }

    const validatePassword = (password) => {
        if (!password) return false;
        if (password.length < 6 || password.length > 15) return false;
        return true;
    }

    while(!validateUsername(username)) {
        if (username === null) return       //Sanity Check. Not important.
        username = prompt("Enter your Username. Username must be less than 10 characters.")
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




    // function validateUsername(username) {
    //     if (!username) return false;
    //     if(username.length >= 10) return false;
    //     return true;
    // }

    // function validatePassword(password) {
    //     if (!password) return false;
    //     if (password.length < 6 || password.length > 15) return false;
    //     return true;
    // }
}