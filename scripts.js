function frameMenuToggle(){
    let frame = document.getElementById("gallery__frames");
    let button = document.getElementById("frame__toggle__btn")

    frame.classList.toggle('active');
    button.classList.toggle('active-btn');
}