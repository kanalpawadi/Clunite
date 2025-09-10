"use client"

import { Home, Trophy, Award, QrCode, Settings, LogOut, ChevronLeft, ChevronRight, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
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
      className="border-r border-blue-100 bg-gradient-to-b from-white to-blue-50/30 transition-[width,transform] duration-200 ease-in-out"
    >
      {/* Header with improved branding */}
      <SidebarHeader className="p-6 border-b border-blue-100">
        <div className={cn(
          "flex items-center transition-all duration-300 ease-in-out",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {/* New Clunite Logo */}
          <div 
            className={cn(
              "flex items-center cursor-pointer group/logo",
              isCollapsed ? "justify-center" : "space-x-3"
            )}
            onClick={isCollapsed ? toggleSidebar : undefined}
          >
            <div className="relative">
              <div className={cn(
                "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300",
                "group-hover/logo:shadow-xl group-hover/logo:scale-105",
                isCollapsed ? "w-10 h-10" : "w-12 h-12"
              )}>
                <span className="text-white font-black text-xl">C</span>
              </div>
            </div>
            {!isCollapsed && (
              <div className="transition-all duration-300 ease-in-out">
                <h1 className="text-2xl font-black text-blue-900 tracking-tight">Clunite</h1>
                <p className="text-xs text-cyan-600 font-medium">Unite • Create • Celebrate</p>
              </div>
            )}
          </div>

          {/* Improved Toggle Button - Only show when expanded */}
          {!isCollapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group border border-slate-200 hover:border-blue-200 hover:shadow-sm flex items-center justify-center"
              onClick={toggleSidebar}
            >
              <ChevronLeft className="h-5 w-5 text-slate-600 group-hover:text-blue-500 transition-all duration-300 transform group-hover:-translate-x-0.5" />
            </Button>
          )}
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
                        ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 font-semibold border border-blue-100 shadow-md"
                        : "text-slate-600 hover:bg-gradient-to-r hover:from-slate-50 hover:to-cyan-50 hover:text-blue-900"
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
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                            : "bg-blue-50 text-blue-600 group-hover:bg-white group-hover:shadow-md"
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
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-l-full"></div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Enhanced Footer */}
      <SidebarFooter className="p-4 border-t border-blue-100 mt-auto">
        {!isCollapsed ? (
          <div className="space-y-6">
            {/* Enhanced User Profile */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  AJ
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-blue-900 text-sm truncate">Alex Johnson</div>
                  <div className="text-xs text-cyan-700 font-medium">Student • MIT</div>
                  <div className="flex items-center mt-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                    <span className="text-xs text-teal-600 font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-4 bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

            {/* Enhanced Quick Actions */}
            <div className="space-y-2">
              <SidebarMenuButton className="w-full justify-start text-blue-700 hover:text-blue-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-xl py-3 transition-all duration-300">
                <div className="p-2 rounded-lg bg-blue-50 mr-3">
                  <Settings className="h-4 w-4" />
                </div>
                <span className="font-medium">Settings</span>
              </SidebarMenuButton>
              <SidebarMenuButton className="w-full justify-start text-blue-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 rounded-xl py-3 transition-all duration-300">
                <div className="p-2 rounded-lg bg-blue-50 mr-3">
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                AJ
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

            <div className="space-y-3">
              <SidebarMenuButton
                className="w-full h-12 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 group flex items-center justify-center transition-all duration-300"
                tooltip="Settings"
              >
                <Settings className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
              </SidebarMenuButton>
              <SidebarMenuButton
                className="w-full h-12 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 hover:text-red-600 group flex items-center justify-center transition-all duration-300"
                tooltip="Sign Out"
              >
                <LogOut className="h-5 w-5 text-blue-600 group-hover:text-red-600" />
              </SidebarMenuButton>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}
