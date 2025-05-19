import { useState } from "react";
import axios from "axios";
import logo from "../assets/kise-logo.jpg"; // adjust path if needed

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
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl w-full max-w-2xl rounded-2xl px-10 py-12">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="KISE Logo" className="h-20 w-auto object-contain" />
        </div>

        <h2 className="text-2xl font-bold text-[#800000] mb-8 text-center">
          KENYA INSTITUTE OF SOFTWARE ENGINEERING AND PROFESSIONAL STUDIES
        </h2>

        <div className="flex justify-center mb-8">
          <button
            type="button"
            className={`px-5 py-2 rounded-l-full transition ${
              userType === "student"
                ? "bg-[#800000] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setUserType("student")}
          >
            Student
          </button>
          <button
            type="button"
            className={`px-5 py-2 rounded-r-full transition ${
              userType === "employee"
                ? "bg-[#800000] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setUserType("employee")}
          >
            Employee
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
            required
          />

          {userType === "student" && (
            <>
              <input
                type="text"
                name="admission_number"
                placeholder="Admission Number"
                onChange={handleChange}
                className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              />
              <input
                type="text"
                name="course"
                placeholder="Course"
                onChange={handleChange}
                className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
              <input
                type="text"
                name="student_group"
                placeholder="Student Group"
                onChange={handleChange}
                className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
              />
            </>
          )}

          {userType === "employee" && (
            <>
              <select
                name="role"
                onChange={handleChange}
                className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="coordinator">Course Coordinator</option>
                <option value="trainer">Trainer</option>
              </select>

              <input
                type="text"
                name="employee_number"
                placeholder="Employee Number"
                onChange={handleChange}
                className="w-full bg-gray-50 px-4 py-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#800000]"
                required
              />
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[#8B4513] hover:bg-[#6B3210] transition text-white py-3 rounded-md font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;