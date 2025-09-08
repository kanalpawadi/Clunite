"use client"

import { useState, useEffect } from "react"
import { supabase, type Club, type Event } from "@/lib/supabase"

export function useClubs() {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchClubs()
  }, [])

  const fetchClubs = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.from("clubs").select("*").order("name", { ascending: true })

      if (error) throw error

      setClubs(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return { clubs, loading, error, refetch: fetchClubs }
}

export function useClub(clubId: string) {
  const [club, setClub] = useState<Club | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!clubId) return

    fetchClubData()
  }, [clubId])

  const fetchClubData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch club details
      const { data: clubData, error: clubError } = await supabase.from("clubs").select("*").eq("id", clubId).single()

      if (clubError) throw clubError

      // Fetch club events
      const { data: eventsData, error: eventsError } = await supabase
        .from("events")
        .select("*")
        .eq("club_id", clubId)
        .eq("status", "published")
        .order("start_date", { ascending: true })

      if (eventsError) throw eventsError

      setClub(clubData)
      setEvents(eventsData || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return { club, events, loading, error, refetch: fetchClubData }
}

export function useUserClubs(userId: string) {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) return

    fetchUserClubs()
  }, [userId])

  const fetchUserClubs = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("club_memberships")
        .select(`
          club:clubs(*)
        `)
        .eq("user_id", userId)

      if (error) throw error

      const userClubs = data?.map((membership) => membership.club).filter(Boolean) || []
      setClubs(userClubs as Club[])
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return { clubs, loading, error, refetch: fetchUserClubs }
}
