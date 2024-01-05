// 10 - Override de metódos

class Base {

	algumMetodo(): string {
		return 'Executando método da classe Base'
	}

}

class Nova extends Base {

	algumMetodo(): string {
		return 'Executando método da classe Nova'
	}

}

const meuObjeto = new Nova()

// console.log(meuObjeto.algumMetodo())
