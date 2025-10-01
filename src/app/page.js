// app/page.js
import { clientFetch } from '../sanity/lib/sanity.client';
import { jobsQuery } from '../sanity/lib/sanity.queries';
import JobCard from '../app/components/JobCard';
import JobFilters from '../app/components/JobFilters';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const jobs = await clientFetch.fetch(jobsQuery);
  
  const todayJobs = jobs.filter(job => {
    const jobDate = new Date(job.walkinDate);
    const today = new Date();
    return jobDate.toDateString() === today.toDateString();
  });
  
  const upcomingJobs = jobs.filter(job => {
    const jobDate = new Date(job.walkinDate);
    const today = new Date();
    return jobDate > today;
  });

  return (
    <div className="container">
      <section className="hero-section">
        <h1>Walk-in Jobs in Hyderabad</h1>
        <p>Find the latest walk-in job opportunities updated daily</p>
      </section>

      <JobFilters />

      {todayJobs.length > 0 && (
        <section className="jobs-section">
          <h2 className="section-title">Today's Walk-ins</h2>
          <div className="jobs-grid">
            {todayJobs.map(job => (
              <JobCard key={job._id} job={job} isToday={true} />
            ))}
          </div>
        </section>
      )}

      <section className="jobs-section">
        <h2 className="section-title">Upcoming Walk-ins</h2>
        <div className="jobs-grid">
          {upcomingJobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </section>

      {jobs.length === 0 && (
        <div className="no-jobs">
          <p>No walk-in jobs available at the moment. Please check back later!</p>
        </div>
      )}
    </div>
  );
}