"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Users,
  Search,
  Plus,
  MapPin,
  Clock,
  UserCheck,
  UserX,
  Eye,
} from "lucide-react"
import Link from "next/link"
import { useOrganizerEvents } from "@/hooks/useEventParticipants"

export default function OrganizerDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { events, loading, error } = useOrganizerEvents()

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalParticipants = events.reduce((sum, event) => sum + event.participantStats.total, 0)
  const totalRegistered = events.reduce((sum, event) => sum + event.participantStats.registered, 0)
  const totalAttended = events.reduce((sum, event) => sum + event.participantStats.attended, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "ongoing":
        return "bg-green-100 text-green-800 border-green-200"
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading events: {error}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    )
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
                <h1 className="text-3xl font-bold mb-2">Event Participants Dashboard</h1>
                <p className="text-indigo-100 text-lg">View and manage participants for all events</p>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/dashboard/organizer/host">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-6 py-3 rounded-xl backdrop-blur-sm">
                    <Plus className="h-5 w-5 mr-2" />
                    Host New Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <Calendar className="h-6 w-6" />
                </div>
                <Badge className="bg-blue-100 text-blue-800">Total</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Events</p>
                <p className="text-3xl font-black text-gray-900">{events.length}</p>
                <p className="text-xs text-gray-500 font-medium">All events in system</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-green-50 text-green-600">
                  <Users className="h-6 w-6" />
                </div>
                <Badge className="bg-green-100 text-green-800">All Events</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Participants</p>
                <p className="text-3xl font-black text-gray-900">{totalParticipants}</p>
                <p className="text-xs text-gray-500 font-medium">Across all events</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                  <UserCheck className="h-6 w-6" />
                </div>
                <Badge className="bg-purple-100 text-purple-800">Active</Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Registered</p>
                <p className="text-3xl font-black text-gray-900">{totalRegistered}</p>
                <p className="text-xs text-gray-500 font-medium">Currently registered</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Events List */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">All Events</CardTitle>
                <CardDescription className="text-gray-600">View participants for each event</CardDescription>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No events found</p>
                <p className="text-gray-400 text-sm">Try adjusting your search or create a new event</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
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
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{event.location || 'Location TBD'}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{formatDate(event.start_date)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{event.participantStats.total}</div>
                        <div className="text-sm text-gray-600">Total Participants</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-xs">
                          <UserCheck className="h-3 w-3 text-green-600" />
                          <span className="text-green-600 font-medium">{event.participantStats.registered}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs">
                          <UserX className="h-3 w-3 text-red-600" />
                          <span className="text-red-600 font-medium">{event.participantStats.cancelled}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs">
                          <Users className="h-3 w-3 text-blue-600" />
                          <span className="text-blue-600 font-medium">{event.participantStats.attended}</span>
                        </div>
                      </div>
                      <Link href={`/dashboard/organizer/events/${event.id}/participants`}>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          <Eye className="h-4 w-4 mr-2" />
                          View Participants
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
