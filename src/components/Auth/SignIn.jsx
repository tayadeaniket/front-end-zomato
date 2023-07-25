import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function SignIn({ isOpen, setIsOpen }) {
    const [userData, setUserData] = useState({
        email: "",
        passord: "",
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const googleSignUp = () => {
        (window.location.http = "http://localhost:3000/google/auth");
    }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                  </Dialog.Title>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full flex items-center gap-2 text-lg inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Sign In With Google <FcGoogle />
                    </button>

                    <form className='flex flex-col gap-2'>
                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor='email'>Email</label>
                            <input 
                                type='email'
                                id="email"
                                value={userData.email}
                                onChange={handleChange}
                                placeholder='example@email.com'
                                className='w-full border border-gray-500 px-3 py-2 rounded-lg focus:border-zomato-500'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-2'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type='password'
                                id="password"
                                value={userData.passord}
                                onChange={handleChange}
                                placeholder='*******'
                                className='w-full border border-gray-500 px-3 py-2 rounded-lg focus:border-zomato-500'
                            />
                        </div>

                        <div className='w-full text-center bg-zomato-500 text-white py-2 mt-3 rounded-lg' onClick={closeModal}>
                            Sign In
                        </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
