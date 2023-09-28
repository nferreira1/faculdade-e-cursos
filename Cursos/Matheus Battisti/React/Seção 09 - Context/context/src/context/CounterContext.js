// 1 - Criar contexto
import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {

	const [contador, setContador] = useState(5)

	return (
		<CounterContext.Provider value={{ contador, setContador }}>
			{children}
		</CounterContext.Provider>
	)
}
