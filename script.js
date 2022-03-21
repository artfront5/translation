const input = document.querySelector('input')// доступ к инпуту (это не класс, поэтому без точки)
const button = document.querySelector('button') // доступ к кнопке

const box1 = document.querySelector('.box1') 
const box2 = document.querySelector('.box2')
const MAX_TEXT_LENGTH = 10
const snackbar = document.querySelector('#snackbar')


function showBox (box, isTranslit) {
  //console.log('box', !!isTranslit)
  const div = document.createElement('div')
  box.appendChild(div)
  let text = input.value
  text = isTranslit ? translit(text) : text
  const longText = text
  
  text = text.length > MAX_TEXT_LENGTH ? text.substring(0, MAX_TEXT_LENGTH) + '...' : text
  div.textContent = text
  div.addEventListener('mouseover', e => {
    snackbar.className = 'show'
    snackbar.textContent = longText
    setTimeout(() => {
      snackbar.classList.remove('show')
    }, 3000)
  })
}


function showText (event) {
  console.log(input.value)
  showBox(box1)
  showBox(box2,true)
  input.value = ''
}

function translit (value) {
  return value.split('').map(ch => {
    switch (ch) {
      case  'а': return 'a'; 
    case 'б': return 'b'; 
    case 'в': return 'v';
    case 'г': return 'g';
    case 'д': return 'd';
    case 'е': return 'e';
    case 'ё': return 'yo';
    case 'ж': return 'zh';
    case 'з': return 'z';
    case 'и': return 'i';
    case 'й': return 'j';
    case 'к': return 'k';
    case 'л': return 'l';
    case 'м': return 'm';
    case 'н': return 'n';
    case 'о': return 'o';
    case 'п': return 'p';
    case 'р': return 'r';
    case 'с': return 's';
    case 'т': return 't';
    case 'у': return 'u';
    case 'ф': return 'f';
    case 'х': return 'h';
    case 'ц': return 'c';
    case 'ч': return 'ch';
    case 'ш': return 'w';
    case 'щ': return 'sh';
    case 'ъ': return ".";
    case 'ы': return 'y';
    case 'ь': return ".";
    case 'э': return 'e';
    case 'ю': return 'yu';
    case 'я': return 'ya';
    case ' ': return' ';

    case 'А': return 'A';
    case 'Б': return'B';
    case 'В': return 'V';
    case 'Г': return 'G';
    case 'Д': return 'D';
    case 'Е': return 'E';
    case 'Ё': return 'E';
    case 'Ж': return 'Zh';
    case 'З': return 'Z';
    case 'И': return 'I';
    case 'Й': return 'Y';
    case 'К': return 'K';
    case 'Л': return 'L';
    case 'М': return 'M';
    case 'Н': return 'N';
    case 'О': return 'O';
    case 'П': return 'P';
    case 'Р': return 'R';
    case 'С': return 'S';
    case 'Т': return 'T';
    case 'У': return 'U';
    case 'Ф': return 'F';
    case 'Х': return 'H';
    case 'Ц': return 'C';
    case 'Ч': return 'Ch';
    case 'Ш': return 'Sh';
    case 'Щ': return 'Sch';
    case '.': return '.';
    case 'Ы': return 'Y';
    case 'Ъ': return '.';
    case 'Э': return 'E';
    case 'Ю': return 'Yu';
    case 'Я': return 'Ya';

    
      default: 
      return ch
    }
  }).join('')
}


button.addEventListener('click', showText)
