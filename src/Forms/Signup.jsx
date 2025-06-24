import React, { useState } from 'react';
import { RxExit } from "react-icons/rx";


function SignupPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        country: '',

    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        alert("Signup")
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className='absolute top-5 right-8'><a href="/"> <RxExit size='30px' /></a></div>

            <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Signup Form</h2>

                {/* Personal Information */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                </div>

                {/* Account Details */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                </div>

                {/* Preferences */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Preferences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="border p-2 rounded w-full"
                            required
                        >
                            <option value="">Select Country</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                            <option value="canada">Canada</option>
                        </select>
                    </div>
                  
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default SignupPage;