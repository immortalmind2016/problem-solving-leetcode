//#438


var findAnagrams=(s,p)=>{

  let answer:number[]=[];
  let map=new Map()
  let start=0;
  let end=0

  for(let i=0;i<p.length;i++){
    map.set(p[i],(map.get(p[i])||0) +1)
  }

  let cloneMap=new Map(map)
/*
0 1 2 3 4 5 6 7 8 9 10
c b a e b a b a c d p:"abc"
        s
          e

IF SIZE === 0 
Move end+1
ADD {START:+1}
Move start+1

ELSE IF FOUND MAP[END] 
Move end +1 
SUBTRACT {END-1}

ELSE IF UNDEFINED ORIGINAL MAP [END]
MOVE START=END
MOVE END+1


*/
  while(end<s.length){
    let endChar=s[end]
    let countEnd=map.get(endChar)
   
     if(countEnd!== undefined){
        if(countEnd>1){
          map.set(endChar,map.get(endChar)-1)
        }else{
          map.delete(endChar)
        }
        end++
      }
    else if(cloneMap.get(endChar)==undefined){
      map=new Map(cloneMap)
      start=end+1
      end++
    }else if(map.get(endChar)===undefined){
      let startChar=s[start]
      map.set(startChar,(map.get(startChar)||0)+1)
      start++
    }
    
    if(map.size==0){
      answer.push(start)
      let startChar=s[start]
      map.set(startChar,(map.get(startChar)||0)+1)
      start++
    }
   
  }
  

  return answer
}
                    
console.log(findAnagrams("abab","ab"))
