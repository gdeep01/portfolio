import Link from "next/link";

const notes = [
  {
    number: "01",
    id: "notes-bindaas",
    slug: "bindaas-blr",
    category: "Bindaas BLR · A product decision",
    title: "I left BESCOM alerts out.",
    excerpt: "Traffic and maps were the features people used most, so I focused there.",
    detail: "I didn’t add outage alerts because I couldn’t rely on the information being fresh enough.",
  },
  {
    number: "02",
    id: "notes-bus",
    slug: "where-is-my-bus",
    category: "Where Is My Bus? · Field learning",
    title: "I tried it with friends.",
    excerpt: "I also spoke with conductors in Shivamogga.",
    detail: "The pilot uses JavaScript, Firebase and Leaflet.",
  },
  {
    number: "03",
    id: "notes-group-wallet",
    slug: "group-wallet",
    category: "Group Wallet · Product concept",
    title: "I worked out what I’d measure.",
    excerpt: "For the concept, I set a north-star metric and six supporting metrics.",
    detail: "I also noted the regulatory constraints and what happens when someone doesn’t approve a request in time. Group Wallet is still a product concept.",
  },
];

export function FieldNotes() {
  return (
    <div className="field-notes-list">
      {notes.map((note) => (
        <article className="field-note" id={note.id} key={note.id}>
          <span className="field-note-number" aria-hidden="true">{note.number}</span>
          <div className="field-note-content">
            <span className="field-note-category">{note.category}</span>
            <h3>{note.title}</h3>
            <p>{note.excerpt}</p>
            <details className="note-details">
              <summary><span>Read the note here</span><span className="note-chevron" aria-hidden="true">+</span></summary>
              <p>{note.detail}</p>
            </details>
            <Link className="text-link note-case-link" href={`/work/${note.slug}`}>Read the full case study <span aria-hidden="true">↗</span></Link>
          </div>
          <span className="field-note-mark" aria-hidden="true">↘</span>
        </article>
      ))}
    </div>
  );
}
