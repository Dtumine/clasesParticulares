// Crear el mapa traductor
let translator = new Map([
    ['hello', 'hola'],
    ['world', 'mundo'],
    ['cat', 'gato'],   
    ['dog', 'perro'], 
    ['house', 'casa'],  
    ['food', 'comida']
  ]);
    
  // Función para traducir una palabra utilizando el mapa
  function translate(word) {
    return translator.get(word.toLowerCase()) || null;
  }
  
  // Función para traducir una frase
  function translatePhrase() {
    console.log(translator)
    const input = document.getElementById('input-phrase').value;
    const words = input.split(' ');
    let translation = '';
    let missingWords = [];
  
    words.forEach(word => {
      const translatedWord = translate(word);
      if (translatedWord) {
        translation += translatedWord + ' ';
      } else {
        translation += `[${word}] `;
        missingWords.push(word);
      }
    });
  
    document.getElementById('translation-output').textContent = translation.trim();
  
    if (missingWords.length > 0) {
      showAddWordForm(missingWords[0]);      
    }
  }
  
  // Función para mostrar el formulario de añadir nueva palabra
  function showAddWordForm(word) {
    document.getElementById('new-english-word').value = word;
    document.getElementById('add-word-form').style.display = 'block';
  }
  
  // Función para añadir una nueva palabra al mapa
  function addNewWord() {
    const englishWord = document.getElementById('new-english-word').value.toLowerCase();
    const spanishWord = document.getElementById('new-spanish-word').value.toLowerCase();
  
    if (englishWord && spanishWord) {
      translator.set(englishWord, spanishWord);
      document.getElementById('add-word-form').style.display = 'none';
      document.getElementById('new-english-word').value = '';
      document.getElementById('new-spanish-word').value = '';
      alert(`Añadido: ${englishWord} -> ${spanishWord}`);
    } else {
      alert('Por favor, llena ambas palabras');
    }
  }
  