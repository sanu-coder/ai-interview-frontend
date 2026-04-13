import React, { useState } from 'react'
import Step1SteUp from '../Components/Step1SteUp';
import Step2Interview from '../Components/Step2Interview';
import Step3Report from '../Components/Step3Report';

const InterviewPage = () => {
  const [step, setStep] = useState(1);
  const [interviewData, setInterviewData] = useState(null);
    return (
    <div className='min-h-screen bg-gray-50'>
        {step === 1 && (
                <Step1SteUp onStart={(data) => {
                    setInterviewData(data);
                    setStep(2);
                }}/>
        )}
        {step === 2 && (
            <Step2Interview interviewData={interviewData}
            onFinish={(report) =>{ 
                setInterviewData(report);
                setStep(3);
            }}/>
        )}
        {step === 3 && (
            <Step3Report report={interviewData} />
        )}
    </div>
  )
}

export default InterviewPage