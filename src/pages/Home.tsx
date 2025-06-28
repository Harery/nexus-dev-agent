import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Terminal, 
  Brain, 
  Shield, 
  Zap, 
  Eye, 
  Settings, 
  Users, 
  FileText, 
  ChevronRight,
  Code2,
  Monitor,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Target,
  Layers
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Zap className="h-4 w-4 mr-2" />
                  Autonomous Development Assistant
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Nexus Dev Agent
                <span className="text-blue-600 block">Intelligent Automation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                An autonomous Python-based agent that seamlessly observes, interprets, and interacts with VS Code's Copilot panel and terminal—eliminating repetitive manual interventions and enhancing developer productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/getting-started"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/documentation"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Documentation
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-500 ml-4">VS Code - Agent Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-800">Observing Copilot panel...</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                      <Terminal className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm text-emerald-800">Monitoring terminal output...</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                      <Brain className="h-5 w-5 text-amber-600" />
                      <span className="text-sm text-amber-800">Action executed: Run code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on four foundational principles that ensure reliable, secure, and adaptive automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-200 transition-colors">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Observation</h3>
              <p className="text-gray-600">Continuously monitors both Copilot chat and terminal for actionable prompts and user interactions.</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-xl mb-4 group-hover:bg-emerald-200 transition-colors">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Execution</h3>
              <p className="text-gray-600">Autonomously responds to detected prompts, executing clicks, keystrokes, and commands as needed.</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-4 group-hover:bg-amber-200 transition-colors">
                <Brain className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">Records and adapts to new behaviors, enabling future autonomous handling of similar prompts.</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Human Oversight</h3>
              <p className="text-gray-600">All actions are logged with user confirmation mechanisms for high-impact operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Metrics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable impact on developer productivity and workflow efficiency
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">{'>'} 90%</div>
              <p className="text-lg font-medium text-gray-900 mb-2">Reduction in Manual Interactions</p>
              <p className="text-gray-600">Eliminates repetitive prompt responses for routine development tasks</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">80%</div>
              <p className="text-lg font-medium text-gray-900 mb-2">Learning Success Rate</p>
              <p className="text-gray-600">New behaviors learned and successfully re-applied in future scenarios</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">Zero</div>
              <p className="text-lg font-medium text-gray-900 mb-2">Security Incidents</p>
              <p className="text-gray-600">Maintained security standards throughout pilot testing phases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Development Workflow?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the future of autonomous development assistance and eliminate repetitive manual interventions forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/getting-started"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Code2 className="mr-2 h-5 w-5" />
              Get Started Now
            </Link>
            <Link
              to="/documentation"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Documentation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;