// https://github.com/Microsoft/TypeScript-React-Starter
// https://github.com/typescript-cheatsheets/react
// https://github.com/piotrwitek/react-redux-typescript-guide

import React, { Component, ReactText } from "react"ж

// Установка окружения
npx create-react-app react-typescript --template typescript
// настройка TypeScript производится в файле tsconfig.json в корне проекта

// Зависимости для подключения TS к уже существующему проекту (package.json)

"@types/jest": "^24.0.0",
"@types/node": "^12.0.0",
"@types/react": "^16.9.0",
"@types/react-dom": "^16.9.0",
"@types/react-redux": "^7.1.7",
"@types/react-router-dom": "^5.1.3",
"typescript": "~3.7.2"

// #### Типизация функциональных компонентов ####

const Title:React.FunctionComponent = () => <h1>Hello world</h1>

const Title_1:React.FC<{title: string, count: number}> = ({title, count, children}) => <h1>{title}{count}</h1>

type PropTypes = {
	title: string,
	count?: number,
}
const Title_2 = ({title, count = 42}: PropTypes): React.ReactNode => <h1>{title}{count}</h1>

// #### Типизация классовых компонентов ####

type CounterProps = {};
type CounterState = {
	readonly counter: number, // может помочь защитить state или props от прямого изменения. В новых версиях React это уже из коробки.
}

class Counter extends Component< CounterProps, CounterState> {
	constructor(props: CounterProps){
		super(props);
	}
	static getDerivedStateFromProps (props: CounterProps, state: CounterState): Partial<CounterState> | null {
		return {...props};
	}

	componentDidMount():void {

	}

	shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState):boolean {
		return true;
	}
}

// #### Типизация событий ####

// ссылка на документацию https://github.com/typescript-cheatsheets/react#forms-and-events

const styles: React.CSSProperties = { display: 'flex', width: '100%'}; // типизация CSS-свойств
const rootRef = React.createRef<HTMLAnchorElement>(); // типизация рефов

class Form extends Component<{}, {}>{

	buttonClickHandler(e: React.MouseEvent<HTMLButtonElement>):void{}
	inputChangeHandler(e: React.ChangeEvent<HTMLInputElement>):void{}
	handleFocus(e: React.FocusEvent<HTMLInputElement>):void{}
	handleSubmit(e: React.FormEvent<HTMLFontElement>):void{}
	handleCopy(e: React.ClipboardEvent<HTMLInputElement>):void{}

	render() {
		return(
			<>
			<button onDrag={this.buttonClickHandler}></button>
			<input onChange={this.inputChangeHandler} />
			</>
		);
	}
}
