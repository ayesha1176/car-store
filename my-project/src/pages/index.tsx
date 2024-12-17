import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Car Rental Website</title>
      </Head>
     <Navbar/>
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
    
        </h1>
      


    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rental Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/car.png" 
              alt="Nissan GT-R"
              className="w-20 h-16 rounded-lg"
            />
            <div>
              <h3 className="font-semibold">Nissan GT - R</h3>
              <p className="text-sm text-gray-500">440+ Reviewer</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Tax:</span>
              <span>$0</span>
            </div>
            <div className="my-4">
              <input
                type="text"
                placeholder="Apply promo code"
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
              <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md">
                Apply now
              </button>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total Rental Price:</span>
              <span>$80.00</span>
            </div>
          </div>
        </div>

        {/* Billing Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
          <form>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
            />
            <input
              type="text"
              placeholder="Town or City"
              className="w-full mb-4 px-3 py-2 border rounded-md text-sm"
            />
          </form>
        </div>

        {/* Rental Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
          <div>
            <p className="font-semibold mb-2">Pick-Up</p>
            <select className="w-full mb-4 px-3 py-2 border rounded-md text-sm">
              <option>Select your city</option>
            </select>
            <select className="w-full mb-4 px-3 py-2 border rounded-md text-sm">
              <option>Select your time</option>
            </select>
          </div>
          <div>
            <p className="font-semibold mb-2">Drop-Off</p>
            <select className="w-full mb-4 px-3 py-2 border rounded-md text-sm">
              <option>Select your city</option>
            </select>
            <select className="w-full mb-4 px-3 py-2 border rounded-md text-sm">
              <option>Select your time</option>
            </select>
          </div>
        </div>
   
    </div>
   
    </div>
    <Footer/>
      </div>
   </>
  );
}
