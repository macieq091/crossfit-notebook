
const Strength = () => {
    return (
	<div className="warmUp-container flex flex-col w-full h-full pb-5 pt-5 bg-orange-100 font-['Permanent_marker']">
	<label htmlFor='warmUp' className='text-2xl'>Series: <span id="value"></span></label>
	<input
	  id="seriesNumber"
	  type="range"
	  min="0"
	  max="99"
	  value="0"
	  className="seriesNumber flex flex-col items-center m-auto pb-5 pt-5 w-4/5 h-4/5 bg-orange-100 border-2 border-orange-200 rounded-xl"
	
	/>
	<label htmlFor='warmUp' className='text-2xl'>Reps: <span id="value"></span></label>
	<input
	  id="repetitionsNumber"
	  type="range"
	  min="0"
	  max="99"
	  value="0"
	  className="repetitionsNumber"
	
	/>
	<input
	  type="text"
	  placeholder="insert an exercise"
	 
	  
	/>
  </div>

    )
}
export default Strength;