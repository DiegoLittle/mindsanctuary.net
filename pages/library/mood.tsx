import Link from 'next/link'
import React from 'react'
import Head from "next/head";


type Props = {}

const MoodDisorders = (props: Props) => {
    return (
        <>
        <Head>
        <title>About Mind Sanctuary</title>
        <meta property="og:title" content="Mood" />
        <meta name="twitter:title" content="Mood" />
        <meta name="description" content="A mood is the state of a person&#39;s affect and is similar to emotions and feelings. Moods are often more general compared to emotions. Moods are typically considered positive or negative and can be a sign of other conditions. For example, someone in a low or depressed mood may also have decreased motivation and have less interest in activities they once enjoyed." />
        <meta property="og:description" content="A mood is the state of a person&#39;s affect and is similar to emotions and feelings. Moods are often more general compared to emotions. Moods are typically considered positive or negative and can be a sign of other conditions. For example, someone in a low or depressed mood may also have decreased motivation and have less interest in activities they once enjoyed." />
        <meta name="twitter:description" content="A mood is the state of a person&#39;s affect and is similar to emotions and feelings. Moods are often more general compared to emotions. Moods are typically considered positive or negative and can be a sign of other conditions. For example, someone in a low or depressed mood may also have decreased motivation and have less interest in activities they once enjoyed." />
      </Head>
        <div>
            
            <article className="md:mx-auto mx-8 max-w-2xl  prose md:prose lg:prose-xl mb-32">
                <h1 id="mood">Mood</h1>
                <h3 id="what-is-a-mood-">What is a mood?</h3>
                <p>A mood is the state of a person&#39;s affect and is similar to emotions and feelings. Moods are often more general compared to emotions. Moods are typically considered positive or negative and can be a sign of other conditions. For example, someone in a low or depressed mood may also have decreased motivation and have less interest in activities they once enjoyed.</p>
                <h3 id="what-affects-your-mood-">What affects your mood?</h3>
                <p>There are many factors that can affect one&#39;s mood.</p>
                <p><strong>Sleep</strong></p>
                <p>Getting good sleep is crucial in maintaining good physical and mental health. Sleep can play a large role in <Link href="https://mindsanctuary.net/library/mood-disorders">mood disorders</Link> like <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4935164/">bipolar disorder</a> . Sleep deprivation has also been used to treat depression.</p>
                <p><strong>Diet</strong></p>
                <p>Being full or hungry can have an effect on people&#39;s moods and the food that they eat. When people don’t eat, their body naturally signals for stress-inducing hormones like cortisol which can have a negative effect on people&#39;s moods. Depression is also linked to eating disorders like Binge Eating Disorder (BED) and Obesity.</p>
                <h3 id="mood-disorders">Mood Disorders</h3>
                <p>A <Link href="https://mindsanctuary.net/library/mood-disorders">mood disorders</Link> is a mental disorder characterized by a disturbance in a person’s mood. The disturbances are usually an abnormally elevated mood or abnormally depressed mood. Bipolar disorder often manifests itself as episodes of mania and depression. Depression is a prolonged period of low mood. </p>
                <h3 id="how-can-i-improve-my-mood-">How can I improve my mood?</h3>
                <p>Mood repair strategies can be used to help shift an individual&#39;s mood from a sad or depressed state to a more elevated and joyful one. These strategies are often used in cognitive therapy. Some examples of techniques:</p>
                <ul>
                    <li><strong>Retrieving Positive Memories</strong></li>
                    <li><strong>Listening to music</strong></li>
                    <li><strong>Social Support</strong></li>
                    <li><strong>Stress management and Relaxation</strong></li>
                    <li><strong>Exercise</strong></li>
                    <li><strong>Sex</strong></li>
                    <li><strong>Humor</strong></li>
                </ul>
                <h3 id="mood-tracking">Mood tracking</h3>
                <p>Mood tracking is the practice of recording how you’re feeling every day into a log. This log can contain an overall mood, specific symptoms, and anything else you think would be important to keep track of. As you build a history of your moods, you can see how they change over time and find out what might be influencing how you’re feeling.</p>
                <p>You can start tracking your mood by signing up to Mind Sanctuary at <strong><a href="https://mindsanctuary.net/auth/signup#">http://mindsanctuary.net/auth/signup#</a></strong></p>
                <h3 id="sources">Sources</h3>
                <p><a href="https://pubmed.ncbi.nlm.nih.gov/12531127/">https://pubmed.ncbi.nlm.nih.gov/12531127/</a></p>
                <p><a href="https://www.sciencedaily.com/releases/2018/09/180925115218.htm#:~:text=University%20of%20Guelph%20researchers%20have,Francesco%20Leri%2C%20Department%20of%20Psychology">https://www.sciencedaily.com/releases/2018/09/180925115218.htm#:~:text=University of Guelph researchers have,Francesco Leri%2C Department of Psychology</a>.</p>
                <p><a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00209/full">https://www.frontiersin.org/articles/10.3389/fpsyg.2019.00209/full</a></p>
                <p><a href="https://pubmed.ncbi.nlm.nih.gov/22023367/">https://pubmed.ncbi.nlm.nih.gov/22023367/</a></p>
                <p><a href="https://www.tandfonline.com/doi/abs/10.1080/15213260701283293">https://www.tandfonline.com/doi/abs/10.1080/15213260701283293</a></p>

            </article>
        </div>
        </>
    )
}

export default MoodDisorders