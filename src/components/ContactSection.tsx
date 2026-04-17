import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { shouldReduceMotion } from "@/lib/animation";

const tours = [
  "Gokul Mathura Vrindavan Tour",
  "Goverdhan Barsana Nandgaon Tour",
  "Khatu Shyam Ji Tour",
  "Mehandipur Balaji Tour",
  "Agra Fatehpur Sikri Tour",
  "Ayodhya Varanasi (Kashi) Tour",
  "Kaila Devi Temple Tour",
  "Jaipur Temple Tour",
  "Custom Tour"
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    whatsapp: "",
    pickupCity: "",
    dropCity: "",
    adults: "",
    children: "",
    accommodation: "Standard",
    tour: tours[0],
    comments: "",
  });

  const updateField = useCallback((fieldKey: string, fieldValue: string) => {
    setFormState((prev) => ({ ...prev, [fieldKey]: fieldValue }));
  }, []);

  const handleSubmit = useCallback((eventObj: React.FormEvent) => {
    eventObj.preventDefault();
    const messageContent = `Hi! I'd like a free quote.

Tour: ${formState.tour}
Name: ${formState.name}
WhatsApp: ${formState.whatsapp}
Email: ${formState.email}
Pickup City: ${formState.pickupCity}
Drop City: ${formState.dropCity}
Adults: ${formState.adults || "Not specified"}
Children: ${formState.children || "Not specified"}
Accommodation: ${formState.accommodation}
Comments: ${formState.comments}`;

    window.open(
      `https://wa.me/918923427393?text=${encodeURIComponent(messageContent)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, [formState]);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Plan Your <span className="text-orange-500">Braj Yatra</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Choose your tour & get instant quote
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
          noValidate
        >
          <div className="mb-8">
            <p className="font-semibold mb-4 text-gray-700">Select Your Tour</p>

            <div className="grid md:grid-cols-3 gap-4">
              {tours.map((tourName) => (
                <button
                  type="button"
                  key={tourName}
                  onClick={() => updateField("tour", tourName)}
                  aria-pressed={formState.tour === tourName}
                  className={`p-4 rounded-xl border text-left transition ${formState.tour === tourName
                      ? "bg-orange-500 text-white border-orange-500 shadow-md"
                      : "bg-gray-50 hover:bg-orange-50 border-gray-300"
                    }`}
                >
                  {tourName}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contactName" className="sr-only">Full Name</label>
              <input
                id="contactName"
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                aria-required="true"
                autoComplete="name"
                value={formState.name}
                onChange={(eventObj) => updateField("name", eventObj.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="contactPhone" className="sr-only">WhatsApp Number</label>
              <input
                id="contactPhone"
                type="tel"
                name="phone"
                placeholder="WhatsApp Number"
                required
                aria-required="true"
                autoComplete="tel"
                inputMode="tel"
                value={formState.whatsapp}
                onChange={(eventObj) => updateField("whatsapp", eventObj.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="contactEmail" className="sr-only">Email address</label>
              <input
                id="contactEmail"
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="email"
                value={formState.email}
                onChange={(eventObj) => updateField("email", eventObj.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="contactPickup" className="sr-only">Pickup City</label>
              <input
                id="contactPickup"
                type="text"
                name="pickup"
                placeholder="Pickup City"
                autoComplete="address-level2"
                value={formState.pickupCity}
                onChange={(eventObj) => updateField("pickupCity", eventObj.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div>
              <label htmlFor="contactDrop" className="sr-only">Drop City</label>
              <input
                id="contactDrop"
                type="text"
                name="drop"
                placeholder="Drop City"
                autoComplete="address-level2"
                value={formState.dropCity}
                onChange={(eventObj) => updateField("dropCity", eventObj.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactAdults" className="sr-only">Number of Adults</label>
                <input
                  id="contactAdults"
                  type="number"
                  name="adults"
                  placeholder="Adults"
                  min="1"
                  inputMode="numeric"
                  value={formState.adults}
                  onChange={(eventObj) => updateField("adults", eventObj.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="contactChildren" className="sr-only">Number of Children</label>
                <input
                  id="contactChildren"
                  type="number"
                  name="children"
                  placeholder="Children"
                  min="0"
                  inputMode="numeric"
                  value={formState.children}
                  onChange={(eventObj) => updateField("children", eventObj.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="contactAccommodation" className="sr-only">Accommodation type</label>
            <select
              id="contactAccommodation"
              name="accommodation"
              value={formState.accommodation}
              onChange={(eventObj) => updateField("accommodation", eventObj.target.value)}
              className="w-full mt-5 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option>Standard</option>
              <option>Deluxe</option>
              <option>3 Star</option>
              <option>4 Star</option>
              <option>5 Star</option>
            </select>
          </div>

          <div>
            <label htmlFor="contactComments" className="sr-only">Special requests</label>
            <textarea
              id="contactComments"
              name="comments"
              placeholder="Any special requests..."
              rows={4}
              value={formState.comments}
              onChange={(eventObj) => updateField("comments", eventObj.target.value)}
              className="w-full mt-5 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md"
            aria-label="Send form and get free quote on WhatsApp"
          >
            <Send size={18} aria-hidden="true" />
            Get Free Quote on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;