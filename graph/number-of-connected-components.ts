
const _DFS=(v,adjList,visited)=>{
    let length=0
    let stack=[v]
    while(stack.length){
      const item=stack.pop()

      if(visited[item]){
        continue
      }

      visited[item]=true;

      for(let _v of adjList[item]){
        stack.push(_v)
      }
      length++;


    }

    return length>0
}

var countComponents=function(n,edges){
  const adjList=new Array(n).fill([])
  const visited=new Array(n).fill(false)
  let counter=0

  for(let i=0;i<edges.length;i++){
    const [v,w]=edges[i]

    adjList[v]=[w]
  }



  for(let i=0;i<edges.length;i++){
    const edge=edges[i];
    const [v,...rest]=edge
    if(_DFS(v,adjList,visited)){
      counter++;
    }
      
    
  }

  return counter
}

console.log(countComponents(5,[[0,1],[1,2],[2,3],[3,4]]))

