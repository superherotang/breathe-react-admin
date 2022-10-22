const Login = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12'>
      <div className='xs:p-0 mx-auto p-10 md:w-full md:max-w-md'>
        <h1 className='mb-5 text-center text-2xl font-bold'>Your Logo</h1>
        <div className='w-full divide-y divide-gray-200 rounded-lg bg-white shadow'>
          <div className='px-5 py-7'>
            <label className='block pb-1 text-sm font-semibold text-gray-600'>E-mail</label>
            <input type='text' className='mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm' />
            <label className='block pb-1 text-sm font-semibold text-gray-600'>Password</label>
            <input type='text' className='mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-sm' />
            <button
              type='button'
              className='inline-block w-full rounded-lg bg-blue-500 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-600 hover:shadow-md focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
            >
              <span className='mr-2 inline-block'>Login</span>
            </button>
          </div>
          <div className='py-5'>
            <div className='grid grid-cols-2 gap-1'>
              <div className='whitespace-nowrap text-center sm:text-left'>
                <button className='mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'>
                  <span className='ml-1 inline-block'>Forgot Password</span>
                </button>
              </div>
              <div className='whitespace-nowrap text-center  sm:text-right'>
                <button className='mx-5 cursor-pointer rounded-lg px-5 py-4 text-sm font-normal text-gray-500 ring-inset transition duration-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'>
                  <span className='ml-1 inline-block'>Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
