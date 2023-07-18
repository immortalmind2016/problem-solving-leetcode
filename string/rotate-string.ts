//#796
function rotateString(s: string, goal: string): boolean {
  if(s.length!==goal.length){
      return false
  }

  if(s.length==0&&goal.length==0){
      return true
  }
  let i=0;
  let arr=s.split("")
  while(i<s.length-1){
      let lastElement=arr[arr.length-1]
      let beforeLastElement=arr.splice(0,arr.length-1);
      arr=[lastElement,...beforeLastElement]
      if(arr.join("")==goal){
          return true
      }
      i++;
  }

  return rotateString3(s,goal)
};

function rotateString2(s: string, goal: string): boolean {

  let i=0;

  
  let indexOf=s.indexOf(goal[0]);

  while(i<s.length){
      if(s[(indexOf+i) % s.length]!==goal[i]){
          return false
      }
      i++;
  }

  return true
};

function rotateString3(s: string, goal: string): boolean {

  return (s+s).includes(goal);
};