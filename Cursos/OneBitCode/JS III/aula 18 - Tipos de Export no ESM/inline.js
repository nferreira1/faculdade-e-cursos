export function inline() {
	console.log('Export nomeado inline')
}

// Só é possível ter um export default por arquivo
// Inclusive, pode ser uma função anônima
export default () => {
	console.log('Export default inline')
}
