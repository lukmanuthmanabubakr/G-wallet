import { useState, useEffect } from "react";

const styles = {
  // NAV
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(4,9,15,0.92)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "0 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
    backdropFilter: "blur(12px)",
  },
  logo: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 900,
    fontSize: "1.35rem",
    letterSpacing: 1,
    color: "var(--white)",
  },
  logoSpan: { color: "var(--teal)" },
  navLinks: { display: "flex", gap: 32, alignItems: "center" },
  navLink: {
    color: "var(--muted)",
    fontSize: "0.875rem",
    fontWeight: 500,
    letterSpacing: "0.3px",
    transition: "color 0.15s",
  },
  navBtn: {
    background: "transparent",
    border: "1px solid var(--teal)",
    color: "var(--teal)",
    padding: "8px 20px",
    borderRadius: 4,
    fontSize: "0.85rem",
    fontWeight: 600,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    transition: "all 0.15s",
  },

  // SHARED
  section: { position: "relative", zIndex: 1, padding: "100px 5%" },
  sectionAlt: {
    position: "relative",
    zIndex: 1,
    padding: "100px 5%",
    background: "var(--bg2)",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  labelDash: { width: 24, height: 1, background: "var(--teal)" },
  sectionLabel: {
    fontSize: "0.7rem",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "var(--teal)",
    fontWeight: 600,
  },
  h2: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 900,
    letterSpacing: "-0.5px",
    textTransform: "uppercase",
    lineHeight: 1.05,
    marginBottom: 16,
  },
  secSub: {
    color: "var(--muted)",
    fontSize: "1rem",
    maxWidth: 520,
    fontWeight: 300,
    marginBottom: 56,
    lineHeight: 1.7,
  },

  // HERO
  hero: {
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    padding: "80px 5% 60px",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
  },
  heroBg: {
    position: "absolute",
    width: 800,
    height: 800,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,100,160,0.12) 0%, transparent 65%)",
    top: -200,
    right: -200,
    pointerEvents: "none",
  },
  heroBg2: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,200,188,0.07) 0%, transparent 65%)",
    bottom: -100,
    left: "5%",
    pointerEvents: "none",
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontSize: "0.72rem",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "var(--teal)",
    fontWeight: 600,
    marginBottom: 24,
  },
  eyebrowLine: { width: 32, height: 1, background: "var(--teal)" },
  h1: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
    fontWeight: 900,
    lineHeight: 0.95,
    letterSpacing: -1,
    textTransform: "uppercase",
    marginBottom: 28,
  },
  heroBody: {
    fontSize: "1.05rem",
    color: "var(--muted)",
    lineHeight: 1.75,
    maxWidth: 500,
    marginBottom: 44,
    fontWeight: 300,
  },
  btnRow: { display: "flex", gap: 14, flexWrap: "wrap" },
  btnPrimary: {
    background: "var(--teal)",
    color: "var(--bg)",
    padding: "14px 32px",
    borderRadius: 4,
    fontWeight: 700,
    fontSize: "0.9rem",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    transition: "all 0.15s",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "none",
  },
  btnGhost: {
    background: "transparent",
    color: "var(--white)",
    padding: "14px 28px",
    borderRadius: 4,
    fontWeight: 500,
    fontSize: "0.9rem",
    border: "1px solid rgba(255,255,255,0.25)",
    transition: "all 0.15s",
  },
  statsRow: {
    display: "flex",
    gap: 0,
    marginTop: 64,
    borderTop: "1px solid rgba(255,255,255,0.06)",
    paddingTop: 40,
    flexWrap: "wrap",
  },
  stat: { paddingRight: 40, minWidth: 140 },
  statVal: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "2.4rem",
    fontWeight: 900,
    color: "var(--white)",
    lineHeight: 1,
    letterSpacing: "-0.5px",
  },
  statLabel: {
    fontSize: "0.72rem",
    color: "var(--muted)",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginTop: 6,
    fontWeight: 500,
  },

  // PROCESS
  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 1,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.06)",
  },
  processCard: {
    background: "var(--bg)",
    padding: "36px 28px",
    position: "relative",
    overflow: "hidden",
    transition: "background 0.2s",
  },
  stepTag: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "0.7rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 20,
    fontWeight: 600,
  },
  processH3: {
    fontSize: "0.95rem",
    fontWeight: 700,
    marginBottom: 10,
    color: "var(--white)",
  },
  processP: { fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 },
  stepNumBg: {
    position: "absolute",
    bottom: -10,
    right: 16,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "5rem",
    fontWeight: 900,
    color: "rgba(0,200,188,0.05)",
    lineHeight: 1,
    pointerEvents: "none",
  },

  // NODE TIERS
  nodesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16,
  },
  nodeCard: {
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 2,
    padding: "28px 20px",
    textAlign: "center",
    transition: "all 0.2s",
    background: "var(--bg3)",
  },
  nodeCardTop: {
    border: "1px solid var(--teal)",
    borderRadius: 2,
    padding: "28px 20px",
    textAlign: "center",
    transition: "all 0.2s",
    background: "rgba(0,200,188,0.04)",
  },
  badgeTop: {
    fontSize: "0.6rem",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    background: "var(--lime)",
    color: "#0a1c02",
    padding: "3px 8px",
    borderRadius: 2,
    fontWeight: 700,
    display: "inline-block",
    marginBottom: 12,
  },
  nodeTierLabel: {
    fontSize: "0.65rem",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 16,
    fontWeight: 600,
  },
  nodePrice: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "2rem",
    fontWeight: 900,
    color: "var(--white)",
    lineHeight: 1,
    marginBottom: 4,
  },
  nodeUsdt: {
    fontSize: "0.72rem",
    color: "var(--muted)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  nodeShare: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "var(--teal)",
    fontFamily: "'Barlow Condensed', sans-serif",
    marginBottom: 16,
    letterSpacing: "0.5px",
  },
  divider: {
    height: 1,
    background: "rgba(255,255,255,0.06)",
    marginBottom: 16,
  },
  nodeDesc: {
    fontSize: "0.75rem",
    color: "var(--muted)",
    lineHeight: 1.6,
    marginBottom: 20,
  },
  nodeLink: {
    display: "block",
    border: "1px solid rgba(255,255,255,0.06)",
    color: "var(--muted)",
    padding: 9,
    borderRadius: 2,
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.15s",
  },
  nodeLinkTop: {
    display: "block",
    border: "1px solid var(--teal)",
    color: "var(--teal)",
    padding: 9,
    borderRadius: 2,
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
    transition: "all 0.15s",
  },

  // REWARDS
  rewardsSplit: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 48,
    alignItems: "start",
    marginTop: 56,
  },
  rewardPanel: {
    background: "var(--bg3)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 2,
    padding: "40px 36px",
  },
  bigFig: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "5.5rem",
    fontWeight: 900,
    color: "var(--teal)",
    lineHeight: 1,
    marginBottom: 4,
  },
  bigSub: {
    fontSize: "0.72rem",
    color: "var(--muted)",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: 36,
  },
  dataRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "13px 0",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  dataKey: { fontSize: "0.82rem", color: "var(--muted)" },
  dataVal: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "var(--lime)",
    letterSpacing: "0.5px",
  },
  rewardList: { display: "flex", flexDirection: "column", gap: 28 },
  rewardItem: {
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
    paddingBottom: 28,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  riIndex: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 900,
    color: "rgba(0,200,188,0.25)",
    lineHeight: 1,
    paddingTop: 2,
    minWidth: 28,
  },
  riTitle: {
    fontSize: "0.92rem",
    fontWeight: 700,
    marginBottom: 6,
    color: "var(--white)",
  },
  riBody: { fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 },

  // GROWTH
  growthGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  },
  growthCard: {
    border: "1px solid rgba(255,255,255,0.06)",
    background: "var(--bg3)",
    padding: "28px 22px",
    textAlign: "center",
    borderRadius: 2,
    position: "relative",
  },
  growthYr: {
    fontSize: "0.68rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 14,
  },
  growthFig: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "2.2rem",
    fontWeight: 900,
    color: "var(--lime)",
    lineHeight: 1,
    marginBottom: 8,
  },
  growthDesc: { fontSize: "0.77rem", color: "var(--muted)", lineHeight: 1.55 },

  // URGENCY
  urgencyBlock: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60,
    alignItems: "center",
  },
  urgencyH: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
    fontWeight: 900,
    textTransform: "uppercase",
    lineHeight: 1.1,
    marginBottom: 14,
  },
  urgencyBody: {
    color: "var(--muted)",
    fontSize: "0.9rem",
    lineHeight: 1.7,
    marginBottom: 28,
  },
  inventoryList: { display: "flex", flexDirection: "column", gap: 10 },
  invRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 18px",
    border: "1px solid rgba(255,255,255,0.06)",
    background: "var(--bg3)",
  },
  invTier: { fontSize: "0.8rem", color: "var(--muted)" },
  invCount: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    letterSpacing: "0.5px",
  },

  // CTA
  ctaBlock: {
    textAlign: "center",
    padding: "120px 5%",
    background: "var(--bg2)",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    position: "relative",
    zIndex: 1,
  },
  ctaSub: {
    color: "var(--muted)",
    fontSize: "1rem",
    maxWidth: 440,
    margin: "0 auto 40px",
    lineHeight: 1.7,
    fontWeight: 300,
  },

  // FOOTER
  footer: {
    padding: "36px 5%",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
    position: "relative",
    zIndex: 1,
  },
  footerBrand: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 900,
    fontSize: "1rem",
    letterSpacing: 1,
    color: "var(--muted)",
  },
  footerNote: {
    fontSize: "0.72rem",
    color: "rgba(90,122,150,0.5)",
    maxWidth: 420,
    lineHeight: 1.5,
  },
};

const NODES = [
  {
    tier: "Entry",
    price: "$25",
    share: "15% Revenue",
    desc: "Entry point into the ecosystem with daily rewards from network transaction fees.",
    top: false,
  },
  {
    tier: "Starter",
    price: "$78",
    share: "17.5% Revenue",
    desc: "Increased revenue participation as the network scales globally.",
    top: false,
  },
  {
    tier: "Pro",
    price: "$360",
    share: "20% Revenue",
    desc: "Substantial revenue share for investors building long-term passive income.",
    top: false,
  },
  {
    tier: "Premium",
    price: "$1,350",
    share: "22.5% Revenue",
    desc: "High-tier participation in one of the fastest growing wallets in the stablecoin space.",
    top: false,
  },
  {
    tier: "Master",
    price: "$6,750",
    share: "25% Revenue",
    desc: "Maximum revenue share. Only 37 remaining in Round 3 before price increases.",
    top: true,
  },
];

const PROCESS = [
  {
    step: "Step 01",
    title: "Create Your Account",
    body: "Register on the G-Wallet platform. Setup takes under five minutes and your account is live immediately.",
  },
  {
    step: "Step 02",
    title: "Purchase a Node",
    body: "Select your tier. Entry starts at $25. Master Nodes carry the highest revenue share at 25%.",
  },
  {
    step: "Step 03",
    title: "Node Activates",
    body: "Your node goes live and begins earning from the 0.20% fee on every USDT transfer processed through the wallet.",
  },
  {
    step: "Step 04",
    title: "Collect Daily",
    body: "Rewards are distributed automatically every day to your wallet via NFT smart contracts. Withdraw anytime.",
  },
];

const REWARDS = [
  {
    index: "01",
    title: "Automated Daily Payouts",
    body: "NFT smart contracts distribute your share of fee revenue directly to your wallet every day, with no manual action required.",
  },
  {
    index: "02",
    title: "Three-Level Referral Program",
    body: "Earn TRX immediately when your referrals purchase nodes. Master Node referral earns $1,012.50 at Level 1, $506.25 at Level 2, and $337.50 at Level 3.",
  },
  {
    index: "03",
    title: "Weekly Performance Bonus",
    body: "Sell 5 nodes to 5 different participants within a single week and earn an additional 5% on top of all standard commissions.",
  },
  {
    index: "04",
    title: "GTX Token Rewards",
    body: "Alongside TRX payouts, earn GTX Tokens redeemable for new nodes and platform features, with full utility launching in 2027.",
  },
];

const GROWTH = [
  {
    yr: "Year 1",
    fig: "$10M",
    desc: "Projected platform revenue as early adoption builds across global markets",
  },
  {
    yr: "Year 2",
    fig: "$62.5M",
    desc: "Accelerating adoption drives significant revenue growth across payment use cases",
  },
  {
    yr: "Year 5",
    fig: "$400M",
    desc: "Annual revenue potential as G-Wallet becomes established payment infrastructure",
  },
  {
    yr: "Year 7",
    fig: "$1B+",
    desc: "Capturing 20% of global Tether transaction volume annually",
  },
];

const INVENTORY = [
  { tier: "Entry Nodes Remaining", count: "13,091", heat: "normal" },
  { tier: "Starter Nodes Remaining", count: "2,318", heat: "normal" },
  { tier: "Pro Nodes Remaining", count: "490", heat: "warm" },
  { tier: "Premium Nodes Remaining", count: "127", heat: "warm" },
  { tier: "Master Nodes Remaining", count: "37", heat: "hot" },
];

// Replace this with your actual referral link
const REFERRAL_LINK = "https://app.gwalletnodes.net/referral/1015718";

function SectionLabel({ text }) {
  return (
    <div style={styles.labelRow}>
      <span style={styles.labelDash} />
      <span style={styles.sectionLabel}>{text}</span>
    </div>
  );
}

function Nav() {
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 900);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        G<span style={styles.logoSpan}>WALLET</span> NODES
      </div>
      {!mobile && (
        <div style={styles.navLinks}>
          {["#process", "#tiers", "#rewards", "#growth"].map((href, i) => (
            <a
              key={i}
              href={href}
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--muted)")}
            >
              {["Process", "Node Tiers", "Rewards", "Growth"][i]}
            </a>
          ))}
        </div>
      )}
      <button
        style={styles.navBtn}
        onMouseEnter={(e) => {
          e.target.style.background = "var(--teal)";
          e.target.style.color = "var(--bg)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "var(--teal)";
        }}
        onClick={() =>
          document.getElementById("cta").scrollIntoView({ behavior: "smooth" })
        }
      >
        Secure a Node
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroBg} />
      <div style={styles.heroBg2} />
      <div style={{ maxWidth: 700 }}>
        <div style={styles.eyebrow}>
          <span style={styles.eyebrowLine} />
          Round 3 — 37 Master Nodes Remaining
        </div>
        <h1 style={styles.h1}>
          Own the
          <br />
          <span style={{ color: "var(--teal)", display: "block" }}>
            Infrastructure.
          </span>
          Earn <span style={{ color: "var(--lime)" }}>Daily.</span>
        </h1>
        <p style={styles.heroBody}>
          G-Wallet Nodes are digital assets that generate daily passive income
          from transaction fees on the USDT Global Wallet network. No trading.
          No staking. Own a node, earn every day.
        </p>
        <div style={styles.btnRow}>
          <a
            href="#cta"
            style={styles.btnPrimary}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--teal2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--teal)")
            }
          >
            Secure Your Node →
          </a>
          <a
            href="#process"
            style={styles.btnGhost}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
            }
          >
            See How It Works
          </a>
        </div>
        <div style={styles.statsRow}>
          {[
            { val: "$6,750", label: "Master Node" },
            { val: "25%", label: "Revenue Share" },
            { val: "Daily", label: "Reward Payouts" },
            { val: "$1B+", label: "Year 7 Projection" },
          ].map((s, i) => (
            <div key={i} style={styles.stat}>
              <div style={styles.statVal}>{s.val}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={styles.section} id="process">
      <SectionLabel text="How It Works" />
      <h2 style={styles.h2}>
        Four Steps to
        <br />
        Passive Income
      </h2>
      <p style={styles.secSub}>
        From account creation to daily rewards, the process is straightforward.
      </p>
      <div
        style={{
          ...styles.processGrid,
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        }}
      >
        {PROCESS.map((p, i) => (
          <div
            key={i}
            style={styles.processCard}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--bg3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--bg)")
            }
          >
            <div style={styles.stepTag}>{p.step}</div>
            <h3 style={styles.processH3}>{p.title}</h3>
            <p style={styles.processP}>{p.body}</p>
            <div style={styles.stepNumBg}>0{i + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function NodeTiers() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={styles.sectionAlt} id="tiers">
      <SectionLabel text="Node Tiers" />
      <h2 style={styles.h2}>
        Choose Your
        <br />
        Entry Point
      </h2>
      <p style={styles.secSub}>
        Five tiers built for every investment level. All prices are Round 3.
        Prices increase each round.
      </p>
      <div
        style={{
          ...styles.nodesGrid,
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
        }}
      >
        {NODES.map((n, i) => (
          <div
            key={i}
            style={n.top ? styles.nodeCardTop : styles.nodeCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "rgba(0,200,188,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.borderColor = n.top
                ? "var(--teal)"
                : "rgba(255,255,255,0.06)";
            }}
          >
            {n.top && <div style={styles.badgeTop}>Best Value</div>}
            <div style={styles.nodeTierLabel}>{n.tier}</div>
            <div style={styles.nodePrice}>{n.price}</div>
            <div style={styles.nodeUsdt}>USDT</div>
            <div style={styles.nodeShare}>{n.share}</div>
            <div style={styles.divider} />
            <div style={styles.nodeDesc}>{n.desc}</div>
            <a
              href="#cta"
              style={n.top ? styles.nodeLinkTop : styles.nodeLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--teal)";
                e.currentTarget.style.color = "var(--bg)";
                e.currentTarget.style.borderColor = "var(--teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = n.top
                  ? "var(--teal)"
                  : "var(--muted)";
                e.currentTarget.style.borderColor = n.top
                  ? "var(--teal)"
                  : "rgba(255,255,255,0.06)";
              }}
            >
              {n.top ? "Secure Node" : "Get Node"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Rewards() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={styles.section} id="rewards">
      <SectionLabel text="Passive Income" />
      <h2 style={styles.h2}>
        Real Rewards.
        <br />
        Automated Daily.
      </h2>
      <div
        style={{
          ...styles.rewardsSplit,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        <div style={styles.rewardPanel}>
          <div style={styles.bigFig}>0.20%</div>
          <div style={styles.bigSub}>Per Transaction Fee</div>
          {[
            ["Master Node Revenue Share", "25%"],
            ["Payout Frequency", "Daily"],
            ["Payout Currency", "TRX"],
            ["Referral Commission L1", "$1,012.50"],
            ["Referral Commission L2", "$506.25"],
            ["Weekly Performance Bonus", "+5%"],
          ].map(([k, v], i) => (
            <div
              key={i}
              style={{
                ...styles.dataRow,
                borderBottom:
                  i === 5 ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={styles.dataKey}>{k}</span>
              <span style={styles.dataVal}>{v}</span>
            </div>
          ))}
        </div>
        <div style={styles.rewardList}>
          {REWARDS.map((r, i) => (
            <div
              key={i}
              style={{
                ...styles.rewardItem,
                borderBottom:
                  i === REWARDS.length - 1
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",
                paddingBottom: i === REWARDS.length - 1 ? 0 : 28,
              }}
            >
              <div style={styles.riIndex}>{r.index}</div>
              <div>
                <div style={styles.riTitle}>{r.title}</div>
                <p style={styles.riBody}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Growth() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={styles.sectionAlt} id="growth">
      <SectionLabel text="Growth Trajectory" />
      <h2 style={styles.h2}>
        Built for
        <br />
        Long-Term Value
      </h2>
      <p style={styles.secSub}>
        Stablecoins processed $8.5 trillion in transactions by mid-2024, more
        than double Visa's volume. G-Wallet is positioned to capture a material
        share of that market.
      </p>
      <div
        style={{
          ...styles.growthGrid,
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
        }}
      >
        {GROWTH.map((g, i) => (
          <div key={i} style={styles.growthCard}>
            <div style={styles.growthYr}>{g.yr}</div>
            <div style={styles.growthFig}>{g.fig}</div>
            <div style={styles.growthDesc}>{g.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Urgency() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const h = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.urgencyBlock,
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        <div>
          <SectionLabel text="Round 3 Supply" />
          <h3 style={styles.urgencyH}>
            Round 3 Is
            <br />
            <span style={{ color: "var(--teal)" }}>Closing Out.</span>
            <br />
            Price Rises Next.
          </h3>
          <p style={styles.urgencyBody}>
            G-Wallet uses dynamic round-based pricing. Every node sold moves the
            floor price closer to Round 4, which opens at a higher base. Buying
            now locks in the lowest available price before the round closes.
          </p>
          <a
            href="#cta"
            style={styles.btnPrimary}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--teal2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--teal)")
            }
          >
            Lock In Round 3 Pricing →
          </a>
        </div>
        <div style={styles.inventoryList}>
          {INVENTORY.map((inv, i) => (
            <div key={i} style={styles.invRow}>
              <span style={styles.invTier}>{inv.tier}</span>
              <span
                style={{
                  ...styles.invCount,
                  color:
                    inv.heat === "hot"
                      ? "#ff6040"
                      : inv.heat === "warm"
                        ? "var(--lime)"
                        : "var(--white)",
                }}
              >
                {inv.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={styles.ctaBlock} id="cta">
      <SectionLabel text="Get Started" />
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}
      >
        <h2 style={{ ...styles.h2, textAlign: "center" }}>
          The Infrastructure
          <br />
          Is Being Built Now.
        </h2>
      </div>
      <p style={styles.ctaSub}>
        Own a node. Earn daily. Be part of the payment infrastructure powering
        the next generation of digital finance. Round 3 spots will not return at
        this price.
      </p>
      <div style={{ ...styles.btnRow, justifyContent: "center" }}>
        <a
          href={REFERRAL_LINK}
          target="_blank"
          style={{
            ...styles.btnPrimary,
            fontSize: "1rem",
            padding: "16px 40px",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--teal2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--teal)")
          }
        >
          Secure Your G-Wallet Node →
        </a>
        <a
          href="https://app.gwalletnodes.net/"
          target="_blank"
          style={{ ...styles.btnGhost, fontSize: "1rem", padding: "16px 32px" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
          }
        >
          Visit Platform
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerBrand}>
        G<span style={{ color: "var(--teal)" }}>WALLET</span> NODES
      </div>
      <div style={styles.footerNote}>
        This page does not constitute financial advice. Cryptocurrency
        investments carry risk. All projections are forward-looking and not
        guaranteed. Conduct your own due diligence before investing.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Process />
      <NodeTiers />
      <Rewards />
      <Growth />
      <Urgency />
      <CTA />
      <Footer />
    </>
  );
}
