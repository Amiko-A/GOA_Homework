for(i=1;i<=100;i++){
    if(i % 4 != 0){
        continue;
    }
    
    if(i===50){
        break;
    }

    console.log(i);
}