 // expand  the header with user is in top 

window.addEventListener('scroll', () => {
    let header = document.getElementsByTagName('header')[0];
    let img = document.getElementsByTagName("img")[0];

    console.log(window.pageYOffset);
    
    if (window.pageYOffset > 0) {
        header.classList.add("expand")
        img.classList.add("expand")
    } else {
        header.classList.remove("expand")
        img.classList.remove("expand")

    }
});

const formbtn = () => {
    window.open("https://www.google.com");
}
