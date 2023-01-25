/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const urlArr = url.split("/");
        const breed = urlArr[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const addDogPhoto = () =>{
            const newlist = document.createElement("li");
            const newfigure = document.createElement("figure");
            const newImage = document.createElement("img");
            newImage.setAttribute("src", `${url}`);
            const figcaption = document.createElement("figcaption");
            figcaption.innerText = `"${breed}"`;
            newfigure.appendChild(newImage);
            newfigure.appendChild(figcaption);
            newlist.appendChild(newfigure);
            const dogList = document.getElementById("dogList");
            dogList.appendChild(newlist);
         }
         window.onload = addDogPhoto();
    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const removeFirstDog = () =>{
        const dogs = document.getElementsByTagName("li");
        const firstDog = dogs[0];

        firstDog.remove();
    }


    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    window.onload = removeFirstDog();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const dogList = document.getElementById("dogList");
    const allDogs = dogList.childNodes;
    console.log(allDogs);


    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    const removeLastDog = () =>{
        allDogs[allDogs.length-1].remove();
    }
    window.onload = removeLastDog();
});