import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t-2 border-gray-700">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap -mx-6">
          {/* Logo & Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-6">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; 2023 DevUI. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 text-gray-400">
                <Link to="/" className="hover:text-white transition-colors">🌐</Link>
                <Link to="/" className="hover:text-white transition-colors">🐦</Link>
                <Link to="/" className="hover:text-white transition-colors">💼</Link>
                <Link to="/" className="hover:text-white transition-colors">📸</Link>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">Company</h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-white transition-colors" to="/">Features</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Pricing</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Affiliate Program</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">Support</h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-white transition-colors" to="/">Account</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Help</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Contact Us</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-xs font-semibold uppercase text-gray-500">Legals</h3>
            <ul className="space-y-3">
              <li><Link className="hover:text-white transition-colors" to="/">Terms &amp; Conditions</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
