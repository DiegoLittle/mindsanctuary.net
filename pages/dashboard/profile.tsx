import MoodLog from '../../components/moodlog/moodlog'
import 'dayjs'
import * as dayjs from 'dayjs'
import { createContext, useMemo, useState } from 'react'
import MoodCalendar from '../../components/moodlog/moodsCalendar'
import DeleteUserModal from '../../components/modals/deleteUserModal'

const profile = () => {
  const [time, setTime] = useState()
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setOpenDeleteModal(true)}
        >
          Delete Account
        </button>
        <DeleteUserModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
        ></DeleteUserModal>
        {/* Replace with your content */}
        {/* /End replace */}
      </div>
    </div>
  )
}

export default profile
