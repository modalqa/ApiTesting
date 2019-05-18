/* eslint-disable no-undef */
const frisby = require('frisby');


// Do setup first
frisby.globalSetup({
  request: {
    headers: {
      'Authorization': 'Basic ' + Buffer.from('morak:morak123').toString('base64'),
      'Content-Type': 'application/json',
    }
  }
});

it('must open the homepage', function () {
  // Return the Frisby.js Spec in the 'it()' (just like a promise)
  return frisby.get('https://testing.modalrakyat.id/contact-us?type=bypass_recaptcha')
    .expect('status', 200);


    
});