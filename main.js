// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelectorAll(".like-glyph")

heart.forEach(element => element.addEventListener("click", function() {
  mimicServerCall()
    .then(data => {
      if(element.innerText === EMPTY_HEART) {
        element.innerText = FULL_HEART
        element.className = "activated-heart"
      } else {
        element.innerText = EMPTY_HEART
        console.log(element.innerText)
        element.className = "like-glyph"
      }
    })
    .catch(error => {
      const errorMsg= document.querySelector(".hidden");
      errorMsg.className = ''
      setTimeout(() => {
        errorMsg.className = "hidden"
      }, 3000)
      console.log(error.message)
  })}
))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
