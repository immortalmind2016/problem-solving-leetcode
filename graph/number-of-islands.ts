//200
/*

grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

*/

const ADJ=(i,j,grid)=>{
  let adj:number[][]=[]

  //top
  if(i>0&&grid[i-1][j]=="1"){
    adj.push([i,j])
  }
  //bot
  if(i<grid.length-1&&grid[i+1][j]=="1"){
    adj.push([i,j])
  }
  //left
  if(j>0&&grid[i][j-1]=="1"){
    adj.push([i,j])
  }
  //right
  if(j<grid[i].length-1&&grid[i][j+1]=="1"){
    adj.push([i,j])
  }
  
  return adj
}

let DFS=(i,j,grid,visited)=>{
  let islandSize=0
  const stack:number[][]=[[i,j]]

  while(stack.length>0){
    const currentNode:number[]=stack.pop() as number[]
    const [i,j]=currentNode

    if(visited[i][j]){
      continue
    }

    //water
    if(grid[i][j]=="0"){
      continue
    }

    let adj=ADJ(i,j,grid)
    stack.push(...adj)
  }

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