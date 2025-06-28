import React from 'react';
import { 
  Monitor, 
  Eye, 
  Brain, 
  Database, 
  Cpu, 
  Users, 
  FileText, 
  Bot, 
  Terminal, 
  ArrowDown, 
  ArrowRight,
  Settings,
  Shield,
  Activity
} from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">System Architecture</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A modular architecture designed for scalability, security, and continuous learning
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Component Architecture</h2>
          
          {/* VS Code Environment */}
          <div className="mb-12">
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                <Monitor className="h-5 w-5 mr-2" />
                VS Code Environment
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Bot className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-900">Copilot Panel</span>
                  </div>
                  <p className="text-sm text-blue-700">AI-powered code suggestions and chat interface</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Terminal className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-blue-900">Terminal Panel</span>
                  </div>
                  <p className="text-sm text-blue-700">Integrated command line interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="h-8 w-8 text-gray-400" />
          </div>

          {/* Core Components */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Eye className="h-5 w-5 text-emerald-600" />
                  <h4 className="font-semibold text-emerald-900">Agent Observer</h4>
                </div>
                <p className="text-sm text-emerald-700 mb-4">Monitors UI elements and terminal output for actionable prompts</p>
                <ul className="text-xs text-emerald-600 space-y-1">
                  <li>• Real-time UI monitoring</li>
                  <li>• Pattern recognition</li>
                  <li>• Event detection</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Brain className="h-5 w-5 text-amber-600" />
                  <h4 className="font-semibold text-amber-900">Learning Engine</h4>
                </div>
                <p className="text-sm text-amber-700 mb-4">Handles unfamiliar prompts and learns from user responses</p>
                <ul className="text-xs text-amber-600 space-y-1">
                  <li>• Behavior analysis</li>
                  <li>• User interaction</li>
                  <li>• Pattern learning</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Database className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-900">Action Repository</h4>
                </div>
                <p className="text-sm text-purple-700 mb-4">Stores prompt-action mappings for future automated responses</p>
                <ul className="text-xs text-purple-600 space-y-1">
                  <li>• Behavior storage</li>
                  <li>• Pattern matching</li>
                  <li>• Configuration management</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Cpu className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">Action Executor</h4>
                </div>
                <p className="text-sm text-red-700 mb-4">Executes mapped actions through UI automation</p>
                <ul className="text-xs text-red-600 space-y-1">
                  <li>• UI automation</li>
                  <li>• Command execution</li>
                  <li>• Safety validation</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="h-5 w-5 text-gray-600" />
                  <h4 className="font-semibold text-gray-900">User Interface</h4>
                </div>
                <p className="text-sm text-gray-700 mb-4">Provides oversight, configuration, and learning confirmation</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Dashboard interface</li>
                  <li>• Configuration panel</li>
                  <li>• Status monitoring</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <h4 className="font-semibold text-indigo-900">Audit Logger</h4>
                </div>
                <p className="text-sm text-indigo-700 mb-4">Records all automated actions for compliance and debugging</p>
                <ul className="text-xs text-indigo-600 space-y-1">
                  <li>• Action logging</li>
                  <li>• Audit trails</li>
                  <li>• Compliance reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Data Flow & Process</h2>
          
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div className="flex-1">
                <h3 className="font-semibold text-blue-900">Observation Phase</h3>
                <p className="text-blue-700">Agent Observer continuously monitors Copilot panel and terminal for actionable prompts</p>
              </div>
              <Eye className="h-6 w-6 text-blue-600" />
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </div>

            <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div className="flex-1">
                <h3 className="font-semibold text-emerald-900">Pattern Recognition</h3>
                <p className="text-emerald-700">Detected prompts are analyzed against known patterns in the Action Repository</p>
              </div>
              <Database className="h-6 w-6 text-emerald-600" />
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3a</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-amber-900">Known Pattern</h3>
                  <p className="text-amber-700">Execute mapped action automatically</p>
                </div>
                <Cpu className="h-6 w-6 text-amber-600" />
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3b</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-900">Unknown Pattern</h3>
                  <p className="text-purple-700">Query user and learn response</p>
                </div>
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </div>

            <div className="flex items-center space-x-4 p-4 bg-indigo-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div className="flex-1">
                <h3 className="font-semibold text-indigo-900">Logging & Audit</h3>
                <p className="text-indigo-700">All actions are logged for compliance, debugging, and performance analysis</p>
              </div>
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-blue-600" />
                Core Technologies
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python 3.8+</li>
                <li>• VS Code Extension API</li>
                <li>• Accessibility APIs</li>
                <li>• PyAutoGUI / pynput</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-emerald-600" />
                AI & Learning
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• spaCy NLP</li>
                <li>• Pattern matching</li>
                <li>• Machine learning models</li>
                <li>• Behavior adaptation</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-purple-600" />
                Security & Monitoring
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Audit logging</li>
                <li>• Permission controls</li>
                <li>• Sandboxed execution</li>
                <li>• User confirmation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;