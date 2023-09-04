import react from 'react'
import Button from '../ui/Button'

const WarmUp = () => {
	return (
	
		<div className="warmUp-container flex flex-col items-center w-full h-full m-5 p-5 bg-orange-100 font-['Permanent_marker']">
			<label htmlFor='warmUp' className='text-2xl'>
				Series: <span id='value'></span>
			</label>
			<input
				className='seriesNumber flex flex-col items-center m-5 p-5 w-4/5 h-1/5 bg-orange-100 border-2 border-orange-200 rounded-xl'
				id='seriesNumber'
				type='range'
				min='0'
				max='99'
				value='0'
			/>
			<label htmlFor='warmUp' className='text-2xl'>
				Reps: <span id='value'></span>
			</label>
			<input className='repetitionsNumber flex flex-col items-center m-5 p-5 w-4/5 h-1/5 bg-orange-100 border-2 border-orange-200 rounded-xl' id='repetitionsNumber' type='range' min='0' max='99' value='0'  />
			<label htmlFor='warmUp' className='mt-5 pt-5 text-2xl'>
				Insert an exercise<span id='value'></span>
			</label>
			<input
				className='flex flex-col items-center m-5 p-3 w-4/5 h-1/6 bg-orange-200 border-2 border-orange-200 rounded-xl'
				type='text'
				placeholder='insert an exercise'
			/>
			<Button>Add Workout</Button>
		</div>
	)
}
export default WarmUp
