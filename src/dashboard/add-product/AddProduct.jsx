const AddProduct = () => {

    return (
        <main className="w-full h-screen flex justify-center items-center">

            <div className="mx-auto px-4 text-gray-600 border">
                <div className="mx-auto">

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 sm:flex-row">

                            <div>
                                <label className="font-medium">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="font-medium">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm"
                                />
                            </div>

                            <div>
                                <label className="font-medium">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm"
                                />
                            </div>
                            
                            <div>
                                <label className="font-medium">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm"
                                />
                            </div>

                        </div>

                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                        <option>US</option>
                                        <option>ES</option>
                                        <option>MR</option>
                                    </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                        </div>

                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Submit
                        </button>

                    </form>

                </div>
            </div>


        </main>
    )
}

export default AddProduct;