"use client"

import { useMemo, useState } from "react"
import "./styles.css"

const records = [
  { title: "Stop Making Sense", artist: "Talking Heads", format: "Concert Film · DVD", price: "$18", tag: "Staff pick", color: "coral", initials: "TH", category: "Concert films" },
  { title: "The Last Waltz", artist: "The Band", format: "Martin Scorsese · Blu-ray", price: "$24", tag: "Restored", color: "blue", initials: "TW", category: "Concert films" },
  { title: "Sign o’ the Times", artist: "Prince", format: "Concert Film · DVD", price: "$21", tag: "Rare find", color: "lilac", initials: "P", category: "Concert films" },
  { title: "Moonage Daydream", artist: "David Bowie", format: "Brett Morgen · Blu-ray", price: "$26", tag: "New arrival", color: "gold", initials: "DB", category: "Documentaries" },
]

const filters = ["All films", "Concert films", "Documentaries", "New arrivals"]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All films")
  const [cartCount, setCartCount] = useState(0)
  const [search, setSearch] = useState("")
  const visibleRecords = useMemo(() => records.filter((record) => {
    const matchesSearch = `${record.title} ${record.artist}`.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = activeFilter === "All films" || (activeFilter === "New arrivals" ? record.tag === "New arrival" : record.category === activeFilter)
    return matchesSearch && matchesFilter
  }), [activeFilter, search])

  return (
    <main>
      <div className="announcement">A good film deserves a second life. <a href="#collection">Find your next rewatch <span aria-hidden="true">↗</span></a></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rewind home"><span className="mark" aria-hidden="true">R</span><span>rewind<span className="wordmark-dot">.</span><small>FILM & MUSIC ON DISC</small></span></a>
        <nav className="main-nav" aria-label="Main navigation"><a className="selected" href="#collection">Shop films</a><a href="#about">Our story</a><a href="#events">Screenings</a></nav>
        <div className="header-actions"><label className="search-box"><span className="sr-only">Search films</span><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the shelves" /></label><button className="cart-button" onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })} aria-label={`Shopping bag, ${cartCount} items`}>Bag <span>{cartCount}</span></button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF, ON DISC</p><h1>Some nights<br />deserve a <em>rewind.</em></h1><p className="hero-description">Concert films, music documentaries, and the stories behind the songs. Carefully found, ready to play.</p><a className="primary-link" href="#collection">Explore the collection <span aria-hidden="true">↗</span></a><div className="hero-note"><span className="note-star">✳</span><span>Independent finds.<br /><strong>Posted with care.</strong></span></div></div>
        <div className="hero-art" aria-label="Illustrated stack of music film discs" role="img"><div className="art-sun"/><div className="disc disc-back"><span>LIVE<br />ON FILM</span></div><div className="disc disc-front"><div className="disc-center"><span>RW</span></div></div><div className="ticket"><span>THE<br />ENCORE</span><i>NO. 024</i></div><div className="art-caption">COLLECTED IN<br />THE UK · EST. 2024</div><span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span></div>
      </section>

      <section className="collection section-wrap" id="collection"><div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> THE SHELVES</p><h2>A little something <em>to watch.</em></h2></div><a className="text-link" href="#collection">View all films <span aria-hidden="true">→</span></a></div>
        <div className="filter-row" role="group" aria-label="Filter films">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="product-grid">{visibleRecords.map((record, index) => <article className="product-card" key={record.title}><div className={`cover cover-${record.color}`}><span className="cover-tag">{record.tag}</span><span className="cover-orbit" aria-hidden="true"/><span className="cover-initials">{record.initials}</span><span className="cover-title">{record.title}</span><span className="cover-artist">{record.artist}</span><span className="cover-index">RW — 00{index + 1}</span></div><div className="product-info"><div><h3>{record.title}</h3><p>{record.artist} <span>·</span> {record.format}</p></div><button className="add-button" onClick={() => setCartCount((count) => count + 1)} aria-label={`Add ${record.title} to bag`}>+</button></div><div className="product-price">{record.price} <span>incl. VAT</span></div></article>)}</div>
        {visibleRecords.length === 0 && <p className="empty-state">Nothing on this shelf yet. Try another search.</p>}
      </section>

      <section className="event-strip" id="events"><div className="event-icon" aria-hidden="true">◉</div><div><p className="eyebrow">SAVE YOUR SEAT</p><h2>Good films. Big screen. <em>Good company.</em></h2><p>Our next little screening night is being planned now.</p></div><a className="event-link" href="mailto:hello@rewind.example?subject=Screening%20night">Tell me when it&apos;s on <span aria-hidden="true">↗</span></a></section>
      <footer id="about"><a className="footer-brand" href="#top">rewind<span>.</span></a><p>Independent film finds, sent with care.</p><div><a href="mailto:hello@rewind.example">Say hello</a><span>© 2026 Rewind Film & Music</span></div></footer>
    </main>
  )
}
