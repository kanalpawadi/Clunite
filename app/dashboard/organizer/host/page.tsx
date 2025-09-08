"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Calendar,
  BarChart3,
  Plus,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Clock,
  Target,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

export default function HostEventPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <h1 className="text-4xl font-black font-heading">Event Management Hub</h1>
                  <Sparkles className="h-10 w-10 ml-4 text-yellow-300" />
                </div>
                <p className="text-indigo-100 text-xl leading-relaxed max-w-2xl">
                  Create engaging events and track your success with powerful analytics. Choose your path to campus
                  event excellence.
                </p>
              </div>
              <div className="flex flex-col items-end space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-3 text-base font-semibold">
                  Organizer Dashboard
                </Badge>

                {/* Unified Action Button */}
                <div className="flex">
                  <Link href="/dashboard/organizer/host/create">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-semibold px-8 py-3 rounded-l-2xl rounded-r-none border-r-0 transition-all duration-300">
                      <Plus className="h-5 w-5 mr-2" />
                      Host New Event
                    </Button>
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 font-semibold px-4 py-3 rounded-r-2xl rounded-l-none transition-all duration-300">
                        <ChevronDown className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-64 mt-2">
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/organizer/host/create" className="flex items-center p-3 cursor-pointer">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                            <Plus className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Host New Event</div>
                            <div className="text-sm text-gray-600">Create workshops, competitions & more</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/dashboard/organizer/host/analytics"
                          className="flex items-center p-3 cursor-pointer"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                            <BarChart3 className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">Organizers Panel</div>
                            <div className="text-sm text-gray-600">View analytics & event insights</div>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Events Hosted", value: "12", color: "from-blue-500 to-blue-600" },
            { icon: Users, label: "Total Participants", value: "1,247", color: "from-green-500 to-green-600" },
            { icon: TrendingUp, label: "Success Rate", value: "94%", color: "from-purple-500 to-purple-600" },
            { icon: Award, label: "Avg Rating", value: "4.8", color: "from-orange-500 to-orange-600" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-black font-heading text-foreground">{stat.value}</p>
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Host New Event Card */}
          <Card
            className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative"
            onMouseEnter={() => setHoveredCard("host")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 px-4 py-2 font-semibold">
                    Create
                  </Badge>
                  <Link href="/dashboard/organizer/host/create">
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      <Plus className="h-4 w-4 mr-1" />
                      Quick Start
                    </Button>
                  </Link>
                </div>
              </div>
              <CardTitle className="text-2xl font-black font-heading text-foreground group-hover:text-indigo-600 transition-colors">
                Host New Event
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                Create engaging events for your campus community. Set up workshops, competitions, seminars, and more
                with our comprehensive event creation tools.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-indigo-500" />
                  <span>Quick setup in under 5 minutes</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Target className="h-4 w-4 mr-2 text-purple-500" />
                  <span>Advanced targeting and registration</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Award className="h-4 w-4 mr-2 text-pink-500" />
                  <span>Built-in certificates and QR attendance</span>
                </div>
              </div>

              <Link href="/dashboard/organizer/host/create" className="block">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Event
                  <ArrowRight
                    className={`h-5 w-5 ml-2 transition-transform duration-300 ${hoveredCard === "host" ? "translate-x-1" : ""}`}
                  />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Organizers Panel Card */}
          <Card
            className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative"
            onMouseEnter={() => setHoveredCard("analytics")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="pb-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 font-semibold">
                    Analytics
                  </Badge>
                  <Link href="/dashboard/organizer/host/analytics">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      View Now
                    </Button>
                  </Link>
                </div>
              </div>
              <CardTitle className="text-2xl font-black font-heading text-foreground group-hover:text-emerald-600 transition-colors">
                Organizers Panel
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                Comprehensive analytics dashboard for all your events. Track performance, participant engagement, and
                success metrics with detailed insights.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              <div className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <BarChart3 className="h-4 w-4 mr-2 text-emerald-500" />
                  <span>Real-time event analytics</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 mr-2 text-teal-500" />
                  <span>Performance tracking & insights</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2 text-cyan-500" />
                  <span>Participant engagement metrics</span>
                </div>
              </div>

              <Link href="/dashboard/organizer/host/analytics" className="block">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  View Analytics Dashboard
                  <ArrowRight
                    className={`h-5 w-5 ml-2 transition-transform duration-300 ${hoveredCard === "analytics" ? "translate-x-1" : ""}`}
                  />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-heading">Recent Activity</CardTitle>
            <CardDescription>Your latest event management activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Created", event: "AI Workshop 2024", time: "2 hours ago", status: "published" },
                { action: "Updated", event: "Hackathon Finals", time: "1 day ago", status: "draft" },
                { action: "Completed", event: "Design Thinking Session", time: "3 days ago", status: "completed" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-border rounded-2xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {activity.action} "{activity.event}"
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <Badge
                    className={`${
                      activity.status === "published"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : activity.status === "draft"
                          ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                    } px-3 py-1 font-medium`}
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
