const layoutGrid = (width, height) => {
    let grid = document.querySelector(".grid"); 
    grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;   

    let gridPop = (width * height);  
    let cell = document.createElement("div"); 
    
    
    for(let i = 0; i <= gridPop; i++){  
        let cell = document.createElement("div"); 
        cell.classList.add("cell");
        grid.appendChild(cell); 
    }
    
    console.log(grid);  

} 


layoutGrid(3,3); 











