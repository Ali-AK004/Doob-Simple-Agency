document.querySelector('#menuBtn').addEventListener('click', function () {
  document.querySelector('nav ul').classList.toggle('hidden');
});

let msg = document.querySelector('[name="Message"]');
let charCount = document.querySelector('#charCount span');
msg.addEventListener('input', function () {
  let char = msg.value.length;
  charCount.textContent = char;
});

let yearHolder = document.querySelector('#year');
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
yearHolder.textContent = currentYear;
