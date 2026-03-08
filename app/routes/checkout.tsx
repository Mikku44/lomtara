import { useState } from "react";
import { CreditCard, Truck, User, ChevronRight, Check } from "lucide-react";
import type { Route } from "./+types/checkout";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Checkout | Lomtara Voyage Krabi" },
    { name: "description", content: "Complete your booking with Lomtara Voyage Krabi." },
  ];
}

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    guests: 1,
    specialRequests: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // Sample cart items - replace with actual cart state
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "4 Islands Tour",
      price: 1200,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=200&q=80",
    },
  ];

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceFee = 100;
  const total = cartTotal + serviceFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
          <p className="text-slate-600 mt-2">Complete your booking details below</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl">
            {[
              { num: 1, label: "Details", icon: User },
              { num: 2, label: "Payment", icon: CreditCard },
              { num: 3, label: "Confirm", icon: Check },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step >= s.num
                        ? "bg-slate-900 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <s.icon size={20} />
                  </div>
                  <span
                    className={`text-sm mt-2 font-medium ${
                      step >= s.num ? "text-slate-900" : "text-gray-500"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {index < 2 && (
                  <div
                    className={`w-24 h-1 mx-4 ${
                      step > s.num ? "bg-slate-900" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <User size={24} />
                  Contact Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                      placeholder="+66 123 456 789"
                    />
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 pt-4 border-t border-gray-100">
                  <Truck size={24} />
                  Tour Details
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Any dietary requirements, accessibility needs, or other requests..."
                  />
                </div>

                <button
                  onClick={nextStep}
                  className="w-full bg-slate-900 text-white py-4 font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  Continue to Payment
                  <ChevronRight size={20} />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <CreditCard size={24} />
                  Payment Information
                </h2>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">We accept:</p>
                  <div className="flex gap-2">
                    {["Visa", "Mastercard", "JCB", "UnionPay"].map((card) => (
                      <span
                        key={card}
                        className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700"
                      >
                        {card}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Cardholder Name *
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                    placeholder="Name as shown on card"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      CVV *
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-4 border border-slate-900 text-slate-900 font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex-1 bg-slate-900 text-white py-4 font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors rounded-lg flex items-center justify-center gap-2"
                  >
                    Review Order
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <Check size={24} />
                  Review & Confirm
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Contact</h3>
                    <p className="text-gray-600">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-gray-600">{formData.email}</p>
                    <p className="text-gray-600">{formData.phone}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Tour Details</h3>
                    <p className="text-gray-600">Date: {formData.date || "Not selected"}</p>
                    <p className="text-gray-600">Guests: {formData.guests}</p>
                    {formData.specialRequests && (
                      <p className="text-gray-600 mt-2">
                        Special requests: {formData.specialRequests}
                      </p>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Payment</h3>
                    <p className="text-gray-600">**** **** **** {formData.cardNumber.slice(-4) || "0000"}</p>
                    <p className="text-gray-600">{formData.cardName || "Cardholder"}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-4 border border-slate-900 text-slate-900 font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors rounded-lg"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => alert("Order placed successfully!")}
                    className="flex-1 bg-slate-900 text-white py-4 font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors rounded-lg"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-28">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 text-sm">{item.name}</h3>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      <p className="text-slate-900 font-medium">
                        ฿{(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>฿{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Service Fee</span>
                  <span>฿{serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>฿{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">
                  By placing this order, you agree to our Terms of Service and
                  Cancellation Policy. Full refund available for cancellations made
                  24 hours before the tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
