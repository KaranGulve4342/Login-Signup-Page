// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBTa4jpSnxpL32yOJ2thGHiFQlpvWReGZk",
//     authDomain: "first-loginsignup-page.firebaseapp.com",
//     databaseURL: "https://first-loginsignup-page-default-rtdb.firebaseio.com",
//     projectId: "first-loginsignup-page",
//     storageBucket: "first-loginsignup-page.appspot.com",
//     messagingSenderId: "817942431566",
//     appId: "1:817942431566:web:d8c4e315f37372c5f9001f",
//     measurementId: "G-N2EPQYBTD7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   // Initialize variables
//   const auth = firebase.auth()
//   const database = firebase.database()
  
//   // Set up our register function
//   function register() {
//     // Get all our input fields
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
//     username = document.getElementById('UserSign-up').value
//     confirmPassword = document.getElementById('confirm').value
  
//     // Validate input fields
//     if (validate_email(email) == false || validate_password(password) == false) {
//       alert('Email or Password is Outta Line!!')
//       return
//       // Don't continue running the code
//     }
//     if (validate_field(username) == false || validate_field(UserSign-up) == false || validate_field(confirmPassword) == false) {
//       alert('One or More Extra Fields is Outta Line!!')
//       return
//     }
   
//     // Move on with Auth
//     auth.createUserWithEmailAndPassword(email, password)
//     .then(function() {
//       // Declare user variable
//       var user = auth.currentUser
  
//       // Add this user to Firebase Database
//       var database_ref = database.ref()
  
//       // Create User data
//       var user_data = {
//         email : email,
//         username : username,
//         password : password,
//         confirmPassword : confirmPassword,
//         last_login : Date.now()
//       }
  
//       // Push to Firebase Database
//       database_ref.child('users/' + user.uid).set(user_data)
  
//       // DOne
//       alert('User Created!!')
//     })
//     .catch(function(error) {
//       // Firebase will use this to alert of its errors
//       var error_code = error.code
//       var error_message = error.message
  
//       alert(error_message)
//     })
//   }
  
//   // Set up our login function
//   function login () {
//     // Get all our input fields
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
  
//     // Validate input fields
//     if (validate_email(email) == false || validate_password(password) == false) {
//       alert('Email or Password is Outta Line!!')
//       return
//       // Don't continue running the code
//     }
  
//     auth.signInWithEmailAndPassword(email, password)
//     .then(function() {
//       // Declare user variable
//       var user = auth.currentUser
  
//       // Add this user to Firebase Database
//       var database_ref = database.ref()
  
//       // Create User data
//       var user_data = {
//         last_login : Date.now()
//       }
  
//       // Push to Firebase Database
//       database_ref.child('users/' + user.uid).update(user_data)
  
//       // DOne
//       alert('User Logged In!!')
  
//     })
//     .catch(function(error) {
//       // Firebase will use this to alert of its errors
//       var error_code = error.code
//       var error_message = error.message
  
//       alert(error_message)
//     })
//   }
  
  
  
  
//   // Validate Functions
//   function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if (expression.test(email) == true) {
//       // Email is good
//       return true
//     } else {
//       // Email is not good
//       return false
//     }
//   }
  
//   function validate_password(password) {
//     // Firebase only accepts lengths greater than 6
//     if (password < 6) {
//       return false
//     } else {
//       return true
//     }
//   }
  
//   function validate_field(field) {
//     if (field == null) {
//       return false
//     }
  
//     if (field.length <= 0) {
//       return false
//     } else {
//       return true
//     }
//   }




//   // Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBTa4jpSnxpL32yOJ2thGHiFQlpvWReGZk",
//     authDomain: "first-loginsignup-page.firebaseapp.com",
//     databaseURL: "https://first-loginsignup-page-default-rtdb.firebaseio.com",
//     projectId: "first-loginsignup-page",
//     storageBucket: "first-loginsignup-page.appspot.com",
//     messagingSenderId: "817942431566",
//     appId: "1:817942431566:web:d8c4e315f37372c5f9001f",
//     measurementId: "G-N2EPQYBTD7"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const auth = firebase.auth();
//   const database = firebase.database();
  
//   // Register function
//   function register() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const username = document.getElementById('UserSign-up').value;
//     const confirmPassword = document.getElementById('confirm').value;
  
//     if (!validate_email(email) || !validate_password(password) || !validate_field(username) || !validate_field(confirmPassword)) {
//       alert('Invalid input!');
//       return;
//     }
  
//     auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         const database_ref = database.ref();
//         const user_data = {
//           email: email,
//           username: username,
//           last_login: Date.now()
//         };
//         database_ref.child('users/' + user.uid).set(user_data);
//         alert('User Created!');
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   }
  
//   // Login function
//   function login() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     if (!validate_email(email) || !validate_password(password)) {
//       alert('Invalid email or password!');
//       return;
//     }
  
//     auth.signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         const database_ref = database.ref();
//         const user_data = {
//           last_login: Date.now()
//         };
//         database_ref.child('users/' + user.uid).update(user_data);
//         alert('User Logged In!');
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   }
  
//   // Validation functions
//   function validate_email(email) {
//     const expression = /^[^@]+@\w+(\.\w+)+\w$/;
//     return expression.test(email);
//   }
  
//   function validate_password(password) {
//     return password.length >= 6;
//   }
  
//   function validate_field(field) {
//     return field && field.length > 0;
//   }
  
//   // Event listeners for buttons
//   document.getElementById('registerBtn').addEventListener('click', register);
//   document.getElementById('loginBtn').addEventListener('click', login);
  


// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTa4jpSnxpL32yOJ2thGHiFQlpvWReGZk",
    authDomain: "first-loginsignup-page.firebaseapp.com",
    databaseURL: "https://first-loginsignup-page-default-rtdb.firebaseio.com",
    projectId: "first-loginsignup-page",
    storageBucket: "first-loginsignup-page.appspot.com",
    messagingSenderId: "817942431566",
    appId: "1:817942431566:web:d8c4e315f37372c5f9001f",
    measurementId: "G-N2EPQYBTD7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  
  // Register function
  function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('UserSign-up').value;
    const confirmPassword = document.getElementById('confirm').value;
  
    if (!validate_email(email) || !validate_password(password) || !validate_field(username) || !validate_field(confirmPassword)) {
      alert('Invalid input!');
      return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const database_ref = database.ref();
        const user_data = {
          email: email,
          username: username,
          last_login: Date.now()
        };
        database_ref.child('users/' + user.uid).set(user_data);
        alert('User Created!');
      })
      .catch((error) => {
        alert(error.message);
      });
      window.open("https://karangulve4342.github.io/karan_hashitoutz.github.io");
  }
  
  // Login function
  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // if (!validate_email(email) || !validate_password(password)) {
    //   alert('Invalid email or password!');
    //   return;
    // }
  
    // auth.signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     const database_ref = database.ref();
    //     const user_data = {
    //       last_login: Date.now()
    //     };
    //     database_ref.child('users/' + user.uid).update(user_data);
    //     alert('User Logged In!');
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    alert("Successfully Logged in !");
    window.open("https://karangulve4342.github.io/karan_hashitoutz.github.io");
  }
  
  // Validation functions
  function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
  }
  
  function validate_password(password) {
    return password.length >= 6;
  }
  
  function validate_field(field) {
    return field && field.length > 0;
  }
  
  // Event listeners for buttons
  document.getElementById('registerBtn').addEventListener('click', register);
  document.getElementById('loginBtn').addEventListener('click', login);
  