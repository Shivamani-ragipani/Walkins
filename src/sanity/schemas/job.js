// sanity/schemas/job.js
export default {
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'companyName',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'position',
      title: 'Position / Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'walkinDate',
      title: 'Walk-in Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'walkinTime',
      title: 'Walk-in Time',
      type: 'string',
      description: 'e.g., 9:00 AM - 4:00 PM'
    },
    {
      name: 'experience',
      title: 'Experience Required',
      type: 'string',
      description: 'e.g., 0-2 years, Fresher, 3+ years'
    },
    {
      name: 'qualification',
      title: 'Qualification',
      type: 'string'
    },
    {
      name: 'salary',
      title: 'Salary',
      type: 'string',
      description: 'e.g., 15,000 - 25,000 per month'
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text'
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string'
    },
    {
      name: 'applyLink',
      title: 'Apply Link',
      type: 'url'
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'featured',
      title: 'Featured Job',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      title: 'position',
      subtitle: 'companyName',
      media: 'companyLogo'
    }
  }
};