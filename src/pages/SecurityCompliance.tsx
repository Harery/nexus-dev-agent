import React from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Settings,
  Database,
  Monitor,
  Key,
  Activity
} from 'lucide-react';

const SecurityCompliance: React.FC = () => {
  const securityModel = [
    {
      layer: "Application Layer",
      icon: Shield,
      color: "blue",
      controls: [
        "Code signing and integrity verification",
        "Secure communication protocols (TLS 1.3)",
        "Input validation and sanitization",
        "Error handling and information disclosure prevention"
      ],
      threats: [
        "Code injection attacks",
        "Man-in-the-middle attacks",
        "Data tampering",
        "Information leakage"
      ]
    },
    {
      layer: "Process Layer",
      icon: Lock,
      color: "emerald",
      controls: [
        "Process isolation and sandboxing",
        "Least privilege principle enforcement",
        "Resource usage monitoring and limits",
        "Secure inter-process communication"
      ],
      threats: [
        "Privilege escalation",
        "Process hijacking",
        "Resource exhaustion",
        "Unauthorized system access"
      ]
    },
    {
      layer: "Data Layer",
      icon: Database,
      color: "purple",
      controls: [
        "Data encryption at rest and in transit",
        "Secure key management",
        "Data classification and handling",
        "Retention and disposal policies"
      ],
      threats: [
        "Data breaches",
        "Unauthorized access",
        "Data corruption",
        "Compliance violations"
      ]
    },
    {
      layer: "Access Layer",
      icon: Key,
      color: "amber",
      controls: [
        "Multi-factor authentication",
        "Role-based access control (RBAC)",
        "Session management",
        "Access logging and monitoring"
      ],
      threats: [
        "Unauthorized access",
        "Account compromise",
        "Session hijacking",
        "Insider threats"
      ]
    }
  ];

  const complianceFrameworks = [
    {
      framework: "SOC 2 Type II",
      status: "Compliant",
      description: "Security, availability, processing integrity, confidentiality, and privacy",
      requirements: [
        "Access controls and user management",
        "System monitoring and logging",
        "Data protection and encryption",
        "Incident response procedures"
      ],
      evidence: [
        "Access control matrices",
        "Security monitoring reports",
        "Encryption implementation docs",
        "Incident response playbooks"
      ]
    },
    {
      framework: "ISO 27001",
      status: "Aligned",
      description: "Information security management system (ISMS)",
      requirements: [
        "Risk assessment and treatment",
        "Security policy and procedures",
        "Asset management",
        "Business continuity planning"
      ],
      evidence: [
        "Risk assessment reports",
        "Security policies documentation",
        "Asset inventory and classification",
        "Business continuity plans"
      ]
    },
    {
      framework: "GDPR",
      status: "Compliant",
      description: "General Data Protection Regulation for EU data subjects",
      requirements: [
        "Data protection by design and default",
        "Consent management",
        "Data subject rights",
        "Breach notification procedures"
      ],
      evidence: [
        "Privacy impact assessments",
        "Consent management system",
        "Data subject request procedures",
        "Breach notification templates"
      ]
    }
  ];

  const auditLogging = [
    {
      category: "User Actions",
      events: [
        "User login/logout events",
        "Configuration changes",
        "Manual overrides",
        "Permission modifications"
      ],
      retention: "7 years",
      format: "JSON with digital signatures"
    },
    {
      category: "System Actions",
      events: [
        "Automated action executions",
        "Pattern matching results",
        "Learning system updates",
        "Error conditions and exceptions"
      ],
      retention: "3 years",
      format: "Structured logs with metadata"
    },
    {
      category: "Security Events",
      events: [
        "Authentication failures",
        "Authorization violations",
        "Suspicious activity detection",
        "Security policy violations"
      ],
      retention: "10 years",
      format: "SIEM-compatible format"
    }
  ];

  const accessControls = [
    {
      role: "Administrator",
      permissions: [
        "Full system configuration",
        "User management",
        "Security policy management",
        "Audit log access"
      ],
      restrictions: [
        "Requires MFA for sensitive operations",
        "Actions logged with approval workflow",
        "Time-limited elevated access"
      ]
    },
    {
      role: "Developer",
      permissions: [
        "Agent configuration",
        "Pattern management",
        "Learning system interaction",
        "Personal audit logs"
      ],
      restrictions: [
        "Cannot modify security policies",
        "Limited to personal workspace",
        "Requires approval for high-risk actions"
      ]
    },
    {
      role: "Observer",
      permissions: [
        "Read-only dashboard access",
        "Basic reporting",
        "Personal activity logs",
        "System status monitoring"
      ],
      restrictions: [
        "No configuration changes",
        "No access to other users' data",
        "Limited audit log visibility"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    if (status === "Compliant") return "text-emerald-600 bg-emerald-100";
    if (status === "Aligned") return "text-blue-600 bg-blue-100";
    return "text-amber-600 bg-amber-100";
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      amber: "bg-amber-50 border-amber-200 text-amber-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Security & Compliance Strategy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security framework and compliance strategy for enterprise deployment
          </p>
        </div>

        {/* Security Model */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Defense in Depth Security Model</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityModel.map((layer, index) => {
              const Icon = layer.icon;
              const colorClasses = getColorClasses(layer.color);
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                      <Icon className={`h-6 w-6 ${colorClasses.split(' ')[2]}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{layer.layer}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                        Security Controls
                      </h4>
                      <ul className="space-y-1">
                        {layer.controls.map((control, controlIndex) => (
                          <li key={controlIndex} className="text-sm text-gray-600 ml-6">• {control}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                        Mitigated Threats
                      </h4>
                      <ul className="space-y-1">
                        {layer.threats.map((threat, threatIndex) => (
                          <li key={threatIndex} className="text-sm text-gray-600 ml-6">• {threat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Compliance Frameworks</h2>
          
          <div className="space-y-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{framework.framework}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(framework.status)}`}>
                    {framework.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{framework.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Requirements</h4>
                    <ul className="space-y-2">
                      {framework.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Evidence & Documentation</h4>
                    <ul className="space-y-2">
                      {framework.evidence.map((evidence, evidenceIndex) => (
                        <li key={evidenceIndex} className="text-sm text-gray-600 flex items-start">
                          <FileText className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          {evidence}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Logging */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Audit Logging Framework</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {auditLogging.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Logged Events</h4>
                    <ul className="space-y-1">
                      {category.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="text-sm text-gray-600">• {event}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">Retention</span>
                      <span className="text-sm text-gray-600">{category.retention}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">Format</span>
                      <span className="text-sm text-gray-600">{category.format}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Access Controls */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Role-Based Access Control</h2>
          
          <div className="space-y-8">
            {accessControls.map((role, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  {role.role}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      Permissions
                    </h4>
                    <ul className="space-y-1">
                      {role.permissions.map((permission, permIndex) => (
                        <li key={permIndex} className="text-sm text-gray-600 ml-6">• {permission}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <Lock className="h-4 w-4 text-red-500 mr-2" />
                      Restrictions
                    </h4>
                    <ul className="space-y-1">
                      {role.restrictions.map((restriction, restIndex) => (
                        <li key={restIndex} className="text-sm text-gray-600 ml-6">• {restriction}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCompliance;