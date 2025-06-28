import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Github, ExternalLink } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Architecture', href: '/architecture' },
    { name: 'Features', href: '/features' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Getting Started', href: '/getting-started' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Nexus Dev Agent</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com/Harery/nexus-dev-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5 mr-1" />
                GitHub
              </a>
              <Link
                to="/getting-started"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://github.com/Harery/nexus-dev-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-5 w-5 mr-1" />
                  GitHub
                </a>
              </div>
              <div className="px-3 py-2">
                <Link
                  to="/getting-started"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">Nexus Dev Agent</span>
              </div>
              <p className="text-gray-400 mb-4">
                Autonomous development assistant that seamlessly integrates with VS Code to eliminate repetitive manual interventions and enhance developer productivity.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/getting-started" className="hover:text-white transition-colors">Getting Started</Link></li>
                <li><Link to="/architecture" className="hover:text-white transition-colors">Architecture</Link></li>
                <li><Link to="/api-reference" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link to="/user-guide" className="hover:text-white transition-colors">User Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/technical-feasibility" className="hover:text-white transition-colors">Technical Feasibility</Link></li>
                <li><Link to="/security-compliance" className="hover:text-white transition-colors">Security & Compliance</Link></li>
                <li><Link to="/test-plan" className="hover:text-white transition-colors">Test Plan</Link></li>
                <li><Link to="/risk-assessment" className="hover:text-white transition-colors">Risk Assessment</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nexus Dev Agent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;