import { Layout } from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Briefcase, Building, MessageSquare, ThumbsUp, Share2 } from "lucide-react"


  // This would typically come from a database or API
  const user = {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    jobTitle: "Senior Product Designer",
    company: "TechCorp Inc.",
    avatar: "https://github.com/shadcn.png",
    stats: {
      posts: 142,
      followers: 2890,
      following: 567,
    },
    recentActivities: [
      { type: "post", content: "Just finished a new design project!", timestamp: "2 hours ago" },
      { type: "like", content: "Liked a post by John Doe", timestamp: "5 hours ago" },
      { type: "share", content: "Shared an article on UX design trends", timestamp: "1 day ago" },
    ],
  }





export default function UserDetailPage() {
    return (
    <Layout name="Admin Panel">
            <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl font-bold">{user.name}</CardTitle>
            <CardDescription className="text-xl">
              {user.jobTitle} at {user.company}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="text-muted-foreground" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-muted-foreground" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-muted-foreground" />
                <span>{user.location}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase className="text-muted-foreground" />
                <span>{user.jobTitle}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="text-muted-foreground" />
                <span>{user.company}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>User Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.posts}</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.following}</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {user.recentActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-1">
                    {activity.type === "post" && <MessageSquare className="text-blue-500" />}
                    {activity.type === "like" && <ThumbsUp className="text-green-500" />}
                    {activity.type === "share" && <Share2 className="text-purple-500" />}
                  </span>
                  <div>
                    <p>{activity.content}</p>
                    <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 flex justify-center">
        <Button>Edit Profile</Button>
      </div>
    </div>

          
        </Layout>
    )
}