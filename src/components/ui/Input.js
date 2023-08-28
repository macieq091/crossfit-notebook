// import classes from '../ui/Input.module.css'
const Input = () => {
	return (
		<div className="flex w-full pb-5 pt-5 bg-orange-100 font-['Permanent_marker'] ">
			<form className="flex flex-col items-center m-auto pb-5 pt-5 w-4/5 h-4/5 bg-orange-100 border-2 border-orange-200">
			<label htmlFor='ExerciseName' className="h-10 w-auto flex place-content-center rounded border-0 bg-inherent px-3 py-[0.32rem] leading-[1.6] outline-none overflow-hidden ">Insert an exercise</label>
			<input type="text" className="min-h-[auto] w-1/2 m-10 rounded-2xl border-0 bg-orange-200 px-3 py-[0.32rem] leading-[1.6] outline-none" />
			<button className="justify-center w-auto p-3 bg-orange-300 rounded-2xl cursor-pointer md: w:1/4
			">Add Exercise</button>
		</form>

		</div>
		
	)
}

export default Input
