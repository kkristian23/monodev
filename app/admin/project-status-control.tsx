"use client";
import { useState } from "react";
import { useCms } from "../components/cms-live";
import { getCmsSnapshot, projectSold, publishCms } from "../lib/cms-store";
import { readDocument, saveDocument } from "./repository";

export function ProjectStatusControl({ id, title }: { id: number; title: string }) {
  useCms();
  const sold = projectSold(id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  async function toggle() {
    setSaving(true);
    setError("");
    try {
      const key = `text-project-status-${id}`;
      const current = await readDocument(key);
      const values = { ...current?.values, sold: String(!sold) };
      await saveDocument(key, { values }, current?.revision ?? 0);
      publishCms({ ...getCmsSnapshot(), [key]: { values, revision: (current?.revision ?? 0) + 1 } });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Starea nu a putut fi salvată.");
    } finally {
      setSaving(false);
    }
  }
  return <div className="admin-project-status">
    <button type="button" role="switch" aria-checked={sold} aria-label={`Marcat ca vândut: ${title}`} disabled={saving} onClick={toggle} className={sold ? "is-sold" : ""}>
      <span className="admin-status-indicator" aria-hidden="true" />
      <span><strong>{saving ? "Se salvează…" : sold ? "Vândut" : "Disponibil"}</strong><small>{sold ? "Click pentru a reactiva" : "Marchează ca vândut"}</small></span>
      <span className="admin-status-switch" aria-hidden="true" />
    </button>
    {error && <p role="alert">{error}</p>}
  </div>;
}
