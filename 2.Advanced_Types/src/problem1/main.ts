// input ['Yoghurt', '48', 'Rise', '138', 'Apple', '52']
// output { Yoghurt: 48, Rise: 138, Apple: 52 }



const calorieObject = (array: string[]): {[key: string]: number} => {
    let result: {[key: string]: number} = {}

    for (let index = 0; index < array.length; index++) {
        if (index % 2 !== 0){
            result[array[index-1]] = Number(array[index])
        } 
    }

    return result;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));