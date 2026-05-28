"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

interface SearchInputProps {
  initialQuery: string;
}

export default function SearchInput({ initialQuery }: SearchInputProps) {
  const [localQuery, setLocalQuery] = useState(initialQuery);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim() && localQuery.trim() !== initialQuery) {
      startTransition(() => {
        router.push(`/cari?q=${encodeURIComponent(localQuery.trim())}`);
      });
    } else if (localQuery.trim() === initialQuery) {
      // Already on this query, do nothing or force refresh if needed
    }
  };

  return (
    <form
      className="search-form-layout"
      onSubmit={handleSearch}
      style={{
        maxWidth: "600px",
        margin: "0 auto 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          border: "1px solid var(--hairline-strong)",
          borderRadius: "var(--rounded-md)",
          padding: "12px 16px",
          background: "var(--canvas)",
          transition: "all 180ms",
          opacity: isPending ? 0.6 : 1,
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            width: 16,
            height: 16,
            color: "var(--steel)",
            marginRight: "12px",
          }}
        />
        <input
          type="text"
          placeholder="Ketik posisi, perusahaan, atau lokasi..."
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          disabled={isPending}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "var(--ink)",
            fontSize: "16px",
            lineHeight: 1.55,
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isPending}
        style={{
          height: "48px",
          padding: "0 24px",
          opacity: isPending ? 0.8 : 1,
        }}
      >
        {isPending ? (
          <>
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              style={{ marginRight: "8px" }}
            />
            Mencari
          </>
        ) : (
          "Cari Lowongan"
        )}
      </button>
    </form>
  );
}
