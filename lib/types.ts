export interface ApplyLink {
  url: string;
  method: string;
}

export interface JobPosition {
  position: string;
  requirements: string[];
}

export interface Section {
  header: string;
  paragraphs: string[];
}

export interface Salary {
  position: string;
  salary: string;
}

export interface SEO {
  meta_title: string;
  meta_description: string;
  tags: string[];
}

export interface JobPost {
  _id: string;
  original_url: string;
  slug: string;
  company: string;
  category: string;
  location: string;
  education: string;
  job_type: string;
  image_url: string;
  jobs: JobPosition[];
  apply_links: ApplyLink[];
  seo: SEO;
  section_1: Section;
  section_2: Section;
  section_3: Section;
  section_4: Section;
  section_5: Section;
  salaries: Salary[];
  created_at: string;
  updated_at: string;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}
