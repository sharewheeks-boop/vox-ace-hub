import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import { 
  Code, 
  Clock, 
  Users, 
  Target, 
  Trophy,
  Filter,
  Search,
  Play,
  CheckCircle,
  Circle,
  Star
} from "lucide-react";

const CodingChallenges = () => {
  const categories = [
    { name: "Arrays", count: 45, color: "bg-blue-500/10 text-blue-600" },
    { name: "Strings", count: 32, color: "bg-green-500/10 text-green-600" },
    { name: "Dynamic Programming", count: 28, color: "bg-purple-500/10 text-purple-600" },
    { name: "Trees", count: 38, color: "bg-orange-500/10 text-orange-600" },
    { name: "Graphs", count: 25, color: "bg-red-500/10 text-red-600" },
    { name: "Linked Lists", count: 22, color: "bg-indigo-500/10 text-indigo-600" },
  ];

  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "49.2%",
      category: "Arrays",
      companies: ["Google", "Amazon", "Meta"],
      status: "solved",
      premium: false,
    },
    {
      id: 2,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      acceptance: "33.8%",
      category: "Strings",
      companies: ["Amazon", "Adobe", "Bloomberg"],
      status: "attempted",
      premium: false,
    },
    {
      id: 3,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "34.1%",
      category: "Binary Search",
      companies: ["Google", "Tesla", "Apple"],
      status: "unsolved",
      premium: true,
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      acceptance: "40.7%",
      category: "Stack",
      companies: ["Microsoft", "Facebook", "Apple"],
      status: "solved",
      premium: false,
    },
    {
      id: 5,
      title: "Merge Two Sorted Lists", 
      difficulty: "Easy",
      acceptance: "59.4%",
      category: "Linked Lists",
      companies: ["Amazon", "Adobe", "Apple"],
      status: "unsolved",
      premium: false,
    },
  ];

  const stats = [
    { label: "Solved", value: "47", total: "150", color: "text-green-600" },
    { label: "Attempted", value: "12", total: "150", color: "text-yellow-600" },
    { label: "Easy", value: "28", total: "65", color: "text-green-500" },
    { label: "Medium", value: "15", total: "60", color: "text-yellow-500" },
    { label: "Hard", value: "4", total: "25", color: "text-red-500" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-50";
      case "Medium": return "text-yellow-600 bg-yellow-50"; 
      case "Hard": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "solved": return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "attempted": return <Circle className="w-4 h-4 text-yellow-600" />;
      default: return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2">Coding Challenges</h1>
          <p className="text-muted-foreground">
            Solve problems with real-time code execution and AI feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories & Stats */}
          <div className="space-y-6">
            {/* Progress Stats */}
            <Card className="p-4 animate-fade-in-up">
              <h3 className="font-semibold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-primary" />
                Your Progress
              </h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className={`font-medium ${stat.color}`}>
                      {stat.value}
                      {stat.total && <span className="text-muted-foreground">/{stat.total}</span>}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors duration-200">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${category.color.split(' ')[0]}`} />
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{category.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filter */}
            <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search challenges..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    Difficulty
                  </Button>
                  <Button variant="outline" size="sm">
                    Company
                  </Button>
                </div>
              </div>
            </Card>

            {/* Challenge List */}
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <Card 
                  key={challenge.id} 
                  className="p-4 card-hover cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      {/* Status Icon */}
                      <div className="flex-shrink-0">
                        {getStatusIcon(challenge.status)}
                      </div>

                      {/* Challenge Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-sm truncate">
                            {challenge.title}
                          </h3>
                          {challenge.premium && (
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getDifficultyColor(challenge.difficulty)}`}
                          >
                            {challenge.difficulty}
                          </Badge>
                          <span>{challenge.acceptance} acceptance</span>
                          <span className="hidden sm:inline">{challenge.category}</span>
                        </div>
                      </div>

                      {/* Companies */}
                      <div className="hidden md:flex items-center space-x-2">
                        {challenge.companies.slice(0, 3).map((company, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {company}
                          </Badge>
                        ))}
                        {challenge.companies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{challenge.companies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" size="sm" className="flex-shrink-0">
                        <Play className="w-4 h-4 mr-1" />
                        Solve
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button variant="outline">
                Load More Challenges
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodingChallenges;