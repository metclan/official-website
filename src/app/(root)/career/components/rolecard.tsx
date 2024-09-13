import Link from "next/link";
export function RoleCard  ({ title, description, isRemote, isFullTime }: { title: string, description: string, isRemote: boolean, isFullTime: boolean } ) {
  const encodedTitle = title.toLowerCase().replace(/ /g, '-');
    return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <Link href={`/career/${encodedTitle}`} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-all duration-300">Apply</Link>
        <div className="flex space-x-2">
          <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
            {isRemote ? 'Remote' : 'On-site'}
          </span>
          <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
            {isFullTime ? 'Full-time' : 'Part-time'}
          </span>
        </div>
      </div>
    </div>
    )
}