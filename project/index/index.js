let username = document.querySelector('#username-input');

let issueCode = document.querySelector('#issue-code-input');

let enterCode = document.querySelector('#enter-code-input');

let buttonIssueCode = document.querySelector('#issue-code-button');

let buttonEnterCode = document.querySelector('#enter-code-button');

buttonIssueCode.addEventListener('click', function() {
    let input = issueCode.value;
    let code = Math.floor(Math.random() * 99999999) + 10000000;
    while (mapCode(input, code) == false) {
      // repeat
    }
    // display code
    let codeText = document.createElement('p');
    codeText.textContent = code;
    buttonIssueCode.after(codeText);
});

buttonEnterCode.addEventListener('click', function() {
  let name = username.value;
  let input = enterCode.value;
  if (name == '') {
    // choose a random username
    name = Math.floor(Math.random() * 999999) + 100000;
  }
  if (String(input).length != 8) {
    // wrong code
  } else {
    connectToChatroom(input, name);
  }
});

function mapCode(input, code) {
  if (input in codeMap) {
    return false;
  } else {
    console.log(code);
    codeMap[code] = {};
    codeMap[code]['time'] = input;
    codeMap[code]['chat'] = [];
    return true;
  }
}

function connectToChatroom(input, name) {
    chatroomCode = input;
    chatroomUsername = name;
  window.open("../chatroom/chatroom.html", "_self");
}
