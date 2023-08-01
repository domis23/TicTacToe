let btns = document.querySelectorAll('button')
let kolejkaH = document.querySelector('#gra')
let xroH = document.querySelectorAll('.xro')
let starts = Math.floor(Math.random() * 10 + 2)
let ruchy = 0
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
  ruchy++
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
  ruchy++
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
  ruchy++
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
  ruchy++
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
  ruchy++
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
  ruchy++
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
  ruchy++
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
  ruchy++
}

const reset = () => {
  location.reload()
}
const resetPol = () => {
  xroH[0].innerText = ''
  xroH[1].innerText = ''
  xroH[2].innerText = ''
  xroH[3].innerText = ''
  xroH[4].innerText = ''
  xroH[5].innerText = ''
  xroH[6].innerText = ''
  xroH[7].innerText = ''
  xroH[8].innerText = ''
}
const winO = () => {
  alert('O wygrały 🥳')
  resetPol()
  reset()
}

const winX = () => {
  alert('X wygrały 🥳')
  resetPol()
  reset()
}
const wygrana = () => {
  if (
    xroH[0].innerText == 'X' &&
    xroH[1].innerText == 'X' &&
    xroH[2].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[3].innerText == 'X' &&
    xroH[4].innerText == 'X' &&
    xroH[5].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[6].innerText == 'X' &&
    xroH[7].innerText == 'X' &&
    xroH[8].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[0].innerText == 'X' &&
    xroH[3].innerText == 'X' &&
    xroH[6].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[1].innerText == 'X' &&
    xroH[4].innerText == 'X' &&
    xroH[7].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[2].innerText == 'X' &&
    xroH[5].innerText == 'X' &&
    xroH[8].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[0].innerText == 'X' &&
    xroH[4].innerText == 'X' &&
    xroH[8].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[2].innerText == 'X' &&
    xroH[4].innerText == 'X' &&
    xroH[6].innerText == 'X'
  ) {
    winX()
  } else if (
    xroH[0].innerText == 'O' &&
    xroH[1].innerText == 'O' &&
    xroH[2].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[3].innerText == 'O' &&
    xroH[4].innerText == 'O' &&
    xroH[5].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[6].innerText == 'O' &&
    xroH[7].innerText == 'O' &&
    xroH[8].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[0].innerText == 'O' &&
    xroH[3].innerText == 'O' &&
    xroH[6].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[1].innerText == 'O' &&
    xroH[4].innerText == 'O' &&
    xroH[7].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[2].innerText == 'O' &&
    xroH[5].innerText == 'O' &&
    xroH[8].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[0].innerText == 'O' &&
    xroH[4].innerText == 'O' &&
    xroH[8].innerText == 'O'
  ) {
    winO()
  } else if (
    xroH[2].innerText == 'O' &&
    xroH[4].innerText == 'O' &&
    xroH[6].innerText == 'O'
  ) {
    winO()
  }
}
const remis = () => {
  if (ruchy == 8) {
    alert('remis')
    resetPol()
    reset()
  }
}

setInterval(wygrana, 100)
setInterval(remis, 100)

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
