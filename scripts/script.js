const btn = document.getElementById('contact-btn');
const modal = document.getElementById('modal')


btn.addEventListener('click', function() {
    modal.style.display = 'flex';
    document.querySelector('.modal-wrapper').style.backgroundColor = "rgba(25, 132, 155, 0.3)";
})


const form = document.getElementById("form")
const close = document.getElementById('close-modal')
form.addEventListener("submit", (n) => {
    n.preventDefault();
    window.location.href = "index2.html";
    return true;
})

close.addEventListener("click", function() {
    document.querySelector('.modal-wrapper').style.display = "none"
})



const closeImg = document.getElementById("close-img")


closeImg.addEventListener("click", function() {
    document.querySelector('.img-wrapper').style.display = "none"
})

const portfolioImages = document.querySelectorAll(".portfolio__img");

portfolioImages.forEach(image => image.addEventListener("click", function() {
    document.querySelector('.img-wrapper').style.display = 'flex';
    document.querySelector('.img-wrapper').style.backgroundColor = "rgba(25, 132, 155, 0.3)";
    document.querySelector('.img-modal').src = image.src
}))