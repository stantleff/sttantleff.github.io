document.addEventListener("DOMContentLoaded", function () {
    // Basic DOM Manipulation
    const textElement = document.getElementById("text");
    const changeTextBtn = document.getElementById("changeTextBtn");

    changeTextBtn.addEventListener("click", function () {
        textElement.textContent = "The text has been changed!";
    });

    // Dynamic Shopping List
    const itemInput = document.getElementById("itemInput");
    const addItemBtn = document.getElementById("addItemBtn");
    const shoppingList = document.getElementById("shoppingList");

    addItemBtn.addEventListener("click", function () {
        const newItem = document.createElement("li");
        newItem.textContent = itemInput.value;
        
        if (itemInput.value.trim() !== "") {
            shoppingList.appendChild(newItem);
            itemInput.value = "";
        }
    });

    // Image Gallery
    const thumbBar = document.querySelector(".thumb-bar");
    const displayedImg = document.querySelector(".displayed-img");
    const darkBtn = document.querySelector(".dark");

    const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

    imageFilenames.forEach(filename => {
        const newImage = document.createElement("img");
        newImage.setAttribute("src", `images/${filename}`);
        newImage.setAttribute("alt", filename);
        thumbBar.appendChild(newImage);

        newImage.addEventListener("click", function () {
            displayedImg.src = this.src;
            displayedImg.alt = this.alt;
        });
    });

    let isDark = false;
    darkBtn.addEventListener("click", function () {
        if (!isDark) {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "white";
            darkBtn.textContent = "Lighten";
        } else {
            document.body.style.backgroundColor = "#f4f4f4";
            document.body.style.color = "black";
            darkBtn.textContent = "Darken";
        }
        isDark = !isDark;
    });
});

