import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-orange-500 group">
      {/* Job Title */}
      <h1 className="text-lg font-semibold text-gray-800 mb-2">
        {job.title}
      </h1>

      {/* Remote and Salary */}
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <p className="bg-green-100 text-green-600 font-medium px-2 py-1 rounded-md">
          {job.remote}
        </p>
        <p className='ml-2'>Salary: {job.salary}</p>
      </div>

      {/* Company Details */}
      <div className="flex items-center justify-between">
        {/* Company Logo and Info */}
        <div className="flex items-center gap-2">
          <img src={job.companyLogo} alt="Company Logo" className="h-10 w-10 object-contain" />
          <div>
            <p className="text-sm font-medium text-gray-800">{job.companyName}</p>
            <div className="flex items-center text-gray-500 text-sm">
              <img src={job.loc} alt="Location Icon" className="h-4 w-4 mr-1" />
              <p>{job.location}</p>
            </div>
          </div>
        </div>

        {/* Save Icon */}
        <img
          src={job.saved}
          alt="Save Icon"
          className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default JobCard;
