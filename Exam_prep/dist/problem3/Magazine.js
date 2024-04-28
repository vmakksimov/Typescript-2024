"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity) {
        this.clothes = [];
        this.type = type;
        this.capacity = capacity;
    }
    addCloth(cloth) {
        let exists = this.clothes.find(x => x.color === cloth.color || x.size === cloth.size);
        if (this.clothes.length < this.capacity && !exists) {
            this.clothes.push(cloth);
        }
        else {
            throw new Error('This color or size already exists!');
        }
    }
    removeCloth(color) {
        let exists = this.clothes.filter(x => {
            if (x.color === color) {
                const index = this.clothes.indexOf(x);
                this.clothes.splice(index, 1);
            }
        });
        if (exists.length > 0) {
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        let smalleseSize = 999999999;
        this.clothes.filter(x => {
            if (x.size < smalleseSize) {
                smalleseSize = x.size;
            }
        });
        return this.clothes.find(x => x.size === smalleseSize);
    }
    getCloth(color) {
        return this.clothes.find(x => x.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        //{type} magazine contains: {Cloth1} {Cloth2}
        let result = `${this.type} magazine contains:\n`;
        this.clothes.sort((a, b) => a.size - b.size).forEach(x => {
            result += x.toStringMethod();
            result += '\n';
        });
        return result.trim();
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map