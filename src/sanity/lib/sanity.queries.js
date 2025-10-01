// lib/sanity.queries.js
export const jobsQuery = `
  *[_type == "job" && isActive == true] | order(featured desc, walkinDate desc) {
    _id,
    companyName,
    "slug": slug.current,
    position,
    location,
    walkinDate,
    walkinTime,
    experience,
    salary,
    contactEmail,
    contactPhone,
    applyLink,
    featured,
    "logoUrl": companyLogo.asset->url
  }
`;

export const singleJobQuery = `
  *[_type == "job" && slug.current == $slug][0] {
    _id,
    companyName,
    "slug": slug.current,
    position,
    location,
    walkinDate,
    walkinTime,
    experience,
    qualification,
    salary,
    description,
    requirements,
    contactEmail,
    contactPhone,
    applyLink,
    featured,
    "logoUrl": companyLogo.asset->url
  }
`;

export const upcomingJobsQuery = `
  *[_type == "job" && isActive == true && walkinDate >= now()] | order(walkinDate asc) [0...10] {
    _id,
    companyName,
    position,
    walkinDate,
    location
  }
`;