//200
/*

grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

*/

let DFS=(i,j,grid,visited)=>{
  let islandSize=0


  return islandSize>0
}

const numberOfIslands=(grid:string[][])=>{
  
  let number=0
  //visited => [0][0]=true, [0,1]=false and so on.
  //So we will have the same dim as grid one 

  let visited=grid.map((row)=>row.map(()=>false))

  //iterate over islands and do DFS
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
      if(DFS(i,j,grid,visited)){
        number++;
      }
    }
  }

  return number
}