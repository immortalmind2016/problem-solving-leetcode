

const __DFS=(i,visited,isConnected)=>{
  let length=0;
  let stack=[i]
 
  while(stack.length){

    let currentNode=stack.pop()

    if(visited[currentNode]){
      continue
    }
  

    visited[currentNode]=true;

    //neighbor
    for(let n=0;n<isConnected[currentNode].length;n++){
      if(isConnected[currentNode][n])
      stack.push(n)
    }

    length++;
  }

  return length>0
}

function findCircleNum(isConnected: number[][]): number {
  let number=0
  let adjList:number[][]=new Array(isConnected[0].length).map(()=>[])
  let visited:boolean[]=new Array(isConnected[0].length).map(()=>false)

    

  for(let i=0;i<isConnected[0].length;i++){
    if(__DFS(i,visited,isConnected)){
      number++;
    }
  }

  return number
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))

