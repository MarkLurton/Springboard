
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr) {
  let newDelBtn = document.createElement('td');
  newDelBtn.innerText = 'X';

  newDelBtn.addEventListener('click', function(event) {
    newDelBtn.parentElement.remove();
    if (event.target.parentElement.className === "server") {
      delete allServers[event.target.parentElement.id];

      updateServerTable();
    } else {
      delete allPayments[event.target.parentElement.id];

      updateSummary();
      updateServerTable();
    }

  })

  newDelBtn.className = 'deleteBtn'

  tr.append(newDelBtn);
}
