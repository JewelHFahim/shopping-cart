const Contact = () => {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">

        <div className="max-w-lg mx-auto space-y-1 sm:text-center">
          <p className="text-gray-800 text-2xl font-semibold sm:text-4xl mt-4">
            Get in touch
          </p>
          <p>We’d love to hear from you! Please fill out the form bellow.</p>
        </div>

        <div className="mt-6 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  required
                  placeholder="Jhon"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-500 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-500 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="example@gmail.com"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-500 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>         
                <input
                  type="number"
                  placeholder="+880 19110209322"
                  required
                  className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-green-500 shadow-sm rounded-lg"
                />
              
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                placeholder="Write here"
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-500 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-green-500 hover:bg-green-700 active:bg-green-700 rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;
