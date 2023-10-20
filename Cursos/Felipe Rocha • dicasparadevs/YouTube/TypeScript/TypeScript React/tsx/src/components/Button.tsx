// React
import { FunctionComponent, ReactNode, useMemo, useState } from 'react'

interface ButtonOptions {
	variant: 'outlined' | 'normal'
}

interface ButtonProps {
	options?: ButtonOptions
	theme?: 'dark' | 'light'
	onClick?: () => void
	children: ReactNode
}

interface Task {
	id: string
	isCompleted: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ children }) => {

	const [tasks, setTasks] = useState<Task[]>([])
	const [count, setCount] = useState<number>(0)

	const completedTasks = useMemo(() => {
		return tasks.filter(task => task.isCompleted)
	}, [tasks])

	console.log(completedTasks)

	return (
		<button>{children}</button>
	)
}

export default Button
