import React from 'react';
import { 
  Download, 
  Settings, 
  Play, 
  CheckCircle, 
  AlertCircle, 
  Code2, 
  Terminal, 
  Bot,
  Shield,
  Monitor,
  Zap
} from 'lucide-react';

const GettingStarted: React.FC = () => {
  const installationSteps = [
    {
      step: 1,
      title: "System Requirements",
      description: "Ensure your system meets the minimum requirements",
      details: [
        "Python 3.8 or higher",
        "VS Code 1.70 or higher",
        "Operating System: Windows 10+, macOS 10.15+, or Ubuntu 18.04+",
        "At least 4GB RAM available",
        "Administrative privileges for installation"
      ],
      icon: Monitor
    },
    {
      step: 2,
      title: "Download & Install",
      description: "Download the agent and install dependencies",
      details: [
        "Download the latest release from GitHub",
        "Extract the archive to your preferred directory",
        "Run pip install -r requirements.txt",
        "Install VS Code extension (optional but recommended)"
      ],
      icon: Download
    },
    {
      step: 3,
      title: "Initial Configuration",
      description: "Configure the agent for your environment",
      details: [
        "Run python configure.py to start setup wizard",
        "Select your VS Code installation path",
        "Configure observation settings",
        "Set up security preferences"
      ],
      icon: Settings
    },
    {
      step: 4,
      title: "First Run",
      description: "Start the agent and verify functionality",
      details: [
        "Launch VS Code with Copilot enabled",
        "Run python agent.py --start",
        "Verify agent status in the dashboard",
        "Test with a simple Copilot interaction"
      ],
      icon: Play
    }
  ];

  const configurationOptions = [
    {
      category: "Observation Settings",
      icon: Bot,
      options: [
        { name: "Monitor Copilot Panel", description: "Enable/disable Copilot panel monitoring", default: "Enabled" },
        { name: "Monitor Terminal", description: "Enable/disable terminal output monitoring", default: "Enabled" },
        { name: "Polling Interval", description: "How often to check for new prompts (milliseconds)", default: "500ms" },
        { name: "UI Element Detection", description: "Sensitivity for UI element recognition", default: "Medium" }
      ]
    },
    {
      category: "Action Settings",
      icon: Zap,
      options: [
        { name: "Auto-Execute Known Actions", description: "Automatically execute recognized prompts", default: "Enabled" },
        { name: "Confirmation Timeout", description: "Time to wait for user confirmation", default: "30s" },
        { name: "Action Delay", description: "Delay between automated actions", default: "100ms" },
        { name: "Retry Attempts", description: "Number of retry attempts for failed actions", default: "3" }
      ]
    },
    {
      category: "Security Settings",
      icon: Shield,
      options: [
        { name: "Require Confirmation", description: "Require user confirmation for high-risk actions", default: "Enabled" },
        { name: "Audit Logging", description: "Log all automated actions", default: "Enabled" },
        { name: "Sandbox Mode", description: "Restrict actions to VS Code process only", default: "Enabled" },
        { name: "Permission Level", description: "Set permission level for automated actions", default: "Standard" }
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick setup guide to get your Nexus Dev Agent up and running in minutes
          </p>
        </div>

        {/* Installation Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Installation Steps</h2>
          
          <div className="space-y-8">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="h-6 w-6 text-blue-600" />
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Start Commands */}
        <div className="bg-gray-900 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Start Commands</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-2">1. Clone the repository:</p>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                git clone https://github.com/Harery/nexus-dev-agent.git
              </div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-2">2. Install dependencies:</p>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                cd nexus-dev-agent && pip install -r requirements.txt
              </div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-2">3. Run configuration wizard:</p>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                python configure.py
              </div>
            </div>
            
            <div>
              <p className="text-gray-300 mb-2">4. Start the agent:</p>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm text-green-400">
                python agent.py --start
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Configuration Options</h2>
          
          <div className="space-y-8">
            {configurationOptions.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Option</th>
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Description</th>
                          <th className="text-left py-2 px-3 font-medium text-gray-900">Default</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {category.options.map((option, optionIndex) => (
                          <tr key={optionIndex}>
                            <td className="py-3 px-3 font-medium text-gray-900">{option.name}</td>
                            <td className="py-3 px-3 text-gray-600">{option.description}</td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {option.default}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Issues & Troubleshooting</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-amber-400 bg-amber-50 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <h3 className="font-semibold text-amber-900">Agent not detecting VS Code</h3>
              </div>
              <p className="text-amber-800 mb-2">Ensure VS Code is running and the correct path is configured.</p>
              <p className="text-amber-700 text-sm">Solution: Run <code className="bg-amber-200 px-1 rounded">python configure.py --reconfigure</code> to update the VS Code path.</p>
            </div>
            
            <div className="border-l-4 border-red-400 bg-red-50 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold text-red-900">Permission denied errors</h3>
              </div>
              <p className="text-red-800 mb-2">The agent requires appropriate permissions to interact with VS Code.</p>
              <p className="text-red-700 text-sm">Solution: Run the agent with administrator privileges or configure accessibility permissions on macOS.</p>
            </div>
            
            <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">High CPU usage</h3>
              </div>
              <p className="text-blue-800 mb-2">The agent may be polling too frequently.</p>
              <p className="text-blue-700 text-sm">Solution: Increase the polling interval in configuration settings to reduce CPU usage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;