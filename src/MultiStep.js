import React from "react";
import { WarmUp, Strength, WOD} from './components/steps/Steps'
import StepZilla from "react-stepzilla"

const steps = [
    { name: 'WarmUp', Component: <WarmUp />},
    { name: 'Strenght', Component: <Strength />},
    { name: 'WOD', Component: <WOD />}
]

const MultiSteps = () => {
    return (
        <div className='step-progress'>
            <StepZilla steps={steps} />
        </div>
    );
}
export default MultiSteps;


