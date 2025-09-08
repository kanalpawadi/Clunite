"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  Users,
  DollarSign,
  Eye,
  Target,
  Award,
  Activity,
  Plus,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function OrganizerDashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")

  // Mock data for analytics
  const stats = {
    totalEvents: 12,
    activeEvents: 3,
    totalParticipants: 1247,
    totalRevenue: 45600,
    avgRating: 4.7,
    completionRate: 94.2,
  }

  const recentEvents = [
    {
      id: 1,
      title: "AI Workshop 2024",
      status: "active",
      participants: 156,
      maxParticipants: 200,
      revenue: 7800,
      rating: 4.8,
      daysLeft: 5,
    },
    {
      id: 2,
      title: "Startup Pitch Competition",
      status: "completed",
      participants: 89,
      maxParticipants: 100,
      revenue: 4450,
      rating: 4.6,
      daysLeft: 0,
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      status: "draft",
      participants: 0,
      maxParticipants: 150,
      revenue: 0,
      rating: 0,
      daysLeft: 15,
    },
  ]

  const performanceMetrics = [
    {
      title: "Event Success Rate",
      value: "94.2%",
      change: "+2.1%",
      changeType: "positive",
      description: "Events completed successfully",
      icon: Target,
      color: "green",
    },
    {
      title: "Average Rating",
      value: "4.7/5",
      change: "+0.2",
      changeType: "positive",
      description: "Participant satisfaction",
      icon: Star,
      color: "yellow",
    },
    {
      title: "Participant Growth",
      value: "+23%",
      change: "+5%",
      changeType: "positive",
      description: "Month over month",
      icon: TrendingUp,
      color: "blue",
    },
    {
      title: "Revenue Growth",
      value: "+31%",
      change: "+8%",
      changeType: "positive",
      description: "Compared to last month",
      icon: DollarSign,
      color: "green",
    },
  ]

  const upcomingTasks = [
    {
      title: "Review AI Workshop applications",
      dueDate: "Today",
      priority: "high",
      type: "review",
    },
    {
      title: "Send certificates for Pitch Competition",
      dueDate: "Tomorrow",
      priority: "medium",
      type: "certificate",
    },
    {
      title: "Prepare materials for Web Dev Bootcamp",
      dueDate: "In 3 days",
      priority: "low",
      type: "preparation",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getMetricColor = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-600 bg-blue-50"
      case "green":
        return "text-green-600 bg-green-50"
      case "yellow":
        return "text-yellow-600 bg-yellow-50"
      case "red":
        return "text-red-600 bg-red-50"
      default:
        return "text-slate-600 bg-slate-50"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Organizer Dashboard</h1>
                <p className="text-indigo-100 text-lg">Manage your events and track performance</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/dashboard/organizer/host">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-6 py-3 rounded-xl backdrop-blur-sm">
                    <Plus className="h-5 w-5 mr-2" />
                    Host New Event
                  </Button>
                </Link>
                <Link href="/dashboard/organizer/analytics">
                  <Button className="bg-white text-indigo-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-xl">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    View Analytics
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Calendar className="h-6 w-6" />
                </div>
                <Badge className="bg-blue-100 text-blue-800">+2 this month</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Events</p>
                <p className="text-3xl font-black text-gray-900">{stats.totalEvents}</p>
                <p className="text-xs text-gray-500 font-medium">{stats.activeEvents} currently active</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-green-50 text-green-600">
                  <Users className="h-6 w-6" />
                </div>
                <Badge className="bg-green-100 text-green-800">+23%</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Participants</p>
                <p className="text-3xl font-black text-gray-900">{stats.totalParticipants.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">Across all events</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-yellow-50 text-yellow-600">
                  <DollarSign className="h-6 w-6" />
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">+31%</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Revenue</p>
                <p className="text-3xl font-black text-gray-900">₹{stats.totalRevenue.toLocaleString()}</p>
                <p className="text-xs text-gray-500 font-medium">This month</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                  <Star className="h-6 w-6" />
                </div>
                <Badge className="bg-purple-100 text-purple-800">Excellent</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Average Rating</p>
                <p className="text-3xl font-black text-gray-900">{stats.avgRating}/5</p>
                <p className="text-xs text-gray-500 font-medium">From {stats.totalParticipants} reviews</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Performance Overview</h2>
              <p className="text-gray-600">Key metrics for your events</p>
            </div>
            <Select defaultValue="30d">
              <SelectTrigger className="w-[140px] bg-white border-gray-200">
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
                className="border-0 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${getMetricColor(metric.color)}`}>
                      <metric.icon className="h-6 w-6" />
                    </div>
                    <Badge 
                      className={`${metric.changeType === "positive" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"} px-2 py-1 text-xs font-semibold`}
                    >
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{metric.title}</p>
                    <p className="text-3xl font-black text-gray-900">{metric.value}</p>
                    <div className="flex items-center text-sm">
                      {metric.changeType === "positive" ? (
                        <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1 text-red-600" />
                      )}
                      <span className={`${metric.changeType === "positive" ? "text-green-600" : "text-red-600"} font-medium`}>
                        {metric.changeType === "positive" ? "Trending upward" : "Trending downward"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="bg-white border border-gray-200 p-1 rounded-xl">
            <TabsTrigger value="events" className="font-semibold">
              Recent Events
            </TabsTrigger>
            <TabsTrigger value="tasks" className="font-semibold">
              Upcoming Tasks
            </TabsTrigger>
            <TabsTrigger value="insights" className="font-semibold">
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">Recent Events</CardTitle>
                  <CardDescription className="text-gray-600">Manage and track your events</CardDescription>
                </div>
                <Link href="/dashboard/organizer/events">
                  <Button variant="outline" className="font-semibold bg-transparent">
                    View All Events
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                          {event.title.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{event.title}</div>
                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <Badge className={getStatusColor(event.status)}>
                              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                            </Badge>
                            <span>
                              {event.participants}/{event.maxParticipants} participants
                            </span>
                            {event.rating > 0 && (
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                <span>{event.rating}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">₹{event.revenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">
                          {event.status === "active" && `${event.daysLeft} days left`}
                          {event.status === "completed" && "Completed"}
                          {event.status === "draft" && "Draft"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Upcoming Tasks</CardTitle>
                <CardDescription className="text-gray-600">Stay on top of your event management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            task.type === "review"
                              ? "bg-blue-50 text-blue-600"
                              : task.type === "certificate"
                                ? "bg-green-50 text-green-600"
                                : "bg-purple-50 text-purple-600"
                          }`}
                        >
                          {task.type === "review" && <Eye className="h-5 w-5" />}
                          {task.type === "certificate" && <Award className="h-5 w-5" />}
                          {task.type === "preparation" && <Zap className="h-5 w-5" />}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{task.title}</div>
                          <div className="text-sm text-gray-600">Due: {task.dueDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Complete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Event Performance</CardTitle>
                  <CardDescription className="text-gray-600">Success rate and completion metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">Success Rate</span>
                      <span className="text-sm font-bold text-gray-900">{stats.completionRate}%</span>
                    </div>
                    <Progress value={stats.completionRate} className="h-3 bg-gray-100" />
                    <p className="text-xs text-gray-500 font-medium">
                      {stats.completionRate}% of events completed successfully
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">Participant Satisfaction</span>
                      <span className="text-sm font-bold text-gray-900">{stats.avgRating}/5</span>
                    </div>
                    <Progress value={(stats.avgRating / 5) * 100} className="h-3 bg-gray-100" />
                    <p className="text-xs text-gray-500 font-medium">Average rating from participant feedback</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-600">Capacity Utilization</span>
                      <span className="text-sm font-bold text-gray-900">87%</span>
                    </div>
                    <Progress value={87} className="h-3 bg-gray-100" />
                    <p className="text-xs text-gray-500 font-medium">Average event capacity filled</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Growth Insights</CardTitle>
                  <CardDescription className="text-gray-600">Trends and recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-bold text-green-800">Strong Growth</span>
                    </div>
                    <p className="text-sm text-green-700 font-medium">Your events are growing 23% month-over-month</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-800">High Satisfaction</span>
                    </div>
                    <p className="text-sm text-blue-700 font-medium">
                      4.7/5 average rating shows excellent participant experience
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="flex items-center mb-2">
                      <Target className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="font-bold text-orange-800">Optimization Tip</span>
                    </div>
                    <p className="text-sm text-orange-700 font-medium">
                      Consider hosting more workshops - they have 95% completion rate
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="flex items-center mb-2">
                      <Activity className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-bold text-purple-800">Revenue Opportunity</span>
                    </div>
                    <p className="text-sm text-purple-700 font-medium">
                      Premium events generate 40% more revenue per participant
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
