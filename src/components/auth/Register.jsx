import React, { useState } from "react";

const Register = () => {
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleRoleSelection = (selectedRole) => {
        setFormData({...formData, role: selectedRole});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">Employee Name</label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="bg-transparent flex-1 text-white focus:outline-none" placeholder="Enter employee name" required />
                    </div>
                </div>
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Employee Email</label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent flex-1 text-white focus:outline-none" placeholder="Enter employee email" required />
                    </div>
                </div>
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Employee Phone</label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="number" name="phone" value={formData.phone} onChange={handleChange} className="bg-transparent flex-1 text-white focus:outline-none" placeholder="Enter employee phone" required />
                    </div>
                </div>
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Password</label>
                    <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="bg-transparent flex-1 text-white focus:outline-none" placeholder="Enter password" required />
                    </div>
                </div>
                <div>
                    <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">Choose your role</label>
                    <div className="flex item-center gap-3 mt-4">
                        {["Waiter", "Cashier", "Admin"].map((role) => {
                            return (
                                <button key={role} type="button" onClick={() => handleRoleSelection(role)} 
                                className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg ${formData.role === role ? "bg-yellow-400 text-[#1f1f1f]]" : "text-[#ababab]"}`}>{role}</button>
                            )
                        })}
                    </div>
                </div>
                <button type="submit" className="w-full mt-6 py-3 rounded-lg text-lg bg-yellow-400 text-gray-900 font-bold">Sign up</button>
            </form>
        </div>
    )
}

export default Register;