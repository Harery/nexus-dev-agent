import React from 'react';
import { 
  AlertTriangle, 
  Shield, 
  Lock, 
  Eye, 
  Activity, 
  Users,
  Database,
  Monitor,
  Settings,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const RiskAssessment: React.FC = () => {
  const riskCategories = [
    {
      category: "Security Risks",
      icon: Shield,
      color: "red",
      risks: [
        {
          risk: "Unauthorized System Access",
          probability: "Medium",
          impact: "High",
          description: "Agent could potentially be exploited to gain unauthorized access to system resources",
          mitigation: [
            "Implement strict permission controls and sandboxing",
            "Regular security audits and penetration testing",
            "Principle of least privilege enforcement",
            "Real-time monitoring and anomaly detection"
          ],
          status: "Mitigated"
        },
        {
          risk: "Code Injection Attacks",
          probability: "Low",
          impact: "High",
          description: "Malicious code could be injected through prompt manipulation",
          mitigation: [
            "Input validation and sanitization",
            "Code execution in isolated environment",
            "Pattern matching with strict validation",
            "User confirmation for high-risk actions"
          ],
          status: "Mitigated"
        },
        {
          risk: "Data Exfiltration",
          probability: "Low",
          impact: "High",
          description: "Sensitive data could be accessed or transmitted without authorization",
          mitigation: [
            "Data access controls and encryption",
            "Network traffic monitoring",
            "Audit logging of all data access",
            "Regular access reviews and compliance checks"
          ],
          status: "Mitigated"
        }
      ]
    },
    {
      category: "Operational Risks",
      icon: Activity,
      color: "amber",
      risks: [
        {
          risk: "System Instability",
          probability: "Medium",
          impact: "Medium",
          description: "Agent malfunction could disrupt VS Code or system operation",
          mitigation: [
            "Comprehensive testing and validation",
            "Graceful error handling and recovery",
            "Resource usage monitoring and limits",
            "Emergency stop and rollback procedures"
          ],
          status: "Mitigated"
        },
        {
          risk: "Performance Degradation",
          probability: "Medium",
          impact: "Low",
          description: "Agent could consume excessive system resources",
          mitigation: [
            "Performance monitoring and optimization",
            "Resource usage limits and throttling",
            "Efficient algorithms and data structures",
            "Regular performance testing and tuning"
          ],
          status: "Mitigated"
        },
        {
          risk: "Incorrect Automation",
          probability: "High",
          impact: "Medium",
          description: "Agent might execute wrong actions due to misinterpretation",
          mitigation: [
            "Pattern validation and confidence scoring",
            "User confirmation for uncertain actions",
            "Comprehensive testing of automation scenarios",
            "Continuous learning and improvement"
          ],
          status: "Partially Mitigated"
        }
      ]
    },
    {
      category: "Compliance Risks",
      icon: Lock,
      color: "purple",
      risks: [
        {
          risk: "Regulatory Violations",
          probability: "Low",
          impact: "High",
          description: "Agent operation might violate industry regulations or standards",
          mitigation: [
            "Compliance framework implementation",
            "Regular compliance audits and reviews",
            "Documentation of all automated actions",
            "Legal review of automation policies"
          ],
          status: "Mitigated"
        },
        {
          risk: "Privacy Breaches",
          probability: "Low",
          impact: "High",
          description: "Personal or sensitive data could be improperly handled",
          mitigation: [
            "Privacy by design implementation",
            "Data minimization and anonymization",
            "Consent management and user controls",
            "Regular privacy impact assessments"
          ],
          status: "Mitigated"
        },
        {
          risk: "Audit Trail Gaps",
          probability: "Medium",
          impact: "Medium",
          description: "Insufficient logging could hinder compliance verification",
          mitigation: [
            "Comprehensive audit logging framework",
            "Tamper-proof log storage and backup",
            "Regular log review and analysis",
            "Compliance reporting automation"
          ],
          status: "Mitigated"
        }
      ]
    }
  ];

  const incidentResponse = [
    {
      phase: "Detection",
      duration: "0-15 minutes",
      actions: [
        "Automated monitoring alerts triggered",
        "Security team notification",
        "Initial incident classification",
        "Stakeholder communication initiated"
      ],
      responsible: "Security Operations Center"
    },
    {
      phase: "Containment",
      duration: "15-60 minutes",
      actions: [
        "Agent automation paused or stopped",
        "Affected systems isolated",
        "Evidence preservation",
        "Impact assessment conducted"
      ],
      responsible: "Incident Response Team"
    },
    {
      phase: "Investigation",
      duration: "1-24 hours",
      actions: [
        "Root cause analysis performed",
        "Forensic data collection",
        "Timeline reconstruction",
        "Vulnerability assessment"
      ],
      responsible: "Security Analysts"
    },
    {
      phase: "Recovery",
      duration: "2-48 hours",
      actions: [
        "System restoration and validation",
        "Security patches applied",
        "Configuration updates",
        "Monitoring enhancement"
      ],
      responsible: "Engineering Team"
    },
    {
      phase: "Lessons Learned",
      duration: "1-2 weeks",
      actions: [
        "Post-incident review conducted",
        "Process improvements identified",
        "Documentation updated",
        "Training materials revised"
      ],
      responsible: "All Teams"
    }
  ];

  const riskMatrix = [
    { probability: "High", impact: "High", level: "Critical", color: "bg-red-500", count: 0 },
    { probability: "High", impact: "Medium", level: "High", color: "bg-red-400", count: 1 },
    { probability: "High", impact: "Low", level: "Medium", color: "bg-amber-400", count: 0 },
    { probability: "Medium", impact: "High", level: "High", color: "bg-red-400", count: 3 },
    { probability: "Medium", impact: "Medium", level: "Medium", color: "bg-amber-400", count: 2 },
    { probability: "Medium", impact: "Low", level: "Low", color: "bg-emerald-400", count: 0 },
    { probability: "Low", impact: "High", level: "Medium", color: "bg-amber-400", count: 3 },
    { probability: "Low", impact: "Medium", level: "Low", color: "bg-emerald-400", count: 0 },
    { probability: "Low", impact: "Low", level: "Low", color: "bg-emerald-400", count: 0 }
  ];

  const getProbabilityColor = (probability: string) => {
    if (probability === "High") return "text-red-600 bg-red-100";
    if (probability === "Medium") return "text-amber-600 bg-amber-100";
    return "text-emerald-600 bg-emerald-100";
  };

  const getImpactColor = (impact: string) => {
    if (impact === "High") return "text-red-600 bg-red-100";
    if (impact === "Medium") return "text-amber-600 bg-amber-100";
    return "text-emerald-600 bg-emerald-100";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Mitigated") return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    if (status === "Partially Mitigated") return <Clock className="h-5 w-5 text-amber-500" />;
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Risk Assessment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive risk analysis with mitigation strategies for safe deployment and operation
          </p>
        </div>

        {/* Risk Matrix */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Risk Matrix Overview</h2>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div></div>
              <div className="text-center font-semibold text-gray-900">Low Impact</div>
              <div className="text-center font-semibold text-gray-900">Medium Impact</div>
              <div className="text-center font-semibold text-gray-900">High Impact</div>
            </div>
            
            {["High", "Medium", "Low"].map((prob) => (
              <div key={prob} className="grid grid-cols-4 gap-4 mb-4">
                <div className="font-semibold text-gray-900 flex items-center">{prob} Probability</div>
                {["Low", "Medium", "High"].map((impact) => {
                  const cell = riskMatrix.find(r => r.probability === prob && r.impact === impact);
                  return (
                    <div key={impact} className={`p-4 rounded-lg text-white text-center font-semibold ${cell?.color}`}>
                      <div>{cell?.level}</div>
                      <div className="text-sm opacity-90">({cell?.count} risks)</div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Risk Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Detailed Risk Analysis</h2>
          
          <div className="space-y-8">
            {riskCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.risks.map((risk, riskIndex) => (
                      <div key={riskIndex} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{risk.risk}</h4>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(risk.status)}
                            <span className="text-sm font-medium text-gray-600">{risk.status}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProbabilityColor(risk.probability)}`}>
                            {risk.probability} Probability
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(risk.impact)}`}>
                            {risk.impact} Impact
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{risk.description}</p>
                        
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Mitigation Strategies</h5>
                          <ul className="space-y-1">
                            {risk.mitigation.map((strategy, strategyIndex) => (
                              <li key={strategyIndex} className="text-sm text-gray-600 flex items-start">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                                {strategy}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Incident Response */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Incident Response Plan</h2>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="space-y-8">
              {incidentResponse.map((phase, index) => (
                <div key={index} className="relative">
                  {index < incidentResponse.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-16 bg-gray-300"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {phase.duration}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Responsible:</strong> {phase.responsible}
                      </p>
                      
                      <ul className="space-y-1">
                        {phase.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="text-sm text-gray-600 flex items-start">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Monitoring */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Continuous Risk Monitoring</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <Monitor className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-blue-900 mb-2">Real-time Monitoring</h3>
              <p className="text-blue-700 text-sm">
                Continuous monitoring of system behavior, performance metrics, and security events
              </p>
            </div>
            
            <div className="p-6 bg-emerald-50 rounded-lg">
              <Activity className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-emerald-900 mb-2">Automated Alerts</h3>
              <p className="text-emerald-700 text-sm">
                Automated alerting system for anomalies, threshold breaches, and security incidents
              </p>
            </div>
            
            <div className="p-6 bg-purple-50 rounded-lg">
              <Database className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-purple-900 mb-2">Risk Analytics</h3>
              <p className="text-purple-700 text-sm">
                Advanced analytics for risk trend analysis, pattern detection, and predictive insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;