
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid'
import { useSelector, useDispatch } from 'react-redux'
import { setMoodLog,selectMoodlog,setTitle,setDescription } from '../store/slices/moodLogSlice'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({moodlog}) {
  const moodLog = useSelector(selectMoodlog)
  const dispatch = useDispatch()
  
  function updateLog(){
    // dispatch(setMoodLog(moodlog))
    const body = moodLog
      fetch(`${process.env.NEXT_PUBLIC_HOST}/api/moodlog`,{
          method:"PUT",
          body:JSON.stringify(body)
      })
  }


  return (
    <form action="#" className="relative">
      <div className="p-2 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <label htmlFor="title" className="sr-only">
          Title
          
        </label>
        <input
        value={moodLog.title?moodLog.title:""}
        onInput={((e)=>{
          dispatch(setTitle(e.target.value))
          updateLog()
        })}
        type="text"
        name="title"
        id="title"
        className="block w-full text-lg font-medium placeholder-gray-500 border-0 ring-0 focus:ring-0 focus:outline-none"
        placeholder="Title"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
        value={moodLog.description?moodLog.description:""}
        onChange={((e)=>{
          dispatch(setDescription(e.target.value))
          updateLog()
        })}
        rows={2}
        name="description"
        id="description"
        className="block w-full border-0 py-0 resize-none placeholder-gray-500 sm:text-sm focus:outline-none"
        placeholder="Write a description..."
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-px">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
        <div className="flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3">
        </div>
       
      </div>
    </form>
  )
}
