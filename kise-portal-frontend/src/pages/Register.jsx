// import { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//     const [userType, setUserType] = useState("student");
//     const [formData, setFormData] = useState({
//         full_name: "",
//         email: "",
//         password: "",
//         admission_number: "",
//         employee_number: "",
//         course: "",
//         student_group: "",
//         role: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:4000/api/auth/register", {
//                 ...formData,
//                 user_type: userType,
//             });
//             alert("Registration successful!");
//         } catch (err) {
//             console.error(err);
//             alert("Registration failed.");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
//       <div className="bg-white border shadow-lg w-full max-w-2xl rounded-lg p-8">
//         <h2 className="text-3xl font-bold text-[#800000] mb-6 text-center">KISE Portal Registration</h2>

//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-4 py-2 rounded-l-full ${
//               userType === "student" ? "bg-[#800000] text-white" : "bg-gray-200 text-gray-600"
//             }`}
//             onClick={() => setUserType("student")}
//           >
//             Student
//           </button>
//           <button
//             className={`px-4 py-2 rounded-r-full ${
//               userType === "employee" ? "bg-[#800000] text-white" : "bg-gray-200 text-gray-600"
//             }`}
//             onClick={() => setUserType("employee")}
//           >
//             Employee
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="full_name"
//             placeholder="Full Name"
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//             className="w-full border px-4 py-2 rounded"
//             required
//           />

//           {userType === "student" && (
//             <>
//               <input
//                 type="text"
//                 name="admission_number"
//                 placeholder="Admission Number"
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="course"
//                 placeholder="Course"
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//               <input
//                 type="text"
//                 name="student_group"
//                 placeholder="Student Group"
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </>
//           )}

//           {userType === "employee" && (
//             <>
//               <select
//                 name="role"
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded"
//                 required
//               >
//                 <option value="">Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="coordinator">Course Coordinator</option>
//                 <option value="trainer">Trainer</option>
//               </select>

//               <input
//                 type="text"
//                 name="employee_number"
//                 placeholder="Employee Number"
//                 onChange={handleChange}
//                 className="w-full border px-4 py-2 rounded"
//                 required
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-[#8B4513] text-white py-2 rounded hover:bg-[#6b3210]"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//     );
// };

// export default Register;
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [userType, setUserType] = useState("student");
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
        admission_number: "",
        employee_number: "",
        course: "",
        student_group: "",
        role: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/auth/register", {
                ...formData,
                user_type: userType,
            });
            alert("Registration successful!");
        } catch (err) {
            console.error(err);
            alert("Registration failed.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-maroon-100 to-brown-50 flex items-center justify-center px-4 py-12">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-4xl font-semibold text-maroon-900 mb-6 text-center tracking-tight">
                    KISE Portal Registration
                </h2>

                <div className="flex justify-center mb-6">
                    <div className="inline-flex rounded-full bg-brown-100 p-1">
                        <button
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                userType === "student"
                                    ? "bg-maroon-600 text-white shadow-sm"
                                    : "text-maroon-700 hover:bg-brown-200"
                            }`}
                            onClick={() => setUserType("student")}
                        >
                            Student
                        </button>
                        <button
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                userType === "employee"
                                    ? "bg-maroon-600 text-white shadow-sm"
                                    : "text-maroon-700 hover:bg-brown-200"
                            }`}
                            onClick={() => setUserType("employee")}
                        >
                            Employee
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-maroon-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Enter your name"
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-maroon-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-maroon-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                            required
                        />
                    </div>

                    {userType === "student" && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-maroon-700 mb-1">Admission Number</label>
                                <input
                                    type="text"
                                    name="admission_number"
                                    placeholder="Enter admission number"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-maroon-700 mb-1">Course</label>
                                <input
                                    type="text"
                                    name="course"
                                    placeholder="Enter your course"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-maroon-700 mb-1">Student Group</label>
                                <input
                                    type="text"
                                    name="student_group"
                                    placeholder="Enter student group"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                                />
                            </div>
                        </>
                    )}

                    {userType === "employee" && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-maroon-700 mb-1">Role</label>
                                <select
                                    name="role"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 transition-all duration-200"
                                    required
                                >
                                    <option value="" className="text-maroon-400">Select a role</option>
                                    <option value="admin">Admin</option>
                                    <option value="coordinator">Course Coordinator</option>
                                    <option value="trainer">Trainer</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-maroon-700 mb-1">Employee Number</label>
                                <input
                                    type="text"
                                    name="employee_number"
                                    placeholder="Enter employee number"
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white border border-maroon-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500 text-maroon-900 placeholder-maroon-400 transition-all duration-200"
                                    required
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-maroon-600 text-white py-2.5 rounded-lg font-medium hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-all duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;