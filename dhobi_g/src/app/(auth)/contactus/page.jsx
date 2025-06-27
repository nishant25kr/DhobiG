'use client'

export default function Contact() {
  return (
    <div className=" flex h-full flex-col md:flex-row items-stretch justify-center">
      
      {/* Left: Help Text Section */}
      <div className="text-white w-full md:w-1/2 p-10 flex flex-col justify-center text-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Need Assistance?</h2>
          <p className="text-lg">We’re here to help you with anything.</p>
        </div>

        <ul className="space-y-2 list-disc list-inside text-white/90">
          <li>Ask us about our services</li>
          <li>Report an issue</li>
          <li>Request custom orders</li>
          <li>Track your existing requests</li>
        </ul>

        <div className="text-white/90">
          <p className="font-semibold mt-4">📞 Contact Number:</p>
          <p className="ml-2">+91 98765 43210</p>

          <p className="font-semibold mt-3">⏰ Working Hours:</p>
          <p className="ml-2">Monday – Saturday: 9:00 AM – 8:00 PM</p>
          <p className="ml-2">Sunday: 10:00 AM – 5:00 PM</p>
        </div>

        <p className="text-sm text-white/80 pt-2">
          You can also reach us via WhatsApp or call during working hours.
        </p>
      </div>

      {/* Right: Contact Form Section */}
      <div className="bg-white rounded-2xl m-5 md:w-1/2 p-10 shadow-inner">
        <h1 className="text-3xl font-bold text-[#007BB5] mb-6">Contact Our Team</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full text-black border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#077bb0]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full text-black border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#077bb0]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              className="w-full text-black border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#077bb0]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your message..."
              className="w-full text-black border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#077bb0]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#007BB5] hover:bg-[#066a99] text-white font-medium py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
