//1
const firstButton = document.querySelector("button");
const buttontext = document.querySelector("p");
firstButton.textContent = buttontext.textContent
//2
const firstImg = document.querySelector('img');
firstImg.setAttribute("src", "https://yasensvit.ua/uploads/recipes/prev/632c48d4762e9.jpg");
firstImg.style.height= "100px";
//3
const firstLink = document.querySelector("a");
firstLink.setAttribute("href", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3zJVLz26fqc4dDylU2Y3RW-RCjeg1qhVDg&s");
const linkImg = document.querySelector("cake");
linkImg.style.height = "100px"
linkImg.setAttribute("alt", "торт2");
//4
const list = document.querySelector("ul");
const firstLi = list.firstChild;
firstLi.textContent = "перший елемент"

