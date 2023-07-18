//#20

var isValid=function(s){
  let closes={
    "{":"}",
    "[":"]",
    "(":")"
  }
  let stack:string[]=[]
  for(let i=0;i<s.length;i++){
    if(Object.keys(closes).includes(s[i])){
      stack.push(s[i])
    }else{
      let removed=stack.pop() as string;
      if(closes[removed]!==s[i]){
        return false;
      }
    }

  }
  return true
}

var isValid2=function(s){
  let closes={
    "{":"}",
    "[":"]",
    "(":")"
  }
  for(let i=0;i<s.length/2;i++){
  if(closes[s[i]]!==s[s.length-1-i]){
    return false
  }

  }
  return true
}

var isValid3=function(s:string){
  const stack:string[]=[];
  const parens="() {} []"
  let i=0;

  while(i<s.length){
    stack.push(s[i]);
    i++;
    let open=stack[stack.length-2]
    let close=stack[stack.length-1]
    let concat=open+close;
    if(parens.includes(concat)){
      stack.pop()
      stack.pop()
    }

  }
  return stack.length==0
}

console.log(isValid3("([{}])"))