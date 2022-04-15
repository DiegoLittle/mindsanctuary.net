import React from 'react'
import Header from '../../components/features/Header'
type Props = {}




const StressManagement = (props: Props) => {
    return (
        <div>
            <Header title={"Stress Management Exercises"} description={"Relieve your stress, improve your mood, and calm your mind with our guided stress-management exercises"}></Header>
            <div className='prose lg:prose-lg max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:justify-between'>
                <h2>Box Breathing</h2>
                <div>To begin a box breathing exercise, navigate to the Exercises page inside of the app. On the exercises page you will see the Box Breathing exercise and select it by clicking it. You can then click or tap the circle in the middle to follow the guided breathing with the animation. <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2017.00874/full">Box Breathing exercises has been shown to reduce cortisol levels, improve mood, and improve attention.</a></div>
                {/* <h2>Mood Journal</h2>
            <div>The mood journal is a simple space for you to log specifics about how you're feeling, events in the day, and any other thoughts that you want to record. All of the information is kept private so you can use it as a diary. To read or edit any past journal entry, you can click on the day in the calendar and it will load.</div>
            <h2>Symptoms Tracking</h2>
            <div>Track your symptoms of anxiety and depression in order to gather a deeper insight into the sources and changes in your mood. Some days you may feel less depressed but more anxious so your overall mood doesn't change. This allows you to see more specifics about changes in your mental health.</div> */}
            </div>
        </div>
    )
}

export default StressManagement

