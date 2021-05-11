let arr1=['canan','ergun','shadi','cemal','ahmad'];


let temp='';
const sortStrArray=(arr)=>{
      
  for(let i=0; i<arr.length;i++){
    for(let k=i+1; k<arr.length;k++){
         if(arr[k].localeCompare(arr[i])==-1){
            temp=arr[i] ;
            arr[i]=arr[k];
            arr[k]=temp;

         }
    }
      
  }
    return arr;

}

console.log(sortStrArray(arr1));



let arr2=[4,7,2,9,50];

let tempNum=0;

const sortintegerArr=(array)=>{
    for(let i=0; i<array.length; i++){
       for(let k=i+1; k<array.length; k++ ){
          if(array[i]>array[k]){
              tempNum=array[i];
              array[i]=array[k];
              array[k]=tempNum;
             }

       }
    }
  
  return array;
}


console.log( sortintegerArr(arr2));
