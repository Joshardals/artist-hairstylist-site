import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-4">
              <span className="text-primary-500">Creative</span>
              <span className="text-accent-500">Soul</span>
            </h3>
            <p className="text-sm">
              Where artistry meets professional hair care. Bringing you the best
              of both worlds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hair"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Hair Services
                </Link>
              </li>
              <li>
                <Link
                  href="/art"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Art Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>📧 hello@creativesoul.com</li>
              <li>📱 (555) 123-4567</li>
              <li>📍 Your City, State</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} CreativeSoul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
