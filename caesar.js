//PART 2:

//Exercise 2.1: Complete the Encryption

//encrypt function

function caesarEncrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= "A" && char <= "Z") {
      let position = char.charCodeAt(0) - 65;
      let newPosition = (position + shift) % 26;
      result += String.fromCharCode(newPosition + 65);
    } else if (char >= "a" && char <= "z") {
      let position = char.charCodeAt(0) - 97;
      let newPosition = (position + shift) % 26;
      result += String.fromCharCode(newPosition + 97);
    } else {
      result += char;
    }
  }
  return result;
}

console.log(caesarEncrypt("jaques bavurhe", 5));


//Exercise 2.2: Write Decryption

//decrypt function

function caesarDecrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= "A" && char <= "Z") {
      let position = char.charCodeAt(0) - 65;
      let newPosition = (position - shift + 26) % 26;
      result += String.fromCharCode(newPosition + 65);
    } else if (char >= "a" && char <= "z") {
      let position = char.charCodeAt(0) - 97;
      let newPosition = (position - shift + 26) % 26;
      result += String.fromCharCode(newPosition + 97);
    } else {
      result += char;
    }
  }
  return result;
}


console.log(caesarDecrypt("ofvzjx gfazwmj", 5));
