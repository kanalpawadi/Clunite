import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, TrendingUp, Eye, UserCheck } from "lucide-react"
import Link from "next/link"
import {
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

async function getEventAnalytics(eventId: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    },
  )

  // Get event details
  const { data: event } = await supabase.from("events").select("*").eq("id", eventId).single()

  // Get registrations
  const { data: registrations } = await supabase.from("event_registrations").select("*").eq("event_id", eventId)

  // Mock analytics data - replace with real data
  const dailyRegistrations = [
    { date: "2024-01-01", registrations: 5 },
    { date: "2024-01-02", registrations: 12 },
    { date: "2024-01-03", registrations: 8 },
    { date: "2024-01-04", registrations: 15 },
    { date: "2024-01-05", registrations: 22 },
    { date: "2024-01-06", registrations: 18 },
    { date: "2024-01-07", registrations: 25 },
  ]

  const demographicData = [
    { name: "Computer Science", value: 35, color: "#3b82f6" },
    { name: "Business", value: 25, color: "#10b981" },
    { name: "Engineering", value: 20, color: "#f59e0b" },
    { name: "Arts", value: 12, color: "#ef4444" },
    { name: "Other", value: 8, color: "#8b5cf6" },
  ]

  return {
    event,
    registrations: registrations || [],
    dailyRegistrations,
    demographicData,
  }
}

export default async function EventAnalyticsPage({ params }: { params: { id: string } }) {
  const { event, registrations, dailyRegistrations, demographicData } = await getEventAnalytics(params.id)

  if (!event) {
    return <div>Event not found</div>
  }

  const totalRegistrations = registrations.length
  const registrationRate = event.max_participants ? (totalRegistrations / event.max_participants) * 100 : 0
  const revenue = event.price ? totalRegistrations * event.price : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/organizer/host/analytics">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Analytics
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
              <p className="text-gray-600 mt-1">Event Analytics Dashboard</p>
            </div>
          </div>
          <Badge variant={event.status === "published" ? "default" : "secondary"}>{event.status}</Badge>
        </div>

        {/* Event Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Event Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold">{new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">{event.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Capacity</p>
                  <p className="font-semibold">{event.max_participants || "Unlimited"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="font-semibold">${event.price || "Free"}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Registrations</p>
                  <p className="text-3xl font-bold text-blue-600">{totalRegistrations}</p>
                </div>
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Registration Rate</p>
                  <p className="text-3xl font-bold text-green-600">{registrationRate.toFixed(1)}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-purple-600">${revenue}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Views</p>
                  <p className="text-3xl font-bold text-orange-600">1,247</p>
                </div>
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Registrations</CardTitle>
              <CardDescription>Registration trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={dailyRegistrations}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="registrations" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participant Demographics</CardTitle>
              <CardDescription>Registration by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={demographicData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Registrations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>Latest participants who registered for this event</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Email</th>
                    <th className="text-left p-3">Registration Date</th>
                    <th className="text-left p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.slice(0, 10).map((registration, index) => (
                    <tr key={registration.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3">{registration.participant_name || "N/A"}</td>
                      <td className="p-3">{registration.participant_email || "N/A"}</td>
                      <td className="p-3">{new Date(registration.created_at).toLocaleDateString()}</td>
                      <td className="p-3">
                        <Badge variant="default">Confirmed</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
