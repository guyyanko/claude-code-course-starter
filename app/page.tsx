import links from "@/data/links.json";
import { groupByTag, readingQueue, type Link } from "@/lib/links";

export default function Home() {
  const shelf = links as Link[];
  const queue = readingQueue(shelf);
  const groups = groupByTag(shelf);

  return (
    <main>
      <h1>Linkshelf</h1>
      <p className="muted">
        {shelf.length} links, {queue.length} still to read
      </p>

      <h2>Read next</h2>
      <ol>
        {queue.slice(0, 3).map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a> <span className="muted">{link.addedAt}</span>
          </li>
        ))}
      </ol>

      <h2>By tag</h2>
      {[...groups.entries()].map(([tag, items]) => (
        <section key={tag}>
          <h3>#{tag}</h3>
          <ul>
            {items.map((link) => (
              <li key={link.id} className={link.read ? "read" : undefined}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
