import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  Target, 
  AlertTriangle, 
  Code2, 
  ChevronRight,
  BookOpen,
  Settings,
  Zap,
  Database,
  Monitor
} from 'lucide-react';

const Documentation: React.FC = () => {
  const documentationSections = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Quick setup guide and initial configuration for the VS Code Agent",
      link: "/getting-started",
      color: "blue",
      topics: ["Installation", "Configuration", "First Run", "Basic Usage"]
    },
    {
      icon: FileText,
      title: "Technical Feasibility Assessment",
      description: "Detailed exploration of APIs, automation hooks, and their constraints with proof-of-concept recommendations",
      link: "/technical-feasibility",
      color: "emerald",
      topics: ["API Analysis", "Automation Hooks", "Constraints", "Proof of Concept"]
    },
    {
      icon: Shield,
      title: "Security & Compliance Strategy",
      description: "Data access boundaries, audit logging protocols, and user approval workflows for enterprise environments",
      link: "/security-compliance",
      color: "purple",
      topics: ["Security Model", "Compliance", "Audit Logging", "Access Control"]
    },
    {
      icon: Users,
      title: "User Training & Onboarding",
      description: "Step-by-step guide for adding new behaviors, viewing logs, and configuring the action repository",
      link: "/user-guide",
      color: "amber",
      topics: ["User Interface", "Behavior Training", "Log Management", "Configuration"]
    },
    {
      icon: Target,
      title: "Test Plan",
      description: "Scenario-based testing methodology for prompt detection, action execution, and learning accuracy validation",
      link: "/test-plan",
      color: "indigo",
      topics: ["Test Scenarios", "Validation Methods", "Performance Testing", "Quality Assurance"]
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis with mitigation strategies for safe deployment and operation",
      link: "/risk-assessment",
      color: "red",
      topics: ["Risk Analysis", "Mitigation Strategies", "Safety Measures", "Incident Response"]
    },
    {
      icon: Code2,
      title: "Maintenance Roadmap",
      description: "Change log documentation and strategies for handling Copilot/VS Code version dependencies and updates",
      link: "/maintenance-roadmap",
      color: "gray",
      topics: ["Version Management", "Update Strategies", "Change Logs", "Compatibility"]
    },
    {
      icon: Settings,
      title: "API Reference",
      description: "Complete API documentation with examples and integration guidelines",
      link: "/api-reference",
      color: "teal",
      topics: ["API Endpoints", "Authentication", "Examples", "Integration"]
    }
  ];

  const quickLinks = [
    { title: "Installation Guide", icon: Zap, link: "/getting-started#installation" },
    { title: "Configuration", icon: Settings, link: "/getting-started#configuration" },
    { title: "API Reference", icon: Code2, link: "/api-reference" },
    { title: "Security Model", icon: Shield, link: "/security-compliance#security-model" },
    { title: "Test Scenarios", icon: Target, link: "/test-plan#scenarios" },
    { title: "Risk Mitigation", icon: AlertTriangle, link: "/risk-assessment#mitigation" }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
      amber: "bg-amber-50 border-amber-200 text-amber-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      indigo: "bg-indigo-50 border-indigo-200 text-indigo-600",
      red: "bg-red-50 border-red-200 text-red-600",
      gray: "bg-gray-50 border-gray-200 text-gray-600",
      teal: "bg-teal-50 border-teal-200 text-teal-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Documentation & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation to support implementation, deployment, and maintenance
          </p>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  to={link.link}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{link.title}</span>
                  <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {documentationSections.map((section, index) => {
            const Icon = section.icon;
            const colorClasses = getColorClasses(section.color);
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                    <Icon className={`h-6 w-6 ${colorClasses.split(' ')[2]}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {section.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={section.link}
                  className={`inline-flex items-center font-medium hover:underline ${colorClasses.split(' ')[2]}`}
                >
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Monitor className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Video Tutorials</h3>
              <p className="text-blue-700 text-sm mb-3">Step-by-step video guides for setup and configuration</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                Watch Tutorials →
              </a>
            </div>

            <div className="p-6 bg-emerald-50 rounded-lg">
              <Users className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-emerald-900 mb-2">Community Forum</h3>
              <p className="text-emerald-700 text-sm mb-3">Connect with other users and get support</p>
              <a href="#" className="text-emerald-600 text-sm font-medium hover:underline">
                Join Community →
              </a>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg">
              <Code2 className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-purple-900 mb-2">Code Examples</h3>
              <p className="text-purple-700 text-sm mb-3">Sample implementations and integration patterns</p>
              <a href="#" className="text-purple-600 text-sm font-medium hover:underline">
                View Examples →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;