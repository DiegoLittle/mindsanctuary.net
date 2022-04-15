import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
    EmojiHappyIcon,
    DocumentReportIcon,
    LogoutIcon,
    MailIcon,
  } from '@heroicons/react/outline'
  import { ChevronDownIcon } from '@heroicons/react/solid'
  import { signOut, useSession } from 'next-auth/react'
  import { useState, Fragment, createContext, useMemo, useEffect } from 'react'
  import { Dialog, Transition, Menu } from '@headlessui/react'
  import Link from 'next/link'
  import { useRouter } from 'next/router'
  import { Moodlog } from '../types'
//   import MyModal from '../onboardModal/onboardingModal'
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  const navigation = [
    // { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    {
      name: 'Email',
      href: '/admin/email',
      icon: MailIcon,
      current: false,
    },
    {
      name: 'Analytics',
      href: '/admin/analytics',
      icon: DocumentReportIcon,
      current: false,
    },
    // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]
  
  const AdminLayout = ({ children }) => {
    const [load, setLoad] = useState(false)
  
    const sessionComplete = useSession()
    const session = sessionComplete.data
    const router = useRouter()
    const [auth, setAuth] = useState(false)

    useEffect(() => {
      const fetchPosts = async (url, setData) => {
        // get the data from the api
        const data = await fetch(url)
        // convert data to json
        const json = await data.json()
        console.log(json.admin)
        // setAuth(json.admin)
        setData(json.admin)
        // return json
      }
      fetchPosts(`${process.env.NEXT_PUBLIC_HOST}/api/auth/admin`,setAuth)
    }, [])
    const [sidebarOpen, setSidebarOpen] = useState(false)
    function navigate(link) {
      router.push(link)
      setSidebarOpen(false)
    }
  
    function MyLink(props) {
      let { href, children, ...rest } = props
      return (
        <Link href={href}>
          <a {...rest}>{children}</a>
        </Link>
      )
    }
  
    return (
        <>
        {auth ? (
          <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-40 flex md:hidden"
                onClose={setSidebarOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                      <div className="flex flex-shrink-0 items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="/logo.svg"
                          alt="Mind Sanctuary"
                        />
                      </div>
                      <nav className="mt-5 space-y-1 px-2">
                        {navigation.map((item) => (
                          <button
                          className="block"
                            onClick={() => {
                              navigate(item.href)
                            }}
                            key={item.name}
                          >
                            <a
                              className={classNames(
                                router.pathname === item.href
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  router.pathname === item.href
                                    ? 'text-gray-500'
                                    : 'text-gray-400 group-hover:text-gray-500',
                                  'mr-4 h-6 w-6 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </button>
                        ))}
                      </nav>
                    </div>
  
                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                      {/* Mobile Menu */}
                      <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex w-full flex-shrink-0 border-gray-200 p-4">
                          <a href="#" className="group block flex-shrink-0">
                            <div className="flex items-center">
                              <div>
                                {session ? (
                                  <img
                                    className="inline-block h-10 w-10 rounded-full"
                                    src={session.user.image}
                                    alt=""
                                  />
                                ) : (
                                  ''
                                )}
                              </div>
                              <div className="ml-3">
                                <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                  {session ? session.user?.name : ''}
                                </p>
                                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                  View profile
                                </p>
                              </div>
                            </div>
                          </a>
                        </Menu.Button>
                        <Menu.Items className="absolute left-0 bottom-0 mb-12 mt-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a onClick={()=>navigate("/dashboard/profile")} className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}>
                                  Profile
                                </a>
                              )}
                            </Menu.Item>
                            {/* <form method="POST" action="#"> */}
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={signOut}
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                            {/* </form> */}
                          </div>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </div>
                </Transition.Child>
                <div className="w-14 flex-shrink-0">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </Dialog>
            </Transition.Root>
            <div className="flex flex-1 flex-col ">
              <div className="hidden md:fixed md:inset-y-0 md:flex md:w-48 md:flex-col lg:w-64">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                  <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="/logo-cropped.svg"
                        alt="Mind Sanctuary"
                      />
                    </div>
                    <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                      {navigation.map((item) => (
                        <Link href={item.href} key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              router.pathname === item.href
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                              'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                            )}
                          >
                            <item.icon
                              className={classNames(
                                router.pathname === item.href
                                  ? 'text-gray-500'
                                  : 'text-gray-400 group-hover:text-gray-500',
                                'mr-3 h-6 w-6 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  {/* Desktop Menu */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      {/* <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        Options
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button> */}
                      <Menu.Button className="inline-flex w-full flex-shrink-0 border-t border-gray-200 p-4">
                        <a href="#" className="group block w-full flex-shrink-0">
                          <div className="flex items-center">
                            <div>
                              {session ? (
                                <img
                                  className="inline-block h-10 w-10 rounded-full"
                                  src={
                                    session.user.image == null
                                      ? '/logo.svg'
                                      : session.user.image
                                  }
                                  alt=""
                                />
                              ) : (
                                ''
                              )}
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                {session ? session.user?.name : ''}
                              </p>
                              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                View profile
                              </p>
                            </div>
                          </div>
                        </a>
                      </Menu.Button>
                    </div>
  
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 md:left-0 lg:left-auto bottom-0 mb-12 mt-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <MyLink href="/dashboard/profile" className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block px-4 py-2 text-sm hover:bg-gray-100'
                              )}>
                                Profile
                              </MyLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={signOut}
                                type="submit"
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-700',
                                  'flex w-full px-4 py-2 text-left text-sm hover:bg-red-100 text-red-500'
                                )}
                              >
                                Sign out
                                <LogoutIcon className='h-6 w-6 my-auto ml-auto text-red-500'></LogoutIcon>
                              </button>
                            )}
                          </Menu.Item>
                          {/* </form> */}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                  
                  <a href="#" className="group block w-full flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src={session ? session.user?.image : ''}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          {session ? session.user?.name : ''}
                        </p>
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div> */}
                </div>
              </div>
              <div className="flex flex-1 flex-col md:pl-48 lg:pl-64">
                <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                  <button
                    type="button"
                    className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fountain-blue-500"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <span className="sr-only">Open sidebar</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <main className="flex-1">
                  {/* <MyModal></MyModal> */}
                  {children}
                  </main>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
        </>
    )
  }
  
  export default AdminLayout
  