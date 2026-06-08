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

// Small reusable button component keeps the CTA styles consistent.
function ActionLink({
  href,
  children,
  variant = "primary",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
}) {
  const styles = {
    primary: "bg-coral text-white hover:bg-[#d95439]",
    secondary: "bg-ink text-white hover:bg-[#2a3541]",
    ghost: "bg-white/90 text-ink ring-1 ring-ink/10 hover:bg-white",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]}`}
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
    <main>
      {/* Sticky navigation gives users quick access to every required section. */}
      <nav className="sticky top-0 z-40 border-b border-black/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a className="text-sm font-black tracking-wide text-ink" href="#hero">
            APBL 2026
          </a>
          <div className="hidden items-center gap-5 text-xs font-bold text-ink/70 md:flex">
            <a href="#intro">소개</a>
            <a href="#schedule">일정</a>
            <a href="#theme">주제</a>
            <a href="#faq">FAQ</a>
          </div>
          <ActionLink href={closed ? "#deadline" : event.applicationUrl} variant={closed ? "secondary" : "primary"}>
            {closed ? "접수마감" : "신청하기"}
          </ActionLink>
        </div>
      </nav>

      {/* Hero section: the generated bitmap image is stored in public/images. */}
      <section id="hero" className="relative overflow-hidden bg-ink text-white">
        <Image
          src={event.heroImage}
          alt="대구 관광 빅데이터 해커톤을 표현한 히어로 이미지"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/20" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl content-center gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-white/12 px-3 py-2 text-xs font-bold ring-1 ring-white/20">
              {event.organizer} · {event.subtitle}
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              대구 관광의 다음 장면을 데이터로 설계하세요
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">{event.introduction}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={closed ? "#deadline" : event.applicationUrl}>{closed ? "접수마감" : "신청하기"}</ActionLink>
              <ActionLink href={event.applicationFormUrl} variant="ghost" download>
                신청서 다운로드
              </ActionLink>
              <ActionLink href={`mailto:${event.contactEmail}`} variant="ghost">
                이메일 문의
              </ActionLink>
            </div>
          </div>
          <div id="deadline" className="self-end rounded-md bg-white p-5 text-ink shadow-soft">
            <p className="text-xs font-black text-coral">접수마감 정보</p>
            <p className="mt-3 text-2xl font-black">{closed ? "접수마감" : "모집 중"}</p>
            <p className="mt-2 text-sm leading-6 text-ink/70">마감: {deadlineText}</p>
            <p className="mt-4 rounded-md bg-mint/10 px-3 py-2 text-sm font-bold text-mint">
              최종 선발 {event.capacity} · {event.teamSize}
            </p>
          </div>
        </div>
      </section>

      {/* Intro section summarizes why the program exists. */}
      <section id="intro" className="bg-paper px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black text-coral">행사 소개</p>
            <h2 className="mt-3 text-3xl font-black">지역 문제를 발견하고, 관광 데이터로 검증하는 실전 프로젝트</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["운영기간", event.period],
              ["장소", event.location],
              ["선발규모", `${event.capacity} · ${event.teamSize}`],
            ].map(([label, value]) => (
              <div className="rounded-md bg-white p-5 shadow-sm" key={label}>
                <p className="text-xs font-black text-ink/50">{label}</p>
                <p className="mt-3 text-lg font-black leading-7">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule cards use the ordered timeline from src/data/event.ts. */}
      <section id="schedule" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black text-coral">일정</p>
          <h2 className="mt-3 text-3xl font-black">모집부터 본선 발표까지</h2>
          <div className="mt-8 grid gap-4">
            {event.schedule.map((item, index) => (
              <article className="grid gap-4 rounded-md border border-black/10 p-5 md:grid-cols-[120px_1fr]" key={item.title}>
                <div className="text-3xl font-black text-mint">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm font-bold text-coral">
                    {item.date}
                    {item.time ? ` · ${item.time}` : ""}
                  </p>
                  <p className="mt-3 leading-7 text-ink/72">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Target, theme, and data are grouped because applicants scan these together. */}
      <section id="theme" className="bg-paper px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <div className="rounded-md bg-white p-6 shadow-sm">
            <p className="text-sm font-black text-coral">모집대상</p>
            <ul className="mt-5 space-y-3">
              {event.target.map((item) => (
                <li className="flex gap-3 text-sm leading-6" key={item}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md bg-ink p-6 text-white shadow-sm">
            <p className="text-sm font-black text-coral">대회 주제</p>
            <h2 className="mt-5 text-2xl font-black leading-9">{event.theme}</h2>
          </div>
          <div className="rounded-md bg-white p-6 shadow-sm">
            <p className="text-sm font-black text-coral">활용 데이터</p>
            <ul className="mt-5 space-y-3">
              {event.dataSources.map((item) => (
                <li className="border-b border-black/10 pb-3 text-sm leading-6 last:border-b-0" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Prize section mirrors the PDF award budget in applicant-friendly language. */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black text-coral">시상품</p>
          <h2 className="mt-3 text-3xl font-black">총 시상금 710만원</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {event.prizes.map((prize) => (
              <article className="rounded-md border border-black/10 p-6" key={prize.name}>
                <p className="text-xl font-black">{prize.name}</p>
                <p className="mt-4 text-3xl font-black text-mint">{prize.amount}</p>
                <p className="mt-2 text-sm font-bold text-ink/60">{prize.count}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ uses native details/summary for simple accessible accordion behavior. */}
      <section id="faq" className="bg-paper px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black text-coral">FAQ</p>
          <h2 className="mt-3 text-3xl font-black">자주 묻는 질문</h2>
          <div className="mt-8 space-y-3">
            {event.faqs.map((faq) => (
              <details className="rounded-md bg-white p-5 shadow-sm" key={faq.question}>
                <summary className="cursor-pointer text-lg font-black">{faq.question}</summary>
                <p className="mt-4 leading-7 text-ink/72">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Application section repeats the core actions near the bottom for conversion. */}
      <section id="apply" className="bg-mint px-5 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black text-white/80">신청 방법</p>
            <h2 className="mt-3 text-3xl font-black">신청서를 작성해 온라인 접수로 제출하세요</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/85">
              신청서를 다운로드해 작성한 뒤 {event.contactEmail}으로 제출하세요. 신청서와 사전 자료를 바탕으로 전문 심사위원
              4인이 적합도를 심사하며, 최종 참여 팀은 개별 안내됩니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ActionLink href={closed ? "#deadline" : event.applicationUrl} variant="secondary">
              {closed ? "접수마감" : "신청하기"}
            </ActionLink>
            <ActionLink href={event.applicationFormUrl} variant="ghost" download>
              신청서 다운로드
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Footer keeps contact details and organizer information in one place. */}
      <footer className="bg-ink px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black">
              {event.title} · {event.subtitle}
            </p>
            <p className="mt-2 text-sm text-white/65">
              주최 {event.organizer} · 운영 {event.operator}
            </p>
            <p className="mt-2 text-sm text-white/65">
              해커톤 운영사무국 {event.contactPhone} · 운영시간 {event.officeHours}
            </p>
          </div>
          <a className="text-sm font-bold text-white underline underline-offset-4" href={`mailto:${event.contactEmail}`}>
            {event.contactEmail}
          </a>
        </div>
      </footer>
    </main>
  );
}
