const arr = ['cats', 'hats', 'and']

let sortArrUpperCase = arr.map(function(word){
  return word.charAt(0).toUpperCase() + word.substr(1); // Нахожу 1й символ и делаю заглавным + Удаляю первую букву у основы
})

console.log(sortArrUpperCase.sort()) // просто сортирую.