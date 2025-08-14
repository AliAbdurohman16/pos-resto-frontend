import React from "react";
import { useSelector } from "react-redux";
import { getGrandTotalPrice } from "../../redux/slices/cartSlice";

const Bill = () => {

    const cartData = useSelector(state => state.cart);
    const grandTotal = useSelector(getGrandTotalPrice);
    const taxRate = 11; // Assuming tax is 11%
    const tax = (grandTotal * taxRate) / 100;
    const total = grandTotal + tax;

    return (
        <>
            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Items({cartData.length})</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">
                    {
                        grandTotal.toLocaleString('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })
                    }
                </h1>
            </div>

            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-xs text-[#ababab] font-medium mt-2">Tax({taxRate}%)</p>
                <h1 className="text-[#f5f5f5] text-md font-bold">
                    {
                        tax.toLocaleString('id-ID', { 
                            style: 'currency', 
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })
                    }
                </h1>
            </div>

            <div className="flex items-center justify-between px-5 mt-2">
                <p className="text-2xl text-[#ababab] font-bold mt-2">Total</p>
                <h1 className="text-[#f5f5f5] text-2xl font-bold">
                    {
                        total.toLocaleString('id-ID', {
                            style: 'currency', 
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })
                    }
                </h1>
            </div>

            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Cash</button>
                <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">Online</button>
            </div>

            <div className="flex items-center gap-3 px-5 mt-4">
                <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold text-lg">Print Receipt</button>
                <button className="bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg">Place Order</button>
            </div>
        </>
    );
}

export default Bill;