// components/JobCard.js
import Link from 'next/link';
import { format } from 'date-fns';
import '../styles/JobCard.module.css';

export default function JobCard({ job, isToday }) {
  const formattedDate = format(new Date(job.walkinDate), 'dd MMM yyyy');
  
  return (
    <div className={`job-card ${isToday ? 'today' : ''} ${job.featured ? 'featured' : ''}`}>
      {job.featured && <span className="featured-badge">Featured</span>}
      {isToday && <span className="today-badge">Today</span>}
      
      {job.logoUrl && (
        <div className="company-logo">
          <img src={job.logoUrl} alt={job.companyName} />
        </div>
      )}
      
      <div className="job-content">
        <h3 className="company-name">{job.companyName}</h3>
        <h4 className="position">{job.position}</h4>
        
        <div className="job-details">
          <div className="detail-item">
            <span className="icon">📍</span>
            <span>{job.location}</span>
          </div>
          <div className="detail-item">
            <span className="icon">📅</span>
            <span>{formattedDate}</span>
          </div>
          {job.walkinTime && (
            <div className="detail-item">
              <span className="icon">🕐</span>
              <span>{job.walkinTime}</span>
            </div>
          )}
          {job.experience && (
            <div className="detail-item">
              <span className="icon">💼</span>
              <span>{job.experience}</span>
            </div>
          )}
          {job.salary && (
            <div className="detail-item">
              <span className="icon">💰</span>
              <span>{job.salary}</span>
            </div>
          )}
        </div>
        
        <div className="job-actions">
          <Link href={`/jobs/${job.slug}`} className="btn-details">
            View Details
          </Link>
          {job.applyLink && (
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="btn-apply">
              Apply Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}