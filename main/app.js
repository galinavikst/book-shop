let booksData = [
  {
    author: "Douglas Crockford",
    imageLink: "./media/img/JavaScript-The-Good-Parts.jpg",
    title: "JavaScript: The Good Parts",
    price: 30,
    description:
      "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
  },
  {
    author: "David Herman",
    imageLink: "./media/img/Effective-JavaScript68-Specific-Ways.jpg",
    title:
      "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    price: 22,
    description:
      "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
  },
  {
    author: "David Flanagan",
    imageLink: "./media/img/JavaScript-The-Definitive-Guide.jpg",
    title: "JavaScript: The Definitive Guide",
    price: 40,
    description:
      "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
  },
  {
    author: " Eric Elliott",
    imageLink: "./media/img/Programming-JavaScript-Applications.jpg",
    title: "Programming JavaScript Applications",
    price: 19,
    description:
      "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
  },
  {
    author: "Addy Osmani",
    imageLink: "./media/img/Learning-JavaScript-Design-Patterns.jpg",
    title: "Learning JavaScript Design Patterns",
    price: 32,
    description:
      "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
  },
  {
    author: "Boris Cherny",
    imageLink: "./media/img/Programming-TypeScript.jpg",
    title: "Programming TypeScript",
    price: 28,
    description:
      "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
  },
  {
    author: "Alex Banks, Eve Porcello",
    imageLink: "./media/img/Learning-React-2nd-Edition.jpg",
    title: "Learning React, 2nd Edition",
    price: 25,
    description:
      "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
  },
  {
    author: "Bradley Meck Alex Young and Mike Cantelon",
    imageLink: "./media/img/Node.js-in-Action.jpg",
    title: "Node.js in Action",
    price: 38,
    description:
      "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
  },
  {
    author: "Kyle Simpson",
    imageLink: "./media/img/You-Don't-Know-JS-Yet-Get-Started.jpg",
    title: "You Don't Know JS Yet: Get Started",
    price: 26,
    description:
      "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
  },
  {
    author: "John Resig and Bear Bibeault",
    imageLink: "./media/img/Secrets-of-the-JavaScript-Ninja.jpg",
    title: "Secrets of the JavaScript Ninja",
    price: 33,
    description:
      "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
  },
];
document.body.className = "page";
let fragment = new DocumentFragment();
let hero = document.createElement("div");
hero.className = "hero";
let h1 = document.createElement("h1");
h1.className = "page-title";
h1.innerHTML = "Book catalog";
let contentBox = document.createElement("div");
contentBox.className = "content-box";
let ul = document.createElement("ul");
ul.className = "book-list";

let bagBox, //bag elements
  bagTitle,
  bagList,
  confirmOrderLink,
  bagItem,
  bagCard,
  deleteBtn,
  total;
bagBox = document.createElement("div");
bagBox.className = "bag-box";
bagTitle = document.createElement("p");
bagTitle.className = "bag-title";
bagTitle.innerHTML = "My bag";
bagList = document.createElement("ul");
bagList.className = "bag-list";
confirmOrderLink = document.createElement("a");
confirmOrderLink.className = "confirm-order-link";
confirmOrderLink.innerHTML = "👉🏻Confirm order";
confirmOrderLink.setAttribute("href", "./order-page/order.html");
total = document.createElement("p");
total.className = "total";
total.style.display = "none";

document.body.append(hero);
hero.append(h1);
contentBox.append(ul);
contentBox.append(bagBox);

bagBox.append(bagTitle);
bagBox.append(bagList);
bagBox.append(total);
bagBox.append(confirmOrderLink);

let bookItem, // book item elements
  imgContainer,
  bookImg,
  bookInfo,
  info,
  bookTitle,
  author,
  price,
  showMoreBtn,
  descriptionBox,
  description,
  closeBtn,
  addBagBtn;

for (let i = 0; i < booksData.length; i++) {
  bookItem = document.createElement("li");
  bookItem.className = "book-item";
  bookItem.setAttribute("draggable", "true");
  bookItem.setAttribute("id", booksData[i].title);
  bookItem.dataset.title = booksData[i].title;
  imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  bookImg = document.createElement("img");
  bookImg.className = "book-img";
  bookImg.setAttribute("draggable", "false");
  bookImg.alt = "book title";
  bookImg.src = booksData[i].imageLink;
  bookInfo = document.createElement("div");
  bookInfo.className = "book-info";
  info = document.createElement("div");
  info.className = "info";
  bookTitle = document.createElement("h2");
  bookTitle.className = "title";
  bookTitle.innerHTML = booksData[i].title;
  author = document.createElement("h3");
  author.className = "author";
  author.innerHTML = booksData[i].author;
  price = document.createElement("p");
  price.className = "price";
  price.innerHTML = booksData[i].price + `$`;
  showMoreBtn = document.createElement("button");
  showMoreBtn.className = "show-more-btn";
  showMoreBtn.innerHTML = "Show more";
  descriptionBox = document.createElement("div");
  descriptionBox.className = "description-box";
  description = document.createElement("p");
  description.className = "description";
  description.innerHTML = booksData[i].description;
  closeBtn = document.createElement("button");
  closeBtn.classList = "close-btn";
  closeBtn.innerHTML = "Close";
  addBagBtn = document.createElement("button");
  addBagBtn.className = "bag-btn";
  addBagBtn.dataset.title = booksData[i].title;
  addBagBtn.innerHTML = "Add to bag";
  imgContainer.append(bookImg);
  descriptionBox.append(bookTitle.cloneNode(true));
  descriptionBox.append(description);
  descriptionBox.append(closeBtn);
  info.append(bookTitle);
  info.append(author);
  info.append(price);
  info.append(showMoreBtn);
  info.append(descriptionBox);
  bookInfo.append(info);
  bookInfo.append(addBagBtn);
  bookItem.append(imgContainer);
  bookItem.append(bookInfo);
  ul.append(bookItem);
}
fragment.append(contentBox);
document.body.append(fragment);
/////////popup description////////
let showMoreArr = document.querySelectorAll(".show-more-btn");
console.log(showMoreArr);
for (let i = 0; i < showMoreArr.length; i++) {
  showMoreArr[i].addEventListener("click", popup);
  function popup() {
    showMoreArr[i].nextSibling.classList.add("open");
  }
}
let closeBtnArr = document.querySelectorAll(".close-btn");
console.log(closeBtnArr);
for (let i = 0; i < closeBtnArr.length; i++) {
  closeBtnArr[i].addEventListener("click", popup);
  function popup() {
    closeBtnArr[i].parentElement.classList.toggle("open");
  }
}
///////////////////
/////////add to bag by btn click ///////
let dropPrice;

let bagBtnArr = document.querySelectorAll(".bag-btn");
let confirmLink = document.querySelector(".confirm-order-link");
contentBox.addEventListener("click", function (event) {
  let btn = event.target; //where was click
  if (!btn.dataset.title) {
    return; //check if book exist
  }
  for (let book of booksData) {
    if (btn.dataset.title === book.title) {
      createBagItem(book);
      appendToBag();
    }
  }
  total.style.display = "block";
  confirmLink.style.display = "block";
});
/////////////////
/////drag and drop////
let dropZone = document.querySelector(".bag-box");
let dragArr = document.querySelectorAll(".book-item");
dropZone.ondragover = (event) => event.preventDefault(); ///allow drop
for (let item of dragArr) {
  item.addEventListener("dragstart", function (event) {
    let dragItem = event.target; // where was dragstart
    for (let book of booksData) {
      if (dragItem.id === book.title) {
        createBagItem(book);
      }
    }
  });
}
dropZone.ondrop = appendToBag;
///////////////////////////
//////////common fn add to bag//////////
function createBagItem(obj) {
  let bagObj = {};
  bagObj.title = obj.title;
  bagObj.author = obj.author;
  bagObj.price = obj.price;

  bagItem = document.createElement("li");
  bagItem.className = "bag-item";
  bagCard = document.createElement("div");
  bagCard.className = "bag-card";
  bagCard.innerHTML = `${bagObj.author}<br/><em>${bagObj.title}</em><br/><span id="${bagObj.price}">${bagObj.price}</span>$`;
  dropPrice = bagObj.price;
}
function appendToBag() {
  confirmLink.style.display = "block";
  total.style.display = "block";
  deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = `&#10006;`;
  bagItem.append(bagCard);
  bagItem.append(deleteBtn);
  bagList.append(bagItem);
  getTotal(dropPrice);
  deleteItem();
}
////////////
////////total amount count////////
let amount = 0;
function deleteItem() {
  let deleteBtnArr = document.querySelectorAll(".delete-btn");
  for (let btn of deleteBtnArr) {
    btn.onclick = () => {
      btn.parentElement.remove();
      let parentDiv = btn.parentElement;
      let colectionItem = parentDiv.getElementsByTagName("span").item(0);
      let bookPrice = colectionItem.innerHTML;
      getTotal(-bookPrice);
    };
  }
}
function getTotal(price) {
  amount += price;
  total.innerHTML = `<b>Total:</b> ${amount}$`;
  if (amount == 0) {
    confirmLink.style.display = "none";
    total.style.display = "none";
  }
}
////////////
