const btnDeposit = document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositField = document.getElementById('deposit-field');
  const newdepositAmmount = parseFloat(depositField.value);
  // console.log(newdepositAmmount);
  const depositElement = document.getElementById('deposit-total');
  const prevusdepositTotal = parseFloat(depositElement.innerText);
  const currentDepositTotal = prevusdepositTotal + newdepositAmmount;
  depositElement.innerText = currentDepositTotal;
  //
  const totalBalanceElement = document.getElementById('balance-total');
  const totalBalacne = parseFloat(totalBalanceElement.innerText);
  const alBallance = totalBalacne + newdepositAmmount;
  totalBalanceElement.innerText = alBallance;
  depositField.value = '';
});
