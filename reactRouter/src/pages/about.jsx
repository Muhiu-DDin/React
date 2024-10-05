export function About() {
  return (
    <div className="dark:text-white  dark:bg-gray-800 container mx-auto p-6">
      <div className="max-w-2xl dark:text-white  dark:bg-gray-800 mx-auto p-6 bg-white border rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-gray-700  dark:text-white text-lg mb-4">
          Welcome to our website! We are dedicated to providing you with the best service possible. Our team is passionate about what we do, and we strive to exceed your expectations.
        </p>
        
        <h2 className="text-2xl  dark:text-white font-semibold mt-6 mb-4">Our Mission</h2>
        <p className="text-gray-700  dark:text-white mb-4">
          Our mission is to deliver high-quality products that meet our customers' needs while maintaining exceptional customer service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Values</h2>
        <ul className="list-disc list-inside  dark:text-white text-gray-700 mb-4">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
          <li>Excellence</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p className="text-gray-700  dark:text-white">
          If you have any questions, feel free to reach out to us at <a href="mailto:info@example.com" className="text-blue-500 underline">info@example.com</a>.
        </p>
      </div>
    </div>
  );
}
