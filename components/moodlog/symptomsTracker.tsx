import React, { useEffect } from 'react'
import styles from './moodSlider.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { setMoodvalue, selectMoodlog, setAllSymptoms, setSymptom } from '../../store/slices/moodLogSlice'

type Props = {}

let symptoms = [
    {
        name: "Depression",
        value: 4
    },
    {
        name: "Anxiety",
        value: 4
    }
]

const SymptomsTracker = (props: Props) => {
    const moodlog = useSelector(selectMoodlog)
    const dispatch = useDispatch()

    if (!moodlog.symptoms) {
        if(typeof(moodlog.id)!='undefined'){
dispatch(setAllSymptoms(symptoms))
        }
        
    }


    return (
        <div >
            { moodlog.symptoms &&
                <div>
                    <div className='text-center text-xl '>Symptoms Tracking</div>
                    <div className='flex'>
                        {moodlog.symptoms.map((symptom) =>
                            <div className='w-1/2 mx-2'>
                                <div className='text-center mb-2'>{symptom.name}</div>
                                <input
                                    type="range"
                                    onChange={(e) => {
                                        let myObject = {}
                                        let name = symptom.name
                                        let value = e.target.value
                                        myObject[name] = value
                                        let test = dispatch(setSymptom(myObject))
                                        fetch("/api/moodlog",{
                                            method:"PUT",
                                            body:JSON.stringify(moodlog)
                                        })
                                        
                                    }}
                                    value={symptom.value}
                                    className={styles.symptomSlider + ' symptomSlider'}
                                    min="0"
                                    max="8"
                                    step="1"
                                    id="customRange3"
                                />
                            </div>
                        )}
                    </div>
                </div>

            }
        </div>
    )
}

export default SymptomsTracker
