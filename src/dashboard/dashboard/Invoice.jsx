import "./Invoice.css";
import { ImPhone } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { FaGlobe } from "react-icons/fa";
import { useOrderDetailsQuery } from "../../redux/features/order/orderApi";
import { useParams } from "react-router-dom";


const Invoice = () => {

  const {id} = useParams();

  const {data: orderDetails } = useOrderDetailsQuery(id);

  console.log(orderDetails)

  return (
    <div className="w-full h-full flex justify-center items-center py-10 bg-slate-50">

      <div className="w-[595px] h-full invoiceBgColor py-5 shadow-md">
        <div className="w-full h-full flex flex-col justify-between bg-white py-8 px-5">

          <div className=" text-slate-800">
            <div>
              {/* ==============>> USER DETAILS <<================*/}
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-[25px] font-medium text-green-500 leading-[28px]">
                      Nature Hub
                    </h2>
                    <p className="leading-[14px] uppercase text-xs tracking-[4px]">
                      Satisfaction
                    </p>
                  </div>

                  <div>
                    <h2 className="uppercase text-[24px] text-right leading-[30px]">
                      Invoice
                    </h2>
                    <p className="leading-[20px]">Invoice No: #001</p>
                  </div>
                </div>

                <div className="mt-5  flex justify-between items-center">
                  <div>
                    <h2 className="text-[20px] font-medium leading-[30px]">
                      To: {orderDetails?.user?.user_name}
                    </h2>
                    <p className="leading-[16px] flex gap-1">
                      Address: {orderDetails?.user?.user_address}
                               {orderDetails?.user?.district && <span>, {orderDetails?.user?.district}</span>}
                               {orderDetails?.user?.division && <span className="capitalize">, {orderDetails?.user?.division}</span>}
                    </p>
                    <p className="leading-[17px]">Phone: {orderDetails?.user?.user_phone}</p>
                  </div>

                  <div className="text-right">
                    <p className="leading-[20px]">Total Due</p>
                    <h2 className="uppercase text-[20px] font-mediu leading-[30px]">
                      BDT: { orderDetails?.delivery_charge === 60 ? orderDetails?.total + 60 : orderDetails?.total} tk
                    </h2>
                    <p className="leading-[20px] ">
                      Invoice Date: {new Date(orderDetails?.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>

              {/* ==============>> PRODUCT DETAILS <<================*/}
              <div className="mt-10 w-full h-full">
                <table className="w-full table-auto text-sm text-left">
                  <thead className=" font-medium border-t border-b border-slate-800">
                    <tr>
                      <th className="py-3 pr-6">Item Description</th>
                      <th className="py-3 px-6 border-l border-slate-800">Unit Price</th>
                      <th className="py-3 px-6 border-l border-slate-800">Qty</th>
                      <th className="py-3 px-6 border-l border-slate-800">Amount</th>
                    </tr>
                  </thead>

                  <tbody>

                   {
                    orderDetails?.products?.map((product,i)=>(
                    <tr key={i}>
                      <td className="py-3 pr-6">{i+1}. {product?.title}</td>
                      <td className="py-3 px-6 border-l border-slate-800">{product?.price} tk</td>
                      <td className="py-3 px-6 border-l border-slate-800">{product?.quantity}</td>
                      <td className="py-3 px-6 border-l border-slate-800">{product?.price * product?.quantity} tk</td>
                    </tr>
                    ))
                    
                    }
            
                    <tr className="border-t border-slate-800">
                    <td className="py-3 px-6"></td>
                    <td className="py-3 px-6"></td>
                    <td className="py-3 px-6">Sub Total</td>
                    <td className="py-3 px-6">{orderDetails?.total} tk</td>
                    </tr>

                    <tr className="">
                    <td className="pb-1">Payment By (Bkash)</td>
                    <td className="pb-1 px-6"></td>
                    <td className="pb-1 px-6 border-b border-slate-800">Delivery</td>
                    <td className="pb-1 px-6 border-b border-slate-800">{(orderDetails?.delivery_charge ? orderDetails?.delivery_charge : 0)} tk</td>
                    </tr>

                    <tr>
                    <td className="py-2 flex items-center gap-[4px]"> 
                      <p>SF: <span className="font-medium">{orderDetails?.user?.sender_number}</span> ,</p> 
                      <p>TID: <span className="font-medium">{orderDetails?.user?.transactionId}</span> </p>
                    </td>
                    <td className="py-2 px-6"></td>
                    <td className="py-2 px-6 text-[18px] font-medium">Grand Total</td>
                    <td className="py-2 px-6 text-[18px] font-medium"> {orderDetails?.total + (orderDetails?.delivery_charge ? orderDetails?.delivery_charge : 0) } tk</td>
                    </tr>

                 

                  </tbody>
                </table>
              </div> 

            </div>
          </div>

          <div className="mt-16 flex justify-between items-center">

            <div className="flex items-center gap-1">
              <div className="bg-green-200 p-2"><ImPhone /></div>
              <p className="text-sm">01911209322</p>
            </div>

            <div className="flex items-center gap-1">
              <div className="bg-green-200 p-2"><ImLocation2 /></div>
              <p className="text-sm">Farmgate, Dhaka-1215</p>
            </div>
            
            <div className="flex items-center gap-1">
              <div className="bg-green-200 p-2"><FaGlobe /></div>
              <p className="text-sm">www.nature-hub.com</p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Invoice;
