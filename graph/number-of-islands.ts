//200
/*

grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

*/

const ADJ=(i,j,visited)=>{
  let adj:number[][]=[]

  //top
  if(i>0&&!visited[i-1][j]){
    adj.push([i-1,j])
  }
  //bot
  if(i<visited.length-1&&!visited[i+1][j]){
    adj.push([i+1,j])
  }
  //left
  if(j>0&&!visited[i][j-1]){
    adj.push([i,j-1])
  }
  //right
  if(j<visited[i].length-1&&!visited[i][j+1]){
    adj.push([i,j+1])
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

    visited[i][j]=true

    //water
    if(grid[i][j]=="0"){
      continue
    }

    let adj=ADJ(i,j,visited)
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


console.log(numberOfIslands( [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))