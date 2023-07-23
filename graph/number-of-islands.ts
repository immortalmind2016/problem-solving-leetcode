//200
/*

grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

Go to 
[0][0] push up,left,right,down if(1) => [0,1] [1,0]
[[0,1],[1,0]] 
Go to [1,0]
push up,left,right,down if(1) && if not visited =>
Stack [[0,1],[1,]]

for i in grid
  for j in grid
    island=0
    stack=[[i,j]]
    while(stack.length){
      let currentNode=stack.pop()

      if(visited[i][j]){
         continue
      }

      if not ground skip

      const adj=ADJ
      stack.push()

      islandSize++
    }





*/