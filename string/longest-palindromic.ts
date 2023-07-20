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

/*
b a b a d
  c



*/


function longestPalindrome(s: string): string {

  let globalMax=0
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

console.log(longestPalindrome("aa"))