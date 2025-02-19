import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Zaria, Kaduna State, Nigeria
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    +234 9024419077
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-400">
                    meertechnology01@gmail.com
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="h-64 bg-gray-200 rounded-lg overflow-hidden"> */}
            {/* Replace with actual map implementation */}
            {/* <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Map View</span>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}