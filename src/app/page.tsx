import Image from "next/image";
import { event } from "@/data/event";

type ButtonVariant = "primary" | "secondary" | "ghost";

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

function getDaysLeft(deadline: string) {
  const diff = new Date(deadline).getTime() - new Date().getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

// Container keeps every section on one clean vertical grid.
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>;
}

// Section wraps spacing and background so page rhythm stays consistent.
function Section({
  id,
  children,
  tone = "light",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "light" | "white" | "blue";
}) {
  const tones = {
    light: "bg-paper",
    white: "bg-white",
    blue: "bg-[#eaf4ff]",
  };

  return (
    <section id={id} className={`${tones[tone]} py-20 sm:py-24`}>
      <Container>{children}</Container>
    </section>
  );
}

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
      <p className="text-sm font-extrabold text-sky">{eyebrow}</p>
      <h2 className="mt-3 break-keep text-[30px] font-black leading-tight tracking-normal text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 break-keep text-base leading-8 text-slate">{description}</p> : null}
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
}) {
  const styles: Record<ButtonVariant, string> = {
    primary: "bg-sky text-white shadow-button hover:-translate-y-0.5 hover:bg-[#1d6fd6]",
    secondary: "bg-white text-navy ring-1 ring-line shadow-sm hover:-translate-y-0.5 hover:bg-[#f4f9ff]",
    ghost: "bg-white text-ink ring-1 ring-line shadow-sm hover:-translate-y-0.5 hover:ring-sky/35",
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

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line bg-white/92 px-4 py-4 text-ink shadow-card backdrop-blur">
      <p className="text-xs font-extrabold text-sky">{label}</p>
      <p className="mt-1 break-keep text-lg font-black">{value}</p>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-h-36 rounded-lg border border-line bg-white p-6 shadow-card">
      <div className="mb-5 h-1 w-10 rounded-full bg-sky" />
      <p className="text-sm font-extrabold text-sky">{label}</p>
      <p className="mt-4 break-keep text-xl font-black leading-8 text-ink">{value}</p>
    </div>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-card">
      <div className="mb-5 h-1 w-10 rounded-full bg-sky" />
      <h3 className="break-keep text-xl font-black leading-7 text-ink">{title}</h3>
      <p className="mt-4 break-keep text-base leading-8 text-slate">{description}</p>
    </article>
  );
}

function TimelineCard({
  index,
  title,
  date,
  time,
  description,
}: {
  index: number;
  title: string;
  date: string;
  time?: string;
  description: string;
}) {
  return (
    <article className="grid gap-5 rounded-lg border border-line bg-white p-6 shadow-card md:grid-cols-[72px_1fr]">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#eef6ff] text-xl font-black text-sky">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="min-w-0">
        <h3 className="break-keep text-2xl font-black leading-tight text-ink">{title}</h3>
        <p className="mt-2 text-sm font-extrabold text-sky">
          {date}
          {time ? ` · ${time}` : ""}
        </p>
        <p className="mt-4 break-keep text-base leading-8 text-slate">{description}</p>
      </div>
    </article>
  );
}

function PrizeCard({ name, amount, count, featured = false }: { name: string; amount: string; count?: string; featured?: boolean }) {
  return (
    <article
      className={`rounded-lg border p-6 shadow-card ${
        featured ? "border-sky bg-[#f7fbff] text-ink ring-1 ring-sky/15" : "border-line bg-white text-ink"
      }`}
    >
      <div className={`mb-5 h-1 w-10 rounded-full ${featured ? "bg-sky" : "bg-[#c7d9ee]"}`} />
      <p className="text-sm font-extrabold text-sky">{count}</p>
      <h3 className="mt-3 text-xl font-black">{name}</h3>
      <p className="mt-5 text-4xl font-black text-sky">{amount}</p>
    </article>
  );
}

export default function Home() {
  const closed = isRegistrationClosed(event.registrationDeadline);
  const deadlineText = formatDeadline(event.registrationDeadline);
  const daysLeft = getDaysLeft(event.registrationDeadline);
  const applyLabel = closed ? "접수마감" : "신청하기";

  return (
    <main className="bg-paper">
      <nav className="sticky top-0 z-40 border-b border-line bg-white/95 text-ink shadow-[0_1px_20px_rgba(11,31,58,0.06)] backdrop-blur">
        <Container className="flex items-center justify-between gap-4 py-4">
          <a className="text-xl font-black tracking-normal text-ink sm:text-2xl" href="#hero">
            APBL 2026
          </a>
          <div className="hidden items-center gap-7 text-[15px] font-extrabold text-ink/82 md:flex">
            <a className="hover:text-sky" href="#intro">
              소개
            </a>
            <a className="hover:text-sky" href="#schedule">
              일정
            </a>
            <a className="hover:text-sky" href="#theme">
              주제
            </a>
            <a className="hover:text-sky" href="#faq">
              FAQ
            </a>
          </div>
          <ActionLink href={closed ? "#deadline" : event.applicationUrl}>{applyLabel}</ActionLink>
        </Container>
      </nav>

      <section id="hero" className="relative isolate overflow-hidden bg-[#eef6ff] text-ink">
        <Image
          src={event.heroImage}
          alt="대구 관광 빅데이터 해커톤을 표현한 대학 행사 이미지"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_43%,rgba(235,246,255,0.76)_68%,rgba(235,246,255,0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#eef6ff] to-transparent" />

        <Container className="relative flex min-h-[calc(100vh-76px)] flex-col justify-center py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-line bg-white/90 px-4 py-2 text-sm font-extrabold text-sky shadow-sm backdrop-blur">
              {event.organizer} · {event.subtitle}
            </p>
            <h1 className="mt-7 max-w-[860px] break-keep text-[42px] font-black leading-[1.08] tracking-normal sm:text-6xl lg:text-[76px]">
              대구 관광 데이터를 활용한 지역혁신 해커톤
            </h1>
            <p className="mt-7 max-w-2xl break-keep text-lg font-semibold leading-9 text-slate sm:text-xl">
              {event.introduction}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink href={closed ? "#deadline" : event.applicationUrl}>{applyLabel}</ActionLink>
              <ActionLink href={event.applicationFormUrl} variant="secondary" download>
                신청서 다운로드
              </ActionLink>
              <ActionLink href={`mailto:${event.contactEmail}`} variant="secondary">
                이메일 문의
              </ActionLink>
            </div>
            <div className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-3">
              {event.highlights.map((item) => (
                <MetricCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          <div
            id="deadline"
            className="mt-8 grid max-w-3xl gap-4 rounded-lg border border-line bg-white/96 p-5 text-ink shadow-soft backdrop-blur sm:grid-cols-[1fr_auto] sm:items-center sm:p-6"
          >
            <div>
              <p className="text-sm font-extrabold text-sky">접수마감 정보</p>
              <p className="mt-2 text-2xl font-black">{closed ? "접수마감" : "현재 모집 중"}</p>
              <p className="mt-2 text-base leading-7 text-slate">마감: {deadlineText}</p>
            </div>
            <div className="rounded-lg bg-[#eef6ff] px-4 py-3 text-left sm:text-right">
              <p className="text-sm font-extrabold text-sky">{closed ? "모집 상태" : "마감까지"}</p>
              <p className="mt-1 text-lg font-black text-ink">{closed ? "접수 종료" : `D-${daysLeft}`}</p>
            </div>
          </div>
        </Container>
      </section>

      <Section id="intro">
        <SectionHeading
          eyebrow="행사 소개"
          title="아이디어를 모집하는 공모전이 아니라, 결과물을 완성하는 2개월 프로젝트"
          description="선발된 10개 팀은 전문가 멘토링과 팀별 활동 지원을 바탕으로 대구 관광 아이디어를 실제 제안 가능한 수준까지 끌어올립니다."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["운영기간", event.period],
            ["행사장소", event.location],
            ["선발규모", `${event.capacity} · ${event.teamSize}`],
          ].map(([label, value]) => (
            <InfoCard key={label} label={label} value={value} />
          ))}
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {event.benefits.map((item) => (
            <BenefitCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>

      <Section id="schedule" tone="white">
        <SectionHeading eyebrow="일정" title="모집부터 본선 발표까지 한눈에 확인하세요" />
        <div className="mt-10 grid gap-4">
          {event.schedule.map((item, index) => (
            <TimelineCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </Section>

      <Section id="theme">
        <SectionHeading
          eyebrow="참가 정보"
          title="대구를 잘 아는 팀이라면, 데이터 경험이 많지 않아도 시작할 수 있습니다"
        />
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.1fr_0.95fr]">
          <div className="rounded-lg border border-line bg-white p-6 shadow-card">
            <div className="mb-5 h-1 w-10 rounded-full bg-sky" />
            <p className="text-sm font-extrabold text-sky">모집대상</p>
            <ul className="mt-5 space-y-4">
              {event.target.map((item) => (
                <li className="flex gap-3 break-keep text-base leading-7 text-slate" key={item}>
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-sky" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-navy p-7 text-white shadow-soft">
            <div className="mb-5 h-1 w-10 rounded-full bg-skySoft" />
            <p className="text-sm font-extrabold text-skySoft">대회 주제</p>
            <h2 className="mt-5 break-keep text-3xl font-black leading-[1.35]">{event.theme}</h2>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-card">
            <div className="mb-5 h-1 w-10 rounded-full bg-sky" />
            <p className="text-sm font-extrabold text-sky">활용 데이터</p>
            <ul className="mt-5 space-y-3">
              {event.dataSources.map((item) => (
                <li className="border-b border-line pb-3 text-sm leading-6 text-slate last:border-b-0" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="시상품" title="성과를 만든 팀에게 총 710만원을 시상합니다" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {event.prizes.map((prize, index) => (
            <PrizeCard key={prize.name} featured={index === 0} {...prize} />
          ))}
        </div>
      </Section>

      <Section id="faq">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
          <div className="mt-10 space-y-3">
            {event.faqs.map((faq) => (
              <details className="group rounded-lg border border-line bg-white p-6 shadow-card" key={faq.question}>
                <summary className="cursor-pointer list-none text-lg font-black leading-7 text-ink">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-sky transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 break-keep text-base leading-8 text-slate">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section id="apply" tone="blue">
        <div className="grid items-center gap-8 rounded-lg border border-sky/15 bg-white p-6 shadow-soft md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-sm font-extrabold text-sky">신청 방법</p>
            <h2 className="mt-3 break-keep text-3xl font-black leading-tight text-ink sm:text-4xl">
              팀이 정해졌다면, 신청서부터 먼저 제출하세요
            </h2>
            <p className="mt-5 max-w-2xl break-keep text-base leading-8 text-slate">
              최종 선발 규모는 10개 팀입니다. 신청서를 다운로드해 작성한 뒤 {event.contactEmail}으로 제출하세요.
              제출 자료를 바탕으로 전문 심사위원 4인이 선발하며, 선발 팀에는 멘토링과 본선 발표 준비 과정이 제공됩니다.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ActionLink href={closed ? "#deadline" : event.applicationUrl}>{applyLabel}</ActionLink>
            <ActionLink href={event.applicationFormUrl} variant="ghost" download>
              신청서 다운로드
            </ActionLink>
          </div>
        </div>
      </Section>

      <footer className="bg-navy px-5 py-10 text-white">
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
