function countPosSumNeg(input){
    if(input == null || input.length < 1){
        return [];
    };

    let pos = 0;
    let neg = 0;

    for(let i = 0; i < input.length;i++){
        if(input[i]>0){
            pos++;
        }else if(input[i]<0){
            neg += inpput[i]
        }
    }

    return[pos,neg]
}

console.log(countPosSumNeg([1,2,3,4,5,-2,-9]));