class Compare<T>{
    data: T[]
    constructor(elements: T[]){
        this.data = elements
    }

    compare(data: T){
        let matches = 0
        this.data.map(x => x === data && matches++)
        return matches;
    }
}


let c = new Compare([1, 2, 3, 4, 5, 1, 1]);

console.log(c.compare(1));