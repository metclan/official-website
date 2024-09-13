"use client"
import { Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFormState, useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useState, ChangeEvent, useRef } from 'react';
import { uploadResume } from '@/app/actions/resume'

export default function ResumeUpload() {
    const [state, action] = useFormState(uploadResume, { message : ""})
    const [file, setFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: ''
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];
            if (selectedFile.size <= 5 * 1024 * 1024) { // 5MB max
                setFile(selectedFile);
            } else {
                alert('File size exceeds 5MB limit');
            }
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleUploadBoxClick = () => {
        fileInputRef.current?.click();
    };
    console.log(state.message)
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <Card className="w-full max-w-3xl">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-2xl font-bold">Upload your resume</CardTitle>
                        {/* <X className="h-4 w-4 cursor-pointer" /> */}
                    </CardHeader>
                    <CardContent>
                        <form action={action}>
                            <p className="text-sm text-gray-500 mb-6">
                                Help us get to know you better by sharing your information and resume.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input 
                                        id="firstName" 
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John" 
                                        className='focus-visible:ring-orange-500'
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input 
                                        id="lastName" 
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Doe" 
                                        className='focus-visible:ring-orange-500'
                                        required
                                    />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input 
                                        id="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email" 
                                        placeholder="johndoe@example.com" 
                                        className='focus-visible:ring-orange-500'
                                        required
                                    />
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                                    <Input 
                                        id="linkedin" 
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                        placeholder="https://www.linkedin.com/in/johndoe" 
                                        className='focus-visible:ring-orange-500'
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div 
                                className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 cursor-pointer"
                                onClick={handleUploadBoxClick}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                                    <p className="text-sm font-medium">
                                        {file ? file.name : "Drag your resume here or click to upload"}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">Acceptable file types: PDF, DOCX (5MB max)</p>
                                    <input
                                        ref={fileInputRef}
                                        id="resume"
                                        name="resume"
                                        type="file"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                        required
                                    />
                                </div>
                            </div>
                            <SubmitButton />
                        </form>
                    </CardContent>
                </Card>
        </div>
    )
}

function SubmitButton () {
    const  {pending} = useFormStatus()
    return (<div className="flex justify-end">
    <Button disabled={pending} type="submit" className='bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300'>{pending ? "Please wait" : "Upload"}</Button>
</div>)
}