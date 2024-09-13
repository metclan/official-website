"use client"
import {Jobcard} from "./jobcard"
export default function RenderJobCards({ jobs }: { jobs: any[] }) {
  const handleEdit = (id: string) => {
    console.log(`Edit job with ID: ${id}`);
  };

  const handleViewApplicants = (id: string) => {
    console.log(`View applicants for job with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete job with ID: ${id}`);
  };

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
                <Jobcard key={job.id} onEdit={handleEdit} onViewApplicants={handleViewApplicants} onDelete={handleDelete} title={job.title} applicants={job.applicants} company={job.company} id={String(job.id)} isListed={job.isListed}/>
            ))}
        </div>
    )
}   