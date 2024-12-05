import React, { useContext } from 'react'
import { jobs } from '../assets/data'
import JobCard from './JobCard'
import SearchContext from '../context/SearchContext';

const JobList = () => {

    const { searchTerm, searchCountry, searchTriggered } = useContext(SearchContext);

    const filteredJobs = searchTriggered
        ? jobs.filter(
            (job) =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                job.location.toLowerCase().includes(searchCountry.toLowerCase())
        )
        : jobs;

    return (
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-36">
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
            ) : (
                <p className="col-span-full text-center text-gray-500">
                    No jobs found for your search.
                </p>
            )}
        </div>
    )
}

export default JobList