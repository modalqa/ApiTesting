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

// Any global setup is automatically applied to every test
it ('must open the homepage testing', function () {
  return frisby
    .get('https://testing.modalrakyat.id/')
    .expect('status', 200);
});

it ('must open the funding page', function (){
  return frisby
    .get('https://testing.modalrakyat.id/funding')
    .expect('status', 200);
});

it ('must open the borrow page', function (){
  return frisby
    .get('https://testing.modalrakyat.id/borrow')
    .expect('status', 200);
});

it ('must open the media page', function (){
  return frisby
    .get('https://testing.modalrakyat.id/media')
    .expect('status', 200);
});

it ('must open the jejak kami page', function (){
  return frisby
    .get('https://testing.modalrakyat.id/press-release')
    .expect('status', 200);
});

it ('must open the blog', function (){
  return frisby
    .get('https://testing.modalrakyat.id/blog/')
    .expect('status', 200);
});

it ('must open the about-us page', function (){
  return frisby
    .get('https://testing.modalrakyat.id/about-us')
    .expect('status', 200);
});

it ('must open the tim page', function (){
  return frisby
    .get('https://testing.modalrakyat.id/our-team')
    .expect('status', 200);
});
