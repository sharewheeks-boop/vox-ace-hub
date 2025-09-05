import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import { 
  Brain, 
  Calculator, 
  BookOpen, 
  Globe, 
  PieChart, 
  Puzzle,
  Clock,
  Play,
  Trophy,
  Target,
  TrendingUp
} from "lucide-react";

const AptitudeTests = () => {
  const testCategories = [
    {
      icon: Calculator,
      title: "Quantitative Reasoning",
      description: "Mathematical problems, data analysis, numerical reasoning",
      questions: 25,
      duration: 30,
      lastScore: 78,
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Puzzle,
      title: "Logical Reasoning", 
      description: "Pattern recognition, logical sequences, problem-solving",
      questions: 20,
      duration: 25,
      lastScore: 85,
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Verbal Ability",
      description: "Reading comprehension, vocabulary, grammar",
      questions: 30,
      duration: 35,
      lastScore: 92,
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Brain,
      title: "Technical Concepts",
      description: "Programming concepts, algorithms, system design",
      questions: 20,
      duration: 25,
      lastScore: 76,
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: PieChart,
      title: "Data Interpretation",
      description: "Graph analysis, table interpretation, trend analysis",
      questions: 15,
      duration: 20,
      lastScore: 88,
      color: "bg-red-500/10 text-red-600",
    },
    {
      icon: Globe,
      title: "General Awareness",
      description: "Current affairs, general knowledge, industry trends",
      questions: 25,
      duration: 20,
      lastScore: 82,
      color: "bg-indigo-500/10 text-indigo-600",
    },
  ];

  const recentTests = [
    {
      category: "Quantitative Reasoning",
      score: 78,
      percentile: 85,
      date: "2 days ago",
      status: "completed"
    },
    {
      category: "Logical Reasoning",
      score: 85,
      percentile: 92,
      date: "5 days ago", 
      status: "completed"
    },
    {
      category: "Verbal Ability",
      score: 92,
      percentile: 96,
      date: "1 week ago",
      status: "completed"
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2">Aptitude Assessment</h1>
          <p className="text-muted-foreground">
            Test your quantitative, logical reasoning, and verbal abilities
          </p>
        </div>

        {/* Quick Practice Card */}
        <Card className="p-6 mb-8 bg-gradient-hero border-border/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Quick Practice Test</h2>
              <p className="text-muted-foreground">Mixed questions from all categories - 15 minutes</p>
            </div>
            <Button variant="hero" size="lg" className="group">
              <Play className="w-5 h-5 mr-2" />
              Start Quick Test
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Test Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Test Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-hover cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    {category.lastScore && (
                      <Badge variant="secondary" className={getScoreColor(category.lastScore)}>
                        {category.lastScore}%
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <h4 className="font-semibold text-lg mb-2">{category.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Test Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {category.questions} questions
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {category.duration} minutes
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" className="w-full group">
                    Start Test
                    <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h4 className="font-semibold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-primary" />
                Your Performance
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tests Completed</span>
                  <span className="font-semibold">24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Average Score</span>
                  <span className="font-semibold text-green-600">84%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Best Category</span>
                  <span className="font-semibold">Verbal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Overall Percentile</span>
                  <span className="font-semibold text-primary">89th</span>
                </div>
              </div>
            </Card>

            {/* Recent Tests */}
            <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h4 className="font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Recent Tests
              </h4>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="border-b border-border/50 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="font-medium text-sm">{test.category}</h5>
                        <p className="text-xs text-muted-foreground">{test.date}</p>
                      </div>
                      <Badge variant="secondary" className={getScoreColor(test.score)}>
                        {test.score}%
                      </Badge>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Percentile: {test.percentile}th</span>
                      <span className="capitalize">{test.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Study Plan */}
            <Card className="p-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-semibold mb-4">Recommended Focus</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-accent/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm font-medium">Technical Concepts</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Improve by 10%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-accent/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium">Quantitative</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Practice more</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Study Plan
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AptitudeTests;