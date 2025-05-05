function contract(name,number){
    this.name=name,
    this.number=number,

    this.print=function(){
        return `${name},${number}`
    }
}

let contract1=new contract("Amiko",554928531)
console.log(contract1.print)