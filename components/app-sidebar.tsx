"use client"

import { Home, Trophy, Award, QrCode, Settings, LogOut, ChevronLeft, ChevronRight, Building2 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard/student",
    icon: Home,
  },
  {
    title: "Browse Events",
    url: "/dashboard/student/browse",
    icon: Trophy,
  },
  {
    title: "My Clubs",
    url: "/dashboard/student/my-clubs",
    icon: Building2,
  },
  {
    title: "Certificates",
    url: "/dashboard/student/certificates",
    icon: Award,
  },
  {
    title: "QR Code",
    url: "/dashboard/student/qr",
    icon: QrCode,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-200 bg-white shadow-sm transition-all duration-300 ease-in-out"
    >
      {/* Header with improved branding */}
      <SidebarHeader className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          {/* New Clunite Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-black text-xl">C</span>
              </div>
            </div>
            {!isCollapsed && (
              <div className="transition-all duration-300 ease-in-out">
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Clunite</h1>
                <p className="text-xs text-gray-500 font-medium">Unite • Create • Celebrate</p>
              </div>
            )}
          </div>

          {/* Improved Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 group border border-slate-200 hover:border-indigo-200 hover:shadow-sm flex items-center justify-center"
            onClick={toggleSidebar}
          >
            <div className="relative overflow-hidden">
              {isCollapsed ? (
                <ChevronRight className="h-5 w-5 text-slate-600 group-hover:text-indigo-600 transition-all duration-300 transform group-hover:translate-x-0.5" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-slate-600 group-hover:text-indigo-600 transition-all duration-300 transform group-hover:-translate-x-0.5" />
              )}
            </div>
          </Button>
        </div>
      </SidebarHeader>

      {/* Improved Content with better spacing and animations */}
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title} className="relative">
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className={`w-full rounded-xl px-4 py-3 transition-all duration-300 group relative overflow-hidden ${
                      pathname === item.url
                        ? "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-semibold border border-indigo-100 shadow-md"
                        : "text-slate-600 hover:bg-gradient-to-r hover:from-slate-50 hover:to-indigo-50 hover:text-slate-900"
                    }`}
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <Link
                      href={item.url}
                      className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-4"} w-full relative z-10`}
                    >
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 ${
                          pathname === item.url
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                            : "bg-slate-100 text-slate-600 group-hover:bg-white group-hover:shadow-md"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                      {!isCollapsed && (
                        <span className="text-sm font-semibold transition-all duration-300 opacity-100 transform translate-x-0">
                          {item.title}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>

                  {/* Active indicator */}
                  {pathname === item.url && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-l-full"></div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Enhanced Footer */}
      <SidebarFooter className="p-4 border-t border-slate-100 mt-auto">
        {!isCollapsed ? (
          <div className="space-y-6">
            {/* Enhanced User Profile */}
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  AJ
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-slate-900 text-sm truncate">Alex Johnson</div>
                  <div className="text-xs text-slate-500 font-medium">Student • MIT</div>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600 font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-4 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* Enhanced Quick Actions */}
            <div className="space-y-2">
              <SidebarMenuButton className="w-full justify-start text-slate-600 hover:text-slate-900 hover:bg-gradient-to-r hover:from-slate-50 hover:to-indigo-50 rounded-xl py-3 transition-all duration-300">
                <div className="p-2 rounded-lg bg-slate-100 mr-3">
                  <Settings className="h-4 w-4" />
                </div>
                <span className="font-medium">Settings</span>
              </SidebarMenuButton>
              <SidebarMenuButton className="w-full justify-start text-slate-600 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl py-3 transition-all duration-300">
                <div className="p-2 rounded-lg bg-slate-100 mr-3">
                  <LogOut className="h-4 w-4" />
                </div>
                <span className="font-medium">Sign Out</span>
              </SidebarMenuButton>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Collapsed User Avatar */}
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                AJ
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="space-y-3">
              <SidebarMenuButton
                className="w-full h-12 rounded-xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-indigo-50 group flex items-center justify-center transition-all duration-300"
                tooltip="Settings"
              >
                <Settings className="h-5 w-5 text-slate-600 group-hover:text-indigo-600" />
              </SidebarMenuButton>
              <SidebarMenuButton
                className="w-full h-12 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 group flex items-center justify-center transition-all duration-300"
                tooltip="Sign Out"
              >
                <LogOut className="h-5 w-5 text-slate-600 group-hover:text-red-600" />
              </SidebarMenuButton>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
