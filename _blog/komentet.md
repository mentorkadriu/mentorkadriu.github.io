---
title: 'Javascript - Komentet'
excerpt: 'Hello'
coverImage: '/assets/blog/komentet/komentet.png'
date: '2022-07-01T07:28:34.481Z'
author:
  name: Mentor Kadriu
  picture: ''
ogImage:
  url: '/assets/blog/komentet/komentet.png'
tags: ['mesim', 'komentet', 'javascript']
---

JavaScript mbështetet dy stile (lloje) komentesh:[^1][^2]
- Çdo tekst midis një `//` dhe fundi i një rreshti trajtohet si koment dhe injorohet nga JavaScript.
```js
// This is a single-line comment.
const name = "John" // Returns string John
```
- Çdo tekst midis karaktereve `/*` dhe `*/` trajtohet gjithashtu si koment; këto komente mund të
  përfshijnë disa rreshta, por nuk duhet të jenë brenda njeri-tjetrit.
```javascript
/*
A function that adds two 
numbers together and 
returns the sum
*/
function add(num1, num2) {
    return num1 + num2;
}
// Example
console.log(sum(5,5)); // 10
```

[^1]: JavaScript: The Definitive Guide, 61
[^2]: [https://eloquentjavascript.net/](https://eloquentjavascript.net/02_program_structure.html#h_/OBuIOX390)
