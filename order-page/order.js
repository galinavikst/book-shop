let confirmH1 = document.createElement("h1");
confirmH1.className = "confirm-h1";
confirmH1.innerHTML = "Confirm order";
let backCatalog = document.createElement("a");
backCatalog.className = "back-catalog-link";
backCatalog.innerHTML = "Back to catalog";
backCatalog.setAttribute("href", "../index.html");
document.body.append(confirmH1);
document.body.append(backCatalog);
