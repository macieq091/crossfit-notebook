import React, { useState } from 'react'




const Button = (props) => {
    const [page, setPage] = useState(0);

    

	return (
		<button className='button-submit items-center w-1/3 m-5 p-3 border-2 border-orange-200 rounded-2xl cursor-pointer' type='submit'>
			{props.children}
		</button>
	)
}

export default Button
