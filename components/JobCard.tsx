import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { JobPost } from "@/lib/types";
import { getTimeAgo } from "@/lib/utils";

interface JobCardProps {
  post: JobPost;
}

const badgeTints = [
  "badge-tag-sky",
  "badge-tag-rose",
  "badge-tag-green",
  "badge-tag-purple",
  "badge-tag-orange",
];

export default function JobCard({ post }: JobCardProps) {
  const mainPosition = post.jobs[0]?.position || "Posisi Tersedia";
  const salaryFormat =
    post.salaries && post.salaries.length > 0 ? post.salaries[0].salary : null;

  // Deterministic tint based on category string
  const tintIdx = post.category
    ? post.category.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
      badgeTints.length
    : 0;

  const dateString = (() => {
    const date = new Date(post.created_at);
    return isNaN(date.getTime()) ? "Baru Saja" : getTimeAgo(post.created_at);
  })();

  return (
    <Link href={`/lowongan/${post.slug}`} className="job-card">
      {/* Header: Logo + Title */}
      <div className="job-card-header">
        <div className="job-card-logo">
          {post.image_url ? (
            <Image
              src={post.image_url}
              alt={post.company}
              fill
              sizes="56px"
              style={{ objectFit: "cover", opacity: 1 }}
              referrerPolicy="no-referrer"
            />
          ) : null}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="job-card-title line-clamp-2">
            {post.seo?.meta_title || mainPosition}
          </h3>
          <p className="job-card-company">{post.company}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="job-card-meta">
        <div className="job-card-meta-item">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="job-card-meta-icon"
          />
          <span className="line-clamp-1">
            {post.location || "Seluruh Indonesia"}
          </span>
        </div>
        <div className="job-card-meta-item">
          <FontAwesomeIcon icon={faBriefcase} className="job-card-meta-icon" />
          <span className="line-clamp-1">
            {post.job_type || "Full Time"}
            {salaryFormat && ` • ${salaryFormat}`}
          </span>
        </div>
      </div>

      {/* Footer: Category Badge + Date */}
      <div className="job-card-footer">
        <span
          className={`badge-tag ${badgeTints[tintIdx]} truncate`}
          style={{ maxWidth: "65%" }}
        >
          {post.category || "Lainnya"}
        </span>
        <span className="job-card-date">{dateString}</span>
      </div>
    </Link>
  );
}
