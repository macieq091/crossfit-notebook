import classes from '../ui/Input.module.css'
const Input = () => {
	return (
		<form className={classes.form}>
			<label htmlFor='ExerciseName'>Insert an exercise</label>
			<input />
			<button>Add Exercise</button>
			
		</form>
	)
}

export default Input
