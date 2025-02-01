import type React from "react"
import { Sidebar } from "@/components/AppSidebar"
import {Header} from "@/components/Header"

export function Layout({ children,name }: { children: React.ReactNode, name:string }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
      <Header newName={name} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

