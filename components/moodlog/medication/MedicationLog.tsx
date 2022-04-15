import { PlusIcon, SaveIcon, XIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import MedicationCombobox from '../medication/medsCombobox'
import DeleteModal from '../../modals/deleteModal'

type Props = {}

interface medication{
  name:String
  dose:Number,
  daily_frequency:Number
}

const MedicationLog = (props: Props) => {
  const [medications,setMedications] = useState([])
  useEffect(()=>{
    async function fetchMeds(){
      let res = await fetch('/api/medication')
      let data = await res.json()
      setMedications(data)
    }
    fetchMeds()
  },[])

  return (
    <div>
      {medications.map((med)=>
            <MedicationCard med={med} setMedications={setMedications}></MedicationCard>
      )}
      <AddMedication setMedications={setMedications}></AddMedication>

    </div>
  )
}

export default MedicationLog

function MedicationCard({med,setMedications}){
  const [showModal,setShowModal] = useState(false)

  async function stopMedication(){
    // API request to change a property called archived to true?
    let body = med
    let res = await fetch('/api/medication',{
      method:'DELETE',
      body:JSON.stringify(body)
    })
    let data = await res.json()
    setMedications([])
  }
  return(
    <div className='my-4 p-2 shadow-md rounded-lg w-1/2'>
      <DeleteModal
      confirmedDelete={stopMedication}
      title={`Stop tracking ${med.name}`}
      setOpen={setShowModal}
      open={showModal}
      message={"Are you sure you want to stop tracking this medication? Your medication history will still be saved."}></DeleteModal>
      <div className='flex'>
      <div className=' w-11/12 font-semibold text-lg'>
        {med.name}
      </div>
      <XIcon 
      onClick={()=>setShowModal(true)}
      className='cursor-pointer w-5 h-5 ml-auto hover:bg-gray-100 hover:scale-105 rounded-full'></XIcon>

      </div>
      <div>
        {med.dose} mg
      </div>
      <div>
        Taken {med.daily_frequency} time daily
      </div>
      
    </div>
  )
}

function AddMedication({setMedications}) {
  const [medicationName,setMedicationName] = useState("")
  const [dose, setDose] = useState("")
  const [countFrequency, setCountFrequency] = useState(1)
  const [showMedForm, setShowMedForm] = useState(false)

  async function submitSaveMedication(){
    let body = {
      name: medicationName,
      dose: dose,
      countFrequency:countFrequency
    }
    let res = await fetch("/api/medication",{
      method:"POST",
      body:JSON.stringify(body)
    })
    let data = await res.json()
    setShowMedForm(false)
    setMedications(medications=>
      [...medications,data]
      )
  }
  return (
    <>
    {showMedForm?    <form onSubmit={(e)=>{
      e.preventDefault()
      submitSaveMedication()
    }} className='border p-2 rounded-lg'>

    <label className="w-full text-gray-700 text-sm font-semibold">Medication</label>

    <MedicationCombobox setMedicationName={setMedicationName}></MedicationCombobox>
    <div className='flex mt-4'>
      <div className='inline'>
        <label className="w-full text-gray-700 text-sm font-semibold">Dose (mg)</label>

        <input required onChange={(e) => setDose(e.target.value)} type="text" className='block p-2 rounded-lg shadow-md'></input>
      </div>
      <div className='ml-8 inline'>
        <label className="block text-gray-700 text-sm font-semibold mb-1">Frequency</label>

        <input className="w-16 focus:outline-none text-center font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default items-center text-gray-700  outline-none p-2 rounded-lg shadow-md"
          onChange={(e) => {
            if (e.target.value >= 1) {
              setCountFrequency(e.target.value)
            }
          }} type="number" value={countFrequency}></input>
        <span className='ml-4'>time(s) daily</span>

        {/* 
  <input type="text" className='inline p-2 rounded-lg shadow-md' ></input>
  <span className='inline'>times daily</span> */}
      </div>
    </div>
    <div>
      <button type='submit' className='mt-4 flex shadow-md rounded-lg p-2 hover:bg-fountain-blue-600 bg-fountain-blue-500 text-white font-medium'>
        {/* <SaveIcon className='fill-white my-auto h-5 w-5 text-fountain-blue-500 group-hover:text-gray-500 mr-1'></SaveIcon> */}
        Save Medication
        </button>
    </div>
  </form>:
  <div className='my-2'>
  <button onClick={()=>setShowMedForm(true)} className='flex shadow-md rounded-lg p-2 hover:bg-gray-50'>
    <PlusIcon className='my-auto h-5 w-5 text-fountain-blue-500 group-hover:text-gray-500 mr-1'></PlusIcon>
    Add a medication
  </button>
</div>
}</>




  )
}