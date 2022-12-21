//Cookie names
sendButton.addEventListener("click", function () {
  Cookies.set('FristName', fristName.value, { expires: 7 })
})
sendButton.addEventListener("click", function () {
  Cookies.set('SecondName', secondName.value, { expires: 7 })
})

//Cookie Gender
sendButton.addEventListener("click", function () {
  Cookies.set('Gender', genderChosen, { expires: 7 })
})

//Cookie Treining
sendButton.addEventListener("click", function () {
  Cookies.set('TreiningA', treiningA, { expires: 7 })
})
sendButton.addEventListener("click", function () {
  Cookies.set('TreiningF', treiningF, { expires: 7 })
})

//Cookie qualidades
sendButton.addEventListener("click", function () {
  Cookies.set('Qualities', listArray, { expires: 7 })
})

