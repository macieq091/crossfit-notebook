// import classes from '../ui/Input.module.css'
const Input = () => {
	return (
		
		<form className="flex flex-col items-center justify-center pb-10  w-screen h-100 bg-orange-100">
			<label htmlFor='ExerciseName' className="h-10 w-auto flex place-content-center rounded border-0 bg-inherent px-3 py-[0.32rem] leading-[1.6] outline-none overflow-hidden ">Insert an exercise</label>
			<input type="text" className="min-h-[auto] w-4/5 m-10 rounded-2xl border-0 bg-orange-200 px-3 py-[0.32rem] leading-[1.6] outline-none md: w:full" />
			<button className="justify-content: center w-2/5 bg-orange-300 rounded-2xl cursor-pointer
			">Add Exercise</button>
		</form>
	)
}

export default Input
