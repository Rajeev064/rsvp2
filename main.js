var firebaseConfig = {
    apiKey: "AIzaSyBr6J1htv02gy9yShUanoSYb55GEWjiWmE",
    authDomain: "rsvpdemo064.firebaseapp.com",
    databaseURL: "https://rsvpdemo064.firebaseio.com",
    projectId: "rsvpdemo064",
    storageBucket: "rsvpdemo064.appspot.com",
    messagingSenderId: "469983829460",
    appId: "1:469983829460:web:992f74abe841406133ca41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
  
    // Save message
    saveMessage(name, email, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  function castvote() {
    /*var mySelect = document.getElementById("events"); 
    alert(mySelect.options[mySelect.selectedIndex].value); 
    */var x = document.getElementById("events").value;
   var img = document.getElementById("btn");
   
     var a =document.getElementById("a");
    
   if(x === "MINECRAFT")
    { 
     a.href= 'https://calendar.google.com/event?action=TEMPLATE&tmeid=NTJiM25sOTltODM1M2NjcnEwZHRzMm43NmYgcnMzMTY3MTk2QG0&tmsrc=rs3167196%40gmail.com';
      a.appendchild(img);
    x.appendchild(a);
     
    }
    if(x === "TREASURE HUNT")
    { 
      
     a.href ='https://calendar.google.com/event?action=TEMPLATE&tmeid=MmdvOXYyNGcwdXNjNWk2YTZncjJkdjJvcXEgcnMzMTY3MTk2QG0&tmsrc=rs3167196%40gmail.com';
      a.appendchild(img);
    x.appendchild(a);
    }
    if(x === "MINUTE TO WIN IT")
    { 
      a.href ='https://calendar.google.com/event?action=TEMPLATE&tmeid=Nm9xZmdwcGVmZWhyanZnNHNpcjB0MWFsNTEgcnMzMTY3MTk2QG0&tmsrc=rs3167196%40gmail.com';
    a.appendchild(img);
    x.appendchild(a);
    }
    if(x === "ALL EVENTS")
    { 
      a.href='https://calendar.google.com/event?action=TEMPLATE&tmeid=NDliaTEwZXFrdGlpam00MjlmcDYwYmhhaWUgcnMzMTY3MTk2QG0&tmsrc=rs3167196%40gmail.com';
         a.appendchild(img);
    x.appendchild(a);
    }
}
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  // Save message to firebase
  function saveMessage(name, email, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
    });
  }
