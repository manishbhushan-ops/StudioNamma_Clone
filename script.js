let card = document.querySelector(".cardfollower")
let hero = document.querySelector(".hero")
let pointer = document.querySelector(".pointer")
document.addEventListener("mousemove", (e) => {
    pointer.style.top = e.clientY + "px"
    pointer.style.left = e.clientX + "px"
    pointer.style.transition = "linear 0.3s"
    console.log("x:", e.clientX, "y:", e.clientY)
})


hero.addEventListener("mousemove", (e) => {
    card.style.top = e.clientY + "px"
    card.style.left = e.clientX + "px"
    card.style.transition = "linear 0.3s"
    pointer.style.opacity = 0
    
})
hero.addEventListener("mouseleave", () => {
    pointer.style.opacity = 1
    
    card.style.transition = "linear 0.3s"
})

let menudiv = document.querySelector(".menu")
let click = document.querySelector("#menuClick")
let texts = document.querySelector(".texts")
let flag = 0


click.addEventListener("click", () => {
    if (!flag) {
        menudiv.style.top = "0%"
        menudiv.style.transition = "linear 0.5s"
        menudiv.style.rotate = "0deg"
        
        setTimeout(() => {
            texts.style.opacity = "1"
            texts.style.top = "0%"
            texts.style.position = "fixed"
            texts.style.transition = "all ease 0.5s"
            


        }, 500)
        flag = 1
    }
    else {
        menudiv.style.top = "-115%"
        menudiv.style.transition = "linear 0.5s"
        texts.style.opacity = "0"
        texts.style.top = "-100%"
        flag = 0
        
    }
})
let box1=document.querySelector(".box1")
let box2=document.querySelector(".box2")
let box3=document.querySelector(".box3")
let box4=document.querySelector(".box4")
let box = document.querySelectorAll(".box")
let rectangle = document.querySelector(".rectangle")
box.forEach((box, index) => {
    box.addEventListener("mousemove", (e) => {
        if(index==0){
            rectangle.innerHTML="hello"
            pointer.style.opacity=0
           
        }
        else if(index==1){
            rectangle.innerHTML="manish"
            pointer.style.opacity=0
           
        }
        else if(index==2){
            rectangle.innerHTML="hii"
            pointer.style.opacity=0
            
        }
        else if(index==3){
            rectangle.innerHTML="world"
            pointer.style.opacity=0
           
        }
        rectangle.style.top = e.clientY + "px";
        rectangle.style.left = e.clientX + "px";
        rectangle.style.opacity = 1;
        rectangle.style.transition = "linear 0.2s";
        

    })
    box.addEventListener("mouseleave",()=>{
        rectangle.style.opacity=0
        pointer.style.opacity=1
    })
})



let detail = document.querySelector(".detail")
let playground = document.querySelector(".playground")
let preview = document.querySelector(".img1")
let i=0;
let timer;


const image=["https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a128c7643746e47f9_Playground1.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a8736b633433d00f9_Playground5.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a796dfc08d400d6ea_Playground4.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a128c7643746e47f9_Playground1.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d1446a83ac058871c1ccfc_Playground2.webp",
];

playground.addEventListener("mouseover",()=>{
    preview.style.display="block";
    timer=setInterval(()=>{
        preview.style.opacity=1;
        preview.src=image[i]
        i++;
        console.log(i)

        if(i===image.length){
            i=0;
        }

    },500);

})
playground.addEventListener("mouseleave",()=>{
    preview.style.display="none";
    clearInterval(timer);
    i=0;
})
const image2=["https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d143844e199c5fe25893c6_Details%201.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384921ac39670293bad_Details2.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384e95f535d6ce77d4f_Details3.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384e6539b091e5c0c8b_Details4.webp",
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68d14384b8a083b5d518278d_Details5.webp"
]
let j=0;
let timer2;
let img2=document.querySelector(".img2")
console.log("detail:", detail);
console.log("playground:", playground);
console.log("preview:", preview);
console.log("img2:", img2);
detail.addEventListener("mouseover",()=>{
    img2.style.display="block";  
    timer2=setInterval(()=>{
        img2.style.opacity=1;
        img2.src=image2[j]
        j++;
        console.log(j)

        if(j===image2.length){
            j=0;
        }

    },500);
})
detail.addEventListener("mouseleave",()=>{
    img2.style.display="none";
    clearInterval(timer2);
    j=0;
})
