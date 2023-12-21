import { useSelector } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Order = () => {
const {handleSubmit, register, formState: {errors} } = useForm();
  const { products, total } = useSelector((state) => state.cart);

  const [state, setState] = useState(false);
  console.log(state)

    const handleToggle = (value) => {
      setState(value);
  }


  // ========>> SUBMIT ORDER <<===========
  const onSubmit = (data) => {
    const payemnt = state === 1 ? "advanced" : "cash on deliver"

console.log({...data, payment: payemnt})
  }
  return (
    <>
      <div className="bg-gray-100 h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col-reverse justify-between h-full lg:flex-row">

            <div className="lg:w-2/4 bg-white h-[92vh] px-10 lg:py-6">
              <div className=" mt-2 lg:mt-0">
                <p className="lg:text-[25px] font-medium">Delivery</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="lg:mt-5">

                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("user_name")}
                    className="w-full py-2 px-4 rounded-md focus:outline-green-500 focus:ring-green-500 border border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    {...register("user_phone")}
                    className="w-full py-2 px-4 rounded-md focus:outline-green-500 focus:ring-green-500 border border-slate-400"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  {...register("user_address")}
                  className="w-full py-2 px-4 rounded-md focus:outline-green-500 focus:ring-green-500 border border-slate-400 mt-3"
                />

                <div className="flex flex-col lg:flex-row items-center mt-3 gap-3">
                  <input
                    type="text"
                    placeholder="City Name"
                    {...register("city_name")}
                    className="w-full py-2 px-4 rounded-md focus:outline-green-500 focus:ring-green-500 border border-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    {...register("postacl_code")}
                    className="w-full py-2 px-4 rounded-md focus:outline-green-500 focus:ring-green-500 border border-slate-400"
                  />
                </div>

                <div className="mt-5 mb-2">
                  <p className="lg:text-[25px] font-medium">Payment Method</p>
                </div>

  
{/* ================>>  ADVANCED PAYMENT <<================*/}

                <div className="relative">

                  <div className={`border ${state === 1 ? "border-green-500" : ""} w-full  bg-green-50 p-3 absolute z-[5] flex items-center gap-3`}>

                  <div onClick={()=> handleToggle(1)} className="w-[26px] h-[26px]  rounded-full border-2 border-slate-700 p-[2px] ">
                  <div className={`w-full h-full  rounded-full border border-slate-400 ${state === 1 ? "bg-green-500 " : "bg-white"} transform duration-500`}></div>
                  </div>

                  <p className="lg:text-[18px] font-medium">Payment with <span>Bkash/ Nagad/ Rocket</span> </p>
                  </div>

                  <div className={`w-full lg:h-[100px] py-2 lg:py-[25px] border border-green-500 border-t-0 absolute ${ state === 1 ? "translate-y-[52px]" : "translate-y-0 opacity-0"} z-[0] transform duration-300 flex flex-col justify-center items-center`}>

                    <p className="text-[18px] lg:text-[22px] flex items-center gap-x-4">Send Money: <span className="font-medium">01911-209322</span></p>

                    {
                      state === 1 &&
                      <div className="mt-2 flex flex-col lg:flex-row justify-center items-center gap-y-1 lg:gap-y-0 lg:gap-x-4 w-full">
                      <div className="lg:w-2/5 relative">
                      <input type="number" {...register("sender_number", {required: true})}  className="border w-full py-[4px] px-4 focus:outline-green-500" placeholder="Sender Number"/>
                      {errors.sender_number && <p className="text-red-400 absolute top-[-25px] left-4">Sender Number Required</p>}
                      </div>


                      <input type="text" {...register("transactionId")} className="border py-[4px] lg:w-2/5 px-4 focus:outline-green-500" placeholder="Transaction ID"/>
                    </div>
                    }
                  </div>

                </div>


{/* ================>>  CASH ON DELIVERY <<================*/}
              <div className={`relative transform duration-300 ${state === 1 ? "mt-[188px] lg:mt-[165px]" : "mt-[64px]"}`}>

                  <div className={`border ${state === 2 ? "border-green-500" : ""} w-full bg-green-50 p-3 absolute z-[5] flex items-center gap-3`}>
                  <div onClick={()=> handleToggle(2)} className="w-[26px] h-[26px] rounded-full border-2 border-slate-700 p-[2px] ">
                  <div className={`w-full h-full  rounded-full border border-slate-400 ${ state == 2  ? "bg-green-500 " : "bg-white"} transform duration-300`}></div>
                  </div>

                  <p className="text-[18px] font-medium">Cash On Delivery</p>
                  </div>
                </div>


                  <button type="submit" className="mt-[120px] bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full transform duration-150">
                    Complete Order
                  </button>
              </form>
            </div>

{/* ==================>> ORDER SUMMERY <<================== */}
            <div className=" lg:w-2/4 px-8 py-6  bg-green-50 shadow text-gray-600">
              <h1 className="font-semibold text-lg lg:text-2xl border-b lg:pb-8 ">
                Order Summary
              </h1>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {products.length}
                </span>
                <span className="font-semibold text-sm">
                  {total.toFixed(2)} Tk
                </span>
              </div>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Shipping:
                </span>
                <span className="font-semibold text-sm">
                  {(total * 0.001).toFixed(2)} Tk
                </span>
              </div>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Tax:</span>
                <span className="font-semibold text-sm">
                  {(total * 0.002).toFixed(2)} Tk
                </span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm ">
                  <span className="uppercase">Total cost</span>

                  <span>
                    {(
                      Number(total) +
                      Number(total) * 0.002 +
                      Number(total) * 0.001
                    ).toFixed(2)}
                    Tk
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
