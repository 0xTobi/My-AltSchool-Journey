let button = document.getElementById("details")

button.addEventListener("click", startValidation)


// let userDetails = {
//     user1: {username: "Toby", password: 12345678},
//     user2: {username: "Olu", password: 2324343},
//     user3: {username: "Silas", password: 754545454},
//     user4: {username: "Marvy", password: 12345678},
//     user5: {username: "Uche", password: 12345678}
// }


let userStore = {
    user1: {
        username: "Toby", 
        password: "tobi123",
        userDetails: {
            Age: 19,
            DOB: "2nd of March 1999",
            "State of Origin": "Osun",
            Nationality: "Nigerian",
            Email: "aderibigbetobi1@gmail.com"
        }
    },
    user2: {
        username: "Silas", 
        password: "silas123",
        userDetails: {
            Age: 21,
            DOB: "25th of August 2000",
            "State of Origin": "Ibadan",
            Nationality: "Togolese",
            Email: "aderibigbetobi1@gmail.com"
        }
    },
    user3: {
        username: "Marvy", 
        password: "marvy123",
        userDetails: {
            Age: 21,
            DOB: "25th of August 2000",
            "State of Origin": "Ibadan",
            Nationality: "Togolese",
            Email: "aderibigbetobi1@gmail.com"
        }
    }
}


// function startValidation() {
//     let usernameInput = prompt("Enter a username")
//     if (usernameInput.length > 10) {
//         alert("username must be less than 10 characters")
//         usernameInput = prompt("Enter a username less than 10 chartacters")
//     } else {
//         for (let item in userStore) {
//             if (usernameInput == item.username) {
//                 // alert("User found");
//                 console.log("correct username")
//                 let passwordInput = prompt(`Enter password for ${item.username}`)
//                 if (passwordInput.length <= 6) {
//                     alert("password must be more than 6 characters")
//                     passwordInput = prompt(`Enter password for ${item.username} again`)
//                 } else {
//                     if (passwordInput == item.password) {
//                         // alert("Password correct!")
//                         console.log(item.userDetails)
//                     }
//                     else {
//                         // alert("Wrong Password");
//                         console.log("Wrong password")
//                     }
//                 }
//             } else {
//                 // alert("No user found with that username")
//                 usernameInput = prompt("User not found")
//                 console.log("No user found")
//             }
//         }
//     }

// }




function startValidation() {
    let usernameInput = prompt("Enter a username")
    for (let item in userStore) {
        if (usernameInput == item.username) {
            // alert("User found");
            console.log("correct username")
            let passwordInput = prompt(`Enter password for ${item.username}`)
            if (passwordInput == item.password) {
                // alert("Password correct!")
                console.log(item.userDetails)
            }
            else {
                // alert("Wrong Password");
                console.log("Wrong password")
            }
        } else {
            // alert("No user found with that username")
            usernameInput = prompt("User not found")
            console.log("No user found")
        }
    }
}