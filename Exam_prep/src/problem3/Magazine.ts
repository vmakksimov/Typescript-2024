import { Cloth } from "./Cloth"

export class Magazine {
    type: string
    capacity: number
    clothes: Cloth[] = []

    constructor(type: string, capacity: number) {
        this.type = type
        this.capacity = capacity
    }

    addCloth(cloth: Cloth) : void{
        let exists = this.clothes.find(x => x.color === cloth.color || x.size === cloth.size)
        if (this.clothes.length < this.capacity && !exists) {
            this.clothes.push(cloth)
        }else {
            throw new Error('This color or size already exists!')
        }
    }

    removeCloth(color: string): boolean {
        let exists = this.clothes.filter(x => {
            if (x.color === color) {
                const index = this.clothes.indexOf(x)
                this.clothes.splice(index, 1)
            }
        })

        if (exists.length > 0) {
            return true;
        }

        return false;
    }

    getSmallestCloth(): Cloth | undefined {
        let smalleseSize: number = 999999999;

        this.clothes.filter(x => {
            if (x.size < smalleseSize){
                smalleseSize = x.size
            }
        })

        return this.clothes.find(x => x.size === smalleseSize)

       
    }

    getCloth(color: string): Cloth | undefined {
        return this.clothes.find(x => x.color === color)
    }

    getClothCount(): number{
        return this.clothes.length
    }

    report(): string{
        //{type} magazine contains: {Cloth1} {Cloth2}
        let result = `${this.type} magazine contains:\n`

        this.clothes.sort((a, b) => a.size - b.size).forEach(x => {
            result += x.toStringMethod()
            result += '\n'
        })

        return result.trim();
    }
}