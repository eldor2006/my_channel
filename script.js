const phrases = [
    "Dasturchilar uchun eng foydali kanal!",
    "Har kuni yangi VS Code lifehacklar!",
    "O‘rgan, Ulash, Ilhomlan!",
  ];
  let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;
  const typingElement = document.querySelector(".typing");
  
  function loop() {
    isEnd = false;
    typingElement.innerHTML = currentPhrase.join('');
  
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        typingElement.innerHTML = currentPhrase.join('');
      }
  
      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        typingElement.innerHTML = currentPhrase.join('');
      }
  
      if (j == phrases[i].length) {
        isEnd = true;
        isDeleting = true;
        setTimeout(loop, 1500);
        return;
      }
  
      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i >= phrases.length) i = 0;
      }
    }
    const typingSpeed = isEnd ? 1000 : isDeleting ? 50 : 100;
    setTimeout(loop, typingSpeed);
  }
  
  loop();
  