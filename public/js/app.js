





//firebase logic
const firebaseConfig = {
    apiKey: "AIzaSyAJ847S3ORYsy2wh8MU3OWpZIy8hrIpuHc",
    authDomain: "project2-8baae.firebaseapp.com",
    databaseURL: "https://project2-8baae.firebaseio.com",
    projectId: "project2-8baae",
    storageBucket: "project2-8baae.appspot.com",
    messagingSenderId: "15413393802",
    appId: "1:15413393802:web:253ac1c4f2ed921f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Get a reference to the database service
var database = firebase.database();
// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
var user = firebase.auth().currentUser;

//signs user into firebase
 $("#submitBtn").on("click", e => {
  e.preventDefault();
  const textEmail = $("#inputUserEmail").val();
  const textPassword = $("#inputPassWord").val();
  
    // console.log(textPassword);
  //  console.log(textEmail);
      //firebase user authentication
      const email = textEmail;
      const password = textPassword;
      const auth = firebase.auth();
       // sign in
       const promise = auth.signInWithEmailAndPassword(email, password);
       promise.catch(e => $("#warning2").text(e.message));
 });

  // adds email to firebase and signs user up to our site
  $("#indexSignUp").on("click", e =>  {
   
    e.preventDefault();
    //firebase user authentication
     const textEmail = $("#inputEmail1").val();
    const textPassword = $("#exampleInputPassword1").val();
    console.log(textEmail)
     const email1 = textEmail;
     const password = textPassword;
     const auth = firebase.auth();
     // sign in
     const promise = auth.createUserWithEmailAndPassword(email1, password);
  
     promise.catch(e => $("#warning").text(e.message))
  
      function workafter() {
    
    
          if(textPassword.length > 7 && textEmail.length > 6){
           firebase.auth().signOut().then(function() {
             window.open("/sign_in", '_self');
           }).catch(function(error) {
             // An error happened.
           });
         
          }
    
     
     };


     firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          workafter();
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });
       
    });
   

    $("#signUpIndex").on("click", e =>  {
        firebase.auth().signOut();
       });

       $("#signInIndex").on("click", e =>  {
        firebase.auth().signOut();
       });

       //signs current user out then sends you to the member sign-in page
 $("#indexSignIn").on("click", function() {
    firebase.auth().signOut();
   
 });

 $("#submitBtn").on("click", function(event) {
    const textEmail = $("#inputUserEmail").val();
    const textPassword = $("#inputPassWord").val();
    // Prevent form from submitting
        event.preventDefault();
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          window.open("/", '_self');
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });
    
  });

  //upcoming shifts expand
  $('[data-open-details]').click(function (e) {
    e.preventDefault();
    $(this).next().toggleClass('is-active');
    $(this).toggleClass('is-active');
  });