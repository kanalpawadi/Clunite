import { createClient } from "@supabase/supabase-js"
import { type NextRequest, NextResponse } from "next/server"

// Create Supabase client with service role key for server-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

export async function POST(request: NextRequest) {
  console.log("Upload API called")
  
  try {
    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase configuration")
      return NextResponse.json(
        {
          error: "Missing Supabase configuration. Please check your environment variables.",
        },
        { status: 500 },
      )
    }

    console.log("Parsing form data...")
    const formData = await request.formData()
    const file = formData.get("file") as File
    const userId = formData.get("userId") as string

    console.log("File received:", file ? `${file.name} (${file.size} bytes)` : "No file")

    if (!file) {
      console.error("No file provided in request")
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Invalid file type. Please upload an image." }, { status: 400 })
    }

    // Validate file size (10MB limit for better quality images)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Maximum size is 10MB." }, { status: 400 })
    }

    // Generate unique filename in public folder for now
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()
    const filename = `event-banners/${timestamp}-${randomString}.${fileExtension}`

    console.log("Generated filename:", filename)

    // Convert File to ArrayBuffer for Supabase upload
    console.log("Converting file to buffer...")
    const fileBuffer = await file.arrayBuffer()
    console.log("Buffer size:", fileBuffer.byteLength)

    // Upload to Supabase Storage using service role (bypasses RLS for now)
    console.log("Uploading to Supabase Storage...")
    const { data, error } = await supabase.storage
      .from('images')
      .upload(filename, fileBuffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error("Supabase upload error:", error)
      return NextResponse.json({ error: `Upload failed: ${error.message}` }, { status: 500 })
    }

    console.log("Upload successful, data:", data)

    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filename)

    console.log("Generated public URL:", publicUrl)

    return NextResponse.json({ 
      url: publicUrl,
      path: filename,
      size: file.size,
      type: file.type
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 })
  }
}
