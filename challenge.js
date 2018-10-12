let count = document.getElementById('counter')
let minus = document.getElementById('-')
let plus = document.getElementById('+')
let heartGetById = document.getElementById('<3')
let likes = document.querySelector('.likes')
let pause = document.getElementById('pause')
let comment = document.querySelector('.comments')
let commentForm = document.getElementById('comment-form')
const heartHash = {}
let myVar = setInterval(myTimer, 1000)
let timer = 0
let hearts = 0
let counting = true

function myTimer() {
  if (counting){
  timer += 1
  parseInt(count.innerText = timer )}
}

function minusOne(){
  timer -= 1
  parseInt(count.innerText = timer )
}

function heart() {
  let node = document.createElement('li')
  if (heartHash[timer]) {
    heartHash[timer] = heartHash[timer] += 1

    let existingNode = document.getElementById(timer)
    existingNode.innerText = `${timer} has been liked ${heartHash[timer]} times`

  } else {
    heartHash[timer] = 1

    let node = document.createElement('li')
    node.id = timer
    node.innerText = `${timer} has been liked ${heartHash[timer]} times`
    likes.appendChild(node)

  }
}

function stop() {
  if (counting) {
      counting = false
      setTimeout(myTimer, 1000)
      minus.disabled = true
      plus.disabled = true
      heartGetById.disabled = true
      pause.innerText = "resume"
  } else {
    counting = true
    minus.disabled = false
    plus.disabled = false
    heartGetById.disabled = false
    pause.innerText = "pause"
  }
}

function submitComment(userInputString) {
  let nodeComment = document.createElement('p')
  nodeComment.innerText = userInputString
  comment.appendChild(nodeComment)
}

minus.addEventListener('click', function () {
  minusOne()
})

plus.addEventListener('click', function () {
  myTimer()
})

heartGetById.addEventListener('click', function () {
  heart()
})

pause.addEventListener('click', function () {
  stop()
})

commentForm.addEventListener('submit', function (event) {
  event.preventDefault() //stop form from POSTING
  let userInputField = document.querySelector('input')
  let userInputString = userInputField.value
  submitComment(userInputString)
  userInputField.value = ""
})
