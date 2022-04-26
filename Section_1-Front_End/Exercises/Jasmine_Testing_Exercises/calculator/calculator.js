window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      updateMonthly(calculateMonthlyPayment(update()));
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.querySelector('#loan-amount').value = 10000;
  document.querySelector('#loan-years').value = 8;
  document.querySelector('#loan-rate').value = 0.035;
  updateMonthly(calculateMonthlyPayment(update()));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  values = getCurrentUIValues();
  for (const input in values) {
    if (typeof(values[input]) !== "number" || values[input] < 0) {
      alert('Please ensure all inputs are numbers greater than 0.');
      document.querySelector('#monthly-payment').innerText = 'Error';
      throw 'Parameter is not a number greater than 0.'
      return;
    }
  }

  if (values.rate > 1) {
    alert('Please enter yearly rate in decimal format. For example: 3.5% -> 0.035');
    document.querySelector('#monthly-payment').innerText = 'Error';
    throw 'Yearly rate is not in decimal format.';
    return;
  }
  return values;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if (!values) {return;}
  const monthlyPayment = ( values.amount * values.rate / 12 ) / ( 1 - (1 + values.rate / 12) ** -(values.years * 12));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if (!monthly) {return;}
  document.querySelector('#monthly-payment').innerText = `$${monthly}`;
}



