// const buttons = {
//   withdraw: document.querySelector('#btn-widthdrow'),
// };

const btnWidthdrow = document.getElementById('btn-widthdrow').addEventListener('click', function () {
  const widthdrowfield = document.getElementById('withdrow-field');
  const withdrowAmmount = parseFloat(widthdrowfield.value);
  //   console.log(withdrowAmmount);
  //
  const widthdrowTotalElement = document.getElementById('withdrow-total');
  const previousWithdrow = parseFloat(widthdrowTotalElement.innerText);
  //   console.log(previousWithdrow);
  //
  const currentWidthrowTotal = withdrowAmmount + previousWithdrow;
  //   console.log(currentWidthrowTotal);
  widthdrowTotalElement.innerText = currentWidthrowTotal;
  //
  widthdrowfield.value = '';
  //
  const balancTotalElemrnt = document.getElementById('balance-total');
  const prevusBalancString = parseFloat(balancTotalElemrnt.innerText);
  //   console.log(prevusBalancString);
  const newBalanceTotal = prevusBalancString - withdrowAmmount;

  console.log(newBalanceTotal);
  balancTotalElemrnt.innerText = newBalanceTotal;
  // const newBalance = prevusBalancString -
});
