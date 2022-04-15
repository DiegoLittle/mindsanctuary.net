import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { CalendarIcon, InboxIcon, LightBulbIcon, SparklesIcon } from "@heroicons/react/outline";
import Lotus from '../icons/lotus';

const solutions = [
  {
    name: 'Mood Tracker',
    description: 'Track your moods on a calendar and write in a journal to find patterns in your moods and mental state over time.',
    href: '/features/mood-tracker',
    icon: CalendarIcon,
  },
  {
    name: 'Psychometrics',
    description: 'Take mental health questionaires and psychometric tests such as anxiety, depression, and personality tests to gain a deeper insight into your health and mind.',
    href: '/features/psychometrics',
    icon: LightBulbIcon
  },
  { name: 'Stress Management',
   description: "Relieve your stress, improve your mood, and calm your mind with our guided stress-management exercises",
    href: '/features/stress-management',
     icon: Lotus, },

]
const callsToAction = [
  // { name: 'Watch Demo', href: '#', icon: PlayIcon },
  // { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-gray-900' : 'text-gray-500',
              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fountain-blue-500'
            )}
          >
            <span>Features</span>
            <ChevronDownIcon
              className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                    >
                      <item.icon color='stroke-fountain-blue-600' className="flex-shrink-0 h-6 w-6 text-fountain-blue-600" aria-hidden="true" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                {/* <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  {callsToAction.map((item) => (
                    <div key={item.name} className="flow-root">
                      <a
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">{item.name}</span>
                      </a>
                    </div>
                  ))}
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}