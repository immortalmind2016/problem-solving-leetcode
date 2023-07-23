
class graph{
  V;
  adj

  constructor(v){
    this.V=v;
    this.adj=new Array(v)
    for(let i=0;i<v;i++){
      this.adj[i]=[]
    }
  }

  addEdge(a,b){
    this.adj[a].push(b)
  }

  DFS = (v) => {
    const stack = [v];
    const visited = new Array(this.V).fill(false); // Boolean array to track visited nodes
  
    while (stack.length > 0) {
      const popItem = stack.pop();
      console.log(popItem);
      visited[popItem] = true; // Mark the node as visited
      // children
      for (let i = 0; i < this.adj[popItem].length; i++) {
        const neighbor = this.adj[popItem][i];
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  };
  


}

const g = new graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(2, 0);
g.addEdge(3,3);


g.DFS(2)

/*
0 => [1,2] 
1 => [2]
2 => [0,3]
3 => [3]

Print 0  visited [0]
loop over child of 0
push(1,2) stack[1,2]

print 2 visited [0]
loop over child of 2
push(0,3) stack [1,3]

print 3 visited [0,3]
loop over child of 3
push() stack [1]

print 1 visited [0,3,1]
loop over child of 1 
push 
*/


