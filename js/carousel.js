

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, uri) {
        this.image = image;
        this.title = title;
        this.uri = uri;
    }
      
    static Start(arr){
        if(arr && arr.length > 0){
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._arr = arr;
            Carousel.Next(); //start
            Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
            
        } else {
            throw "O método 'Start' precisa receber um array válido.";
        }
    }

    static Next(){
        const carouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");

        if(!carouselElement || !titleElement) {
            console.error("Elementos do carrosel não encontrados!");
            return;
        }

        const item = Carousel._arr[Carousel._sequence];

        carouselElement.style.backgroundImage = `url(img/${item.image})`;
        carouselElement.style.backgroundPosition = "center";
        carouselElement.style.backgroundSize = "cover";
        carouselElement.style.transition = "background-image 0.5s ease-in-out";

        titleElement.innerHTML = `<a href= "${item.uri}"> ${item.title}</a>`

        Carousel._sequence = (Carousel._sequence +  1) % Carousel._size;
    }
};
