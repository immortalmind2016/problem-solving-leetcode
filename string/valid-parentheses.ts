
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

var isValid3=function(s){
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

console.log(isValid("(([{}])"))