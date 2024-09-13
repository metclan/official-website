"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobInputForm() {
  const router = useRouter();
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    type: '',
    isRemote: true,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setJobData(prev => ({ ...prev, isRemote: checked }));
  };

  const handleSelectChange = (value: string) => {
    setJobData(prev => ({ ...prev, type: value }));
  };
  const handleSubmit = async (event:React.FormEvent) => {
    event.preventDefault(); 
    const postData = await fetch('http://localhost:3000/user/jobs/create/api', {
      method : 'POST', 
      body : JSON.stringify(jobData), 
      headers : {
        "Content-Type" : "Application/json"
      }
    })
    if(postData.ok){
      router.push('/user/jobs')
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Card className="w-1/2 mx-auto mt-10">
          <CardHeader>
            <CardTitle className="text-2xl">Create New Job Listing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input 
                id="title" 
                name="title"
                value={jobData.title}
                onChange={handleInputChange}
                placeholder="e.g. Senior Frontend Developer" 
                required
                />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea 
                id="jobDescription" 
                name="description"
                value={jobData.description}
                onChange={handleInputChange}
                placeholder="Describe the job role, responsibilities, and requirements..."
                className="min-h-[150px]"
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="remote" 
                checked={jobData.isRemote}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="remote">Remote Work Available</Label>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="jobType">Job Type</Label>
              <Select onValueChange={handleSelectChange} value={jobData.type} required>
                <SelectTrigger id="jobType">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fullTime">Full-time</SelectItem>
                  <SelectItem value="partTime">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="temporary">Temporary</SelectItem>
                </SelectContent>
              </Select>
            </div>
        </CardContent>
          <CardFooter>
            <Button className="w-full" type='submit'>Create Job Listing</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}