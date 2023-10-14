interface IPerson {
	id: number
	getName(): string
}

class Person implements IPerson {
	readonly id: number;
	protected name: string;
	private age: number;

	constructor(id: number, name: string, age: number) {
		this.id = id
		this.name = name
		this.age = age
	}

	getName(): string {
		return this.name
	}

	setName(name: string): void {
		this.name = name
	}

	getId(): number {
		return this.id
	}

	getAge(): number {
		return this.age
	}

	setAge(age: number): void {
		this.age = age
	}
}

class Employee extends Person {

	constructor(id: number, name: string, age: number) {
		super(id, name, age)
	}

	getName(): string {
		return 'Employee: ' + this.name
	}
}
