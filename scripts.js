document.querySelectorAll(".nav-link").forEach(link => {link.addEventListesner('click',e => {
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    document.querySelectorAll('.nav-link').forEach(link=> { link.classList.remove('active')
    })
    link.classList.add('active')
})
})

const images = document.querySelectorAll('.carousel_image');
let currentIndex = 0;

function showImage(){
    images[currentImage].classList.remove('visible')
    currentImage = (currentImage + 1 ) % images.length
    images[currentImage].classList.add('visible')
}
showImage()

document.getElementById('searchBar').addEventListener('input', e => {
    const query = e.target.value.toLowerCase();
    const products = document.querySelectorAll('product');

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        }
        else {
            product.style.display = 'none';
          }
    }
    )
})

