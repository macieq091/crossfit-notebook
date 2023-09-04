import React, { useState } from "react"
import WarmUp from "./steps/WarmUp"
import Strength from "./steps/Strength"
import WOD from "./steps/WOD"
import Button from "./ui/Button"

const Form = () => {
	const [page, setPage] = useState(0);
	

	const FormTitles = ["Warm-Up", "Strenght", "WOD"];

    const PageDisplay = () => {
        if (page === 0) {
            return <WarmUp />;
        } else if (page === 1) {
			return <Strength />;
		} else {
			return <WOD />;
		}
    }

	const onButtonNextHandler = () => {
		setPage(currPage => currPage + 1)

		
	}
	const onButtonPrevHandler = () => {
		setPage(currPage => currPage - 1)

		
	}

	return (
		<div className="parent-container flex items-center justify-center p-5 bg-orange-100">
			<div className="form flex flex-col items-center w-1/2 h-full p-5 bg-orange-100 font-['Permanent_marker'] border-2 border-orange-200 rounded-xl ">
			<div className="progressBar justify-center w-96 h-4 bg-white mb-12">
				<div style={{width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%"}} className="w-1/3 h-full bg-slate-500"></div>
			</div>
			<div className="form-container w-full h-full flex flex-col justify-center items-center">
				<div className="header text-2xl">
					<h1>{FormTitles[page]}</h1>
				</div>
				<div className="body flex flex-col items-center m-0 p-0 font-['Permanent_marker']">{PageDisplay()}</div>
				<div className="footer flex items-center">
				
					<Button disabled={page === 0} onClick={onButtonPrevHandler}>Prev</Button>
					<Button disabled={page === FormTitles.length -1} onClick={onButtonNextHandler}>Next</Button>
				</div>
			</div>
		</div>

		</div>
		
	)
}

export default Form
