"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLocationDot,
  faCalendarDays,
  faCircleCheck,
  faPaperPlane,
  faEnvelope,
  faUpRightFromSquare,
  faGraduationCap,
  faBriefcase,
  faChevronRight,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faTwitter } from "@fortawesome/free-brands-svg-icons";
import JobCard from "@/components/JobCard";
import JsonLd from "@/components/JsonLd";
import { formatDate, getTimeAgo } from "@/lib/utils";
import { JobPost, Section } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface JobDetailContentProps {
  post: JobPost;
  relatedPosts: JobPost[];
  recommendedPosts: JobPost[];
  slug: string;
}

function SectionBlock({ section }: { section: Section }) {
  if (!section || (!section.header && section.paragraphs.length === 0))
    return null;
  return (
    <div className="content-section">
      {section.header && (
        <h3 className="heading-5" style={{ marginBottom: "12px" }}>
          {section.header}
        </h3>
      )}
      {section.paragraphs.map((p, i) => (
        <ReactMarkdown
          key={i}
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ ...props }) => (
              <p
                style={{
                  color: "var(--slate)",
                  lineHeight: 1.8,
                  marginBottom: "12px",
                  fontSize: "15px",
                }}
                {...props}
              />
            ),
            li: ({ ...props }) => (
              <li
                style={{
                  color: "var(--slate)",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul
                style={{
                  color: "var(--slate)",
                  lineHeight: 1.8,
                  fontSize: "15px",
                  paddingLeft: "20px",
                  marginBottom: "12px",
                }}
                {...props}
              />
            ),
            table: ({ ...props }) => (
              <div className="table-container" style={{ marginBottom: "16px" }}>
                <table className="table" {...props} />
              </div>
            ),
          }}
        >
          {p}
        </ReactMarkdown>
      ))}
    </div>
  );
}

export default function JobDetailContent({
  post,
  relatedPosts,
  slug,
}: JobDetailContentProps) {
  const mainPosition = post.jobs[0]?.position || "Posisi Tersedia";
  const categorySlug = post.category
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: mainPosition,
    description:
      post.seo?.meta_description || post.section_1?.paragraphs?.[0] || "",
    datePosted: post.created_at,
    hiringOrganization: {
      "@type": "Organization",
      name: post.company,
      sameAs: post.apply_links.find((l) => l.url.startsWith("http"))?.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: post.location.split(",")[0]?.trim(),
        addressRegion: post.location.split(",")[1]?.trim(),
        addressCountry: "ID",
      },
    },
    employmentType: "FULL_TIME",
    image: post.image_url || undefined,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  return (
    <>
      <JsonLd data={jobPostingJsonLd} />

      <div style={{ padding: "40px 0" }}>
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <Link href="/">Beranda</Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="breadcrumbs-separator"
              style={{ width: 10, height: 10 }}
            />
            <Link href={`/kategori/${categorySlug}`}>{post.category}</Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="breadcrumbs-separator"
              style={{ width: 10, height: 10 }}
            />
            <span className="breadcrumbs-current">{mainPosition}</span>
          </div>

          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {/* Main Content */}
            <div style={{ flex: "1 1 640px", minWidth: 0 }}>
              {/* Title Card */}
              <div
                className="card-base"
                style={{ padding: 0, overflow: "hidden", marginBottom: "24px" }}
              >
                {post.image_url && (
                  <div
                    style={{ position: "relative", width: "100%", height: 220 }}
                  >
                    <Image
                      src={post.image_url}
                      alt={post.company}
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>
                )}
                <div style={{ padding: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginBottom: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="badge-tag badge-tag-purple">
                      {post.category}
                    </span>
                    {post.job_type && (
                      <span
                        className="badge-tag"
                        style={{
                          backgroundColor: "var(--surface)",
                          color: "var(--slate)",
                          border: "1px solid var(--hairline)",
                        }}
                      >
                        {post.job_type}
                      </span>
                    )}
                  </div>

                  <h1 className="heading-3" style={{ marginBottom: "16px" }}>
                    {mainPosition}
                  </h1>

                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faBuilding}
                        style={{ width: 16, height: 16, color: "var(--steel)" }}
                      />
                      <span className="body-md-medium">{post.company}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ width: 16, height: 16, color: "var(--steel)" }}
                      />
                      <span
                        className="body-sm"
                        style={{ color: "var(--slate)" }}
                      >
                        {post.location}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        style={{ width: 16, height: 16, color: "var(--steel)" }}
                      />
                      <span
                        className="body-sm"
                        style={{ color: "var(--slate)" }}
                      >
                        {formatDate(post.created_at)} (
                        {getTimeAgo(post.created_at)})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 1 & 2 */}
              <div className="card-base" style={{ marginBottom: "24px" }}>
                <SectionBlock section={post.section_1} />
                <SectionBlock section={post.section_2} />
              </div>

              {/* Salary Table */}
              {post.salaries && post.salaries.length > 0 && (
                <div className="card-base" style={{ marginBottom: "24px" }}>
                  <h2 className="heading-5" style={{ marginBottom: "16px" }}>
                    Estimasi Gaji
                  </h2>
                  <div className="table-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Posisi</th>
                          <th>Gaji</th>
                        </tr>
                      </thead>
                      <tbody>
                        {post.salaries.map((s, i) => (
                          <tr key={i}>
                            <td>{s.position}</td>
                            <td
                              style={{
                                color: "var(--success)",
                                fontWeight: 600,
                              }}
                            >
                              {s.salary}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Section 3 & 4 */}
              <div className="card-base" style={{ marginBottom: "24px" }}>
                <SectionBlock section={post.section_3} />
                <SectionBlock section={post.section_4} />
              </div>

              {/* Requirements */}
              {post.jobs.map((job, jobIdx) => (
                <div
                  className="card-base"
                  key={jobIdx}
                  style={{ marginBottom: "24px" }}
                >
                  <h2 className="heading-5" style={{ marginBottom: "16px" }}>
                    Persyaratan — {job.position}
                  </h2>
                  <div className="req-list">
                    {job.requirements.map((req, reqIdx) => (
                      <div key={reqIdx} className="req-item">
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="req-icon"
                        />
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ ...props }) => <span {...props} />,
                          }}
                        >
                          {req}
                        </ReactMarkdown>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Section 5 */}
              {post.section_5 && post.section_5.paragraphs.length > 0 && (
                <div className="card-base" style={{ marginBottom: "24px" }}>
                  <SectionBlock section={post.section_5} />
                </div>
              )}

              {/* Apply Buttons */}
              <div className="card-base">
                <div
                  className="alert alert-warning"
                  style={{ marginBottom: "24px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "4px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      style={{ width: 16, height: 16 }}
                    />
                    <span className="alert-title">Hati-Hati Penipuan!</span>
                  </div>
                  NyariKerja.online atau perusahaan manapun{" "}
                  <strong>tidak pernah memungut biaya apapun</strong> (seperti
                  biaya tiket, pelatihan, atau admin) dalam proses rekrutmen.
                </div>

                <h2 className="heading-5" style={{ marginBottom: "8px" }}>
                  Cara Melamar
                </h2>
                <p
                  className="body-sm"
                  style={{ color: "var(--slate)", marginBottom: "24px" }}
                >
                  {post.apply_links.length > 1
                    ? `Terdapat ${post.apply_links.length} cara untuk melamar ke posisi ini. Pilih salah satu yang paling sesuai.`
                    : "Klik tombol di bawah untuk melamar posisi ini."}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {post.apply_links.map((link, idx) => {
                    let buttonText = link.method || "";
                    if (buttonText.includes("|")) {
                      buttonText = buttonText.split("|")[0].trim();
                    }

                    const isEmail = link.url.startsWith("mailto:");
                    const isWhatsApp =
                      link.url.includes("wa.me") ||
                      link.url.includes("whatsapp.com");
                    const isForm =
                      link.url.includes("forms.gle") ||
                      link.url.includes("docs.google.com/forms");

                    if (
                      !buttonText ||
                      buttonText.toLowerCase() === "apply" ||
                      buttonText.toLowerCase() === "apply via email"
                    ) {
                      if (isEmail) {
                        const email = link.url.replace("mailto:", "");
                        buttonText = `Kirim Lamaran ke ${email}`;
                      } else if (isWhatsApp) buttonText = "Lamar via WhatsApp";
                      else if (isForm) buttonText = "Isi Form Pendaftaran";
                      else buttonText = "Lamar Sekarang";
                    }

                    const icon = isEmail ? faEnvelope : faPaperPlane;
                    const showNumber = post.apply_links.length > 1;

                    return (
                      <div
                        key={idx}
                        style={{
                          padding: "20px",
                          borderRadius: "var(--rounded-md)",
                          border: "1px solid rgba(86, 69, 212, 0.15)",
                          background: "rgba(86, 69, 212, 0.03)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        {showNumber && (
                          <span
                            className="caption-bold"
                            style={{
                              color: "var(--primary)",
                              textTransform: "uppercase",
                              letterSpacing: "0.05em",
                            }}
                          >
                            Opsi {idx + 1} dari {post.apply_links.length}
                          </span>
                        )}
                        <a
                          href={link.url}
                          target={
                            link.url.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.url.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="btn btn-primary btn-lg"
                          style={{
                            textAlign: "left",
                            whiteSpace: "normal",
                            wordBreak: "break-word",
                            lineHeight: 1.4,
                          }}
                        >
                          <FontAwesomeIcon
                            icon={icon}
                            style={{ width: 16, height: 16 }}
                          />
                          {buttonText}
                          {link.url.startsWith("http") && (
                            <FontAwesomeIcon
                              icon={faUpRightFromSquare}
                              style={{
                                width: 12,
                                height: 12,
                                marginLeft: "auto",
                              }}
                            />
                          )}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ flex: "0 0 340px", maxWidth: "100%" }}>
              {/* Share */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Bagikan Lowongan</h3>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Lowongan ${mainPosition} di ${post.company} — https://www.nyarikerja.online/lowongan/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ width: 14, height: 14 }}
                    />
                    WhatsApp
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Lowongan ${mainPosition} di ${post.company}`)}&url=${encodeURIComponent(`https://www.nyarikerja.online/lowongan/${slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ width: 14, height: 14 }}
                    />
                    Twitter
                  </a>
                </div>
              </div>

              {/* Company Info */}
              <div className="sidebar-card">
                <h3 className="sidebar-card-title">Tentang Perusahaan</h3>
                <hr className="divider" style={{ margin: "12px 0 16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div>
                    <span className="caption" style={{ color: "var(--steel)" }}>
                      Nama Perusahaan
                    </span>
                    <p className="body-sm-medium">{post.company}</p>
                  </div>
                  <div>
                    <span className="caption" style={{ color: "var(--steel)" }}>
                      Lokasi
                    </span>
                    <p className="body-sm-medium">{post.location}</p>
                  </div>
                  <div>
                    <span className="caption" style={{ color: "var(--steel)" }}>
                      Kategori
                    </span>
                    <p className="body-sm-medium">{post.category}</p>
                  </div>
                  {post.education && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        style={{ width: 14, height: 14, color: "var(--steel)" }}
                      />
                      <div>
                        <span
                          className="caption"
                          style={{ color: "var(--steel)" }}
                        >
                          Pendidikan
                        </span>
                        <p className="body-sm-medium">{post.education}</p>
                      </div>
                    </div>
                  )}
                  {post.job_type && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        style={{ width: 14, height: 14, color: "var(--steel)" }}
                      />
                      <div>
                        <span
                          className="caption"
                          style={{ color: "var(--steel)" }}
                        >
                          Tipe Pekerjaan
                        </span>
                        <p className="body-sm-medium">{post.job_type}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* SEO Tags */}
              {post.seo?.tags && post.seo.tags.length > 0 && (
                <div className="sidebar-card">
                  <h3 className="sidebar-card-title">Tags</h3>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {post.seo.tags.map((tag, i) => (
                      <Link
                        key={i}
                        href={`/cari?q=${encodeURIComponent(tag)}`}
                        className="pill-tab"
                        style={{ fontSize: "13px", padding: "4px 12px" }}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Jobs */}
              {relatedPosts.length > 0 && (
                <div style={{ marginTop: "24px" }}>
                  <h3 className="heading-5" style={{ marginBottom: "16px" }}>
                    Lowongan Serupa
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {relatedPosts.map((rp) => (
                      <JobCard key={rp._id} post={rp} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
