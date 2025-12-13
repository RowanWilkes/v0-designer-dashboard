"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Briefcase,
  Calendar,
  Target,
  Users,
  AlertCircle,
  Clock,
  DollarSign,
  FileText,
  Palette,
  X,
  Plus,
  LinkIcon,
  UserPlus,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProjectOverviewProps {
  projectId: string
}

export function ProjectOverview({ projectId }: ProjectOverviewProps) {
  const [projectData, setProjectData] = useState({
    name: "",
    client: "",
    description: "",
    goal: "",
    audience: "",
    painPoints: "",
    deadline: "",
    budget: "",
    constraints: "",
    successMetrics: "",
    kickoffDate: "",
    priorityLevel: "Medium",
    estimatedDevTime: "",
    teamMembers: "",
    clientReviewDate: "",
    projectType: "",
    keyLinks: "",
    collaborators: [] as { name: string; role: string }[],
    primaryActions: [] as string[],
    websiteFeatures: [] as string[],
  })

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Details about the project</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Briefcase className="size-4 text-emerald-600" />
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

          <div className="space-y-2">
            <Label htmlFor="client" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Users className="size-4 text-emerald-600" />
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

          <div className="space-y-2">
            <Label htmlFor="description" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <FileText className="size-4 text-emerald-600" />
              Description
            </Label>
            <Textarea
              id="description"
              value={projectData.description}
              onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
              placeholder="Enter project description"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goal" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Target className="size-4 text-emerald-600" />
              Goal
            </Label>
            <Textarea
              id="goal"
              value={projectData.goal}
              onChange={(e) => setProjectData({ ...projectData, goal: e.target.value })}
              placeholder="Enter project goal"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="audience" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Users className="size-4 text-emerald-600" />
              Audience
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

          <div className="space-y-2">
            <Label htmlFor="painPoints" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <AlertCircle className="size-4 text-emerald-600" />
              User Pain Points
            </Label>
            <Textarea
              id="painPoints"
              value={projectData.painPoints}
              onChange={(e) => setProjectData({ ...projectData, painPoints: e.target.value })}
              placeholder="What problems are users trying to solve? What frustrations do they have?"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Calendar className="size-4 text-emerald-600" />
              Deadline
            </Label>
            <Input
              id="deadline"
              value={projectData.deadline}
              onChange={(e) => setProjectData({ ...projectData, deadline: e.target.value })}
              placeholder="Enter project deadline"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <DollarSign className="size-4 text-emerald-600" />
              Budget
            </Label>
            <Input
              id="budget"
              value={projectData.budget}
              onChange={(e) => setProjectData({ ...projectData, budget: e.target.value })}
              placeholder="Enter project budget"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="constraints" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Palette className="size-4 text-emerald-600" />
              Constraints
            </Label>
            <Textarea
              id="constraints"
              value={projectData.constraints}
              onChange={(e) => setProjectData({ ...projectData, constraints: e.target.value })}
              placeholder="Enter project constraints"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="successMetrics" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Clock className="size-4 text-emerald-600" />
              Success Metrics
            </Label>
            <Textarea
              id="successMetrics"
              value={projectData.successMetrics}
              onChange={(e) => setProjectData({ ...projectData, successMetrics: e.target.value })}
              placeholder="Enter success metrics"
              rows={3}
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="kickoffDate" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Calendar className="size-4 text-emerald-600" />
              Kickoff Date
            </Label>
            <Input
              id="kickoffDate"
              value={projectData.kickoffDate}
              onChange={(e) => setProjectData({ ...projectData, kickoffDate: e.target.value })}
              placeholder="Enter kickoff date"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="priorityLevel" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <X className="size-4 text-emerald-600" />
              Priority Level
            </Label>
            <Select
              value={projectData.priorityLevel}
              onValueChange={(value) => setProjectData({ ...projectData, priorityLevel: value })}
            >
              <SelectTrigger className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white">
                <SelectValue placeholder="Select priority level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="estimatedDevTime" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Clock className="size-4 text-emerald-600" />
              Estimated Development Time
            </Label>
            <Input
              id="estimatedDevTime"
              value={projectData.estimatedDevTime}
              onChange={(e) => setProjectData({ ...projectData, estimatedDevTime: e.target.value })}
              placeholder="Enter estimated development time"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="teamMembers" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Users className="size-4 text-emerald-600" />
              Team Members
            </Label>
            <Input
              id="teamMembers"
              value={projectData.teamMembers}
              onChange={(e) => setProjectData({ ...projectData, teamMembers: e.target.value })}
              placeholder="Enter team members"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="clientReviewDate" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Calendar className="size-4 text-emerald-600" />
              Client Review Date
            </Label>
            <Input
              id="clientReviewDate"
              value={projectData.clientReviewDate}
              onChange={(e) => setProjectData({ ...projectData, clientReviewDate: e.target.value })}
              placeholder="Enter client review date"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectType" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Briefcase className="size-4 text-emerald-600" />
              Project Type
            </Label>
            <Input
              id="projectType"
              value={projectData.projectType}
              onChange={(e) => setProjectData({ ...projectData, projectType: e.target.value })}
              placeholder="Enter project type"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyLinks" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <LinkIcon className="size-4 text-emerald-600" />
              Key Links
            </Label>
            <Input
              id="keyLinks"
              value={projectData.keyLinks}
              onChange={(e) => setProjectData({ ...projectData, keyLinks: e.target.value })}
              placeholder="Enter key links"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          {/* Add Collaborators section */}
          <div className="space-y-2">
            <Label htmlFor="collaborators" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <UserPlus className="size-4 text-emerald-600" />
              Collaborators
            </Label>
            <Input
              id="collaborators"
              value={projectData.collaborators
                .map((collaborator) => `${collaborator.name} (${collaborator.role})`)
                .join(", ")}
              onChange={(e) => {
                const collaborators = e.target.value.split(", ").map((collaborator) => {
                  const [name, role] = collaborator.split(" (")
                  return { name, role: role.slice(0, -1) }
                })
                setProjectData({ ...projectData, collaborators })
              }}
              placeholder="Enter collaborators (Name (Role))"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          {/* Add Primary Actions section */}
          <div className="space-y-2">
            <Label htmlFor="primaryActions" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Plus className="size-4 text-emerald-600" />
              Primary Actions
            </Label>
            <Input
              id="primaryActions"
              value={projectData.primaryActions.join(", ")}
              onChange={(e) => setProjectData({ ...projectData, primaryActions: e.target.value.split(", ") })}
              placeholder="Enter primary actions"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>

          {/* Add Website Features section */}
          <div className="space-y-2">
            <Label htmlFor="websiteFeatures" className="flex items-center gap-2 font-medium dark:text-gray-300">
              <Palette className="size-4 text-emerald-600" />
              Website Features
            </Label>
            <Input
              id="websiteFeatures"
              value={projectData.websiteFeatures.join(", ")}
              onChange={(e) => setProjectData({ ...projectData, websiteFeatures: e.target.value.split(", ") })}
              placeholder="Enter website features"
              className="bg-background dark:bg-[#013B34] border-input dark:border-[#2DCE73] text-foreground dark:text-white"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
