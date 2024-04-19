// select the result div from dom
let resultDiv = document.querySelector('.result')
// select the result spans
let resultspans = document.querySelectorAll('.result')
// select the inputs
let inputArr = document.querySelectorAll('input')
// select the labels
let label = document.querySelectorAll('label')
// select submit button
let submitBtn = document.querySelector('button')
// select form divs
let formDivs = document.querySelectorAll('form div')
// select all the spans
let spans = document.querySelectorAll('.date span')

// clicking on the button
submitBtn.onclick = (a) => {
  // stop button submission
  a.preventDefault()
  // ////////////////////////////////////////
  function calculateAge (birthdate) {
    const now = new Date()
    const birth = new Date(birthdate)
    let years = now.getFullYear() - birth.getFullYear()
    let months = now.getMonth() - birth.getMonth()
    let days = now.getDate() - birth.getDate()
    // ////////////////////////////////////////
    if (months < 0 || (months === 0 && days < 0)) {
      years--
      months += 12
    }
    // ////////////////////////////////////////
    if (days < 0) {
      birth.setMonth(birth.getMonth() + months + 1)
      days += new Date(birth.getFullYear(), birth.getMonth(), 0).getDate()
    }
    // ////////////////////////////////////////
    if (
      (inputArr[0].value === '' ||
      inputArr[1].value === '' ||
      inputArr[2].value === '') ||
      (
      // make a condition that the date is not valid
      Number(inputArr[0].value) > 31 ||
      Number(inputArr[1].value) > 12 ||
      Number(inputArr[2].value) > now.getFullYear()
      )
    ) {
      //   change the border color of the inputs
      inputArr.forEach((e) => {
        e.style.borderColor = 'red'
      })
      // append the error text in the span
      spans.forEach((e) => {
        e.innerHTML = 'The field is required'
      })
      // change the color of the labels
      label.forEach((e) => {
        e.className = 'red'
      })
    }else {
      inputArr.forEach((e) => {
        e.style.borderColor = 'gray'
      })
      // remove the color of the labels
      label.forEach((e) => {
        e.classList.remove('red')
      })
      spans.forEach((e) => {
        e.innerHTML = ''
      })
      let result = [days, months, years]
      for (let i = 0; i < resultspans.length; i++) {
        resultspans[i].textContent = result[i]
      }
    }
    return { years, months, days}
  }
  // Example usage:
  const birthdate = `${inputArr[1].value}-${inputArr[0].value}-${inputArr[2].value}`
  calculateAge(birthdate)
}
