class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.leftButton = carouselElement.querySelector(".left-button");
        this.rightButton = carouselElement.querySelector(".right-button");
        this.images = carouselElement.querySelectorAll("img");
        this.currentIndex = 0;
        this.images[this.currentIndex].classList.toggle("active"); 

        this.leftButton.addEventListener("click", () => this.select(this.leftIndex));
        this.rightButton.addEventListener("click", () => this.select(this.rightIndex));
    }

    select(indexFn) {
        this.images.forEach(image => image.classList.remove("active"));
        this.currentIndex = indexFn(this.currentIndex);
        const nextImage = this.images[this.currentIndex];
        nextImage.classList.toggle("active");
    }

    rightIndex(currentIndex) {
        return (currentIndex + 1) % 4;
    }

    leftIndex(currentIndex) {
        // return this.rightIndex(currentIndex + 1);
        return (currentIndex + 2) % 4;
    }

}

const carousel = document.querySelector(".carousel");
const newClass = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
