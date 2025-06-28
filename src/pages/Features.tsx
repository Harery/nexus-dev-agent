import React from 'react';
import { 
  Eye, 
  Zap, 
  Brain, 
  Shield, 
  Settings, 
  Layers, 
  Monitor, 
  Terminal, 
  Database, 
  Users,
  CheckCircle,
  Clock,
  Activity,
  Lock,
  Cpu,
  FileText
} from 'lucide-react';

const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: Eye,
      title: "Dual-Panel Observation",
      description: "Real-time monitoring of both Copilot panel and terminal output for actionable prompts requiring user interaction.",
      details: [
        "Continuous UI element monitoring",
        "Terminal output parsing",
        "Event-driven detection system",
        "Multi-threaded observation"
      ],
      color: "blue"
    },
    {
      icon: Zap,
      title: "Automated Actions",
      description: "Automatically executes recognized prompts including clicks, keystrokes, and command entries without manual intervention.",
      details: [
        "Mouse click automation",
        "Keyboard input simulation",
        "Command execution",
        "Context-aware responses"
      ],
      color: "emerald"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Queries users for unknown behaviors, logs responses, and updates behavior rules for future automation.",
      details: [
        "Pattern recognition",
        "User interaction learning",
        "Behavior adaptation",
        "Knowledge base expansion"
      ],
      color: "amber"
    },
    {
      icon: Shield,
      title: "User Oversight",
      description: "Optional user confirmation for high-impact actions with comprehensive logging of all automated interventions.",
      details: [
        "Confirmation dialogs",
        "Action approval workflows",
        "Risk assessment",
        "Audit trail maintenance"
      ],
      color: "purple"
    },
    {
      icon: Settings,
      title: "Configurable Repository",
      description: "Maintain editable mappings of prompts-to-actions with import/export capabilities for learned behaviors.",
      details: [
        "Behavior configuration",
        "Pattern management",
        "Import/export functionality",
        "Custom rule creation"
      ],
      color: "indigo"
    },
    {
      icon: Layers,
      title: "Cross-Platform",
      description: "Support for Windows, Linux, and macOS environments with consistent behavior across platforms.",
      details: [
        "Multi-OS compatibility",
        "Platform-specific optimizations",
        "Consistent user experience",
        "Native API integration"
      ],
      color: "red"
    }
  ];

  const advancedFeatures = [
    {
      icon: Monitor,
      title: "Real-time Dashboard",
      description: "Live monitoring interface showing agent status, recent actions, and system health.",
      color: "blue"
    },
    {
      icon: Database,
      title: "Action Analytics",
      description: "Detailed analytics on automation patterns, success rates, and performance metrics.",
      color: "emerald"
    },
    {
      icon: Lock,
      title: "Security Controls",
      description: "Granular permission system with role-based access and action restrictions.",
      color: "red"
    },
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "System resource usage tracking and optimization recommendations.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
      amber: "bg-amber-50 border-amber-200 text-amber-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-600",
      red: "bg-red-50 border-red-200 text-red-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation capabilities designed for modern development workflows
          </p>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]}`}>
                    <Icon className={`h-6 w-6 ${getColorClasses(feature.color).split(' ')[2]}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Additional features that enhance monitoring, security, and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${getColorClasses(feature.color).split(' ')[0]} ${getColorClasses(feature.color).split(' ')[1]}`}>
                    <Icon className={`h-6 w-6 ${getColorClasses(feature.color).split(' ')[2]}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Manual Process</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">With Agent</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Prompt Response Time</td>
                  <td className="py-4 px-4 text-center text-gray-600">5-30 seconds</td>
                  <td className="py-4 px-4 text-center text-emerald-600 font-medium">{'<'} 1 second</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      95% faster
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Context Switching</td>
                  <td className="py-4 px-4 text-center text-gray-600">High</td>
                  <td className="py-4 px-4 text-center text-emerald-600 font-medium">Minimal</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      90% reduction
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Error Rate</td>
                  <td className="py-4 px-4 text-center text-gray-600">5-10%</td>
                  <td className="py-4 px-4 text-center text-emerald-600 font-medium">{'<'} 1%</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                      90% improvement
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-gray-900">Learning Capability</td>
                  <td className="py-4 px-4 text-center text-gray-600">None</td>
                  <td className="py-4 px-4 text-center text-emerald-600 font-medium">Continuous</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      New capability
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;