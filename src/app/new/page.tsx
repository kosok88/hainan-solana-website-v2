import React from 'react';
import Link from 'next/link';

export default function InternalPreview() {
return (
<div style={{minHeight: '100vh', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'sans-serif'}}>
<div style={{border: '1px solid rgba(255,255,255,0.2)', padding: '3rem', borderRadius: '1.5rem', textAlign: 'center'}}>
<h2 style={{color: '#60a5fa', fontSize: '0.875rem', letterSpacing: '0.2em', marginBottom: '1rem'}}>INTERNAL PREVIEW / 内部预览</h2>
<h1 style={{fontSize: '2.25rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '2rem'}}>独角兽架构 1.0 启动中</h1>
<Link href="/new/commander">
<button style={{backgroundColor: '#2563eb', color: 'white', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 'bold', border: 'none', cursor: 'pointer'}}>
进入指挥官控制台
</button>
</Link>
</div>
</div>
);
}

第 3 个文件：指挥官审查控制台
创建路径： src/app/new/commander/page.tsx

(请复制下方文字)

import { DISRUPTOR_DATA } from '@/config/disruptor';

export default function CommanderView() {
return (
<div style={{minHeight: '100vh', backgroundColor: '#f1f5f9', padding: '2rem', color: '#0f172a', fontFamily: 'sans-serif'}}>
<div style={{maxWidth: '1100px', margin: '0 auto', borderBottom: '4px solid #0f172a', paddingBottom: '1.5rem', marginBottom: '3rem'}}>
<h1 style={{fontSize: '2.5rem', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase'}}>Commander Console</h1>
</div>

);
}
