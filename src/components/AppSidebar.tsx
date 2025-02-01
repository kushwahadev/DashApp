import { Home, BarChart2, Users, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "User", href: "/user" },
  { icon: Settings, label: "Settings", href: "/usersettings" },
]

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-indigo-500">DashApp</h1>
      </div>
      <ul className="flex flex-col py-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
            <Button
              variant="ghost"
              className={cn("w-full justify-start text-white hover:text-white hover:bg-gray-700", "focus:bg-gray-700")}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

