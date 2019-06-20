//Page number variable, data
let pageNumber = 0

//content for the pages
const pages = [
  {copy:"a Brooklyn-based graphic designer", background:"#edc7a9", circle:"#3e78ed"},
  {copy:"Kanye West's biggest fan",background:"#a1fffe", circle:"#e34a47"},
  {copy:"looking for a job at the start of October",background:"#d3c7f3", circle:"#f7fe00"},
  {copy:`letting you <a href="pdf.pdf">download her PDF</a>`,background:"#faffb8", circle:"#b472e6"}
]

// picking the relevant tag
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector ('img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// Next function which results in increase of page numbers
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  updateSection()
}

// Random function which results in a random number of page

const random = function (){
  pageNumber = Math.floor(Math.random () * pages.length)
  updateSection()
}
// Outfut for the update of the section
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// Previous function which results in decrease of page numbers
const previous = function() {
  pageNumber = pageNumber - 1
   
  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }
   updateSection()
}

//Click event for the nextTag
nextTag.addEventListener('click', function() {
  next()
})

//Click event for the previousTag
previousTag.addEventListener('click', function() {
  previous()
})

//Click event for the randomTag
randomTag.addEventListener('click', function() {
  random()
})

//when a person presses a key check for left or right and do accordingly
document.addEventListener('keyup', function (event){
console.log(event)
//if the key being pressed is ArrowRight 
  
  if (event.key == "ArrowRight"){
    next()    
      }
  //if the key being pressed is Arrowleft 
  if (event.key == "ArrowLeft"){
    next()    
      }
  
})

