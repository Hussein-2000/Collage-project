 // expand  the header with user is in top 

window.addEventListener('scroll', () => {
    let header = document.getElementsByTagName('header')[0];
    console.log("Hello");
    
    if (window.pageYOffset > 0) {
        header.classList.add("expand")
        console.log('object :>> ');
    } else {
        header.classList.remove("expand")
    }
});
