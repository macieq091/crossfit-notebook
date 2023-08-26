// import classes from '../ui/Input.module.css'
const Input = () => {
	return (
		<form class="relative mb5 w-3/5 h-1/5">
			<label htmlFor='ExerciseName' class="peer block h-10 w-5 rounded border-0 bg-inherent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0">Insert an exercise</label>
			<input type="text" class="peer block min-h-[auto] w-full rounded border-0 bg-slate-200 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus: placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" />
			<button>Add Exercise</button>
			
		</form>
	)
}

export default Input
