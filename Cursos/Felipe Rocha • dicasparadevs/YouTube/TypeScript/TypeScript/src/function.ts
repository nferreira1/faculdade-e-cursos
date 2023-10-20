const sum = (x: number, y: number): string | number => {
	return x + y
}

const value = sum(2, 2)

const log = (message: string): void => {
	console.log(message)
}

interface MathFunc {
	(x: number, y: number): number
}

const sub: MathFunc = (x: number, y: number): number => {
	return x - y
}
