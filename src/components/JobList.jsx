import React from 'react'
import { jobs } from '../assets/data'
import JobCard from './JobCard'

const JobList = () => {
    return (
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-28">
            {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
    )
}

export default JobList