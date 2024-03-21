document.getElementById('time').innerHTML = new Date().toLocaleTimeString();

function lightbule() {
  document.body.style.backgroundColor = 'lightblue';
}
function pink() {
  document.body.style.backgroundColor = 'pink';
}
function brwon() {
  document.body.style.backgroundColor = 'brown';
}

function showcat() {
  document.getElementById('fig').src = 'cat.jpg';
  document.getElementById('desc').innerHTML =
    '고양이는 귀엽습니다 그래서 넣었습니다';
}

function showdog() {
  document.getElementById('fig').src = 'dog.jpg';
  document.getElementById('desc').innerHTML =
    '<b>강아지</b>도 그냥 귀여워서 넣었습니다';
}

function showpig() {
  document.getElementById('fig').src = 'pig.jpg';
  document.getElementById('desc').innerHTML =
    '<b>돼지</b>도 귀여울 수 있습니다';
}

function showKCW() {
  document.getElementById('fig').src = 'KCW.jpg';
  document.getElementById('desc').innerHTML = '좋다....';
}
function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}

function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'yhs3748' && password === '92113748') {
    alert('환영합니다');
    return true;
  } else {
    alert('아이디와 비밀번호를 다시 확인해주세요');
    return false;
  }
}
