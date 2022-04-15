import { createContext, useMemo, useState } from 'react'
import Head from 'next/head'
import EmotionWheel from '../../../components/moodlog/emotionwheel/emotionwheel'
import Wheel from '../../../components/moodlog/emotionwheel/wheel/wheel'
import Plutchik from '../../components/moodlog/plu/plutchikWheel'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { EmojiHappyIcon, XIcon } from '@heroicons/react/outline'
import styles from '../../../components/moodlog/moodSlider.module.css'

const experimental = () => {
  const [open, setOpen] = useState(false)
  const [selectedEmotion, setSelectedEmotion] = useState()
  const [selectedValence, setSelectedValence] = useState()
  const [selectedArousal, setSelectedArousal] = useState()
  const [selectedControlability, setSelectedControlability] = useState()
  const [selectedUtility, setSelectedUtility] = useState()
  let emotions = [
    'Anger',
    'Fear',
    'Sadness',
    'Happiness',
    'Disgust',
    'Hope',
    'Love',
    'Hate',
    'Contempt',
    'Guilt',
    'Compassion',
    'Shame',
    'Gratefulness',
    'Envy',
    'Disappointment',
    'Jealousy',
  ]

  return (
    <div className="py-6">
      <Head>
        <title>Mood Tracker</title>
        <meta property="og:title" content="Mood Tracker" key="title" />
      </Head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="rounded-xl p-4 py-4 shadow-lg md:w-1/2">
          <h1 className="text-xl font-semibold">Emotion</h1>
          <div onClick={() => setOpen(true)} className="cursor-pointer">
            <span className="">
              {selectedEmotion ? (
                <span className='text-lg hover:text-gray-700'>{selectedEmotion}</span>
              ) : (
                <button className="inline-flex rounded-lg border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
                  <EmojiHappyIcon className='w-6 h-6 mr-2 my-auto text-center align-middle'></EmojiHappyIcon>
                  <span>Select an emotion</span>
                </button>
              )}
            </span>
          </div>
          <div className="my-2">
            <h1 className="text-xl font-semibold">Valence</h1>
            <h4 className="text-lg">
              How pleasant or unpleasant is the emotion?
            </h4>
            <h5 className="mb-4 text-xs text-gray-600">
              0 being the most unpleasant and 100 being the most pleasant
            </h5>

            <input
              className={styles.slider}
              value={selectedValence}
              onChange={(e) => {
                setSelectedValence(parseInt(e.target.value))
              }}
              type="range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
            />
            {selectedValence}
          </div>
          <div className="my-2">
            <h1 className="text-xl font-semibold">Arousal</h1>
            <h4 className="text-lg">
              How much do you experience the emotion as calm or aroused?
            </h4>
            <h5 className="mb-4 text-xs text-gray-600">
              0 being the most calm and 100 being the most aroused
            </h5>

            <input
              className={styles.slider}
              value={selectedArousal}
              onChange={(e) => {
                setSelectedArousal(parseInt(e.target.value))
              }}
              type="range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
            />
            {selectedArousal}
          </div>
          <div className="my-2">
            <h1 className="text-xl font-semibold">Controlability</h1>
            <h4 className="text-lg">
              How much you are able to control a particular emotion in the sense
              that it does not influence your thinking or behavior?
            </h4>
            <h5 className="mb-4 text-xs text-gray-600">
              0 being no control and 100 being in complete control
            </h5>

            <input
              className={styles.slider}
              value={selectedControlability}
              onChange={(e) => {
                setSelectedControlability(parseInt(e.target.value))
              }}
              type="range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
            />
            {selectedControlability}
          </div>
          <div className="my-2">
            <h1 className="text-xl font-semibold">Utility</h1>
            <h4 className="text-lg">
              How much you perceive that the emotion is harmful or beneficial
              for you?
            </h4>
            <h5 className="mb-4 text-xs text-gray-600">
              0 being the most harmful and 100 being the most beneficial
            </h5>

            <input
              className={styles.slider}
              value={selectedUtility}
              onChange={(e) => {
                setSelectedUtility(parseInt(e.target.value))
              }}
              type="range"
              min="0"
              max="100"
              step="1"
              id="customRange3"
            />
            {selectedUtility}
          </div>
          {/* <Plutchik></Plutchik> */}
          {/* <EmotionWheel></EmotionWheel>
            <Wheel></Wheel> */}
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={setOpen}
          >
            <div className="relative inset-0 overflow-hidden">
              {/* <Dialog.Overlay className="absolute inset-0" /> */}
              <Dialog.Overlay className="fixed inset-0" />

              <div className="pointer-events-none fixed inset-y-10 flex max-w-full pl-10 md:translate-x-1/2 lg:translate-x-full">
                <Transition.Child
                  as={Fragment}
                  // enter="transition-opacity duration-75"
                  // enterFrom="opacity-0"
                  // enterTo="opacity-100"
                  // leave="transition-opacity duration-150"
                  // leaveFrom="opacity-100"
                  // leaveTo="opacity-0"
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-1/4 opacity-0"
                  enterTo="translate-x-0 opacity-100"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0 opacity-100"
                  leaveTo="-translate-x-1/4 opacity-0"
                >
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            {' '}
                            Select an emotion{' '}
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <div
                            className="grid border-2 border-dashed border-gray-200"
                            aria-hidden="true"
                          >
                            {emotions.map((emotion) => (
                              <button
                                onClick={() => {
                                  setSelectedEmotion(emotion)
                                  setOpen(false)
                                }}
                                className="m-2 my-2 h-10 items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-center text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                {emotion}
                              </button>
                            ))}
                          </div>
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* /End replace */}
      </div>
    </div>
  )
}

export default experimental
