const birthDay = document.querySelector('#birthday');
const invalid = document.querySelector('.alert');
const resultText = document.querySelector('#res');
const result = document.querySelector('.res');

const btnClick = document.querySelector('.btn');

btnClick.addEventListener("click", function() {
  
  const currentDate = new Date();
  const birthDayYear = new Date(birthDay.value);
  console.log(birthDayYear.getFullYear());
  if(birthDayYear > currentDate) {
    invalid.style.display = "flex";
    result.style.display = "none";
  }else{
    result.style.display = "block";
    const age = currentDate.getFullYear() - birthDayYear.getFullYear();
    resultText.innerHTML = `${age} years old`;
    invalid.style.display = "none";
    
  }
})