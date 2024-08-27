let inputEmail;
let btnSubmit;
let Home;

function setup() {
  
   createCanvas(1920,1080); // We don't need a canvas for this
  fill('#9973A0'); // Or use fill(255, 0, 0) for the red color
  Home = createButton('HOME');
  Home.position(0,10)
  Home.style('background-color','#AEA1B1');
  Home.style('text-color','#AEA1B1');

  
  rect(0, 50, 1920, 800);  
  // Select the form elements from the HTML
  inputEmail = select('input[name="user_email"]');
  btnSubmit = select('input[type="submit"]');

  // Position and style the Email input field
  inputEmail.position(100, 100);
  inputEmail.style('width', '300px');
  inputEmail.style('padding', '10px');
  inputEmail.style('font-size', '16px');
  inputEmail.style('border', '2px solid #ccc');
  inputEmail.style('border-radius', '24px');
    inputEmail.attribute('placeholder', 'Email us');


  // Position and style the Submit button
  btnSubmit.position(300, 95);
  btnSubmit.style('width', '200px');
    btnSubmit.style('height', '50px');

  btnSubmit.style('padding', '12px');
  btnSubmit.style('font-size', '18px');
  btnSubmit.style('background-color', '#9F44AF');
  btnSubmit.style('color', 'white');
  btnSubmit.style('border', 'none');
  btnSubmit.style('border-radius', '24px');
  btnSubmit.style('cursor', 'pointer');

  // Add hover effect to the Submit button
  btnSubmit.mouseOver(() => {
    btnSubmit.style('background-color', '#691877');
  });
  
  // btnSubmit.mouseOut(() => {
  //   btnSubmit.style('background-color', '#470F50');
  // });

  
  
  // Initialize EmailJS with your Public Key
  emailjs.init('k7XGrji0T-chGcwuA'); // Your Public Key

  // Event listener for the contact form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Send the form data via EmailJS
      emailjs.sendForm('service_fb5e5qr', 'template_s6vp5lz', this)
          .then(() => {
              console.log('SUCCESS!');
              alert('Your message has been successfully sent!');
          }, (error) => {
              console.log('FAILED...', error);
              alert('Failed to send your message.');
          });
  });
}
