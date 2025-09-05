import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import { 
  Mic, 
  Clock, 
  Users, 
  Target, 
  Briefcase, 
  Code, 
  Brain, 
  Play,
  Settings,
  Star
} from "lucide-react";

const VoiceInterviews = () => {
  const interviewTypes = [
    {
      type: "Technical",
      icon: Code,
      description: "System design, coding problems, and technical concepts",
      duration: "45-60 min",
      difficulty: "Medium",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      type: "Behavioral",
      icon: Users,
      description: "Leadership, teamwork, and situational questions",
      duration: "30-45 min",
      difficulty: "Easy",
      color: "bg-green-500/10 text-green-600",
    },
    {
      type: "System Design", 
      icon: Brain,
      description: "Architecture, scalability, and design patterns",
      duration: "60-90 min",
      difficulty: "Hard",
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  const roles = [
    "Software Engineer",
    "Product Manager", 
    "Data Scientist",
    "DevOps Engineer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const recentInterviews = [
    {
      role: "Senior Software Engineer",
      type: "Technical",
      score: 85,
      date: "2 days ago",
      duration: "52 min",
    },
    {
      role: "Product Manager", 
      type: "Behavioral",
      score: 92,
      date: "5 days ago",
      duration: "38 min",
    },
    {
      role: "Frontend Developer",
      type: "Technical", 
      score: 78,
      date: "1 week ago",
      duration: "45 min",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2">AI Voice Interviews</h1>
          <p className="text-muted-foreground">
            Practice with realistic AI interviewers and get instant feedback
          </p>
        </div>

        {/* Quick Setup Card */}
        <Card className="p-6 mb-8 bg-gradient-hero border-border/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Quick Interview Setup</h2>
              <p className="text-muted-foreground">Start a new interview session in seconds</p>
            </div>
            <Button variant="hero" size="lg" className="group">
              <Play className="w-5 h-5 mr-2" />
              Start Interview
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Setup Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Interview Types */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-4">Interview Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {interviewTypes.map((type, index) => (
                  <Card key={index} className="p-4 card-hover cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg ${type.color}`}>
                        <type.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {type.difficulty}
                      </Badge>
                    </div>
                    <h4 className="font-semibold mb-2">{type.type}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {type.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {type.duration}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Popular Roles */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-4">Popular Roles</h3>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Briefcase className="w-3 h-3 mr-1" />
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Configuration Panel */}
            <Card className="p-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Interview Configuration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Experience Level</label>
                  <div className="flex space-x-2">
                    {["Entry", "Mid", "Senior", "Lead"].map((level) => (
                      <Button 
                        key={level} 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Duration</label>
                  <div className="flex space-x-2">
                    {["30 min", "45 min", "60 min"].map((duration) => (
                      <Button 
                        key={duration} 
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                      >
                        {duration}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Recent Interviews */}
          <div className="space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-semibold mb-4">Recent Interviews</h3>
              <div className="space-y-4">
                {recentInterviews.map((interview, index) => (
                  <Card key={index} className="p-4 card-hover cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-sm">{interview.role}</h4>
                        <p className="text-xs text-muted-foreground">{interview.type}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < Math.floor(interview.score / 20) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>{interview.date}</span>
                      <span>{interview.duration}</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Score</span>
                        <span className="font-medium">{interview.score}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-1">
                        <div 
                          className="bg-primary h-1 rounded-full" 
                          style={{ width: `${interview.score}%` }}
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold mb-3">Your Progress</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Interviews Completed</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Average Score</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">This Week</span>
                  <span className="font-medium">4 interviews</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceInterviews;