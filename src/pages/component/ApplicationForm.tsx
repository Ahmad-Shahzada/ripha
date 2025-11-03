import React, { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

interface FormData {
  name: string;
  fatherName: string;
  cnic: string;
  phone: string;
  email: string;
  address: string;
  lastQualification: string;
  marks: string;
  program: string;
}

interface FormErrors {
  name?: string;
  fatherName?: string;
  cnic?: string;
  phone?: string;
  email?: string;
  address?: string;
  lastQualification?: string;
  marks?: string;
  program?: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    fatherName: "",
    cnic: "",
    phone: "",
    email: "",
    address: "",
    lastQualification: "",
    marks: "",
    program: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const programs: string[] = [
    "FSc Pre-Medical",
    "FSc Pre-Engineering",
    "ICS",
    "ICom",
    "FA",
    "ADP Computer Science",
    "ADP Business Administration",
    "ADP Information Technology",
    "ADP Commerce",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.fatherName.trim())
      newErrors.fatherName = "Father's name is required";
    if (!formData.cnic.trim()) {
      newErrors.cnic = "CNIC is required";
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.cnic)) {
      newErrors.cnic = "CNIC format should be XXXXX-XXXXXXX-X";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number should be 11 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.lastQualification.trim())
      newErrors.lastQualification = "Last qualification is required";
    if (!formData.marks.trim()) {
      newErrors.marks = "Marks are required";
    } else {
      const marksValue = parseFloat(formData.marks);
      if (isNaN(marksValue) || marksValue < 0 || marksValue > 100) {
        newErrors.marks = "Marks should be between 0-100";
      }
    }
    if (!formData.program) newErrors.program = "Program selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/admissions",
        formData
      );
      

      setSubmitStatus({
        success: true,
        message: response.data.message || "Application submitted successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        fatherName: "",
        cnic: "",
        phone: "",
        email: "",
        address: "",
        lastQualification: "",
        marks: "",
        program: "",
      });
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      console.error("Submission error:", axiosError);

      if (axiosError.response) {
        // Server responded with error status
        const { data, status } = axiosError.response;

        if (status === 422 && data.errors) {
          // Validation errors
          const serverErrors: FormErrors = {};
          Object.entries(data.errors).forEach(([field, messages]) => {
            serverErrors[field as keyof FormErrors] = messages[0];
          });
          setErrors(serverErrors);
          setSubmitStatus({
            success: false,
            message: "Please fix the errors below",
          });
        } else {
          // Other server errors
          setSubmitStatus({
            success: false,
            message: data.message || "Server error occurred",
          });
        }
      } else if (axiosError.request) {
        // Request made but no response received
        setSubmitStatus({
          success: false,
          message: "No response from server. Please check your connection.",
        });
      } else {
        // Error in request setup
        setSubmitStatus({
          success: false,
          message: "Error submitting form",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <div className="max-w-4xl mx-auto p-8  rounded-2xl shadow-2xl border border-blue-100">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-4xl font-extrabold mb-3 text-center text-blue-700">
      Application Form
    </h2>
    <p className="text-gray-600 text-center mb-10 text-lg">
      Fill out the form below to apply for admission
    </p>

    {/* Status Messages */}
    {submitStatus && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mb-6 p-4 rounded-lg flex items-center shadow-sm ${
          submitStatus.success
            ? "bg-green-50 border border-green-200 text-green-700"
            : "bg-red-50 border border-red-200 text-red-700"
        }`}
      >
        {submitStatus.success ? (
          <CheckCircle className="h-5 w-5 mr-2" />
        ) : (
          <AlertCircle className="h-5 w-5 mr-2" />
        )}
        <span className="font-medium">{submitStatus.message}</span>
      </motion.div>
    )}

    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label
            className="block text-gray-800 font-semibold mb-2"
            htmlFor="name"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Father's Name */}
        <div>
          <label
            className="block text-gray-800 font-semibold mb-2"
            htmlFor="fatherName"
          >
            Father's Name *
          </label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.fatherName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Robert Doe"
          />
          {errors.fatherName && (
            <p className="mt-1 text-red-500 text-sm">{errors.fatherName}</p>
          )}
        </div>

        {/* CNIC */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="cnic">
            CNIC/B-Form *
          </label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.cnic ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="12345-1234567-1"
          />
          {errors.cnic && (
            <p className="mt-1 text-red-500 text-sm">{errors.cnic}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="03001234567"
          />
          {errors.phone && (
            <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Program */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="program">
            Program *
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.program ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select a program</option>
            {programs.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
          {errors.program && (
            <p className="mt-1 text-red-500 text-sm">{errors.program}</p>
          )}
        </div>

        {/* Last Qualification */}
        <div>
          <label
            className="block text-gray-800 font-semibold mb-2"
            htmlFor="lastQualification"
          >
            Last Qualification *
          </label>
          <input
            type="text"
            id="lastQualification"
            name="lastQualification"
            value={formData.lastQualification}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.lastQualification ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Matriculation"
          />
          {errors.lastQualification && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.lastQualification}
            </p>
          )}
        </div>

        {/* Marks */}
        <div>
          <label className="block text-gray-800 font-semibold mb-2" htmlFor="marks">
            Obtained Marks/Percentage *
          </label>
          <input
            type="text"
            id="marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
              errors.marks ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="85"
          />
          {errors.marks && (
            <p className="mt-1 text-red-500 text-sm">{errors.marks}</p>
          )}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-gray-800 font-semibold mb-2" htmlFor="address">
          Residential Address *
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className={`w-full px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="123 Main Street, City, Country"
        ></textarea>
        {errors.address && (
          <p className="mt-1 text-red-500 text-sm">{errors.address}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-full shadow-md transition duration-300 ${
            isSubmitting
              ? "opacity-70 cursor-not-allowed"
              : "hover:shadow-lg hover:scale-105"
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <Loader className="animate-spin h-5 w-5 mr-2" />
              Submitting...
            </div>
          ) : (
            "Submit Application"
          )}
        </motion.button>
      </div>
    </form>
  </motion.div>
</div>

  );
};

export default ApplicationForm;
