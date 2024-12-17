export default function Footer() {
    return (
      <footer className="bg-blue-700 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Section */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-white">Car Rental</h2>
              <p className="text-sm mt-2">
                Affordable and reliable car rentals at your service.
              </p>
            </div>
  
            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <a href="/" className="hover:text-white">
                home
              </a>
              <a href="/Catalogue" className="hover:text-white">
                cart
              </a>
              <a href="/Content" className="hover:text-white">
                Order
              </a>
              <a href="/PaymentForm" className="hover:text-white">
              Payment
              </a>
            </div>
  
            {/* Right Section: Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Twitter
              </a>
            </div>
          </div>
  
          {/* Bottom Copyright */}
          <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
            © {new Date().getFullYear()} Car Rental. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  