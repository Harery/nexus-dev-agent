import React from 'react';
import { 
  Users, 
  Settings, 
  Brain, 
  Eye, 
  FileText, 
  Monitor, 
  Zap, 
  Shield,
  CheckCircle,
  AlertCircle,
  Info,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const UserGuide: React.FC = () => {
  const interfaceSections = [
    {
      section: "Dashboard Overview",
      icon: Monitor,
      description: "Main control center for monitoring agent status and activity",
      features: [
        "Real-time agent status indicator",
        "Recent actions timeline",
        "Performance metrics display",
        "Quick action buttons"
      ],
      tips: [
        "Check the status indicator for agent health",
        "Use the timeline to review recent automated actions",
        "Monitor performance metrics to optimize settings"
      ]
    },
    {
      section: "Configuration Panel",
      icon: Settings,
      description: "Customize agent behavior and system settings",
      features: [
        "Observation settings configuration",
        "Action execution preferences",
        "Security and permission controls",
        "Notification preferences"
      ],
      tips: [
        "Start with default settings and adjust gradually",
        "Enable confirmation for high-risk actions initially",
        "Regularly review and update security settings"
      ]
    },
    {
      section: "Learning Center",
      icon: Brain,
      description: "Manage behavior patterns and training data",
      features: [
        "Pattern library management",
        "Training session history",
        "Behavior validation tools",
        "Import/export functionality"
      ],
      tips: [
        "Review learned patterns regularly for accuracy",
        "Use validation tools to test new behaviors",
        "Export patterns as backup before major changes"
      ]
    },
    {
      section: "Audit Logs",
      icon: FileText,
      description: "Comprehensive logging and reporting interface",
      features: [
        "Detailed action logs",
        "Performance reports",
        "Security event tracking",
        "Export and filtering options"
      ],
      tips: [
        "Use filters to find specific events quickly",
        "Regular log review helps identify issues early",
        "Export logs for compliance reporting"
      ]
    }
  ];

  const trainingSteps = [
    {
      step: 1,
      title: "Trigger Unknown Behavior",
      description: "Perform an action in VS Code that the agent hasn't seen before",
      details: [
        "Use Copilot to generate code with a new type of prompt",
        "Run a terminal command that requires user input",
        "Interact with a VS Code extension the agent hasn't encountered"
      ],
      icon: Eye
    },
    {
      step: 2,
      title: "Agent Detection",
      description: "The agent detects the unknown prompt and pauses automation",
      details: [
        "Agent displays notification about unknown behavior",
        "Automation is temporarily paused for this interaction",
        "User is prompted to provide guidance"
      ],
      icon: AlertCircle
    },
    {
      step: 3,
      title: "User Response",
      description: "Demonstrate the correct response to the agent",
      details: [
        "Perform the desired action manually",
        "Agent records your mouse clicks and keyboard inputs",
        "Provide context or description if prompted"
      ],
      icon: Users
    },
    {
      step: 4,
      title: "Pattern Learning",
      description: "Agent learns and stores the new behavior pattern",
      details: [
        "Agent analyzes the prompt and your response",
        "Creates a new pattern mapping in the repository",
        "Validates the pattern with you before saving"
      ],
      icon: Brain
    },
    {
      step: 5,
      title: "Future Automation",
      description: "Agent automatically handles similar prompts in the future",
      details: [
        "Similar prompts are recognized and handled automatically",
        "Agent confidence improves with repeated successful executions",
        "Pattern can be refined or modified as needed"
      ],
      icon: Zap
    }
  ];

  const managementTasks = [
    {
      task: "Starting the Agent",
      icon: Play,
      steps: [
        "Open the VS Code Agent dashboard",
        "Click the 'Start Agent' button",
        "Verify the status indicator shows 'Active'",
        "Check that VS Code is properly detected"
      ],
      troubleshooting: [
        "Ensure VS Code is running before starting the agent",
        "Check that required permissions are granted",
        "Verify configuration settings are valid"
      ]
    },
    {
      task: "Pausing Automation",
      icon: Pause,
      steps: [
        "Click the 'Pause' button in the dashboard",
        "Agent stops automated responses but continues monitoring",
        "Manual interactions work normally",
        "Resume automation when ready"
      ],
      troubleshooting: [
        "Use pause mode for debugging or testing",
        "Paused state persists across VS Code restarts",
        "Check logs to see what was paused"
      ]
    },
    {
      task: "Resetting Patterns",
      icon: RotateCcw,
      steps: [
        "Navigate to the Learning Center",
        "Select patterns to reset or remove",
        "Confirm the reset operation",
        "Agent will re-learn these behaviors"
      ],
      troubleshooting: [
        "Export patterns before resetting as backup",
        "Reset individual patterns rather than all at once",
        "Monitor agent behavior after reset"
      ]
    }
  ];

  const bestPractices = [
    {
      category: "Initial Setup",
      icon: Settings,
      practices: [
        "Start with conservative settings and gradually increase automation",
        "Enable confirmation dialogs for all actions initially",
        "Test the agent with simple, low-risk scenarios first",
        "Review all default patterns before enabling automation"
      ]
    },
    {
      category: "Training & Learning",
      icon: Brain,
      practices: [
        "Be consistent in your responses when training new behaviors",
        "Provide clear, deliberate actions for the agent to learn",
        "Validate learned patterns before allowing automation",
        "Regularly review and clean up the pattern repository"
      ]
    },
    {
      category: "Monitoring & Maintenance",
      icon: Monitor,
      practices: [
        "Check agent status and logs daily",
        "Monitor performance metrics for optimization opportunities",
        "Keep the agent software updated to the latest version",
        "Backup configuration and patterns regularly"
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      practices: [
        "Regularly review audit logs for unusual activity",
        "Keep security settings restrictive for sensitive environments",
        "Use role-based access for team environments",
        "Follow your organization's security policies"
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Training & Onboarding Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide for using, training, and managing your VS Code Agent
          </p>
        </div>

        {/* Interface Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">User Interface Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {interfaceSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{section.section}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {section.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Usage Tips</h4>
                      <ul className="space-y-1">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                            <Info className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
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

        {/* Behavior Training */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Behavior Training Process</h2>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="space-y-8">
              {trainingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < trainingSteps.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-16 bg-gray-300"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="h-5 w-5 text-blue-600" />
                          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        
                        <ul className="space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
        </div>

        {/* Management Tasks */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Common Management Tasks</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {managementTasks.map((task, index) => {
              const Icon = task.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{task.task}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Steps</h4>
                      <ol className="space-y-1">
                        {task.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="text-sm text-gray-600">
                            {stepIndex + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Troubleshooting</h4>
                      <ul className="space-y-1">
                        {task.troubleshooting.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                            <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
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

        {/* Best Practices */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {bestPractices.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;