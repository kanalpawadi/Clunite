import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, QrCode, Award, Edit, Eye, UserCheck, Search, Filter, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MyHostedEventsPage() {
  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      date: "Dec 15, 2024",
      status: "upcoming",
      registrations: 85,
      maxParticipants: 100,
      qrScans: 0,
      certificates: 0,
      venue: "Auditorium A",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      date: "Nov 20, 2024",
      status: "completed",
      registrations: 120,
      maxParticipants: 120,
      qrScans: 98,
      certificates: 95,
      venue: "Lab 201",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "Dec 18, 2024",
      status: "draft",
      registrations: 0,
      maxParticipants: 50,
      qrScans: 0,
      certificates: 0,
      venue: "Conference Hall",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-700"
      case "completed":
        return "bg-green-100 text-green-700"
      case "draft":
        return "bg-gray-100 text-gray-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const totalStats = {
    totalEvents: events.length,
    totalRegistrations: events.reduce((sum, event) => sum + event.registrations, 0),
    totalAttendance: events.reduce((sum, event) => sum + event.qrScans, 0),
    totalCertificates: events.reduce((sum, event) => sum + event.certificates, 0),
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Hosted Events</h1>
          <p className="text-gray-600 mt-2">Manage and track your events</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Calendar className="h-4 w-4 mr-2" />
          Host New Event
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-3xl font-bold text-gray-900">{totalStats.totalEvents}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Calendar className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                <p className="text-3xl font-bold text-gray-900">{totalStats.totalRegistrations}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Attendance</p>
                <p className="text-3xl font-bold text-gray-900">{totalStats.totalAttendance}</p>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <QrCode className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Certificates Issued</p>
                <p className="text-3xl font-bold text-gray-900">{totalStats.totalCertificates}</p>
              </div>
              <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                <Award className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Events Overview</CardTitle>
              <CardDescription>Manage all your hosted events</CardDescription>
            </div>
            <div className="flex space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search events..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-gray-600">
                        {event.date} • {event.venue}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Event
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserCheck className="h-4 w-4 mr-2" />
                          View Participants
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-blue-600 mr-1" />
                        <span className="text-sm font-medium text-blue-600">Registrations</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">
                        {event.registrations}/{event.maxParticipants}
                      </p>
                    </div>

                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <QrCode className="h-4 w-4 text-green-600 mr-1" />
                        <span className="text-sm font-medium text-green-600">QR Scans</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{event.qrScans}</p>
                    </div>

                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Award className="h-4 w-4 text-purple-600 mr-1" />
                        <span className="text-sm font-medium text-purple-600">Certificates</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{event.certificates}</p>
                    </div>

                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Eye className="h-4 w-4 text-orange-600 mr-1" />
                        <span className="text-sm font-medium text-orange-600">Attendance Rate</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">
                        {event.registrations > 0 ? Math.round((event.qrScans / event.registrations) * 100) : 0}%
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {event.status === "upcoming" && (
                      <>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Event
                        </Button>
                        <Button size="sm" variant="outline">
                          <UserCheck className="h-4 w-4 mr-2" />
                          View Participants
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                          Close Registration
                        </Button>
                      </>
                    )}
                    {event.status === "completed" && (
                      <>
                        <Button size="sm" variant="outline">
                          <Award className="h-4 w-4 mr-2" />
                          Generate Certificates
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Analytics
                        </Button>
                      </>
                    )}
                    {event.status === "draft" && (
                      <>
                        <Button size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Continue Editing
                        </Button>
                        <Button size="sm" variant="outline">
                          Publish Event
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
