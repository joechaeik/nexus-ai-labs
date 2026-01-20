import React, { useState } from 'react';
import { Cpu, Database, MessageSquare, LineChart, Send, CheckCircle } from 'lucide-react';

function App() {
  // 1. [기능] 상담 폼 상태 관리 (함수의 시작 부분에 위치해야 함)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 데이터:", formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 2. [데이터] 서비스 카드 정보
  const services = [
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      title: "Custom AI Agents",
      desc: "비즈니스 특성에 최적화된 맞춤형 AI 에이전트를 구축하여 고객 응대 및 내부 업무를 자동화합니다."
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: "Data Intelligence",
      desc: "흩어져 있는 사내 데이터를 통합 분석하여 의사결정을 돕는 강력한 데이터 인사이트를 제공합니다."
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      title: "LLM Fine-tuning",
      desc: "최신 거대언어모델을 귀사만의 고유한 지식 데이터를 학습시켜 독보적인 성능의 AI를 구현합니다."
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-400" />,
      title: "AI Strategy Consulting",
      desc: "AI 도입이 처음인 기업을 위해 비즈니스 모델 분석부터 실행 로드맵까지 전 과정을 컨설팅합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-50 font-sans antialiased selection:bg-blue-500/30">
      {/* --- 네비게이션 --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A192F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-500">
            NEXUS <span className="text-slate-50">AI</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-400">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/20">
            Contact Us
          </button>
        </div>
      </nav>

      {/* --- 히어로 섹션 --- */}
      <section className="relative pt-48 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-10 border border-blue-500/30 rounded-full bg-blue-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Version 4.0 Live</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.05]">
            Design the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Future</span><br />
            with Intelligence
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12">
            단순한 자동화를 넘어 지능형 비즈니스의 시대를 엽니다.
          </p>
        </div>
      </section>

      {/* --- 서비스 카드 섹션 --- */}
      <section id="services" className="py-32 px-6 bg-[#0B1E3B]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-black">Innovative Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2">
                <div className="mb-6 p-3 inline-block rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 상담 신청 섹션 (통합 완료) --- */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900/40 border border-white/5 p-8 md:p-16 rounded-3xl backdrop-blur-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-black mb-4">Start a Project</h2>
                  <p className="text-slate-400">전문가가 직접 답변해 드립니다.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="성함" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="이메일" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" />
                </div>
                <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" placeholder="문의 내용" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 focus:outline-none" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-xl transition-all flex items-center justify-center gap-2 group">
                  상담 신청하기 <Send className="w-5 h-5 group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <div className="text-center py-20 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                <h2 className="text-3xl font-black mb-4">신청 완료!</h2>
                <p className="text-slate-400">{formData.name}님, 곧 연락드리겠습니다.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- 푸터 --- */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© 2026 Nexus AI Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;