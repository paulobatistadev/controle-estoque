export class Entity {
    public id: number;
    public name: string;


    constructor(name: string) {
        this.id = 0;
        this.name = name;
    }
}

export class Brand extends Entity { };

export class Batch extends Entity { };

export class Location extends Entity { };

export class Department extends Entity { };
export class Product extends Entity {

    constructor(name: string) {
        super(name);
    }


    description: string = '';
    brand: number = 0;
    department: number = 0;
    price: number = 0;
};

export class Stock extends Entity {
    private _quantity: number = 0;
    private _unityValue: number = 0;
    private _totalValue: number = 0;
    private _department: string = '';

    constructor(id: number, name: string) {
        super(name);
        this.id = id;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set unityValue(unityValue: number) {
        this._unityValue = unityValue;
    }

    public get unityValue(): number {
        return this._unityValue;
    }

    public set totalValue(totalValue: number) {
        this._totalValue = totalValue;
    }

    public get totalValue(): number {
        return this._totalValue;
    }

    public set department(department: string) {
        this._department = this.department
    }

    public get department(): string {
        return this._department;
    }

}

export class Movement extends Entity {
    product: number;
    locationToName: string = '';
    locationFromName: string = '';
    batchName: string = '';
    batch: number;
    type: string;
    quantity: number;
    locationFrom: number = 0;
    locationTo: number = 0;

    constructor(product: number, batch: number, type: string, quantity: number) {
        super('');
        this.product = product;
        this.batch = batch;
        this.type = type;
        this.quantity = quantity;
    }
}

export class Quantity {
    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
    }
}

export class Sequence {
    id: string;
    nextVal: number;

    constructor(id: string, nextVal: number) {
        this.id = id;
        this.nextVal = nextVal;
    }
}
