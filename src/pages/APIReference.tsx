import React from 'react';
import { 
  Code2, 
  Database, 
  Settings, 
  Shield, 
  Zap, 
  Monitor,
  Key,
  FileText,
  CheckCircle,
  AlertTriangle,
  Copy,
  ExternalLink
} from 'lucide-react';

const APIReference: React.FC = () => {
  const apiEndpoints = [
    {
      category: "Agent Control",
      icon: Settings,
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/agent/start",
          description: "Start the agent monitoring and automation",
          parameters: [
            { name: "config", type: "object", required: false, description: "Optional configuration overrides" }
          ],
          response: {
            status: 200,
            body: { success: true, agentId: "string", status: "active" }
          },
          example: `curl -X POST http://localhost:8080/api/v1/agent/start \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"config": {"observationInterval": 500}}'`
        },
        {
          method: "POST",
          path: "/api/v1/agent/stop",
          description: "Stop the agent and pause all automation",
          parameters: [],
          response: {
            status: 200,
            body: { success: true, status: "stopped" }
          },
          example: `curl -X POST http://localhost:8080/api/v1/agent/stop \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: "GET",
          path: "/api/v1/agent/status",
          description: "Get current agent status and health information",
          parameters: [],
          response: {
            status: 200,
            body: { 
              status: "active", 
              uptime: 3600, 
              actionsExecuted: 42,
              lastAction: "2025-01-15T10:30:00Z"
            }
          },
          example: `curl -X GET http://localhost:8080/api/v1/agent/status \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    },
    {
      category: "Pattern Management",
      icon: Database,
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/patterns",
          description: "Retrieve all learned behavior patterns",
          parameters: [
            { name: "category", type: "string", required: false, description: "Filter by pattern category" },
            { name: "confidence", type: "number", required: false, description: "Minimum confidence threshold" }
          ],
          response: {
            status: 200,
            body: {
              patterns: [
                {
                  id: "string",
                  prompt: "string",
                  action: "object",
                  confidence: 0.95,
                  category: "copilot"
                }
              ]
            }
          },
          example: `curl -X GET "http://localhost:8080/api/v1/patterns?category=copilot" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: "POST",
          path: "/api/v1/patterns",
          description: "Create a new behavior pattern",
          parameters: [
            { name: "prompt", type: "string", required: true, description: "The prompt pattern to match" },
            { name: "action", type: "object", required: true, description: "The action to execute" },
            { name: "category", type: "string", required: true, description: "Pattern category" }
          ],
          response: {
            status: 201,
            body: { id: "string", success: true }
          },
          example: `curl -X POST http://localhost:8080/api/v1/patterns \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "prompt": "Apply suggestion",
    "action": {"type": "click", "selector": ".apply-button"},
    "category": "copilot"
  }'`
        }
      ]
    },
    {
      category: "Monitoring & Logs",
      icon: Monitor,
      endpoints: [
        {
          method: "GET",
          path: "/api/v1/logs",
          description: "Retrieve agent activity logs",
          parameters: [
            { name: "startTime", type: "string", required: false, description: "ISO 8601 start time" },
            { name: "endTime", type: "string", required: false, description: "ISO 8601 end time" },
            { name: "level", type: "string", required: false, description: "Log level filter" },
            { name: "limit", type: "number", required: false, description: "Maximum number of entries" }
          ],
          response: {
            status: 200,
            body: {
              logs: [
                {
                  timestamp: "2025-01-15T10:30:00Z",
                  level: "info",
                  message: "Action executed successfully",
                  metadata: {}
                }
              ]
            }
          },
          example: `curl -X GET "http://localhost:8080/api/v1/logs?level=info&limit=100" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        },
        {
          method: "GET",
          path: "/api/v1/metrics",
          description: "Get performance and usage metrics",
          parameters: [
            { name: "timeRange", type: "string", required: false, description: "Time range for metrics (1h, 24h, 7d)" }
          ],
          response: {
            status: 200,
            body: {
              responseTime: { avg: 250, p95: 500 },
              successRate: 0.98,
              actionsPerHour: 15,
              resourceUsage: { cpu: 2.5, memory: 45 }
            }
          },
          example: `curl -X GET "http://localhost:8080/api/v1/metrics?timeRange=24h" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
        }
      ]
    }
  ];

  const authenticationMethods = [
    {
      method: "API Key Authentication",
      description: "Use API keys for programmatic access",
      implementation: "Include API key in Authorization header",
      example: `Authorization: Bearer YOUR_API_KEY`,
      security: "API keys should be stored securely and rotated regularly"
    },
    {
      method: "OAuth 2.0",
      description: "OAuth 2.0 flow for user-based authentication",
      implementation: "Standard OAuth 2.0 authorization code flow",
      example: `Authorization: Bearer OAUTH_ACCESS_TOKEN`,
      security: "Supports scoped access and token refresh"
    }
  ];

  const sdkExamples = [
    {
      language: "Python",
      icon: Code2,
      example: `from vscode_agent import AgentClient

# Initialize client
client = AgentClient(
    base_url="http://localhost:8080",
    api_key="your_api_key"
)

# Start the agent
response = client.start_agent()
print(f"Agent started: {response.agent_id}")

# Get patterns
patterns = client.get_patterns(category="copilot")
for pattern in patterns:
    print(f"Pattern: {pattern.prompt} -> {pattern.action}")

# Monitor status
status = client.get_status()
print(f"Agent status: {status.status}")
print(f"Actions executed: {status.actions_executed}")`
    },
    {
      language: "JavaScript",
      icon: Code2,
      example: `import { AgentClient } from '@vscode-agent/sdk';

// Initialize client
const client = new AgentClient({
  baseUrl: 'http://localhost:8080',
  apiKey: 'your_api_key'
});

// Start the agent
const response = await client.startAgent();
console.log(\`Agent started: \${response.agentId}\`);

// Get patterns
const patterns = await client.getPatterns({ category: 'copilot' });
patterns.forEach(pattern => {
  console.log(\`Pattern: \${pattern.prompt} -> \${pattern.action}\`);
});

// Monitor status
const status = await client.getStatus();
console.log(\`Agent status: \${status.status}\`);
console.log(\`Actions executed: \${status.actionsExecuted}\`);`
    }
  ];

  const webhookEvents = [
    {
      event: "agent.started",
      description: "Triggered when the agent starts monitoring",
      payload: {
        agentId: "string",
        timestamp: "ISO 8601",
        config: "object"
      }
    },
    {
      event: "action.executed",
      description: "Triggered when an automated action is executed",
      payload: {
        actionId: "string",
        prompt: "string",
        action: "object",
        success: "boolean",
        timestamp: "ISO 8601"
      }
    },
    {
      event: "pattern.learned",
      description: "Triggered when a new pattern is learned",
      payload: {
        patternId: "string",
        prompt: "string",
        action: "object",
        confidence: "number",
        timestamp: "ISO 8601"
      }
    },
    {
      event: "error.occurred",
      description: "Triggered when an error occurs",
      payload: {
        errorId: "string",
        message: "string",
        severity: "string",
        timestamp: "ISO 8601"
      }
    }
  ];

  const getMethodColor = (method: string) => {
    const colors = {
      GET: "text-blue-600 bg-blue-100",
      POST: "text-emerald-600 bg-emerald-100",
      PUT: "text-amber-600 bg-amber-100",
      DELETE: "text-red-600 bg-red-100"
    };
    return colors[method as keyof typeof colors] || "text-gray-600 bg-gray-100";
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete API documentation with examples and integration guidelines
          </p>
        </div>

        {/* Authentication */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Authentication</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {authenticationMethods.map((auth, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Key className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{auth.method}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{auth.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Implementation</h4>
                    <p className="text-sm text-gray-600">{auth.implementation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Example</h4>
                    <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400">
                      {auth.example}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-lg">
                    <Shield className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">{auth.security}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">API Endpoints</h2>
          
          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${getMethodColor(endpoint.method)}`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-900">{endpoint.path}</code>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{endpoint.description}</p>
                        
                        {endpoint.parameters.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-medium text-gray-900 mb-2">Parameters</h4>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-gray-200">
                                    <th className="text-left py-1 px-2 font-medium text-gray-900">Name</th>
                                    <th className="text-left py-1 px-2 font-medium text-gray-900">Type</th>
                                    <th className="text-left py-1 px-2 font-medium text-gray-900">Required</th>
                                    <th className="text-left py-1 px-2 font-medium text-gray-900">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {endpoint.parameters.map((param, paramIndex) => (
                                    <tr key={paramIndex} className="border-b border-gray-100">
                                      <td className="py-1 px-2 font-mono text-blue-600">{param.name}</td>
                                      <td className="py-1 px-2 text-gray-600">{param.type}</td>
                                      <td className="py-1 px-2">
                                        {param.required ? (
                                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                                        ) : (
                                          <span className="text-gray-400">Optional</span>
                                        )}
                                      </td>
                                      <td className="py-1 px-2 text-gray-600">{param.description}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                        
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2">Response</h4>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-sm font-medium text-gray-900">Status:</span>
                              <span className="text-sm text-emerald-600">{endpoint.response.status}</span>
                            </div>
                            <pre className="text-xs text-gray-700 overflow-x-auto">
                              {JSON.stringify(endpoint.response.body, null, 2)}
                            </pre>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Example</h4>
                          <div className="bg-gray-900 rounded-lg p-3 relative">
                            <pre className="text-sm text-green-400 overflow-x-auto">
                              {endpoint.example}
                            </pre>
                            <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white">
                              <Copy className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SDK Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">SDK Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sdkExamples.map((sdk, index) => {
              const Icon = sdk.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{sdk.language}</h3>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 relative">
                    <pre className="text-sm text-green-400 overflow-x-auto">
                      {sdk.example}
                    </pre>
                    <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-white">
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Webhooks */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Webhook Events</h2>
          
          <div className="space-y-6">
            {webhookEvents.map((webhook, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{webhook.event}</h3>
                </div>
                
                <p className="text-gray-600 mb-3">{webhook.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Payload Structure</h4>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <pre className="text-sm text-gray-700 overflow-x-auto">
                      {JSON.stringify(webhook.payload, null, 2)}
                    </pre>
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

export default APIReference;