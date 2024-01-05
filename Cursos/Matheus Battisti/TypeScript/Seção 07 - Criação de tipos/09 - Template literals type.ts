// 09 - Template literals type

type TesteA = 'teste'
type CustomType = `Algum ${TesteA}`

const teste: CustomType = 'Algum teste'

type a1 = 'Testando'
type a2 = 'Union'

type a3 = `${a1}` | `${a2}`
