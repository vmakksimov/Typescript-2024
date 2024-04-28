"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = void 0;
class Cloth {
    constructor(color, size, type) {
        this.color = color;
        this.size = size;
        this.type = type;
    }
    toStringMethod() {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}
exports.Cloth = Cloth;
//# sourceMappingURL=Cloth.js.map