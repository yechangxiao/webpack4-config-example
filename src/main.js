import './main.css'


import codeImg from './code.png'

const img = new Image()

img.src = codeImg

document.body.append(img)

img.addEventListener('click', () => {
  alert('hello world')
})