"use client"

import { useState } from "react"
import { Layout } from "@/components/Layout"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { Bell, Lock, Paintbrush, User } from "lucide-react"

export default function SettingsPage() {
  const [username, setUsername] = useState("Ajay Devgun")
  const [email, setEmail] = useState("diljaleAjay@danedanemkesar.com")
  const [bio, setBio] = useState("I love Kajol and Vimal!")



  return (
    <Layout name="Settings" >

   
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Paintbrush className="h-4 w-4" />
            Appearance
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
        </TabsContent>
        <TabsContent value="privacy" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="public-profile">Public Profile</Label>
              <p className="text-sm text-muted-foreground">Allow others to see your profile</p>
            </div>
            <Switch id="public-profile" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="show-email">Show Email</Label>
              <p className="text-sm text-muted-foreground">Display your email on your public profile</p>
            </div>
            <Switch id="show-email" />
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <div className="space-y-2">
            <Label>Email Notifications</Label>
            <div className="flex items-center space-x-2">
              <Switch id="marketing-emails" />
              <Label htmlFor="marketing-emails">Marketing emails</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="social-emails" />
              <Label htmlFor="social-emails">Social activity emails</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="security-emails" />
              <Label htmlFor="security-emails">Security emails</Label>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="appearance" className="space-y-4">
          <div className="space-y-2">
            <Label>Theme</Label>
            <RadioGroup defaultValue="system">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" />
                <Label htmlFor="light">Light</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" />
                <Label htmlFor="dark">Dark</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system">System</Label>
              </div>
            </RadioGroup>
          </div>
        </TabsContent>
      </Tabs>
     
    </div>
    </Layout>
  )
}

