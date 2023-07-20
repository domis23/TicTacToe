let btns = document.querySelectorAll('button')
let kolejkaH = document.querySelector('#gra')
let xroH = document.querySelectorAll('.xro')
let starts = Math.floor(Math.random() * 10 + 2)
let kolejka
console.log(starts)
if (starts % 2 == 0) {
  kolejka = 1
} else if (starts % 2 == 1) {
  kolejka = 2
}

const rundaa = () => {
  if (kolejka == 1) {
    kolejkaH.innerHTML = 'Ruch X'
  } else if (kolejka == 2) {
    kolejkaH.innerHTML = 'Ruch O'
  }
}
setInterval(rundaa, 100)
const f1 = () => {
  if (kolejka == 1) {
    xroH[0].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[0].innerText = 'O'
    kolejka = 1
  }
  btns[0].disabled = true
}
const f2 = () => {
  if (kolejka == 1) {
    xroH[1].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[1].innerText = 'O'
    kolejka = 1
  }
  btns[1].disabled = true
}
const f3 = () => {
  if (kolejka == 1) {
    xroH[2].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[2].innerText = 'O'
    kolejka = 1
  }
  btns[2].disabled = true
}
const f4 = () => {
  if (kolejka == 1) {
    xroH[3].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[3].innerText = 'O'
    kolejka = 1
  }
  btns[3].disabled = true
}
const f5 = () => {
  if (kolejka == 1) {
    xroH[4].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[4].innerText = 'O'
    kolejka = 1
  }
  btns[4].disabled = true
}
const f6 = () => {
  if (kolejka == 1) {
    xroH[5].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[5].innerText = 'O'
    kolejka = 1
  }
  btns[5].disabled = true
}
const f7 = () => {
  if (kolejka == 1) {
    xroH[6].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[6].innerText = 'O'
    kolejka = 1
  }
  btns[6].disabled = true
}
const f8 = () => {
  if (kolejka == 1) {
    xroH[7].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[7].innerText = 'O'
    kolejka = 1
  }
  btns[7].disabled = true
}
const f9 = () => {
  if (kolejka == 1) {
    xroH[8].innerText = 'X'
    kolejka = 2
  } else if (kolejka == 2) {
    xroH[8].innerText = 'O'
    kolejka = 1
  }
  btns[8].disabled = true
}

const reset = () => {
  location.reload()
}
const resetPol = () => {
  btns[0].innerText = ''
  btns[1].innerText = ''
  btns[2].innerText = ''
  btns[3].innerText = ''
  btns[4].innerText = ''
  btns[5].innerText = ''
  btns[6].innerText = ''
  btns[7].innerText = ''
  btns[8].innerText = ''
}
const winO = () => {
  alert('O wygrały 🥳')
  resetPol()
  reset()
}
const wygranaO = () => {
  if (
    btns[0].innerText == 'O' &&
    btns[1].innerText == 'O' &&
    btns[2].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[3].innerText == 'O' &&
    btns[4].innerText == 'O' &&
    btns[5].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[6].innerText == 'O' &&
    btns[7].innerText == 'O' &&
    btns[8].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[0].innerText == 'O' &&
    btns[3].innerText == 'O' &&
    btns[6].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[1].innerText == 'O' &&
    btns[4].innerText == 'O' &&
    btns[7].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[2].innerText == 'O' &&
    btns[5].innerText == 'O' &&
    btns[8].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[0].innerText == 'O' &&
    btns[4].innerText == 'O' &&
    btns[8].innerText == 'O'
  ) {
    winO()
  } else if (
    btns[2].innerText == 'O' &&
    btns[4].innerText == 'O' &&
    btns[6].innerText == 'O'
  ) {
    winO()
  }
}

const winX = () => {
  alert('X wygrały 🥳')
  resetPol()
  reset()
}
const wygranaX = () => {
  if (
    btns[0].innerText == 'X' &&
    btns[1].innerText == 'X' &&
    btns[2].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[3].innerText == 'X' &&
    btns[4].innerText == 'X' &&
    btns[5].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[6].innerText == 'X' &&
    btns[7].innerText == 'X' &&
    btns[8].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[0].innerText == 'X' &&
    btns[3].innerText == 'X' &&
    btns[6].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[1].innerText == 'X' &&
    btns[4].innerText == 'X' &&
    btns[7].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[2].innerText == 'X' &&
    btns[5].innerText == 'X' &&
    btns[8].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[0].innerText == 'X' &&
    btns[4].innerText == 'X' &&
    btns[8].innerText == 'X'
  ) {
    winX()
  } else if (
    btns[2].innerText == 'X' &&
    btns[4].innerText == 'X' &&
    btns[6].innerText == 'X'
  ) {
    winX()
  }
}

// const remiss = () => {
//   alert('remis')
//   resetPol()
// }
// const remis = () => {
//   if (
//     btns[0].innerText != '' &&
//     btns[1].innerText != '' &&
//     btns[2].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[3].innerText != '' &&
//     btns[4].innerText != '' &&
//     btns[5].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[6].innerText != '' &&
//     btns[7].innerText != '' &&
//     btns[8].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[0].innerText != '' &&
//     btns[3].innerText != '' &&
//     btns[6].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[1].innerText != '' &&
//     btns[4].innerText != '' &&
//     btns[7].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[2].innerText != '' &&
//     btns[5].innerText != '' &&
//     btns[8].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[0].innerText != '' &&
//     btns[4].innerText != '' &&
//     btns[8].innerText != ''
//   ) {
//     remiss()
//   } else if (
//     btns[2].innerText != '' &&
//     btns[4].innerText != '' &&
//     btns[6].innerText != ''
//   ) {
//     remiss()
//   }
// }
//   else if (
//     btns[0].innerText == 'O' &&
//     btns[3].innerText == 'O' &&
//     btns[6].innerText == 'O'
//   ) {
//     winO()
//   } else if (
//     btns[0].innerText == 'O' &&
//     btns[4].innerText == 'O' &&
//     btns[8].innerText == 'O'
//   ) {
//     winO()
//   } else if (
//     btns[6].innerText == 'O' &&
//     btns[2].innerText == 'O' &&
//     btns[4].innerText == 'O'
//   ) {
//     winO()
//   } else if (
//     btns[2].innerText == 'O' &&
//     btns[5].innerText == 'O' &&
//     btns[8].innerText == 'O'
//   ) {
//     winO()
//   }

setInterval(wygranaO, 100)
setInterval(wygranaX, 100)
// setInterval(remiss, 100)

btns[0].addEventListener('click', f1)
btns[1].addEventListener('click', f2)
btns[2].addEventListener('click', f3)
btns[3].addEventListener('click', f4)
btns[4].addEventListener('click', f5)
btns[5].addEventListener('click', f6)
btns[6].addEventListener('click', f7)
btns[7].addEventListener('click', f8)
btns[8].addEventListener('click', f9)
btns[9].addEventListener('click', reset)
