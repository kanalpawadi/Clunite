import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Calendar, Download, Target, Award, DollarSign, UserCheck, Activity } from "lucide-react"

export default function EventAnalyticsPage() {
  const selectedEvent = {
    title: "AI & Machine Learning Workshop",
    date: "Nov 20, 2024",
    status: "completed",
  }

  const analyticsData = {
    views: 2450,
    registrations: 234,
    attendance: 198,
    certificates: 185,
    revenue: 11700,
    conversionRate: 9.6,
    attendanceRate: 84.6,
    certificateRate: 93.4,
  }

  const timelineData = [
    { date: "Nov 1", registrations: 15, views: 145, revenue: 750 },
    { date: "Nov 5", registrations: 45, views: 420, revenue: 2250 },
    { date: "Nov 10", registrations: 98, views: 890, revenue: 4900 },
    { date: "Nov 15", registrations: 156, views: 1580, revenue: 7800 },
    { date: "Nov 20", registrations: 234, views: 2450, revenue: 11700 },
  ]

  const participantStats = {
    byCollege: [
      { name: "IIT Delhi", count: 45, percentage: 19.2 },
      { name: "BITS Pilani", count: 38, percentage: 16.2 },
      { name: "NIT Trichy", count: 32, percentage: 13.7 },
      { name: "Delhi University", count: 28, percentage: 12.0 },
      { name: "Others", count: 91, percentage: 38.9 },
    ],
    byDepartment: [
      { name: "Computer Science", count: 89, percentage: 38.0 },
      { name: "Engineering", count: 56, percentage: 23.9 },
      { name: "Mathematics", count: 34, percentage: 14.5 },
      { name: "Business", count: 28, percentage: 12.0 },
      { name: "Others", count: 27, percentage: 11.5 },
    ],
    byYear: [
      { name: "1st Year", count: 42, percentage: 17.9 },
      { name: "2nd Year", count: 78, percentage: 33.3 },
      { name: "3rd Year", count: 67, percentage: 28.6 },
      { name: "4th Year", count: 47, percentage: 20.1 },
    ],
  }

  const performanceMetrics = [
    {
      title: "Registration Conversion",
      value: "9.6%",
      change: "+1.2%",
      changeType: "positive",
      description: "Views to registrations",
      icon: Target,
      color: "blue",
    },
    {
      title: "Attendance Rate",
      value: "84.6%",
      change: "+3.1%",
      changeType: "positive",
      description: "Registrations to attendance",
      icon: UserCheck,
      color: "green",
    },
    {
      title: "Certificate Completion",
      value: "93.4%",
      change: "+5.2%",
      changeType: "positive",
      description: "Attendance to certificates",
      icon: Award,
      color: "orange",
    },
    {
      title: "Revenue per Participant",
      value: "₹50",
      change: "+₹5",
      changeType: "positive",
      description: "Average revenue generated",
      icon: DollarSign,
      color: "slate",
    },
  ]

  const getMetricColor = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-600 bg-blue-50"
      case "green":
        return "text-green-600 bg-green-50"
      case "orange":
        return "text-orange-600 bg-orange-50"
      case "slate":
        return "text-slate-600 bg-slate-50"
      default:
        return "text-slate-600 bg-slate-50"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-slate-900 mb-2">Event Analytics</h1>
              <p className="text-lg text-slate-600 font-medium">Comprehensive insights and performance metrics</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl">
              <Download className="h-5 w-5 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Event Selector */}
        <Card className="border-slate-200 bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{selectedEvent.title}</h3>
                  <p className="text-slate-600 font-medium">{selectedEvent.date}</p>
                </div>
                <Badge className="bg-green-100 text-green-800 font-semibold">
                  {selectedEvent.status.charAt(0).toUpperCase() + selectedEvent.status.slice(1)}
                </Badge>
              </div>
              <Button
                variant="outline"
                className="border-slate-300 hover:border-blue-500 hover:text-blue-600 font-semibold bg-transparent"
              >
                Change Event
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Key Performance Metrics */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Key Performance Indicators</h2>
              <p className="text-slate-600">Real-time metrics and event performance</p>
            </div>
            <Select defaultValue="30d">
              <SelectTrigger className="w-[140px] bg-white border-slate-200">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="12m">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card 
                key={index} 
                className="border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${getMetricColor(metric.color)} shadow-sm`}>
                      <metric.icon className="h-6 w-6" />
                    </div>
                    <Badge className="bg-green-50 text-green-700 border-green-200 px-2 py-1 text-xs font-semibold">
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{metric.title}</p>
                    <p className="text-3xl font-black text-slate-900">{metric.value}</p>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                      <span className="text-green-600 font-medium">Trending upward</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1 rounded-xl">
            <TabsTrigger value="overview" className="font-semibold">
              Overview
            </TabsTrigger>
            <TabsTrigger value="participants" className="font-semibold">
              Participants
            </TabsTrigger>
            <TabsTrigger value="timeline" className="font-semibold">
              Timeline
            </TabsTrigger>
            <TabsTrigger value="revenue" className="font-semibold">
              Revenue
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Conversion Funnel */}
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">Conversion Funnel</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    Track how users moved through your event funnel
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-600">Event Views</span>
                      <span className="text-sm font-bold text-slate-900">{analyticsData.views.toLocaleString()}</span>
                    </div>
                    <Progress value={100} className="h-3 bg-slate-100" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-600">Registrations</span>
                      <span className="text-sm font-bold text-slate-900">{analyticsData.registrations}</span>
                    </div>
                    <Progress value={analyticsData.conversionRate} className="h-3 bg-slate-100" />
                    <p className="text-xs text-slate-500 font-medium">
                      {analyticsData.conversionRate}% conversion rate
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-600">Attendance</span>
                      <span className="text-sm font-bold text-slate-900">{analyticsData.attendance}</span>
                    </div>
                    <Progress value={analyticsData.attendanceRate} className="h-3 bg-slate-100" />
                    <p className="text-xs text-slate-500 font-medium">
                      {analyticsData.attendanceRate}% attendance rate
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-600">Certificates</span>
                      <span className="text-sm font-bold text-slate-900">{analyticsData.certificates}</span>
                    </div>
                    <Progress value={analyticsData.certificateRate} className="h-3 bg-slate-100" />
                    <p className="text-xs text-slate-500 font-medium">
                      {analyticsData.certificateRate}% completion rate
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Insights */}
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">Performance Insights</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    Key takeaways and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-bold text-green-800">Excellent Attendance</span>
                    </div>
                    <p className="text-sm text-green-700 font-medium">
                      Your {analyticsData.attendanceRate}% attendance rate is 12% above industry average
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-800">High Engagement</span>
                    </div>
                    <p className="text-sm text-blue-700 font-medium">
                      {analyticsData.certificateRate}% certificate completion shows strong participant engagement
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="flex items-center mb-2">
                      <Target className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-bold text-orange-800">Growth Opportunity</span>
                    </div>
                    <p className="text-sm text-orange-700 font-medium">
                      Consider A/B testing event descriptions to improve conversion rate
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-slate-600 mr-2" />
                      <span className="font-bold text-slate-800">Revenue Performance</span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium">
                      Generated ₹{analyticsData.revenue.toLocaleString()} with strong ROI metrics
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="participants" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* By College */}
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900">By College</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    Participant distribution across institutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {participantStats.byCollege.map((college, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">{college.name}</span>
                        <span className="text-sm font-bold text-slate-900">{college.count}</span>
                      </div>
                      <Progress value={college.percentage} className="h-2 bg-slate-100" />
                      <p className="text-xs text-slate-500 font-medium">{college.percentage}% of total</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* By Department */}
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900">By Department</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    Academic department breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {participantStats.byDepartment.map((dept, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">{dept.name}</span>
                        <span className="text-sm font-bold text-slate-900">{dept.count}</span>
                      </div>
                      <Progress value={dept.percentage} className="h-2 bg-slate-100" />
                      <p className="text-xs text-slate-500 font-medium">{dept.percentage}% of total</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* By Year */}
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900">By Academic Year</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">Year of study distribution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {participantStats.byYear.map((year, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">{year.name}</span>
                        <span className="text-sm font-bold text-slate-900">{year.count}</span>
                      </div>
                      <Progress value={year.percentage} className="h-2 bg-slate-100" />
                      <p className="text-xs text-slate-500 font-medium">{year.percentage}% of total</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900">Registration Timeline</CardTitle>
                <CardDescription className="text-slate-600 font-medium">
                  Track registration growth and engagement over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timelineData.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 border border-slate-200 rounded-xl"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-lg">{data.date}</div>
                          <div className="text-sm text-slate-600 font-medium">Milestone date</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{data.views}</div>
                          <div className="text-xs text-slate-500 font-medium">Views</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{data.registrations}</div>
                          <div className="text-xs text-slate-500 font-medium">Registrations</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600">₹{data.revenue.toLocaleString()}</div>
                          <div className="text-xs text-slate-500 font-medium">Revenue</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">Revenue Breakdown</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    Detailed financial performance analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <span className="font-semibold text-green-800">Total Revenue</span>
                      <span className="text-2xl font-black text-green-900">
                        ₹{analyticsData.revenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <span className="font-semibold text-blue-800">Revenue per Registration</span>
                      <span className="text-xl font-bold text-blue-900">₹50</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                      <span className="font-semibold text-orange-800">Platform Fee (5%)</span>
                      <span className="text-lg font-bold text-orange-900">
                        ₹{(analyticsData.revenue * 0.05).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                      <span className="font-semibold text-slate-800">Net Revenue</span>
                      <span className="text-xl font-bold text-slate-900">
                        ₹{(analyticsData.revenue * 0.95).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">Financial Insights</CardTitle>
                  <CardDescription className="text-slate-600 font-medium">
                    Revenue optimization recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-bold text-green-800">Strong Performance</span>
                    </div>
                    <p className="text-sm text-green-700 font-medium">
                      Revenue exceeded target by 23% with excellent conversion rates
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Target className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-800">Optimization Tip</span>
                    </div>
                    <p className="text-sm text-blue-700 font-medium">
                      Consider tiered pricing for early bird registrations to boost revenue
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="flex items-center mb-2">
                      <Activity className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-bold text-orange-800">Growth Potential</span>
                    </div>
                    <p className="text-sm text-orange-700 font-medium">
                      Similar events show 40% higher revenue with premium add-ons
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
