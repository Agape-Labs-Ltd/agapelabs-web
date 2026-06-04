import AgapeWebClient from '@/components/AgapeWebClient';

export default function Home() {
  return (
    <>
      {/* ─── NAV ───────────────────────────────────────────────────── */}
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top" aria-label="Agape Labs — Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nav__logo" src="/images/agape-labs-logo.svg" alt="Agape Labs" />
        </a>

        <div className="nav__links">
          <a className="nav__link" href="#vision">Vision</a>
          <a className="nav__link" href="#apps">Apps</a>
          <a className="nav__link" href="#story">Story</a>
          <a className="nav__link" href="#beliefs">Beliefs</a>
          <a className="nav__link" href="#commitment">Commitment</a>
          <a className="nav__link nav__cta" href="#contact">
            <span className="dot" aria-hidden="true"></span>
            Get in touch
          </a>
        </div>
      </nav>

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <header className="hero" id="top">
        <div className="hero__shader" aria-hidden="true">
          <canvas id="hero-shader"></canvas>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero__dove" src="/images/dove.png" alt="" aria-hidden="true" />
        <div className="hero__vignette" aria-hidden="true"></div>

        <div className="hero__inner">
          <span className="eyebrow">
            <svg className="sigil" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="7" cy="7" r="2.2" />
              <path d="M7 1v2M7 11v2M1 7h2M11 7h2M2.5 2.5l1.4 1.4M10.1 10.1l1.4 1.4M2.5 11.5l1.4-1.4M10.1 3.9l1.4-1.4" />
            </svg>
            est. MMXXV
          </span>

          <h1 className="hero__title">
            <span className="reveal"><span>Spreading&nbsp;</span></span><br />
            <span className="reveal"><span><em>God&apos;s&nbsp;Love</em></span></span><br />
            <span className="reveal"><span>through&nbsp;</span></span><span className="reveal"><span>Technology.</span></span>
          </h1>

          <p className="hero__lede">
            Agape Labs is a Christian tech startup committed to stewarding the latest technologies in such a way that the hearts of God&apos;s people would be stirred to love Him and His people more.
          </p>

          <div className="hero__cta-row">
            <a className="btn btn--primary" href="#apps">
              See what we&apos;re building
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#vision">Read the vision</a>
          </div>
        </div>

        <div className="hero__meta">
          <span>N 52.4093° · W 1.5115° · Coventry, UK</span>
          <blockquote className="verse">
            &ldquo;A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another.&rdquo;
            <cite>John 13:34 ESV</cite>
          </blockquote>
        </div>
      </header>

      {/* ─── VISION ────────────────────────────────────────────────── */}
      <section className="section vision" id="vision">
        <div className="reveal-up">
          <div className="section__label"><span>I</span> <span>The Vision</span></div>
          <h2 className="section__title">
            Tech that helps us <em>love </em> like <em>Christ.</em>
          </h2>
          <p className="section__sub">
            In Jesus&apos; own words, we are to be &lsquo;light of the world&rsquo; and &lsquo;salt of the earth&rsquo;. But do the latest technologies lead us in that direction? Sadly, this is often not the case. While God is sovereign and can still bring about His good plans through secular platforms, many of these at their core are designed to stir us up to consume more, yearn for that which we don&apos;t have, and resent those who do.
          </p>
          <p className="section__sub">
            That is why Agape Labs wants to pursue a more excellent path. Instead of ...Agape has at its core aim the love of God and neighbour. Agape&apos;s own name comes from Jesus&apos; words in in John 13:34...
           
          </p>
        </div>

        <div className="vision__grid">
          <div className="vision__pillar reveal-up" data-delay="1">
            <span className="pillar-num">01 / 04</span>
            <h3>Built <em>reverently.</em></h3>
            <p>
              We treat every screen, every word, every animation as something a believer might
              encounter on their knees. Our craft is liturgical — slowed down on purpose, ordered
              toward worship rather than attention.
            </p>
          </div>

          <div className="vision__pillar reveal-up" data-delay="2">
            <span className="pillar-num">02 / 04</span>
            <h3>Rooted in <em>Scripture.</em></h3>
            <p>
              The Word is the lens, never the accent. Every product we ship begins with the
              question: does this help a believer love God with their mind, soul, and strength —
              and their neighbour as themselves?
            </p>
          </div>

          <hr className="pillar-divider" />

          <div className="vision__pillar reveal-up" data-delay="3">
            <span className="pillar-num">03 / 04</span>
            <h3>Made for the <em>global</em> Church.</h3>
            <p>
              From a upper room prayer meeting in Lagos to a university chaplaincy in Seoul —
              our tools are for the whole body of Christ. We design for the smallest screen, the
              slowest connection, and the most beloved saint.
            </p>
          </div>

          <div className="vision__pillar reveal-up" data-delay="4">
            <span className="pillar-num">04 / 04</span>
            <h3>Held with <em>open hands.</em></h3>
            <p>
              Nothing here is ours. The ideas, the time, the gifts — all entrusted. We try to ship
              with that lightness: ready to give freely, ready to lay things down, ready to be
              wrong and corrected by the people we serve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ───────────────────────────────────────────────── */}
      <div className="divider-mark" aria-hidden="true">
        <span className="line"></span>
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M9 1v16M1 9h16M3 3l12 12M15 3 3 15" />
        </svg>
        <span className="line"></span>
      </div>

      {/* ─── APPS ──────────────────────────────────────────────────── */}
      <section className="apps" id="apps">
        <div className="apps__inner">
          <div className="apps__head">
            <div className="reveal-up">
              <div className="section__label"><span>II</span> <span>The Workshop</span></div>
              <h2 className="section__title">
                Many apps. One <em> purpose. </em>
              </h2>
            </div>
            <p className="section__sub reveal-up" data-delay="1">
              Each product begins as a small, slow question and ends as a shipped tool. We don&apos;t
              chase categories — we chase faithfulness, screen by screen, sprint by sprint.
            </p>
          </div>

          {/* Rhema */}
          <article className="app-card reveal-up">
            <div className="app-card__media app-card__media--photo" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/rhema.png" alt="" />
            </div>
            <div className="app-card__body">
              <span className="app-card__num">App 01 — Available now</span>
              <h3 className="app-card__name">Rhéma.</h3>
              <p className="app-card__tag">Scripture memory, the way Duolingo would do it.</p>
              <p className="app-card__desc">
                Short, adaptive sessions that turn the daily practice of memorising Scripture into
                something joyful and lasting. Streaks, spaced repetition, voice recall — all
                working quietly in the background so the verse stays in your bones.
              </p>
              <ul className="app-card__features">
                <li>Spaced repetition</li>
                <li>Voice recall</li>
                <li>Daily plans</li>
                <li>iOS · Android</li>
              </ul>
              <a className="app-card__link" href="https://rhema-app.com" target="_blank" rel="noopener noreferrer">
                Visit rhema.app <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          {/* More apps coming */}
          <article className="app-card app-card--showcase reveal-up">
            <div className="coming-showcase">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="coming-icon coming-icon--live" src="/images/rhema_square.png" alt="Rhema" />
              <span className="coming-icon" style={{background: '#f8b533'}}></span>
              <span className="coming-icon" style={{background: '#f3a54e'}}></span>
              <span className="coming-icon" style={{background: '#f2956e'}}></span>
              <span className="coming-icon" style={{background: '#f2848e'}}></span>
              <span className="coming-icon" style={{background: '#f178a4'}}></span>
              <span className="coming-icon" style={{background: '#cf82b5'}}></span>
              <span className="coming-icon" style={{background: '#90b0c2'}}></span>
            </div>
            <p className="coming-showcase__label">More apps coming soon</p>
          </article>
        </div>
      </section>

      {/* ─── ABOUT / OUR STORY ─────────────────────────────────────── */}
      <section className="section about" id="story">
        <div className="reveal-up">
          <div className="section__label"><span>III</span> <span>Our Story</span></div>
        </div>

        <div className="about__quote-block reveal-up">
          <div className="about__avatar">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ceo.jpg" alt="Joshua Okusi" />
          </div>
          <blockquote className="about__blockquote">
            <p>
              Agape Labs represents a pivotal transition in my journey through life so far. A
              convergence between two streams of life, that I once treated as separate, becoming one.
              On one hand, growing up, I had a passion for technology and building things. During my
              time in university, this passion matured into a desire to build technology to more
              meaningfully connect people. On the other hand, there was my growing relationship with
              Christ.{' '}
              <a href="#" className="about__read-more">Read more</a>
            </p>
            <div className="about__full-text">
              <p>
                Initially, my being so new in the faith meant that I wasn&apos;t brave enough to
                allow these two streams to merge naturally — I carried the inherent belief from
                having followed the journeys of popular startups like Facebook or Instagram that to
                have true impact in people&apos;s lives, I had to build in the secular space. A
                couple startups and many lessons learned later, I realised the folly of such
                thinking. Sure, impact could be achieved in the secular space; there&apos;s millions
                of potential users, dozens of investors on the hunt for the next big thing, and
                there&apos;s that coveted unicorn status startup founders dream of reaching. But yet,
                one key question remains? What is the nature of that impact?
              </p>
              <p>
                I do not mean then to imply that all secular technology is bad, in fact many of the
                technologies Agape Labs is built upon are secular in nature, I just saw how more
                often than not, this secular focus was a veiled pursuit of the vanities of selfish
                ambition, above whatever supposed impact one desired to have.
              </p>
              <p>
                After having experienced some of this vanity for myself I came to the realisation
                that the kind of impact I was looking to have, the kind I used to shroud in terms
                like &ldquo;meaningful connection&rdquo;, was impossible apart from the love of
                Christ.
              </p>
              <p>
                I was busy trying to encourage secular people to love one another, without pointing
                them to He who loved us first. I was trying to connect people to another, without
                connecting them to He who is love Himself. It was in realising this, that these two
                streams that were once held apart collided together, and everything changed. It
                wasn&apos;t some eureka moment or sudden epiphany, but rather a journeying with
                Christ and learning from Him that He truly is the best thing I could ever share with
                anyone.
              </p>
              <p>
                So now, I see not my gifts and talents as means to make much of myself, but as much
                as I can, make much of Him and advance His Kingdom. I recognise the weight of these
                my words and desires, especially given that I still have so much to learn. My prayer
                is that as I continue on this journey, God would indeed grant these desires of my
                heart to the fullest as I delight in Him more and more, and that as a result, many
                would also come to know the unspeakable love and joy that Christ Jesus has shown me
                in Him.
              </p>
            </div>
            <footer>
              <strong>Joshua Okusi</strong>
              <span>Founder &amp; CEO, Agape Labs Ltd</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ─── BELIEFS ───────────────────────────────────────────────── */}
      <section className="section beliefs" id="beliefs">
        <div className="beliefs__head reveal-up">
          <div className="section__label"><span>IV</span> <span>What We Believe</span></div>
          <h2 className="section__title">
            A short, ancient <em>creed.</em>
          </h2>
          <p className="section__sub">
            We hold the historic Christian faith as confessed across centuries and continents. The
            following is not exhaustive — it is the soil our work grows in.
          </p>
        </div>

        <div className="beliefs__grid">
          <article className="belief reveal-up">
            <span className="belief__num">i.</span>
            <h3 className="belief__title">One God, <em>three Persons.</em></h3>
            <p className="belief__body">
              We worship one eternal God, existing in three Persons — Father, Son, and Holy
              Spirit — perfect in love, sovereign in power, and gracious in dealings with His
              creation.
            </p>
            <span className="belief__verse">
              &ldquo;Hear, O Israel: The Lord our God, the Lord is one.&rdquo;
              <cite>Deuteronomy 6:4</cite>
            </span>
          </article>

          <article className="belief reveal-up" data-delay="1">
            <span className="belief__num">ii.</span>
            <h3 className="belief__title">Scripture is the <em>breathed Word.</em></h3>
            <p className="belief__body">
              We hold the Bible — Old and New Testaments — as the inspired, inerrant, and
              sufficient Word of God, the supreme authority for faith, life, and the design of
              our work.
            </p>
            <span className="belief__verse">
              &ldquo;All Scripture is breathed out by God.&rdquo;
              <cite>2 Timothy 3:16</cite>
            </span>
          </article>

          <article className="belief reveal-up" data-delay="2">
            <span className="belief__num">iii.</span>
            <h3 className="belief__title">Jesus is <em>Lord</em> and Saviour.</h3>
            <p className="belief__body">
              Fully God and fully man, He lived a sinless life, died a sacrificial death, and rose
              bodily on the third day. By His grace alone, through faith alone, sinners are made
              new and reconciled to the Father.
            </p>
            <span className="belief__verse">
              &ldquo;I am the way, the truth, and the life.&rdquo;
              <cite>John 14:6</cite>
            </span>
          </article>

          <article className="belief reveal-up" data-delay="3">
            <span className="belief__num">iv.</span>
            <h3 className="belief__title">The Spirit <em>indwells</em> the believer.</h3>
            <p className="belief__body">
              The Holy Spirit regenerates, sanctifies, comforts, and empowers — leading the Church
              into all truth and producing the fruit of Christ-likeness in those who follow Him.
            </p>
            <span className="belief__verse">
              &ldquo;You will receive power when the Holy Spirit comes upon you.&rdquo;
              <cite>Acts 1:8</cite>
            </span>
          </article>

          <article className="belief reveal-up" data-delay="4">
            <span className="belief__num">v.</span>
            <h3 className="belief__title">The Church is <em>His body.</em></h3>
            <p className="belief__body">
              We are one family of believers — visible and invisible, gathered and scattered —
              called to love one another, make disciples of all nations, and serve a watching
              world with grace and truth.
            </p>
            <span className="belief__verse">
              &ldquo;By this everyone will know that you are my disciples.&rdquo;
              <cite>John 13:35</cite>
            </span>
          </article>

          <article className="belief reveal-up" data-delay="5">
            <span className="belief__num">vi.</span>
            <h3 className="belief__title">Christ <em>will return.</em></h3>
            <p className="belief__body">
              We live in the in-between — between resurrection and renewal — building today as
              those who expect the King tomorrow. Our work is not the kingdom, but it can carry
              its scent.
            </p>
            <span className="belief__verse">
              &ldquo;Behold, I am making all things new.&rdquo;
              <cite>Revelation 21:5</cite>
            </span>
          </article>
        </div>
      </section>

      {/* ─── COMMITMENT (AI / TECH SAFETY) ─────────────────────────── */}
      <section className="commitment" id="commitment">
        <div className="commitment__inner">
          <div className="reveal-up">
            <div className="section__label"><span>V</span> <span>Our Commitment</span></div>
            <h2 className="section__title">
              On the careful use of <em>technology &amp; AI.</em>
            </h2>
            <p className="section__sub">
              Powerful tools call for an even more careful posture. These are the commitments we
              hold ourselves to in everything we ship — particularly where machine learning,
              recommendation, or generative AI is involved.
            </p>
          </div>

          <div className="principles">
            <article className="principle reveal-up">
              <span className="principle__num">§ 01</span>
              <h3 className="principle__title">Scripture is <em>never replaced</em>.</h3>
              <p className="principle__body">
                No model, no summariser, no chatbot may stand in the place of the Word. Where AI
                appears in our products, it serves the reader&apos;s encounter with Scripture — it
                never paraphrases it as a substitute or claims authority it does not have.
              </p>
            </article>

            <article className="principle reveal-up" data-delay="1">
              <span className="principle__num">§ 02</span>
              <h3 className="principle__title">Pastors and community come <em>first</em>.</h3>
              <p className="principle__body">
                Software is a thin good. Embodied church, faithful pastors, and one-another love
                are the thick goods. Our tools point toward those — never away from them. We will
                not build features that quietly substitute the local church.
              </p>
            </article>

            <article className="principle reveal-up" data-delay="2">
              <span className="principle__num">§ 03</span>
              <h3 className="principle__title">Honest about what is <em>machine-made</em>.</h3>
              <p className="principle__body">
                Anything generated by a model is labelled as such, clearly and visibly. Users
                deserve to know when a response is a probability distribution and when it is a
                person — or the Person — speaking.
              </p>
            </article>

            <article className="principle reveal-up" data-delay="4">
              <span className="principle__num">§ 04</span>
              <h3 className="principle__title">Designed for <em>presence</em>, not attention.</h3>
              <p className="principle__body">
                We don&apos;t optimise for time-in-app, streak guilt, or notification anxiety. Where a
                feature would maximise engagement at the cost of formation, we cut it. The right
                session length is the one that ends in prayer.
              </p>
            </article>

            <article className="principle reveal-up" data-delay="5">
              <span className="principle__num">§ 05</span>
              <h3 className="principle__title">Stewards of <em>your data</em>.</h3>
              <p className="principle__body">
                Annotations, prayers, journal entries — what you write inside our apps is yours.
                We collect the minimum needed to make the product work, never sell it, and treat
                every record as if a brother or sister wrote it. Because they did.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────────── */}
      <section className="contact" id="contact">
        <div className="reveal-up">
          <p className="contact__pre">A short note —</p>
          <h2 className="contact__title">
            Walk with us, or just <em>write.</em>
          </h2>
          <p className="contact__sub">
            Whether you&apos;re a pastor, a developer, a designer, a curious sceptic, or a saint with a
            whisper of an idea — we&apos;d love to hear from you. Leave your email and we&apos;ll be in
            touch.
          </p>

          <form className="contact__form" id="contact-form" noValidate>
            <input type="email" required placeholder="your@email.com" aria-label="Email address" />
            <button type="submit">Send a note <span aria-hidden="true">→</span></button>
          </form>

          <p className="contact__alt">
            Or write to us directly at <a href="mailto:team@agapelabs.co.uk">team@agapelabs.co.uk</a>
          </p>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────────── */}
      <footer className="footer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="footer__logo" src="/images/agape-labs-logo-white.svg" alt="Agape Labs" />
        <div className="footer__verse">
          &ldquo;Soli Deo gloria.&rdquo;
          <cite>— our heart, our hope</cite>
        </div>
        <div className="footer__row">
          <span>© MMXXVI Agape Labs Ltd.</span>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>

      <AgapeWebClient />
    </>
  );
}
