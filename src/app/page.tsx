import Image from "next/image";
import { event } from "@/data/event";

// Date helpers live near the page because they only affect presentation here.
function isRegistrationClosed(deadline: string) {
  return new Date() > new Date(deadline);
}

function formatDeadline(deadline: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Seoul",
  }).format(new Date(deadline));
}

// Section title keeps every section aligned with the same visual rhythm.
function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-extrabold text-mint">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate">{description}</p> : null}
    </div>
  );
}

// Small reusable button component keeps the CTA styles consistent.
function ActionLink({
  href,
  children,
  variant = "primary",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  download?: boolean;
}) {
  const styles = {
    primary: "bg-ink text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#223044]",
    secondary: "bg-mint text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#118372]",
    quiet: "bg-white text-ink ring-1 ring-black/10 hover:-translate-y-0.5 hover:ring-black/20",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-lg px-5 py-3 text-sm font-extrabold transition ${styles[variant]}`}
      href={href}
      download={download}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const closed = isRegistrationClosed(event.registrationDeadline);
  const deadlineText = formatDeadline(event.registrationDeadline);

  return (
    <main className="bg-paper">
      {/* Sticky navigation gives users quick access to every required section. */}
      <nav className="sticky top-0 z-40 border-b border-black/8 bg-white/92 text-ink shadow-[0_1px_18px_rgba(15,23,42,0.04)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a className="text-xl font-black tracking-normal text-ink sm:text-2xl" href="#hero">
            APBL 2026
          </a>
          <div className="hidden items-center gap-7 text-[15px] font-extrabold text-ink md:flex">
            <a className="hover:text-mint" href="#intro">
              소개
            </a>
            <a className="hover:text-mint" href="#schedule">
              일정
            </a>
            <a className="hover:text-mint" href="#theme">
              주제
            </a>
            <a className="hover:text-mint" href="#faq">
              FAQ
            </a>
          </div>
          <ActionLink href={closed ? "#deadline" : event.applicationUrl} variant={closed ? "quiet" : "secondary"}>
            {closed ? "접수마감" : "신청하기"}
          </ActionLink>
        </div>
      </nav>

      {/* Hero section: bright editorial image with text and deadline stacked on the same left grid line. */}
      <section id="hero" className="relative overflow-hidden bg-[#eef9f5]">
        <Image
          src={event.heroImage}
          alt="대구 관광 빅데이터 해커톤을 표현한 밝은 대학 행사 이미지"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.91)_34%,rgba(255,255,255,0.52)_62%,rgba(255,255,255,0.12)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl flex-col justify-center px-5 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold text-mint shadow-sm ring-1 ring-mint/15">
              {event.organizer} · {event.subtitle}
            </p>
            <h1 className="mt-7 text-[42px] font-black leading-[1.08] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              대구 관광의 다음 장면을 데이터로 설계하세요
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-slate sm:text-xl">
              {event.introduction}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink href={closed ? "#deadline" : event.applicationUrl} variant="secondary">
                {closed ? "접수마감" : "신청하기"}
              </ActionLink>
              <ActionLink href={event.applicationFormUrl} variant="quiet" download>
                신청서 다운로드
              </ActionLink>
              <ActionLink href={`mailto:${event.contactEmail}`} variant="quiet">
                이메일 문의
              </ActionLink>
            </div>
          </div>

          <div
            id="deadline"
            className="mt-10 grid max-w-3xl gap-4 rounded-2xl border border-black/8 bg-white/94 p-5 shadow-soft backdrop-blur sm:grid-cols-[1fr_auto] sm:items-center sm:p-6"
          >
            <div>
              <p className="text-sm font-extrabold text-mint">접수마감 정보</p>
              <p className="mt-2 text-2xl font-black text-ink">{closed ? "접수마감" : "현재 모집 중"}</p>
              <p className="mt-2 text-base leading-7 text-slate">마감: {deadlineText}</p>
            </div>
            <div className="rounded-xl bg-[#effaf6] px-4 py-3 text-left sm:text-right">
              <p className="text-sm font-extrabold text-mint">최종 선발</p>
              <p className="mt-1 text-lg font-black text-ink">
                {event.capacity} · {event.teamSize}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section summarizes why the program exists. */}
      <section id="intro" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="행사 소개"
            title="지역 문제를 발견하고, 관광 데이터로 검증하는 실전 프로젝트"
            description="선발된 10개 팀은 전문가 멘토링과 팀별 활동 지원을 바탕으로 아이디어를 구체화합니다. 단순 공모가 아니라, 데이터 기반 제안을 발표까지 완성해보는 집중 성장형 프로그램입니다."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["운영기간", event.period],
              ["행사장소", event.location],
              ["선발규모", `${event.capacity} · ${event.teamSize}`],
            ].map(([label, value]) => (
              <div className="min-h-36 rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5" key={label}>
                <p className="text-sm font-extrabold text-mint">{label}</p>
                <p className="mt-4 text-xl font-black leading-8 text-ink">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule cards use the ordered timeline from src/data/event.ts. */}
      <section id="schedule" className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="일정" title="모집부터 본선 발표까지" />
          <div className="mt-10 grid gap-4">
            {event.schedule.map((item, index) => (
              <article
                className="grid gap-5 rounded-2xl border border-black/8 bg-white p-6 shadow-card md:grid-cols-[88px_1fr]"
                key={item.title}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#effaf6] text-xl font-black text-mint">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-black leading-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm font-extrabold text-coral">
                    {item.date}
                    {item.time ? ` · ${item.time}` : ""}
                  </p>
                  <p className="mt-4 break-keep text-base leading-8 text-slate">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Target, theme, and data are grouped because applicants scan these together. */}
      <section id="theme" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="참가 정보" title="누가, 어떤 주제로, 어떤 데이터를 활용하나요?" />
          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <p className="text-sm font-extrabold text-mint">모집대상</p>
              <ul className="mt-5 space-y-4">
                {event.target.map((item) => (
                  <li className="flex gap-3 break-keep text-base leading-7 text-slate" key={item}>
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-mint" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-ink p-7 text-white shadow-soft">
              <p className="text-sm font-extrabold text-[#7ae1cd]">대회 주제</p>
              <h2 className="mt-5 break-keep text-3xl font-black leading-[1.35]">{event.theme}</h2>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5">
              <p className="text-sm font-extrabold text-mint">활용 데이터</p>
              <ul className="mt-5 space-y-3">
                {event.dataSources.map((item) => (
                  <li className="border-b border-black/8 pb-3 text-sm leading-6 text-slate last:border-b-0" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prize section mirrors the PDF award budget in applicant-friendly language. */}
      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="시상품" title="총 시상금 710만원" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {event.prizes.map((prize) => (
              <article className="rounded-2xl border border-black/8 bg-white p-6 shadow-card" key={prize.name}>
                <p className="text-xl font-black text-ink">{prize.name}</p>
                <p className="mt-5 text-4xl font-black text-mint">{prize.amount}</p>
                <p className="mt-3 text-sm font-extrabold text-slate">{prize.count}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ uses native details/summary for simple accessible accordion behavior. */}
      <section id="faq" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
          <div className="mt-10 space-y-3">
            {event.faqs.map((faq) => (
              <details className="group rounded-2xl bg-white p-6 shadow-card ring-1 ring-black/5" key={faq.question}>
                <summary className="cursor-pointer list-none text-lg font-black leading-7 text-ink">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-mint transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 break-keep text-base leading-8 text-slate">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Application section repeats the core actions near the bottom for conversion. */}
      <section id="apply" className="bg-[#e8f8f3] px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-sm font-extrabold text-mint">신청 방법</p>
            <h2 className="mt-3 break-keep text-3xl font-black leading-tight text-ink sm:text-4xl">
              선발 기회를 놓치지 않도록 신청서를 먼저 제출하세요
            </h2>
            <p className="mt-5 max-w-2xl break-keep text-base leading-8 text-slate">
              신청서를 다운로드해 작성한 뒤 {event.contactEmail}으로 제출하세요. 제출 자료를 바탕으로 전문 심사위원
              4인이 최종 10개 팀을 선발하며, 선발 팀에는 멘토링과 본선 발표 준비 과정이 제공됩니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ActionLink href={closed ? "#deadline" : event.applicationUrl} variant="secondary">
              {closed ? "접수마감" : "신청하기"}
            </ActionLink>
            <ActionLink href={event.applicationFormUrl} variant="quiet" download>
              신청서 다운로드
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Footer keeps contact details and organizer information in one place. */}
      <footer className="bg-ink px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black">
              {event.title} · {event.subtitle}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              주최 {event.organizer} · 운영 {event.operator}
            </p>
            <p className="mt-1 text-sm leading-6 text-white/65">
              해커톤 운영사무국 {event.contactPhone} · 운영시간 {event.officeHours}
            </p>
          </div>
          <a className="text-sm font-extrabold text-white underline underline-offset-4" href={`mailto:${event.contactEmail}`}>
            {event.contactEmail}
          </a>
        </div>
      </footer>
    </main>
  );
}
