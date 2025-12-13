"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, Target, Users, FileText, LinkIcon, UserPlus, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ProjectOverviewProps {
  projectId: string
}

export function ProjectOverview({ projectId }: ProjectOverviewProps) {
  const [projectData, setProjectData] = useState({
    name: "",
    client: "",
    description: "",
    projectType: "",
    budget: "",
    goal: "",
    audience: "",
    primaryActions: [] as string[],
    constraints: "",
    keyLinks: "",
    collaborators: [] as { name: string; role: string }[],
    websiteFeatures: [] as string[],
  })

  const [customAction, setCustomAction] = useState("")
  const [newCollaborator, setNewCollaborator] = useState({ name: "", role: "" })
  const [featureInput, setFeatureInput] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])

  const quickActions = [
    "Sign Up",
    "Purchase",
    "Contact Us",
    "Download",
    "Subscribe",
    "Book Now",
    "Get Quote",
    "Learn More",
  ]

  const featureSuggestions = [
    "Blog/News Section",
    "Newsletter Subscription",
    "Contact Form",
    "E-commerce/Shopping Cart",
    "User Authentication/Login",
    "Search Functionality",
    "Live Chat Support",
    "Booking/Scheduling System",
    "Gallery/Portfolio",
    "Testimonials/Reviews",
    "FAQ Section",
    "Social Media Integration",
    "Multi-language Support",
    "Payment Processing",
    "Analytics Integration",
    "Member/User Dashboard",
    "File Upload/Downloads",
    "Event Calendar",
    "Maps Integration",
    "Video Integration",
  ]

  useEffect(() => {
    const savedData = localStorage.getItem(`project-${projectId}`)
    if (savedData) {
      setProjectData(JSON.parse(savedData))
    }
  }, [projectId])

  useEffect(() => {
    localStorage.setItem(`project-${projectId}`, JSON.stringify(projectData))
  }, [projectData, projectId])

  const togglePrimaryAction = (action: string) => {
    setProjectData((prev) => ({
      ...prev,
      primaryActions: prev.primaryActions.includes(action)
        ? prev.primaryActions.filter((a) => a !== action)
        : [...prev.primaryActions, action],
    }))
  }

  const addCustomAction = () => {
    if (customAction.trim() && !projectData.primaryActions.includes(customAction.trim())) {
      setProjectData((prev) => ({
        ...prev,
        primaryActions: [...prev.primaryActions, customAction.trim()],
      }))
      setCustomAction("")
    }
  }

  const removeAction = (action: string) => {
    setProjectData((prev) => ({
      ...prev,
      primaryActions: prev.primaryActions.filter((a) => a !== action),
    }))
  }

  const addCollaborator = () => {
    if (newCollaborator.name.trim() && newCollaborator.role.trim()) {
      setProjectData((prev) => ({
        ...prev,
        collaborators: [...prev.collaborators, newCollaborator],
      }))
      setNewCollaborator({ name: "", role: "" })
    }
  }

  const removeCollaborator = (index: number) => {
    setProjectData((prev) => ({
      ...prev,
      collaborators: prev.collaborators.filter((_, i) => i !== index),
    }))
  }

  const handleFeatureInputChange = (value: string) => {
    setFeatureInput(value)
    if (value.trim()) {
      const filtered = featureSuggestions.filter((feature) => feature.toLowerCase().includes(value.toLowerCase()))
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }

  const addFeature = (feature: string) => {
    if (feature.trim() && !projectData.websiteFeatures.includes(feature.trim())) {
      setProjectData((prev) => ({
        ...prev,
        websiteFeatures: [...prev.websiteFeatures, feature.trim()],
      }))
      setFeatureInput("")
      setFilteredSuggestions([])
    }
  }

  const removeFeature = (feature: string) => {
    setProjectData((prev) => ({
      ...prev,
      websiteFeatures: prev.websiteFeatures.filter((f) => f !== feature),
    }))
  }

  const projectTypes = [
    "SaaS Website",
    "E-commerce Site",
    "Small Business Website",
    "Portfolio/Personal Site",
    "Blog/Content Site",
    "Landing Page",
    "Corporate Website",
    "Non-profit Website",
    "Marketplace Platform",
    "Web Application",
    "Website Redesign",
    "Other",
  ]

  return (
    <div className="space-y-6">
      {/* Project Details Card */}
      <Card className="bg-white dark:bg-[#012D29] border-gray-200 dark:border-[#2DCE73]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
            <Briefcase className="size-5 text-emerald-600" />
            Project Details
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Basic information about your project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Project Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground dark:text-gray-300">
              Project Name
            </Label>
            <Input
              id="name"
              value={projectData.name}
              onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
              placeholder="Enter project name"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <Label htmlFor="projectType" className="text-foreground dark:text-gray-300">
              Project Type
            </Label>
            <Select
              value={projectData.projectType}
              onValueChange={(value) => setProjectData({ ...projectData, projectType: value })}
            >
              <SelectTrigger className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Client */}
          <div className="space-y-2">
            <Label htmlFor="client" className="text-foreground dark:text-gray-300">
              Client
            </Label>
            <Input
              id="client"
              value={projectData.client}
              onChange={(e) => setProjectData({ ...projectData, client: e.target.value })}
              placeholder="Enter client name"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground dark:text-gray-300">
              Description
            </Label>
            <Textarea
              id="description"
              value={projectData.description}
              onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
              placeholder="Brief description of the project"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          {/* Budget Range */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-foreground dark:text-gray-300">
              Budget Range
            </Label>
            <Input
              id="budget"
              value={projectData.budget}
              onChange={(e) => setProjectData({ ...projectData, budget: e.target.value })}
              placeholder="e.g., $5,000 - $10,000"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>
        </CardContent>
      </Card>

      {/* Goals & Audience Card */}
      <Card className="bg-white dark:bg-[#012D29] border-gray-200 dark:border-[#2DCE73]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
            <Target className="size-5 text-emerald-600" />
            Goals & Audience
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Define objectives and target users
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Project Goal */}
          <div className="space-y-2">
            <Label htmlFor="goal" className="flex items-center gap-2 text-foreground dark:text-gray-300">
              <Target className="size-4 text-emerald-600" />
              Project Goal
            </Label>
            <Textarea
              id="goal"
              value={projectData.goal}
              onChange={(e) => setProjectData({ ...projectData, goal: e.target.value })}
              placeholder="What is the main objective? (e.g., Increase conversions by 30%, Build brand awareness...)"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          {/* Primary User Actions */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-foreground dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-600"
              >
                <path d="M12 2v4" />
                <path d="m6 6 3 3" />
                <path d="m18 6-3 3" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="m6 18 3-3" />
                <path d="m18 18-3-3" />
                <path d="M12 18v4" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Primary User Actions
            </Label>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Select all actions you want users to take
            </p>

            {/* Quick Select Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action}
                  type="button"
                  variant="outline"
                  onClick={() => togglePrimaryAction(action)}
                  className={`justify-start text-sm ${
                    projectData.primaryActions.includes(action)
                      ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                      : "bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  }`}
                >
                  {action}
                </Button>
              ))}
            </div>

            {/* Custom Action Input */}
            <div className="flex gap-2">
              <Input
                value={customAction}
                onChange={(e) => setCustomAction(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addCustomAction()}
                placeholder="Type a custom action and press Enter..."
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
            </div>

            {/* Selected Actions */}
            {projectData.primaryActions.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {projectData.primaryActions.map((action) => (
                  <span
                    key={action}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700"
                  >
                    {action}
                    <button type="button" onClick={() => removeAction(action)} className="hover:text-emerald-600">
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Target Audience */}
          <div className="space-y-2">
            <Label htmlFor="audience" className="flex items-center gap-2 text-foreground dark:text-gray-300">
              <Users className="size-4 text-emerald-600" />
              Target Audience
            </Label>
            <Textarea
              id="audience"
              value={projectData.audience}
              onChange={(e) => setProjectData({ ...projectData, audience: e.target.value })}
              placeholder="Who is the primary audience? (e.g., Small business owners aged 30-50, Tech-savvy millennials...)"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Deliverables & Scope Card */}
      <Card className="bg-white dark:bg-[#012D29] border-gray-200 dark:border-[#2DCE73]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
            <FileText className="size-5 text-emerald-600" />
            Deliverables & Scope
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">What will be delivered</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Website Features Required */}
          <div className="space-y-3">
            <Label className="text-foreground dark:text-gray-300">Website Features Required</Label>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Type to add features this website will need
            </p>

            {/* Feature Input with Autocomplete */}
            <div className="relative">
              <Input
                value={featureInput}
                onChange={(e) => handleFeatureInputChange(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && featureInput.trim()) {
                    addFeature(featureInput)
                  }
                }}
                placeholder="Type feature name and press Enter (e.g., Blog, Newsletter...)"
                className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />

              {/* Autocomplete Suggestions */}
              {filteredSuggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-[#013B34] border border-input dark:border-[#2DCE73] rounded-md shadow-lg max-h-48 overflow-auto">
                  {filteredSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => addFeature(suggestion)}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-foreground dark:text-white"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Features */}
            {projectData.websiteFeatures.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {projectData.websiteFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700"
                  >
                    {feature}
                    <button type="button" onClick={() => removeFeature(feature)} className="hover:text-emerald-600">
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Constraints & Requirements */}
          <div className="space-y-2">
            <Label htmlFor="constraints" className="text-foreground dark:text-gray-300">
              Constraints & Requirements
            </Label>
            <Textarea
              id="constraints"
              value={projectData.constraints}
              onChange={(e) => setProjectData({ ...projectData, constraints: e.target.value })}
              placeholder="Technical requirements, brand guidelines, accessibility needs, browser support..."
              rows={4}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Additional Information Card */}
      <Card className="bg-white dark:bg-[#012D29] border-gray-200 dark:border-[#2DCE73]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground dark:text-white">
            <LinkIcon className="size-5 text-emerald-600" />
            Additional Information
          </CardTitle>
          <CardDescription className="text-muted-foreground dark:text-gray-400">
            Links, resources, and team members
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Key Links & Resources */}
          <div className="space-y-2">
            <Label htmlFor="keyLinks" className="flex items-center gap-2 text-foreground dark:text-gray-300">
              <LinkIcon className="size-4 text-emerald-600" />
              Key Links & Resources
            </Label>
            <Textarea
              id="keyLinks"
              value={projectData.keyLinks}
              onChange={(e) => setProjectData({ ...projectData, keyLinks: e.target.value })}
              placeholder="Add important URLs, documents, or resources (one per line)"
              rows={4}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          {/* Collaborators & Stakeholders */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-foreground dark:text-gray-300">
              <UserPlus className="size-4 text-emerald-600" />
              Collaborators & Stakeholders
            </Label>

            {/* Add Collaborator Form */}
            <div className="flex gap-2">
              <Input
                value={newCollaborator.name}
                onChange={(e) => setNewCollaborator({ ...newCollaborator, name: e.target.value })}
                placeholder="Name"
                className="flex-1 bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
              <Input
                value={newCollaborator.role}
                onChange={(e) => setNewCollaborator({ ...newCollaborator, role: e.target.value })}
                onKeyPress={(e) => e.key === "Enter" && addCollaborator()}
                placeholder="Role"
                className="flex-1 bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
              />
              <Button
                type="button"
                onClick={addCollaborator}
                size="icon"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <UserPlus className="size-4" />
              </Button>
            </div>

            {/* Collaborators List */}
            {projectData.collaborators.length > 0 && (
              <div className="grid gap-2">
                {projectData.collaborators.map((collaborator, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8 bg-emerald-600 text-white">
                        <AvatarFallback>{collaborator.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground dark:text-white">{collaborator.name}</p>
                        <p className="text-xs text-muted-foreground dark:text-gray-400">{collaborator.role}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCollaborator(index)}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
