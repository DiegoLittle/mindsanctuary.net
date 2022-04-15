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
        <meta name="description" content="A mood disorder is a mental disorder characterized by a disturbance in a person’s mood. The disturbances are usually an abnormally elevated mood or abnormally depressed mood. Bipolar disorder often manifests itself as episodes of mania and depression. Depression is a prolonged period of low mood and aversion to activity." />
        <meta property="og:description" content="A mood disorder is a mental disorder characterized by a disturbance in a person’s mood. The disturbances are usually an abnormally elevated mood or abnormally depressed mood. Bipolar disorder often manifests itself as episodes of mania and depression. Depression is a prolonged period of low mood and aversion to activity." />
        <meta name="twitter:description" content="A mood disorder is a mental disorder characterized by a disturbance in a person’s mood. The disturbances are usually an abnormally elevated mood or abnormally depressed mood. Bipolar disorder often manifests itself as episodes of mania and depression. Depression is a prolonged period of low mood and aversion to activity." />
      </Head>
       
        <div>
            <article className="md:mx-auto mx-8 max-w-2xl  prose md:prose lg:prose-xl mb-32">
                <h1 id="mood-disorders">Mood Disorders</h1>
                <h3 id="what-is-a-mood-disorder-">What is a mood disorder?</h3>
                <p>A mood disorder is a mental disorder characterized by a disturbance in a person’s <Link href="https://mindsanctuary.net/library/mood">mood</Link>. The disturbances are usually an abnormally elevated mood or abnormally depressed mood. Bipolar disorder often manifests itself as episodes of mania and depression. Depression is a prolonged period of low mood and aversion to activity. </p>
                <h3 id="categories-of-mood-disorders">Categories of mood disorders</h3>
                <p>The most common types of mood disorders are depressive disorders and bipolar disorders but can often be induced by substances like stimulants, alcohol, and benzodiazepines. </p>
                <h3 id="bipolar-disorders">Bipolar Disorders</h3>
                <p>Bipolar disorders are characterized by mood swings between a period of abnormally elevated mood called mania followed by a period of abnormally depressed mood called depression. During manic phases, the individual often has high energy, grandiosity, decreased need for sleep (insomnia), and can often lose touch with reality. During depressive periods, the individual may lose interest in activities they previously enjoyed, have low self-esteem, and develop changes in eating and sleep.</p>
                <h3 id="depressive-disorders">Depressive Disorders</h3>
                <p>Major Depressive Disorder is when an individual has one or more major depressive episodes. During these depressive episodes, the individual may lose interest in activities they previously enjoyed, have low self-esteem, and develop changes in eating and sleep. There is also an increased risk for suicide during these episodes</p>
                <h3 id="treatment-for-mood-disorders">Treatment for mood disorders</h3>
                <p>Therapy and medications are the most common and effective treatments for mood disorders. <Link href="https://mindsanctuary.net/blog/cogntive-behavioral-therapy">Cognitive-behavioral therapy</Link> and antidepressants can be effective treatments for depression. Bipolar disorder is often treated with mood stabilizers, anti-psychotics, or lithium.</p>
                <h3 id="sources">Sources</h3>
                <p><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2796427/">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2796427/</a></p>

            </article>
        </div>
        </>
    )
}

export default MoodDisorders