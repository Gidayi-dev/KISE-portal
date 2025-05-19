import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        ...formData,
        user_type: userType,
      });

      const { user } = res.data;

      // Redirect based on user_type and role
      if (user.user_type === "student") {
        navigate("/dashboard/student");
      } else if (user.role === "admin") {
        navigate("/dashboard/admin");
      } else if (user.role === "coordinator") {
        navigate("/dashboard/coordinator");
      } else if (user.role === "trainer") {
        navigate("/dashboard/trainer");
      } else {
        alert("Unknown role!");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white border shadow-lg w-full max-w-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#800000] mb-6 text-center">KISE Portal Login</h2>

        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-full ${
              userType === "student" ? "bg-[#800000] text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setUserType("student")}
          >
            Student
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${
              userType === "employee" ? "bg-[#800000] text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setUserType("employee")}
          >
            Employee
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />

          {userType === "employee" && (
            <select
              name="role"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="coordinator">Course Coordinator</option>
              <option value="trainer">Trainer</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-2 rounded hover:bg-[#6b3210]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
