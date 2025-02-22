import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, Target, Briefcase, ChevronUp, ChevronDown, Users, Clock, BookOpen } from 'lucide-react';

// Sample data (using the same data from the provided code)
const activityData = [
  { name: 'Jan', quotes: 45, talks: 38, closes: 12 },
  { name: 'Feb', quotes: 50, talks: 42, closes: 15 },
  { name: 'Mar', quotes: 55, talks: 48, closes: 20 },
  { name: 'Apr', quotes: 70, talks: 55, closes: 25 },
  { name: 'May', quotes: 65, talks: 50, closes: 22 },
  { name: 'Jun', quotes: 80, talks: 65, closes: 30 },
];

const revenueData = [
  { name: 'Jan', revenue: 24000 },
  { name: 'Feb', revenue: 30000 },
  { name: 'Mar', revenue: 41000 },
  { name: 'Apr', revenue: 52000 },
  { name: 'May', revenue: 46000 },
  { name: 'Jun', revenue: 67000 },
];

const goalData = [
  { name: 'Quotes', target: 90, current: 80, percentage: 89 },
  { name: 'Talk Time', target: 75, current: 65, percentage: 87 },
  { name: 'Closes', target: 35, current: 30, percentage: 86 },
  { name: 'Revenue', target: 75000, current: 67000, percentage: 89 },
];

const resourceData = [
  { name: 'High-Value', value: 35, color: '#26361C' },
  { name: 'Medium-Value', value: 45, color: '#93A389' },
  { name: 'Low-Value', value: 20, color: '#AB760F' },
];

const teamMembers = [
  { id: 1, name: 'Alex Johnson', role: 'Senior Sales Rep', performance: 92, leads: 45, revenue: 78500 },
  { id: 2, name: 'Morgan Smith', role: 'Account Executive', performance: 88, leads: 38, revenue: 65200 },
  { id: 3, name: 'Jamie Williams', role: 'Sales Associate', performance: 78, leads: 42, revenue: 59800 },
  { id: 4, name: 'Casey Brown', role: 'Junior Sales Rep', performance: 72, leads: 30, revenue: 42300 },
];

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  period: string;
  icon: React.ReactNode;
}

interface GoalProgressBarProps {
  name: string;
  current: number;
  target: number;
  percentage: number;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  performance: number;
}

// Helper Components
const MetricCard = ({ title, value, change, period, icon }: MetricCardProps) => {
  const isPositive = change > 0;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="p-2 bg-gray-100 rounded-full">
            {icon}
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className={`text-sm font-medium flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            {Math.abs(change)}%
          </span>
          <span className="text-sm text-gray-500 ml-1">{period}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const GoalProgressBar = ({ name, current, target, percentage }: GoalProgressBarProps) => {
  let colorClass = 'bg-red-500';
  if (percentage >= 90) colorClass = 'bg-[#26361C]';
  else if (percentage >= 75) colorClass = 'bg-[#93A389]';
  else if (percentage >= 50) colorClass = 'bg-[#AB760F]';
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500">{current} / {target}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`${colorClass} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ name, role, performance }: TeamMemberCardProps) => {
  let progressColor = 'bg-red-500';
  if (performance >= 90) progressColor = 'bg-[#26361C]';
  else if (performance >= 80) progressColor = 'bg-[#93A389]';
  else if (performance >= 70) progressColor = 'bg-[#AB760F]';
  
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="ml-3 flex-grow">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm text-gray-500">{performance}%</p>
        </div>
        <div className="flex items-center">
          <p className="text-xs text-gray-500">{role}</p>
          <div className="ml-2 flex-grow">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className={`${progressColor} h-1.5 rounded-full`} style={{ width: `${performance}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function SalesPerformanceOptimizer() {
  return (
    <section className="mb-16 bg-gray-300 py-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto p-4 bg-gray-50 rounded-lg shadow-xl">
          <header className="mb-6">
            <h2 className="text-3xl font-bold text-[#26361C] text-center">We Learned The Hard Way. We Were Tracking All The Wrong Numbers</h2>
            <p className="text-gray-600 text-center">A Few Tweaks, A Gameplan, And Confident Execution Changed It All!</p>
          </header>

          <Tabs defaultValue="activity">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="activity" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span>Activity Tracking</span>
              </TabsTrigger>
              <TabsTrigger value="goals" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Goal Setting</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Resource Management</span>
              </TabsTrigger>
            </TabsList>

            {/* Activity Tracking Tab */}
            <TabsContent value="activity" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MetricCard 
                  title="Quote Volume" 
                  value={80} 
                  change={12} 
                  period="vs last month" 
                  icon={<Users className="h-5 w-5" />} 
                />
                <MetricCard 
                  title="Talk Time" 
                  value="65 hrs" 
                  change={8} 
                  period="vs last month" 
                  icon={<Clock className="h-5 w-5" />} 
                />
                <MetricCard 
                  title="Close Rate" 
                  value="37.5%" 
                  change={5} 
                  period="vs last month" 
                  icon={<Target className="h-5 w-5" />} 
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Performance</CardTitle>
                  <CardDescription>Tracking quotes, talks, and closes over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={activityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="quotes" fill="#26361C" name="Quotes" />
                        <Bar dataKey="talks" fill="#93A389" name="Talk Time" />
                        <Bar dataKey="closes" fill="#AB760F" name="Closes" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Generation</CardTitle>
                  <CardDescription>Monthly revenue trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#26361C" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Goal Setting Tab */}
            <TabsContent value="goals" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Goal Progress</CardTitle>
                    <CardDescription>Current progress toward monthly targets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {goalData.map((goal) => (
                        <GoalProgressBar 
                          key={goal.name}
                          name={goal.name}
                          current={goal.current}
                          target={goal.target}
                          percentage={goal.percentage}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Team Performance</CardTitle>
                    <CardDescription>Individual achievements against targets</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {teamMembers.map((member) => (
                        <TeamMemberCard 
                          key={member.id}
                          name={member.name}
                          role={member.role}
                          performance={member.performance}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Resource Management Tab */}
            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Lead Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={resourceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {resourceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Time Allocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Prospecting</span>
                        <span className="text-sm font-medium">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#26361C] h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Follow-up</span>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#93A389] h-2.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Closing</span>
                        <span className="text-sm font-medium">20%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#AB760F] h-2.5 rounded-full" style={{ width: '20%' }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Admin</span>
                        <span className="text-sm font-medium">10%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Training Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#26361C]/10 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-[#26361C]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Closing Techniques</h4>
                          <p className="text-xs text-gray-500">92% team completed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#93A389]/10 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-[#93A389]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Product Knowledge</h4>
                          <p className="text-xs text-gray-500">78% team completed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#AB760F]/10 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-[#AB760F]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Objection Handling</h4>
                          <p className="text-xs text-gray-500">65% team completed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Team Resource Allocation</CardTitle>
                  <CardDescription>Lead assignments and revenue generation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Team Member</th>
                          <th className="text-left py-3 px-4">Role</th>
                          <th className="text-center py-3 px-4">Assigned Leads</th>
                          <th className="text-right py-3 px-4">Revenue Generated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamMembers.map((member) => (
                          <tr key={member.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium">{member.name}</td>
                            <td className="py-3 px-4 text-gray-600">{member.role}</td>
                            <td className="py-3 px-4 text-center">{member.leads}</td>
                            <td className="py-3 px-4 text-right">${member.revenue.toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
