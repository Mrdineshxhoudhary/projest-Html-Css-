let moves = [
    {
        name: "jab we met",
        dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam aliquam ullam amet praesentium illum accusantium molestias quae laboriosam doloribus deserunt saepe ab et eveniet quod",
        img: "./image/benner/Jab_we_met_final.jpeg",
    },
    {
        name: "partner",
        dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam aliquam ullam amet praesentium illum accusantium molestias quae laboriosam doloribus deserunt saepe ab et eveniet quod",
        img: "./image/benner/Katrina-Kaif-BD_960x540.jpg",
    },
    {
        name: "fils likes Home",
        dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam aliquam ullam amet praesentium illum accusantium molestias quae laboriosam doloribus deserunt saepe ab et eveniet quod",
        img: "./image/benner/FEELSLIKEHOMEY2022S02E001HI_Airtel_featured_banner.jpeg",
    },
    {
        name: "avrodh 2",
        dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam aliquam ullam amet praesentium illum accusantium molestias quae laboriosam doloribus deserunt saepe ab et eveniet quod",
        img: "./image/benner/AVRODH-2-FEATURE-BANNER_(2).png",
    },
];
let caraoul = document.querySelector(".caraousel");
let slider = [];

let slideIndex = 0;

let createSlide = () => {
    if (slideIndex >= moves.length) {
        slideIndex = 0;
    }
    let slid = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");


    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(moves[slideIndex].name));
    p.appendChild(document.createTextNode(moves[slideIndex].dec));

    content.appendChild(h1);
    content.appendChild(p);
    slid.appendChild(imgElement);
    //   slid.appendChild(content);
    caraoul.appendChild();

    imgElement.src = moves[slideIndex].img;
    slideIndex++;

    slid.className = "slider";
    content.className = "slide-contant";
    h1.className = "movies-title";
    p.className = "moves-des";


    slider.push(slid);

    if (slider.length) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% 
      - ${30 * (slider.length - 2)}px)`;
    }
}
for (let i = 0; i < 4; i++) {
    createSlide();
}
setInterval(() => {
    //   createSlide();
}, 3000);
