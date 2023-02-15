document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    addList(e.target.newtaskdescription.vaule)
    form.reset()
  })


});

function addList(newtaskdescription){
let li = document.createElement('li')
let btn = document.createElement('button')
btn.addEventListener('click',handleDelete)
btn.textContent = 'x'
li.textContent = ` ${newtaskdescription}`
li.appendChild(btn)
console.log(li)
document.querySelector('#task').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}