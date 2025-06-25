export default function Home() {
  return (
    <section className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/bg-booking.jpg')" }}>
  <div className="bg-black/60 p-6 rounded">
    <h1 className="text-4xl font-bold mb-4">Clean Clothes, Happy Life – Book with Dhobi G</h1>
    <div className="space-x-4">
      <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Book Now</button>
      <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-gray-300">View Bookings</button>
    </div>
  </div>
</section>

  );
}
