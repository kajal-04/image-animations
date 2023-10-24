const imgElements = document.querySelectorAll(".js-image-content");
const lastImgElement = imgElements[imgElements.length - 1];

imgElements.forEach(imgElement => {
    imgElement.addEventListener("mouseover", function () {
        if (imgElement !== lastImgElement) {
            imgElement.classList.add("on-hover-image");
            lastImgElement.classList.remove("on-hover-image");
        }
    });

    imgElement.addEventListener("mouseleave", function () {
        if (imgElement !== lastImgElement) {
            lastImgElement.classList.add("on-hover-image");
            imgElement.classList.remove("on-hover-image");
        }
    });
});


// Js close slider
const imageContainer = document.querySelector('.js-closed-slider');

for (let i = 0; i < 2; i++) {
    const images = imageContainer.querySelectorAll('.js-closed-slider-wrapper');
    images.forEach(image => {
        const clone = image.cloneNode(true);
        imageContainer.appendChild(clone);
    });
}
