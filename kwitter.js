 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDahVnuOYgb2FAOm8WZ26m42Yh4SvryJ3Y",
  authDomain: "let-s-chat-f7a29.firebaseapp.com",
  databaseURL: "https://let-s-chat-f7a29-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-f7a29",
  storageBucket: "let-s-chat-f7a29.appspot.com",
  messagingSenderId: "319452491953",
  appId: "1:319452491953:web:4439ef442cd4e88385f290"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
 
    user_name = document.getElementById("user_name").value;
   
    localStorage.setItem("user_name", user_name);
   
      window.location = "kwitter_room.html";
  }
   
  
  