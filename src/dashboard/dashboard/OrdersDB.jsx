import { Link } from "react-router-dom";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "../../redux/features/order/orderApi";
import toast from "react-hot-toast";

const OrderDb = () => {
  const { data: orders, isLoading } = useGetOrdersQuery();
  const [deleteOrder] = useDeleteOrderMutation();

  const handleDeleteOrder = (id) => {
    console.log(id);
    deleteOrder(id);
    toast.error("Deleted");
  };

  return (
    <div className="mx-auto bg-slate-100 border w-full h-full p-2">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-xl font-bold sm:text-2xl uppercase">
            Order Table
          </h3>
        </div>

        <div className="mt-3 md:mt-0">
          <Link
            to="/dashboard/add-movie"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add Product
          </Link>
        </div>
      </div>

      <div className="mt-10 shadow-sm border rounded-lg overflow-x-auto">

        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 bg-slate-300 font-medium border-b">
            <tr>
              <th className="px-4">SL</th>
              <th className="py-3 px-6">Customer Details</th>
              <th className="py-3 px-6">Products</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Order Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {isLoading ? (
            "Loading..."
          ) : (
            <tbody className="divide-y">
              {orders?.data?.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50 even:bg-white items-center">
                  <td className="px-4">{idx + 1}</td>

                  <td className="px-6 py-4 flex items-center gap-x-2">
                    {/* <img
                      src={item?.image}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full"
                    /> */}
                    <div className="w-[50px] h-[50px] rounded-full bg-green-200"></div>
                    <div className="text-sm]">
                      <p className="leading-[15px]">{item?.user?.user_name}</p>
                      <p className="leading-[15px]">{item?.user?.user_phone}</p>
                      <p className="leading-[15px]">
                        {item?.user?.user_address}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.products?.map((product, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <p>{product?.title}</p>
                        <p>x {product?.quantity}</p>
                      </div>
                    ))}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    {item?.total} tk
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(item?.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })}
                  </td>

                  <td className="text-right px-6 whitespace-nowrap">
                    <Link to={`/dashboard/invoice/${item?._id}`}
                    
                      className="py-2 px-3 font-medium text-green-600 hover:text-green-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Preview
                    </Link>
                    <a
                      href="javascript:void()"
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>
                    <button
                      onClick={() => handleDeleteOrder(item?._id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        
      </div>
    </div>
  );
};

export default OrderDb;
