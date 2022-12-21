ScrollReveal().reveal('.container1', { delay: 50 });

const spanNome = document.querySelector('.spanNome')
const spanGenero = document.querySelector('.spanGenero')
const spanAstro = document.querySelector('.spanAstro')
const spanFis = document.querySelector('.spanFis')
const areadequalidade = document.getElementById('areadequalidade')


spanNome.innerHTML = `${Cookies.get('FristName')} ${Cookies.get('SecondName')}`

spanGenero.innerHTML = `${Cookies.get('Gender')}`

spanAstro.innerHTML = `${Cookies.get('TreiningA')}`
spanFis.innerHTML = `${Cookies.get('TreiningF')}`

const resultArray = Cookies.get('Qualities')
const newResultArray = resultArray.split(",")

for (let i = 0; i < newResultArray.length; i++) {
  const el = newResultArray;

}

for (let i = 0; i < newResultArray.length; i++) {
  const element = newResultArray[i];
  areadequalidade.innerHTML +=
    `
  <span>
    ${element}
   </span>
   <hr />
  `
}
