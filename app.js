// Usermane
const fristName = document.getElementById('inputName1')
const secondName = document.getElementById('inputName2')

// generos
const genderM = document.getElementById('genderM')
const genderF = document.getElementById('genderF')

// Outro gênero
const outherGender = document.getElementById('outherGender')
const chosenGender = document.getElementById('chosenGender')
const inputNameGender = document.getElementById('inputNameGender')

//checkbox treinos
const checkA1 = document.getElementById('treinamentoA1')
const checkF1 = document.getElementById('treinamentoF1')
const checkA2 = document.getElementById('treinamentoA2')
const checkF2 = document.getElementById('treinamentoF2')

//checkbox qualidades
const checkP = document.getElementById('checkP')
const checkR = document.getElementById('checkR')
const checkNVF = document.getElementById('checkNVF')
const checkNTM = document.getElementById('checkNTM')
const checkSW = document.getElementById('checkSW')

// Botão de Enviar
const sendButton = document.querySelector('.send')

//id spans do modal
const modalSpanName1 = document.getElementById('spanName1')
const modalSpanName2 = document.getElementById('spanName2')
const modalSpanGen = document.getElementById('spanGen')
const modalSpanT1 = document.getElementById('spanT1')
const modalSpanT2 = document.getElementById('spanT2')
const checkboxSpan = document.getElementById('checkboxSpan')

// função de escolher genero
function Gender(el) {
  switch (el) {
    case genderM:
      if (genderM.checked) { chosenGender.classList.add('d-none') }
      break
    case genderF:
      if (genderF.checked) { chosenGender.classList.add('d-none') }
      break
    case outherGender:
      if (outherGender.checked) { chosenGender.classList.remove('d-none') }
      break
    default:
      console.error("Invalid Option!")
  }
}
genderM.addEventListener("click", function () { Gender(genderM) })
genderF.addEventListener("click", function () { Gender(genderF) })
outherGender.addEventListener("click", function () { Gender(outherGender) })

// função para o level dos treinos
function TrainingLevel(el) {
  switch (el) {
    case checkA1:
      if (checkA1.checked) { checkA2.checked = false } else { checkA1.checked = true }
      break
    case checkF1:
      if (checkF1.checked) { checkF2.checked = false } else { checkF1.checked = true }
      break
    case checkA2:
      if (checkA2.checked) { checkA1.checked = false } else { checkA2.checked = true }
      break
    case checkF2:
      if (checkF2.checked) { checkF1.checked = false } else { checkF2.checked = true }
      break
    default:
      console.error("Invalid Option!")
  }
}
checkA1.addEventListener("click", function () { TrainingLevel(checkA1) })
checkF1.addEventListener("click", function () { TrainingLevel(checkF1) })
checkA2.addEventListener("click", function () { TrainingLevel(checkA2) })
checkF2.addEventListener("click", function () { TrainingLevel(checkF2) })

//função para pegar os valores das qualidades
let listArray = []
let checkboxes = [checkP, checkR, checkNVF, checkNTM, checkSW]

for (let checkbox of checkboxes) {
  if (listArray.length == 0) {
    checkboxSpan.innerHTML = ' Não possue nenhuma qualidade.'
  }
  checkbox.addEventListener('click', function () {
    if (this.checked == true) {
      listArray.push(this.value)
      checkboxSpan.innerHTML = listArray.join(' / ')
    } else {
      listArray = listArray.filter(e => e !== this.value)
      checkboxSpan.innerHTML = listArray.join(' / ')
    }
  })
}

//função para renderizar no modal
function ModalRender() {
  //nome
  modalSpanName1.innerHTML = ` ${fristName.value}`
  modalSpanName2.innerHTML = ` ${secondName.value}`
  //gênero
  if (genderM.checked) {
    modalSpanGen.innerHTML = ` ${genderM.value}`
  } else if (genderF.checked) {
    modalSpanGen.innerHTML = ` ${genderF.value}`
  } else if (outherGender.checked) {
    modalSpanGen.innerHTML = ` ${inputNameGender.value}`
  } else {
    modalSpanGen.innerHTML = ` Indefinido, defina seu gênero.`
  }
  //treinamento de astronauta
  if (checkA1.checked) {
    modalSpanT1.innerHTML = ` ${checkA1.value}`
  } else if (checkA2.checked) {
    modalSpanT1.innerHTML =  `${checkA2.value}`
  } else {
    modalSpanT1.innerHTML = ` Não possue treinamento de astronauta.`
  }
  // treinamento fisico
  if (checkF1.checked) {
    modalSpanT2.innerHTML = `${checkF1.value}`
  } else if (checkF2.checked) {
    modalSpanT2.innerHTML = `${checkF2.value}`
  } else {
    modalSpanT2.innerHTML = `Não possue treinamento físico.`
  }
}

sendButton.addEventListener("click", function () { ModalRender() })