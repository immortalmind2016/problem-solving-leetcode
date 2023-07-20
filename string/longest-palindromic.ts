//#5

const aroundCenter:(createIndex:number,s:string,isOdd?:boolean)=>string=(centerIndex:number,s:string,isOdd?:boolean):string=>{

  let str=""
  let start=centerIndex;
  let end=isOdd?centerIndex:centerIndex+1
  


  while(start>=0&&end<s.length&&s[start]==s[end]){
      if(start===end){
        str=s[start]
      }else
     str=s[start]+str+s[end]
     start--
     end++
  }


  return str
}


function longestPalindrome(s: string): string {


  let globalStr=""

  for(let i=0;i<s.length;i++){

      //odd length
      let strOdd=aroundCenter(i,s,true)

      //even length
      let strEven=aroundCenter(i,s,false)

      if(strOdd.length>globalStr.length){
          globalStr=strOdd
      }

      if(strEven.length>globalStr.length){
        globalStr=strEven
    }

      
  }

  return globalStr


};


//# Another solution
/*

babad
s
 e

#i=0 , s=-1  e=1
 s = -1
 e = 1
#i=1 , s= 0 e=2
  s=-1
  e=3

*/


const aroundCenter2:(start:number,end:number,s:string)=>{start,end}=(start:number,end:number,s:string):{start,end}=>{


  while(start>=0&&end<s.length&&s[start]==s[end]){
     start--
     end++
  }

  return {start:start+1,end}
}


function longestPalindrome2(s: string): string {


  let globalMax={start:0,end:1}

  for(let i=0;i<s.length;i++){

      //odd length
      let odd=aroundCenter2(i-1,i+1,s)

      //even length
      let even=aroundCenter2(i,i+1,s)

      let max=even?.end-even.start>odd.end-odd.start?even:odd

      if(max.end-max.start>globalMax.end-globalMax.start){
        globalMax=max
      }

    }

    let {start,end}=globalMax

    return s.slice(start,end)

};



console.log(longestPalindrome2("babad"))