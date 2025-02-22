import React, { useState, useEffect } from 'react';
import { FaCog, FaDollarSign, FaSync, FaCheckCircle, FaChartLine, FaChartBar, FaRunning } from 'react-icons/fa';

interface InputValues {
  marketingSpend: number;
  retentionRate: number;
}

interface Results {
  active: {
    acquisitionCost?: number;
    callersNeeded?: number;
    avgRenewals?: number;
    initialCommission?: number;
    renewalCommissions?: number;
    lifetimeValue?: number;
    roi?: number;
  };
  derived: {
    totalLeads?: number;
    totalQuotes?: number;
    salesCount?: number;
    totalPremium?: number;
  };
  monthlyData?: Array<{
    month: string;
    activeRevenue: number;
    activeCommissions: number;
  }>;
}

const PremiumROICalculator = () => {
  // Default values for the calculator
  const defaultValues = {
    marketingSpend: 4500,
    retentionRate: 80
  };

  // State for user inputs
  const [inputs, setInputs] = useState<InputValues>(defaultValues);
  const [activeScenario, setActiveScenario] = useState<'default' | 'conservative' | 'aggressive' | 'custom'>('default');
  const [results, setResults] = useState<Results>({
    active: {},
    derived: {},
    monthlyData: []
  });

  // Predefined scenarios
  const scenarios: Record<string, InputValues> = {
    default: defaultValues,
    conservative: {
      marketingSpend: 3000,
      retentionRate: 70
    },
    aggressive: {
      marketingSpend: 6000,
      retentionRate: 85
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: parseFloat(value) || 0
    });
    setActiveScenario('custom');
  };

  // Load a predefined scenario
  const loadScenario = (scenario: keyof typeof scenarios) => {
    setInputs(scenarios[scenario]);
    setActiveScenario(scenario as 'default' | 'conservative' | 'aggressive' | 'custom');
  };

  // Calculate all metrics based on inputs
  useEffect(() => {
    // Lead generation calculation ($5 per lead)
    const totalLeads = Math.floor(inputs.marketingSpend / 5);
    
    // Sales calculation (2% of leads convert)
    const salesCount = Math.floor(totalLeads * 0.02);
    
    // Quote calculation (working backwards from sales)
    // If sales conversion rate is 12%, then quotes = sales / 0.12
    const totalQuotes = Math.ceil(salesCount / 0.12);
    
    // Premium calculation ($1700 per sale)
    const totalPremium = salesCount * 1700;
    
    // Calculate acquisition cost
    const acquisitionCost = salesCount > 0 ? inputs.marketingSpend / salesCount : 0;
    
    // Calculate number of callers needed (1.5 callers per $3000 in marketing spend)
    const callersNeeded = (inputs.marketingSpend / 3000) * 1.5;
    
    // Calculate lifetime value
    // Convert retention rate to number of renewals
    const avgRenewals = inputs.retentionRate >= 100 ? 10 : Math.round(1 / (1 - (inputs.retentionRate / 100)));
    
    // Calculate initial commission and renewal commissions
    const initialCommission = totalPremium * 0.22;
    const renewalCommissions = avgRenewals * (totalPremium * 0.07);
    const lifetimeValue = initialCommission + renewalCommissions;
    
    // Generate projection data
    const monthlyData = [];
    for (let month = 1; month <= 12; month++) {
      const monthlyPremium = totalPremium;
      const cumulativePremium = monthlyPremium * month;
      
      const monthlyInitialCommission = initialCommission;
      const cumulativeInitialCommission = monthlyInitialCommission * month;
      
      let cumulativeRenewalCommission = 0;
      for (let i = 1; i < month; i++) {
        cumulativeRenewalCommission += totalPremium * 0.07;
      }
      
      const totalCommissions = cumulativeInitialCommission + cumulativeRenewalCommission;
      
      monthlyData.push({
        month: `Month ${month}`,
        activeRevenue: cumulativePremium,
        activeCommissions: totalCommissions
      });
    }
    
    // Update results state
    setResults({
      derived: {
        totalLeads,
        totalQuotes,
        salesCount,
        totalPremium
      },
      active: {
        acquisitionCost,
        callersNeeded,
        avgRenewals,
        initialCommission,
        renewalCommissions,
        lifetimeValue,
        roi: (lifetimeValue / inputs.marketingSpend) * 100
      },
      monthlyData
    });
  }, [inputs]);

  return (
    <div className="mx-auto w-3/4">
      <h2 className="text-8xl font-bold text-center mb-8 font-['DM_Sans'] bg-gradient-to-r from-[#26361C] to-[#AB760F] text-transparent bg-clip-text">
        Feeding Sales Agents Creates Results
      </h2>
      <div className="p-4 bg-[#26361C] rounded-lg shadow-xl">
        <div className="p-4 bg-[#93A389] rounded-lg">
          <div className="flex gap-8">
            {/* Left Side */}
            <div className="w-1/2 flex flex-col gap-6">
              <div className="w-full bg-white p-4 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-[#26361C] font-['DM_Sans']">
                  <FaCog className="mr-2 h-5 w-5" />
                  Input Parameters
                </h3>
          
                {/* Scenario Selection */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    {Object.keys(scenarios).map(scenario => (
                      <button
                        key={scenario}
                        onClick={() => loadScenario(scenario)}
                        className={`px-3 py-1 text-sm rounded ${
                          activeScenario === scenario 
                            ? 'bg-[#AB760F] text-white' 
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
          
                {/* Input Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1 font-['DM_Sans']">
                      <FaDollarSign className="mr-1 h-4 w-4" />
                      Marketing Spend ($)
                    </label>
                    <input
                      type="range"
                      name="marketingSpend"
                      min="1500"
                      max="15000"
                      step="500"
                      value={inputs.marketingSpend}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#AB760F]"
                    />
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">$1,500</span>
                      <input
                        type="number"
                        name="marketingSpend"
                        value={inputs.marketingSpend}
                        onChange={handleInputChange}
                        className="w-24 text-center border rounded-md focus:border-[#AB760F] focus:ring focus:ring-[#AB760F] focus:ring-opacity-50"
                      />
                      <span className="text-xs text-gray-500">$15,000</span>
                    </div>
                  </div>
            
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1 font-['DM_Sans']">
                      <FaSync className="mr-1 h-4 w-4" />
                      Retention Rate (%)
                    </label>
                    <input
                      type="range"
                      name="retentionRate"
                      min="50"
                      max="95"
                      step="1"
                      value={inputs.retentionRate}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#AB760F]"
                    />
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">50%</span>
                      <input
                        type="number"
                        name="retentionRate"
                        value={inputs.retentionRate}
                        onChange={handleInputChange}
                        className="w-24 text-center border rounded-md focus:border-[#AB760F] focus:ring focus:ring-[#AB760F] focus:ring-opacity-50"
                      />
                      <span className="text-xs text-gray-500">95%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results Panel */}
              <div className="w-full bg-white p-4 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-[#26361C] font-['DM_Sans']">
                  <FaChartLine className="mr-2 h-5 w-5" />
                  Results
                </h3>
          
                {/* Comparison Cards */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-[#AB760F]">
                    <h4 className="text-2xl font-semibold mb-4 text-center text-[#26361C] font-['DM_Sans']">Marketing Performance</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Quotes Generated:</span>
                        <span className="font-medium">{results.derived?.totalQuotes || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Sales Conversions:</span>
                        <span className="font-medium">{results.derived?.salesCount || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Premium:</span>
                        <span className="font-medium">${results.derived?.totalPremium?.toLocaleString() || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Acquisition Cost:</span>
                        <span className="font-medium">${results.active.acquisitionCost?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Callers Needed:</span>
                        <span className="font-medium">{results.active.callersNeeded?.toFixed(1) || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Policy Renewals:</span>
                        <span className="font-medium">{results.active.avgRenewals || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Initial Commission:</span>
                        <span className="font-medium">${results.active.initialCommission?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Renewal Commissions:</span>
                        <span className="font-medium">${results.active.renewalCommissions?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Lifetime Value:</span>
                        <span className="font-medium">${results.active.lifetimeValue?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">ROI:</span>
                        <span className={`font-medium ${(results.active.roi || 0) > 100 ? 'text-[#AB760F]' : 'text-red-600'}`}>
                          {results.active.roi?.toFixed(2) || 0}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
          
                {/* No Charts - Removed as requested */}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2 flex flex-col gap-6">

              {/* Key Performance Metrics */}
              <div className="bg-white p-4 rounded-lg shadow border border-[#AB760F]">
                <h4 className="text-2xl font-semibold text-center mb-4 flex items-center justify-center text-[#26361C] font-['DM_Sans']">
                  <FaChartBar className="mr-2 h-5 w-5" />
                  Key Performance Metrics
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg text-center border border-[#AB760F]">
                    <div className="text-sm font-medium text-gray-600 mb-2">Quotes Generated</div>
                    <div className="font-bold text-2xl text-[#AB760F]">
                      {results.derived?.totalQuotes || 0}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-[#AB760F]">
                    <div className="text-sm font-medium text-gray-600 mb-2">Sales Converted</div>
                    <div className="font-bold text-2xl text-[#AB760F]">
                      {results.derived?.salesCount || 0}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-[#AB760F]">
                    <div className="text-sm font-medium text-gray-600 mb-2">Premium Volume</div>
                    <div className="font-bold text-2xl text-[#AB760F]">
                      ${results.derived?.totalPremium?.toLocaleString() || 0}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-[#AB760F]">
                    <div className="text-sm font-medium text-gray-600 mb-2">Return on Investment</div>
                    <div className="font-bold text-2xl text-[#AB760F]">
                      {results.active.roi?.toFixed(2) || 0}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold mb-4 flex items-center text-[#26361C] font-['DM_Sans']">
                  <FaRunning className="mr-2 h-5 w-5" />
                  Ready To Trade Hamster Wheel For This?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start bg-white p-3 rounded-lg border border-[#AB760F]">
                    <FaCheckCircle className="h-5 w-5 text-[#AB760F] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Boost lifetime value by 35-40% through elevated client retention strategies
                    </span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg border border-[#AB760F]">
                    <FaCheckCircle className="h-5 w-5 text-[#AB760F] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Triple marketing ROI by implementing precision targeting and lead qualification
                    </span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg border border-[#AB760F]">
                    <FaCheckCircle className="h-5 w-5 text-[#AB760F] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Increase consistent quote volume by 27% with outsourced lead dialing systems
                    </span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg border border-[#AB760F]">
                    <FaCheckCircle className="h-5 w-5 text-[#AB760F] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Generate 10x ROI by optimizing sales producer capacity and performance
                    </span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded-lg border border-[#AB760F]">
                    <FaCheckCircle className="h-5 w-5 text-[#AB760F] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Reduce acquisition costs by 22% while simultaneously expanding market reach
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PremiumROICalculator };
