let selected = document.querySelector('.selected')
let cert = document.getElementById('certification')
let verify = document.getElementById('verify')
let cert_found = document.getElementById('cert__found')
function transformx(i){
  selected.style.left = selected.style.left === '50%' ? '' :'50%'
  if(i===1){
    verify.classList.add('hidden')
    cert.classList.remove('hidden')
  }
  if(i===2){
    verify.classList.remove('hidden')
    cert.classList.add('hidden')
    cert_found.classList.add('hidden')
  }
}
let submit = document.getElementById('submit')
let link_downloadable = document.getElementById('link__downloadable')
submit.addEventListener('click',()=>{
  if(/* Nếu tìm thấy certificate thì hiện link download và image */1){ // làm backend sửa dòng này
    cert_found.classList.remove('hidden')
    link_downloadable.innerHTML = "Here's the link"
  }
})
let verify_button = document.getElementById('verify__button')
let checked__wrong = document.querySelector('.checked__wrong')
let checked__right = document.querySelector('.checked__right')
let check = 1 // sửa dòng này
verify_button.addEventListener('click',()=>{
  if(/* Nếu verify thành công thì hiện dấu tick v xanh */check === 1){
    checked__right.classList.remove('hidden')
  }
  else if(/* Nếu verify không thành công thì hiện dấu tick x đỏ */check === 2){
    checked__wrong.classList.remove('hidden')
  }
})
let img = document.querySelector('.verify__left__uploadbox__image')
let myFile = document.getElementById('myFile')
let text = document.querySelector('.verify__left__uploadbox__text')
myFile.onchange = (e)=>{
  const [file] = myFile.files
  if(file){
    img.src = URL.createObjectURL(file)
    img.classList.remove('hidden')
    myFile.classList.add('hidden')
    text.classList.add('hidden')
  }
}