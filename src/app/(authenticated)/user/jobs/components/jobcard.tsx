"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, Edit, Users, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type JobCardProps = {
    title: string;
    isListed: boolean;
    company: string;
    id: string;
    applicants: number;
    onEdit: (id: string) => void;
    onViewApplicants: (id: string) => void;
    onDelete: (id: string) => void;
}

export function Jobcard({ title, isListed, company, id, applicants, onEdit, onViewApplicants, onDelete }: JobCardProps) {
    return (
        <Card key={id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <div className="flex items-center space-x-2">
                    <Badge variant={isListed ? "default" : "secondary"} className="bg-orange-500 text-white hover:bg-orange-600">
                        {isListed ? "Listed" : "Unlisted"}
                    </Badge>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => onEdit(id)}>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onViewApplicants(id)}>
                                <Users className="mr-2 h-4 w-4" />
                                <span>View Applicants</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => onDelete(id)}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{company}</div>
                <p className="text-xs text-muted-foreground">Job ID: {id}</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    {applicants} Applicants
                </div>
            </CardContent>
        </Card>
    )
}