let rgb_btn = document.querySelector(".rgb-btn");  
let grey_btn = document.querySelector(".grey-btn");   
let pen_color = document.querySelector(".color-picker")

let reset_btn = document.querySelector(".reset-btn");  
let size_btn = document.querySelector(".scroll-btn"); 
let grid = document.querySelector(".grid");   


const setPenColor = (e) =>{ 
    if(e.target == rgb_btn){ 
        setRGB(cellList);
    } else if(e.target == grey_btn){
        setGrey(cellList);
    } else if( e.target == pen_color){
        setPen(cellList);
    }
}
const setSettings = (e) => {
    if(e.target == reset_btn){
        resetGrid(cellList);
    } else if(e.target == size_btn ){ 
        // TODO
        console.log("reset btn"); 

    }
}

const layoutGrid = (width = 16, height = 16) => { 
    grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;   

    let gridPop = (width * height);  
    for(let i = 0; i <= gridPop; i++){  
        let cell = document.createElement("div"); 
            cell.classList.add("cell"); 
            grid.appendChild(cell);  
        }
         let list = document.querySelectorAll('.cell');   
         return list;
} 
    
const resetGrid = (list) => {

    list.forEach(cell => {
        cell.style.backgroundColor = "white"; 

    });
} 
const setRGB = (list) => {
    list.forEach(cell => {
        cell.addEventListener('mouseenter', () =>{
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    })
} 
const setGrey = (list) => {
    list.forEach(cell =>{
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = "grey";
        })
    })
} 
const setPen = (list) => {
    list.forEach(cell =>{
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = pen_color.value;
        })
    })
} 

// TODO
const setSizeReset = () => {
    let size = prompt("Please enter your grid");  
    resetGrid(cellList); 
    grid.innerHTML = "";
    layoutGrid(size,size);
}

    
reset_btn.addEventListener('click',setSettings); 
size_btn.addEventListener('click', setSettings);
rgb_btn.addEventListener('click',setPenColor);
grey_btn.addEventListener('click',setPenColor);  
pen_color.addEventListener('click', setPenColor);



let cellList = layoutGrid();    


    
    
    
    
    
    
    
    



