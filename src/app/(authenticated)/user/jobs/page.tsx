import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"
export const metadata = {
  title: "Job Listings",
  description: "View all your job listings"
}

export default async function JobListingPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Job Listings</h1>
        <Button className="bg-orange-500 text-white hover:bg-orange-600">
            <Link href="/user/jobs/create" className="flex items-center">
                <PlusIcon className="mr-2 h-4 w-4" /> Add New Job
            </Link>
        </Button>

      </div>
      {/* <RenderJobCards jobs={jobs} /> */}
    </div>
  )
}
