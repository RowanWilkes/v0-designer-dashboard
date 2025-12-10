"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Target, Users, Briefcase, FileText, TrendingUp, X, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { setSectionCompletion, checkSectionCompletion } from "@/lib/completion-tracker"

type ProjectOverviewProps = {
  projectId: string
}

export function ProjectOverview({ projectId }: ProjectOverviewProps) {
  const [projectData, setProjectData] = useState({
    name: "",
    client: "",
    description: "",
    goal: "",
    audience: "",
    deadline: "",
    budget: "",
    deliverables: "",
    constraints: "",
    successMetrics: "",
    kickoffDate: "",
    priorityLevel: "Medium",
    estimatedDevTime: "",
    teamMembers: "",
    clientReviewDate: "",
  })

  const [features, setFeatures] = useState<string[]>([])
  const [featureInput, setFeatureInput] = useState("")

  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const storageKey = `project-${projectId}-overview`
    const savedData = localStorage.getItem(storageKey)
    if (savedData) {
      const parsed = JSON.parse(savedData)
      setProjectData({
        name: parsed.name || "",
        client: parsed.client || "",
        description: parsed.description || "",
        goal: parsed.goal || "",
        audience: parsed.audience || "",
        deadline: parsed.deadline || "",
        budget: parsed.budget || "",
        deliverables: parsed.deliverables || "",
        constraints: parsed.constraints || "",
        successMetrics: parsed.successMetrics || "",
        kickoffDate: parsed.kickoffDate || "",
        priorityLevel: parsed.priorityLevel || "Medium",
        estimatedDevTime: parsed.estimatedDevTime || "",
        teamMembers: parsed.teamMembers || "",
        clientReviewDate: parsed.clientReviewDate || "",
      })
      if (parsed.features && Array.isArray(parsed.features)) {
        setFeatures(parsed.features)
      }
    }
  }, [projectId])

  useEffect(() => {
    const storageKey = `project-${projectId}-overview`
    localStorage.setItem(storageKey, JSON.stringify({ ...projectData, features }))
  }, [projectData, projectId, features])

  useEffect(() => {
    setIsComplete(checkSectionCompletion(projectId, "overview"))
  }, [projectId])

  const toggleComplete = () => {
    const newValue = !isComplete
    setIsComplete(newValue)
    setSectionCompletion(projectId, "overview", newValue)
  }

  const handleFeatureKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && featureInput.trim()) {
      e.preventDefault()
      setFeatures([...features, featureInput.trim()])
      setFeatureInput("")
    }
  }

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-50 text-red-700 border-red-200"
      case "Medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200"
      case "Low":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground dark:text-white mb-2">Project Overview</h2>
        <p className="text-muted-foreground dark:text-gray-400">
          Define your project scope, objectives, and key details
        </p>

        <div
          className={`flex items-center gap-2 mt-4 p-3 rounded-lg border transition-all ${
            isComplete ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-200"
          }`}
        >
          <Checkbox
            id="overview-complete"
            checked={isComplete}
            onCheckedChange={toggleComplete}
            className="size-6 data-[state=checked]:bg-black data-[state=checked]:border-black"
          />
          <Label htmlFor="overview-complete" className="text-sm font-medium cursor-pointer">
            Mark Overview as Complete
          </Label>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border dark:border-[#2DCE73] bg-card dark:bg-[#024039] shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
              <Briefcase className="size-5 text-emerald-600" />
              Project Details
            </CardTitle>
            <CardDescription className="dark:text-gray-400">Basic information about your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-name" className="font-medium dark:text-gray-300">
                Project Name
              </Label>
              <Input
                id="project-name"
                value={projectData.name}
                onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
                placeholder="Enter project name"
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client" className="font-medium dark:text-gray-300">
                Client
              </Label>
              <Input
                id="client"
                value={projectData.client}
                onChange={(e) => setProjectData({ ...projectData, client: e.target.value })}
                placeholder="Client name"
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="font-medium dark:text-gray-300">
                Description
              </Label>
              <Textarea
                id="description"
                value={projectData.description}
                onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                placeholder="Brief project description and overview"
                rows={4}
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget" className="font-medium dark:text-gray-300">
                Budget Range
              </Label>
              <Input
                id="budget"
                value={projectData.budget}
                onChange={(e) => setProjectData({ ...projectData, budget: e.target.value })}
                placeholder="e.g., $5k-$10k or Fixed scope"
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border dark:border-[#2DCE73] bg-card dark:bg-[#024039] shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
              <Target className="size-5 text-emerald-600" />
              Goals & Audience
            </CardTitle>
            <CardDescription className="dark:text-gray-400">Define objectives and target users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="goal" className="flex items-center gap-2 font-medium dark:text-gray-300">
                <Target className="size-4 text-emerald-600" />
                Project Goal
              </Label>
              <Textarea
                id="goal"
                value={projectData.goal}
                onChange={(e) => setProjectData({ ...projectData, goal: e.target.value })}
                placeholder="What do you want to achieve with this project?"
                rows={3}
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="audience" className="flex items-center gap-2 font-medium dark:text-gray-300">
                <Users className="size-4 text-emerald-600" />
                Target Audience
              </Label>
              <Textarea
                id="audience"
                value={projectData.audience}
                onChange={(e) => setProjectData({ ...projectData, audience: e.target.value })}
                placeholder="Who is this for? Demographics, behaviors, needs..."
                rows={3}
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border dark:border-[#2DCE73] bg-card dark:bg-[#024039] shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
              <FileText className="size-5 text-emerald-600" />
              Deliverables & Scope
            </CardTitle>
            <CardDescription className="dark:text-gray-400">What will be delivered</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Label htmlFor="features-input" className="font-medium dark:text-gray-300 flex items-center gap-2">
                <Plus className="size-4 text-emerald-600" />
                Added Features
              </Label>
              <Input
                id="features-input"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={handleFeatureKeyDown}
                placeholder="Type a feature and press Enter to add..."
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
              <p className="text-xs text-muted-foreground dark:text-gray-400">
                Examples: Homepage design, Mobile responsive, Style guide, 5 inner pages
              </p>

              {features.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 p-3 bg-emerald-50 dark:bg-[#013B34] rounded-lg border border-emerald-100 dark:border-[#2DCE73]">
                  {features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-emerald-100 dark:bg-[#024039] text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-[#035749] px-3 py-1.5 text-sm font-medium flex items-center gap-2 border border-emerald-200 dark:border-[#2DCE73]"
                    >
                      {feature}
                      <button
                        onClick={() => removeFeature(index)}
                        className="hover:bg-emerald-300 dark:hover:bg-[#046B5A] rounded-full p-0.5 transition-colors"
                        aria-label={`Remove ${feature}`}
                      >
                        <X className="size-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="constraints" className="font-medium dark:text-gray-300">
                Constraints & Requirements
              </Label>
              <Textarea
                id="constraints"
                value={projectData.constraints}
                onChange={(e) => setProjectData({ ...projectData, constraints: e.target.value })}
                placeholder="Technical requirements, brand guidelines, accessibility needs, browser support..."
                rows={3}
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="size-5 text-emerald-600" />
              Success Metrics
            </CardTitle>
            <CardDescription>How to measure success</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="successMetrics" className="font-medium dark:text-gray-300">
                Success Criteria
              </Label>
              <Textarea
                id="successMetrics"
                value={projectData.successMetrics}
                onChange={(e) => setProjectData({ ...projectData, successMetrics: e.target.value })}
                placeholder="How will you measure success? (e.g., conversion rate +20%, time on site, user feedback scores...)"
                rows={7}
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarIcon className="size-5 text-emerald-600" />
            Timeline & Planning
          </CardTitle>
          <CardDescription>Track dates, milestones, and team involvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="kickoff-date" className="flex items-center gap-2 font-medium">
                  <CalendarIcon className="size-4 text-emerald-600" />
                  Kick-off Date
                </Label>
                <Input
                  id="kickoff-date"
                  type="date"
                  value={projectData.kickoffDate}
                  onChange={(e) => setProjectData({ ...projectData, kickoffDate: e.target.value })}
                  className="bg-background border-input"
                />
                <p className="text-xs text-muted-foreground">When did planning begin?</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className="flex items-center gap-2 font-medium">
                  <Target className="size-4 text-emerald-600" />
                  Launch Target
                </Label>
                <Input
                  id="deadline"
                  type="date"
                  value={projectData.deadline}
                  onChange={(e) => setProjectData({ ...projectData, deadline: e.target.value })}
                  className="bg-background border-input"
                />
                <p className="text-xs text-muted-foreground">Target go-live date</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="client-review" className="flex items-center gap-2 font-medium">
                  <Users className="size-4 text-emerald-600" />
                  Client Review Date
                </Label>
                <Input
                  id="client-review"
                  type="date"
                  value={projectData.clientReviewDate}
                  onChange={(e) => setProjectData({ ...projectData, clientReviewDate: e.target.value })}
                  className="bg-background border-input"
                />
                <p className="text-xs text-muted-foreground">Scheduled feedback session</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="priority" className="flex items-center gap-2 font-medium">
                  <TrendingUp className="size-4 text-emerald-600" />
                  Priority Level
                </Label>
                <Select
                  value={projectData.priorityLevel}
                  onValueChange={(value) => setProjectData({ ...projectData, priorityLevel: value })}
                >
                  <SelectTrigger className="bg-background border-input">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Badge className={getPriorityColor(projectData.priorityLevel)}>
                  {projectData.priorityLevel} Priority
                </Badge>
              </div>

              <div className="space-y-2">
                <Label htmlFor="team-members" className="flex items-center gap-2 font-medium">
                  <Users className="size-4 text-emerald-600" />
                  Team Members
                </Label>
                <Textarea
                  id="team-members"
                  value={projectData.teamMembers}
                  onChange={(e) => setProjectData({ ...projectData, teamMembers: e.target.value })}
                  placeholder="List team members involved (e.g., John - Designer, Sarah - Content Writer)"
                  rows={3}
                  className="bg-background border-input resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dev-time" className="flex items-center gap-2 font-medium">
                  <Briefcase className="size-4 text-emerald-600" />
                  Estimated Dev Time
                </Label>
                <Input
                  id="dev-time"
                  value={projectData.estimatedDevTime}
                  onChange={(e) => setProjectData({ ...projectData, estimatedDevTime: e.target.value })}
                  placeholder="e.g., 4-6 weeks, 2 months"
                  className="bg-background border-input"
                />
                <p className="text-xs text-muted-foreground">How long to build after planning?</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
