import React from 'react';
import { RoleCard } from './components/rolecard';
export const revalidate = 0; // 30 minutes
export const metadata = {
  title: "Career | Metclan Technologies",
  description: "View all our job listings"
}
type JobData = {
  title : string; 
  decription : string; 
  isRemote : boolean; 
  isFulltime : boolean;
}

export default async function Career() {
  const roles = await fetch('http://localhost:3000/career/api'); 
  if(roles.status !== 200) {
    return <div>Error fetching roles</div>;
  }
  const data = await roles.json() as JobData[];
  if(data.length === 0) {
    return <div>No roles available</div>;
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase">
          We&apos;re Hiring
        </span>
        <h1 className="text-4xl font-bold mt-4 mb-2">Be part of our mission</h1>
        <p className="text-xl text-gray-600">
          We&apos;re looking for passionate people to join us on our mission. We value flat hierarchies, 
          clear communication, and full ownership and responsibility.
        </p>
      </div>

      <div className="space-y-8">
        {data.map((role: any, i ) => (
          <RoleCard
            key={i}
            title={role.title}
            description={role.description}
            isRemote={role.isRemote}
            isFullTime={role.isFullTime}
          />
        ))}
      </div>
    </div>
  );
}