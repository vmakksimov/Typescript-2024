type Task = {
    name: string
    level: 'low' | 'hard'
}

class Person2 {

    @handlingPerson2
    tasks: Task[] =  [{name: 'Angel', level: 'hard'}]
}

function handlingPerson2<T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext
){
    return function (FieldValue: V){
        console.log('args,', FieldValue)

        FieldValue.push({name: 'Viktor', level: 'hard'})

        return FieldValue;
    }
}

const employee = new Person2();
console.log(employee)