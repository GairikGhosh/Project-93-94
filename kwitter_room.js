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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
