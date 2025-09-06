import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen,
  BarChart3, 
  TrendingUp, 
  Target, 
  Download,
  Filter,
  RefreshCw,
  Trophy,
  Zap,
  Clock,
  Star,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const Profile = () => {
  // Analytics data
  const overallStats = [
    {
      title: "Total Interviews",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: BarChart3,
      color: "text-blue-600",
    },
    {
      title: "Average Score", 
      value: "84%",
      change: "+8%",
      trend: "up", 
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Current Streak",
      value: "12 days",
      change: "+3 days",
      trend: "up",
      icon: Zap,
      color: "text-purple-600",
    },
    {
      title: "Time Practiced",
      value: "28h",
      change: "+5h",
      trend: "up",
      icon: Clock,
      color: "text-orange-600",
    },
  ];

  const performanceData = [
    { category: "Voice Interviews", score: 87, trend: 5, sessions: 23 },
    { category: "Coding Challenges", score: 78, trend: -2, sessions: 45 },
    { category: "Aptitude Tests", score: 84, trend: 8, sessions: 15 },
    { category: "Technical Questions", score: 82, trend: 3, sessions: 18 },
  ];

  const recentAchievements = [
    {
      title: "Interview Marathon",
      description: "Completed 10 interviews in a week",
      date: "2 days ago",
      icon: Trophy,
      color: "text-yellow-600 bg-yellow-50",
    },
    {
      title: "Code Master",
      description: "Solved 50 coding challenges",
      date: "1 week ago", 
      icon: Award,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Consistency Champion",
      description: "Practiced for 7 consecutive days",
      date: "2 weeks ago",
      icon: Star,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  const weeklyProgress = [
    { day: "Mon", interviews: 2, score: 85 },
    { day: "Tue", interviews: 1, score: 78 },
    { day: "Wed", interviews: 3, score: 92 },
    { day: "Thu", interviews: 2, score: 88 },
    { day: "Fri", interviews: 4, score: 82 },
    { day: "Sat", interviews: 1, score: 95 },
    { day: "Sun", interviews: 2, score: 89 },
  ];

  const improvementAreas = [
    {
      area: "System Design",
      currentScore: 68,
      targetScore: 80,
      priority: "High",
      suggestion: "Practice more distributed systems concepts",
    },
    {
      area: "Algorithm Complexity",
      currentScore: 75,
      targetScore: 85,
      priority: "Medium", 
      suggestion: "Focus on time and space complexity analysis",
    },
    {
      area: "Communication Skills",
      currentScore: 82,
      targetScore: 90,
      priority: "Low",
      suggestion: "Practice explaining solutions clearly",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-3xl">John Doe</CardTitle>
                      <CardDescription className="text-lg">Software Engineer</CardDescription>
                    </div>
                    <Button>Edit Profile</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React Developer</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Profile Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="tests">Test Results</TabsTrigger>
              <TabsTrigger value="interviews">Interviews</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Joined March 2024</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Completed JavaScript Assessment</span>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Voice Interview with Tech Lead</span>
                      <span className="text-xs text-muted-foreground">1 week ago</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Updated Profile Information</span>
                      <span className="text-xs text-muted-foreground">2 weeks ago</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Tests Completed</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Interviews Done</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-primary">87%</div>
                      <div className="text-sm text-muted-foreground">Average Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              {/* Analytics Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">Track your progress and identify areas for improvement</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
              </div>

              {/* Overall Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {overallStats.map((stat, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-accent/10 ${stat.color}`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div className={`flex items-center text-xs font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.trend === 'up' ? (
                          <ArrowUp className="w-3 h-3 mr-1" />
                        ) : (
                          <ArrowDown className="w-3 h-3 mr-1" />
                        )}
                        {stat.change}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Performance & Progress */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Performance by Category */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-6">Performance by Category</h3>
                    <div className="space-y-4">
                      {performanceData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{item.category}</h4>
                              <div className="flex items-center space-x-2">
                                <Badge variant="secondary">{item.sessions} sessions</Badge>
                                <div className={`flex items-center text-xs font-medium ${
                                  item.trend > 0 ? 'text-green-600' : 'text-red-600'
                                }`}>
                                  {item.trend > 0 ? (
                                    <ArrowUp className="w-3 h-3 mr-1" />
                                  ) : (
                                    <ArrowDown className="w-3 h-3 mr-1" />
                                  )}
                                  {Math.abs(item.trend)}%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-secondary rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: `${item.score}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium w-12 text-right">{item.score}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Weekly Progress Chart */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-6">This Week's Activity</h3>
                    <div className="flex items-end justify-between h-40 space-x-2">
                      {weeklyProgress.map((day, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="flex flex-col items-center space-y-1 mb-2">
                            <div 
                              className="w-8 bg-primary rounded-t"
                              style={{ height: `${(day.interviews / 4) * 100}px` }}
                            />
                            <div className="text-xs text-center">
                              <div className="font-medium">{day.interviews}</div>
                              <div className="text-muted-foreground">{day.score}%</div>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">{day.day}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded mr-2" />
                        Interviews
                      </div>
                      <div>Score shown below bars</div>
                    </div>
                  </Card>

                  {/* Improvement Areas */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-6">Areas for Improvement</h3>
                    <div className="space-y-4">
                      {improvementAreas.map((area, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">{area.area}</h4>
                            <Badge 
                              variant="outline"
                              className={`
                                ${area.priority === 'High' ? 'text-red-600 border-red-200' : ''}
                                ${area.priority === 'Medium' ? 'text-yellow-600 border-yellow-200' : ''}
                                ${area.priority === 'Low' ? 'text-green-600 border-green-200' : ''}
                              `}
                            >
                              {area.priority} Priority
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex-1">
                              <div className="flex justify-between text-sm mb-1">
                                <span>Current: {area.currentScore}%</span>
                                <span>Target: {area.targetScore}%</span>
                              </div>
                              <div className="bg-secondary rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full relative"
                                  style={{ width: `${(area.currentScore / area.targetScore) * 100}%` }}
                                >
                                  <div 
                                    className="absolute right-0 top-0 w-1 h-2 bg-accent rounded-full"
                                    style={{ right: `${100 - (area.targetScore / 100) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{area.suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Right Column - Achievements & Quick Actions */}
                <div className="space-y-6">
                  {/* Recent Achievements */}
                  <Card className="p-4">
                    <h4 className="font-semibold mb-4 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-primary" />
                      Recent Achievements
                    </h4>
                    <div className="space-y-4">
                      {recentAchievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${achievement.color}`}>
                            <achievement.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-sm">{achievement.title}</h5>
                            <p className="text-xs text-muted-foreground mb-1">
                              {achievement.description}
                            </p>
                            <p className="text-xs text-muted-foreground">{achievement.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="p-4">
                    <h4 className="font-semibold mb-4">Quick Actions</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Start Practice Session
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        Set New Goals
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Study Time
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        View Detailed Report
                      </Button>
                    </div>
                  </Card>

                  {/* Next Milestone */}
                  <Card className="p-4 bg-gradient-hero border-border/50">
                    <h4 className="font-semibold mb-2">Next Milestone</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Interview Expert Badge</span>
                          <span>47/50</span>
                        </div>
                        <div className="bg-secondary/30 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '94%' }} />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Complete 3 more interviews to unlock the Interview Expert badge
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tests">
              <Card>
                <CardHeader>
                  <CardTitle>Test History</CardTitle>
                  <CardDescription>Your completed assessments and coding challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">JavaScript Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">Completed on March 15, 2024</p>
                      </div>
                      <Badge variant="default">92%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">React Components</h4>
                        <p className="text-sm text-muted-foreground">Completed on March 10, 2024</p>
                      </div>
                      <Badge variant="default">85%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interviews">
              <Card>
                <CardHeader>
                  <CardTitle>Interview History</CardTitle>
                  <CardDescription>Your voice interviews and feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Senior Developer Interview</h4>
                        <p className="text-sm text-muted-foreground">March 12, 2024 • 45 minutes</p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">Change Password</Button>
                  <Button variant="outline" className="w-full">Update Email</Button>
                  <Button variant="outline" className="w-full">Privacy Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;