import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import type { FormData, StartupStage, ConsultationGoal, ProductType } from '../types/form';
import { submitContactForm } from '../services/contact';

const STARTUP_STAGES: { value: StartupStage; label: string }[] = [
  { value: 'idea', label: 'Idea stage' },
  { value: 'development', label: 'Product development stage' },
  { value: 'launched', label: 'Just launched' },
  { value: 'seeking_users', label: 'Actively seeking users' },
  { value: 'scaling', label: 'Scaling up' },
];

const CONSULTATION_GOALS: { value: ConsultationGoal; label: string }[] = [
  { value: 'validation', label: 'Validating my idea' },
  { value: 'initial_users', label: 'Getting initial users' },
  { value: 'acquisition', label: 'Improving user acquisition strategies' },
  { value: 'market_demand', label: 'Understanding market demand' },
  { value: 'other', label: 'Other (please specify)' },
];

const PRODUCT_TYPES: { value: ProductType; label: string }[] = [
  { value: 'saas', label: 'SaaS (Software as a Service)' },
  { value: 'mobile', label: 'Mobile App' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'physical', label: 'Physical product' },
  { value: 'service', label: 'Service-based business' },
  { value: 'other', label: 'Other (please specify)' },
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    startupStage: 'idea',
    consultationGoal: 'validation',
    productType: 'saas',
    otherGoal: '',
    otherProductType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast.success('Thank you! We\'ll be in touch soon.');
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          startupStage: 'idea',
          consultationGoal: 'validation',
          productType: 'saas',
          otherGoal: '',
          otherProductType: '',
          message: '',
        });
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-600">
            Book your free strategy call today and let's discuss how we can help
            you build a product people love.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="startupStage"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What stage is your startup currently in? *
            </label>
            <select
              id="startupStage"
              name="startupStage"
              required
              value={formData.startupStage}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {STARTUP_STAGES.map(stage => (
                <option key={stage.value} value={stage.value}>
                  {stage.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="consultationGoal"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What is your primary goal for this consultation? *
            </label>
            <select
              id="consultationGoal"
              name="consultationGoal"
              required
              value={formData.consultationGoal}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {CONSULTATION_GOALS.map(goal => (
                <option key={goal.value} value={goal.value}>
                  {goal.label}
                </option>
              ))}
            </select>
          </div>

          {formData.consultationGoal === 'other' && (
            <div className="mb-6">
              <label
                htmlFor="otherGoal"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Please specify your goal *
              </label>
              <input
                type="text"
                id="otherGoal"
                name="otherGoal"
                required
                value={formData.otherGoal}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="mb-6">
            <label
              htmlFor="productType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What type of product are you working on? *
            </label>
            <select
              id="productType"
              name="productType"
              required
              value={formData.productType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {PRODUCT_TYPES.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {formData.productType === 'other' && (
            <div className="mb-6">
              <label
                htmlFor="otherProductType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Please specify your product type *
              </label>
              <input
                type="text"
                id="otherProductType"
                name="otherProductType"
                required
                value={formData.otherProductType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Information (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                Book Your Free Strategy Call
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};