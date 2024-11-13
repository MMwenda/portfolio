//UNDER CONSTRUCTION 👷🏽🚨

// document.getElementById('contact-form').addEventListener('submit', function(event) {  
//     event.preventDefault();  // Prevent the default form submission  
  
//     // Collect form data  
//     const formData = new FormData(this);  
//     const data = {  
//       name: formData.get('name'),  
//       email: formData.get('email'),  
//       message: formData.get('message')  
//     };  
  
//     // Send data to EmailJS  
//     emailjs.send("service_r94d9m8", "template_ejbm0tl", data, "w06a19l1_uWYcyXOa")  
//       .then((response) => {  
//         console.log('SUCCESS!', response.status, response.text);  
//         document.getElementById('response').innerText = "Message Sent Successfully!";  
//         document.getElementById('contact-form').reset();  // Clear the form  
//       }, (error) => {  
//         console.log('FAILED...', error);  
//         document.getElementById('response').innerText = "Failed to send message. Please try again.";  
//       });  
//   });