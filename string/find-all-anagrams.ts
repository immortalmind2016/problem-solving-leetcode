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
        


var findAnagrams2=(s,p)=>{
/*
0 1 2 3 4 5 6 7 8 9 10
c b a e b a b a c d p:"abc"
s
e

FREQUENCY ARRAY FOR ALL a-z for current pointer
FREQUENCY ARRAY FOR ALL a-z for p input
 a b c
[1,1,1,0,0,...]

END = 0 
SO current = [0,0,1,0,0,..]

if(end-start == window of the p.length)
COMPARE
if greater 
remove start element

*/

  let answer:number[]=[];
  let pFreq:number[]=new Array(26).fill(0)
  let currentFreq:number[]=new Array(26).fill(0)

  let start=0;
  let end=0

  for(let i=0;i<p.length;i++){
    let code=p.charCodeAt(i)%26
    pFreq[code]=(pFreq[code]||0)+1
  }

  while(end<s.length){

    let code=s.charCodeAt(end)%26
    currentFreq[code]=(currentFreq[code]||0)+1
    

    if(end-start>=p.length-1){ 
  
      let code=s.charCodeAt(start)%26

      if(JSON.stringify(currentFreq)===JSON.stringify(pFreq)){
        answer.push(start)
      }
      currentFreq[code]--
      start++;
    }
    
    end++
  }

 

  return answer
}

var findAnagrams3=(s,p)=>{
 //Same as 2nd but different implementation

    let answer:number[]=[];
    let pFreq:number[]=new Array(26).fill(0)
    let currentFreq:number[]=new Array(26).fill(0)

  
    for(let i=0;i<p.length;i++){
      let code=s.charCodeAt(i)%26
      pFreq[code]=(pFreq[code]||0)+1
    }
    
    for(let i=0;i<s.length;i++){
      let code=s.charCodeAt(i)%26
      currentFreq[code]++;

      if(i>p.length-1){
        let code=s.charCodeAt(i-p.length)%26
        currentFreq[code]--;
        
      }

      if(i>=p.length-1){
        if(JSON.stringify(currentFreq)===JSON.stringify(pFreq)){
          answer.push(i-(p.length-1))
        }
      }

    }
   
  
    return answer
  }
  
console.log(findAnagrams2("cbaebabacd","abc"))
