
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');
  if (height == '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height: ${height}`;
  } else if (weight == '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    results.innerHTML = `<span>The BMI ratio is: ${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML += `<span>You are underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.6) {
      results.innerHTML += `<span>You belong to the normal category</span>`;
    } else {
      results.innerHTML += `<span>You are overweight</span>`;
    }
  }
});