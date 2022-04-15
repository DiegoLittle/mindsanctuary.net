/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import FlyoutMenu from '../../components/features/flyout-menu'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  // { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  {
    name: 'Blog',
    href: '/blog',
    // icon: EmojiHappyIcon,
    // current: false,
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'About',
    href: '/about'
  }
]

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="/" className="flex">
            <span className="sr-only font-semibold text-2xl ">Mind Sanctuary</span>
            <img
              className="w-auto h-8"
              src="/logo-cropped.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-fountain-blue-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">

            {navigation.map((link)=> 
            <a href={link.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
              {link.name}
            </a>
            )}
            <FlyoutMenu></FlyoutMenu>
            {/* 
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs
            </a> */}
          </Popover.Group>
          <div className="flex items-center md:ml-12">
              <Link href="/auth/signin">
            <a className="text-base text-center font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            </Link>
            <Link href="/auth/signup">
            <a
              className="ml-8 inline-flex text-center items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-fountain-blue-600 hover:bg-fountain-blue-700"
            >
              Sign up
            </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 px-5">
              <div className="flex items-center justify-between">
                <Link href='/'>
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/logo.svg"
                    alt="Mind Sanctuary"
                  />
                </div>
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-inset focus:ring-fountain-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

            </div>
            <div className="py-6 px-5">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            {navigation.map((link)=> 
            <Link key={link.name} href={link.href}>
            <a  className="text-base font-medium text-gray-500 hover:text-gray-900">
              {link.name}
            </a>
            </Link>
            )}
            </div>
              {/* <div className="grid grid-cols-2 gap-4">
              </div> */}
              <div className="">
              <a href="/auth/signin" className="my-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-500 hover:text-gray-900 bg-gray-100">
                    Sign in
                  </a>
                <a
                  href="/auth/signup"
                  className="my-2 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-fountain-blue-600 hover:bg-fountain-blue-700"
                >
                  Sign up
                </a>
                {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
