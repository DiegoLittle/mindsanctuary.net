import React from 'react'
import Header from '../../components/features/Header'
type Props = {}




const MoodTracker = (props: Props) => {
  return (
    <div>
        <Header title={"Mood Tracker"} description={"Track your moods on a calendar, record your feelings in a journal, and track your symptoms to find patterns in your moods and mental state over time."}></Header>
        <div className='prose lg:prose-lg max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8 lg:justify-between'>
        <h2>Mood Calendar</h2>
            <div>Use the mood slider to select how your feeling according to the emoji. As you record your moods, the calendar will show the mood for any given day. This can help you see patterns in your mood and build a log of your emotional history. You can click on any past day on the calendar in order to read or edit the mood and journal entry for that day.</div>
            <h2>Mood Journal</h2>
            <div>The mood journal is a simple space for you to log specifics about how you're feeling, events in the day, and any other thoughts that you want to record. All of the information is kept private so you can use it as a diary. To read or edit any past journal entry, you can click on the day in the calendar and it will load.</div>
            <h2>Symptoms Tracking</h2>
            <div>Track your symptoms of anxiety and depression in order to gather a deeper insight into the sources and changes in your mood. Some days you may feel less depressed but more anxious so your overall mood doesn't change. This allows you to see more specifics about changes in your mental health.</div>
        </div>
    </div>
  )
}

export default MoodTracker

