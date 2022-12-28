const button = document.getElementById('btn').addEventListener('click', function () {
  const emailFild = document.getElementById('email');
  const email = emailFild.value;
  const getPassword = document.getElementById('password');
  const password = getPassword.value;
  if (email === 'sontan@bap.com' && password === '1234') {
    window.location.href = 'account.html';
  } else {
    alert(' tui tor password vula gasos !! toke ami tejjo shontan korlam');
  }
});
