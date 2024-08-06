import React from "react";

export default function Footer() {
  return (
    <footer className="bg-custom-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a href="mailto:wjsuntha@gmail.com" className="text-lg">
            wjsuntha@gmail.com
          </a>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Jayesh Suntha
          </p>
        </div>
      </div>
    </footer>
  );
}
