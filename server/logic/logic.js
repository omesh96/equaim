
 export const logic=(num1,num2)=>{
    var myArr1 = String(num1).split("").map((num1)=>{
        return Number(num1)
      })
      var myArr2 = String(num2).split("").map((num2)=>{
        return Number(num2)
      })
    let x=action(myArr1,myArr2)


    return x
 }

  const action=(arr1,arr2)=>{
   // arr2=arr2.reverse()
    let a1=0
    let a2=0
    let bag1="";
    let bag2="";
 let x=0;
 let y=0;
 if(arr1.length>=arr2.length){
    x=arr1.length
    y=arr2.length
   a1=Array(x).fill(0)
   a2=Array(x).fill(0)
   let l1=a1.length-1
   let l2=a2.length-1
 
   for(let i=x-1; i>=0; i--){
     a1[i]=arr1[i];
    
   }
   for(let i=y-1; i>=0; i--){
     a2[l2--]=arr2[i]
   }
  

 } else{
    x=arr1.length
    y=arr2.length
    a1=Array(y).fill(0)
    a2=Array(y).fill(0)
    let l1=a1.length-1
   let l2=a2.length-1

   for(let i=x-1; i>=0; i--){
    a1[l1--]=arr1[i];
   
  }
  for(let i=y-1; i>=0; i--){
    a2[i]=arr2[i]
  }
 }
  
      let z= finalaction(a1,a2)
       return z
  
  }

  const finalaction=(a1,a2)=>{
       let carrybag="";
       let sumbag="";
       let carry=0;
       let carryarr=[];
       let sumarr=[];
       let finalarr=[]

       if(a1[a1.length-1]>0 && a2[a2.length-1]>0){
        for(let i=a1.length-1; i>=0; i--){
            let sum=a1[i]+a2[i]+carry;
            if(i===0){
                if(sum>=10){
                    sumbag=sum+sumbag
                    //carry=0;
                    // carrybag=carry+carrybag
                   carryarr.push(carrybag)
                    sumarr.push(sumbag)
                   
                }
                else{
                    sumbag=sum+sumbag
                    // carry=0;
                    // carrybag=carry+carrybag
                    carryarr.push(carrybag)
                    sumarr.push(sumbag)
                }
            }
            else{
                if(sum>=10){
                    sumbag=(sum-10)+sumbag
                    carry=1;
                    carrybag=carry+carrybag
                    carryarr.push(carrybag)
                    sumarr.push(sumbag)
                   
                } else{
                    sumbag=sum+sumbag
                    carry=0;
                    carrybag=carry+carrybag
                    carryarr.push(carrybag)
                    sumarr.push(sumbag)
                }
            }
           }
       } 
       
       else{
        for(let i=a1.length-1; i>=0; i--){
            let sum=a1[i]+a2[i]+carry;
            if(i===0){
                if(sum>=10){
                    sumbag=sum+sumbag
                    //carry=0;
                    // carrybag=carry+carrybag
                   carryarr.push(carrybag)
                    sumarr.push(sumbag)
                   
                }
                else{
                    sumbag=sum+sumbag
                   // carry=0;
                  //  carrybag=carry+carrybag
                    carryarr.push(carrybag)
                    sumarr.push(sumbag)
                }
            } else{
                if(sum>=10){
                    sumbag=(sum-10)+sumbag
                    carry=1;
                    carrybag=carry+carrybag
                    carryarr.push(carrybag)
                    sumarr.push(sumbag)
                   
                } else{
                    sumbag=sum+sumbag
                    carry=0;
                    carrybag=carry+carrybag
                    carryarr.push(carrybag)
                    sumarr.push(sumbag)
                }
            }
           }
       }

       finalarr.push(...finalarr,carryarr,sumarr)
       return finalarr
  }