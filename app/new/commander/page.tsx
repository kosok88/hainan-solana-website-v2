import React from "react";

const DATA = {
sections: [
{ title: "01 战略引擎", items: [{ n: "1.1 降维打击逻辑", s: "Ready" }, { n: "1.2 市场生态位", s: "Ready" }] },
{ title: "02 产品技术", items: [{ n: "2.2.2 MNRO决策引擎", s: "Ready" }, { n: "2.3 模块化底座", s: "Ready" }] }
]
};

export default function Page() {
return (
<div style={{ padding: "40px", fontFamily: "sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
<h1 style={{ borderBottom: "4px solid #000", pb: "10px", fontSize: "32px" }}>COMMANDER CONSOLE</h1>
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "40px" }}>
{DATA.sections.map((sec, i) => (
<div key={i}>
<h2 style={{ background: "#000", color: "#fff", padding: "5px 15px", display: "inline-block" }}>{sec.title}</h2>
{sec.items.map((it, j) => (
<div key={j} style={{ background: "#fff", border: "1px solid #ddd", padding: "15px", margin: "10px 0" }}>
<strong>{it.n}</strong> <span style={{ color: "green", fontSize: "12px" }}>[{it.s}]</span>
</div>
))}
</div>
))}
</div>
</div>
);
}
