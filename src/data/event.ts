// This file is the single source of truth for event content.
// Update dates, links, prizes, and FAQ here without touching page layout code.

export type TimelineItem = {
  title: string;
  date: string;
  time?: string;
  description: string;
};

export type Prize = {
  name: string;
  amount: string;
  count?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ApplyStep = {
  title: string;
  description: string;
};

export const event = {
  title: "APBL 프로젝트",
  subtitle: "빅데이터 기반 지역혁신 프로젝트",
  organizer: "경북대학교",
  operator: "주식회사 플랜에이치",
  location: "경북대학교 크리에이티브파크 세미나실",
  period: "2026.7.1.(수) ~ 8.28.(금)",
  // PDF에는 명시 마감일이 없어 예선 인원선발 전일을 기본 마감으로 두었습니다.
  registrationDeadline: "2026-06-30T23:59:59+09:00",
  capacity: "10개 팀",
  teamSize: "팀당 2~4인",
  // 작년 모집 페이지의 신청 흐름을 참고해 신청서 작성 후 이메일 제출 방식으로 연결했습니다.
  applicationUrl:
    "mailto:high3308@naver.com?subject=APBL%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%B0%B8%EA%B0%80%EC%8B%A0%EC%B2%AD",
  applicationFormUrl: "/downloads/apbl-application-form.txt",
  contactEmail: "high3308@naver.com",
  contactPhone: "000-000-0000",
  officeHours: "월~금 10:30~17:30",
  heroImage: "/images/apbl-hero.png",
  introduction:
    "선발된 10개 팀에게 총 시상금 710만원, 분야별 전문가 멘토링, 팀별 활동 지원을 제공합니다. 대구 관광의 문제를 데이터로 발견하고, 실제 제안 가능한 결과물까지 완성해 보세요.",
  highlights: [
    { label: "총 시상금", value: "710만원" },
    { label: "최종 선발", value: "10개 팀" },
    { label: "참가 방식", value: "2~4인 팀" },
    { label: "집중 멘토링", value: "기술·관광·비즈니스" },
  ],
  conversionPoints: [
    "데이터 분석 경험이 많지 않아도 시작할 수 있습니다",
    "선발팀은 멘토링과 발표 준비 과정을 지원받습니다",
    "결과물은 포트폴리오와 지역혁신 제안서로 활용할 수 있습니다",
  ],
  benefits: [
    {
      title: "데이터 초보도 실행 가능한 멘토링",
      description: "막연한 아이디어도 데이터 분석 방향, 관광 콘텐츠, 로컬 비즈니스 관점에서 전문가와 함께 다듬습니다.",
    },
    {
      title: "팀별 활동 지원과 발표 코칭",
      description: "회의 활동, 발표자료 제작, 스피치 준비까지 본선 발표에 필요한 과정을 단계적으로 지원합니다.",
    },
    {
      title: "대구 관광 문제를 직접 다루는 포트폴리오",
      description: "공공·민간 데이터를 활용해 지역 현안을 해결하는 경험을 만들고, 결과물을 발표까지 연결합니다.",
    },
  ],
  target: [
    "대구시에 주소를 둔 대학생 및 대학원생",
    "대구시에 주소를 둔 시민",
    "2~4인으로 구성된 팀",
    "데이터 분석, 관광 콘텐츠, 기획, 디자인, 개발, 로컬 비즈니스에 관심 있는 참가자",
  ],
  theme:
    "대구시 공공데이터를 비롯한 빅데이터를 활용하여 관광지로서 대구시의 매력을 돋보일 수 있는 참신한 아이디어 찾기",
  dataSources: [
    "관광지 소비 데이터(2021~2024, 신한카드)",
    "통신사 관광지 방문인구 데이터(2021~2025, SK텔레콤)",
    "맛집, 호텔, 명소 리뷰 데이터",
    "대구시 관광지 데이터(블로그, 카페)",
    "대구 관광 리뷰 데이터",
    "대구광역시 먹거리골목 업소정보",
    "문화체육관광 분야 시설 및 공간 데이터셋",
    "출처를 확인할 수 있는 기타 공공·민간 데이터",
  ],
  schedule: [
    {
      title: "대회 홍보 및 모집",
      date: "2026.6월 중",
      description: "참가신청서 접수와 예선 심사를 위한 사전 자료 확인",
    },
    {
      title: "예선 인원 선발",
      date: "2026.7.1.(수)",
      time: "13:00~16:00",
      description: "제출 서류 기반 적합도 심사 및 최종 참여 10개 팀 선발",
    },
    {
      title: "본선 KICK OFF",
      date: "2026.7.6.(월)",
      time: "10:00~15:00",
      description: "오리엔테이션, 로컬 전문가 특강, 팀별 토의 및 첫 멘토링",
    },
    {
      title: "사전활동 및 멘토링",
      date: "2026.7.6.(월) ~ 8.27.(목)",
      description: "팀별 회의 2회 이상, 분야별 전문가 멘토링, 발표자료 제작 준비",
    },
    {
      title: "본선 발표 및 시상",
      date: "2026.8.28.(금)",
      time: "11:00~17:00",
      description: "팀별 7분 발표, 5분 질의응답, 우수팀 시상 및 단체사진 촬영",
    },
  ] satisfies TimelineItem[],
  prizes: [
    { name: "대상", amount: "500만원", count: "1팀" },
    { name: "최우수상", amount: "100만원", count: "1팀" },
    { name: "우수상", amount: "50만원", count: "1팀" },
    { name: "장려상", amount: "30만원", count: "2팀" },
  ] satisfies Prize[],
  faqs: [
    {
      question: "데이터 분석 경험이 부족해도 참여할 수 있나요?",
      answer: "가능합니다. 데이터 분석 역량이 있으면 좋지만, 관광 콘텐츠 기획, 문제 발굴, 발표, 디자인, 개발 등 팀 안에서 기여할 수 있는 역할이 다양합니다. 선발 팀은 멘토링을 통해 분석 방향과 결과물 완성도를 함께 높입니다.",
    },
    {
      question: "개인으로 신청할 수 있나요?",
      answer: "공식 참가 단위는 2~4인 팀입니다. 개인 참가를 희망한다면 신청 전 운영사무국에 팀 구성 가능 여부를 문의해 주세요.",
    },
    {
      question: "최종 몇 팀이 참여하나요?",
      answer: "신청서 기반 예선 심사를 거쳐 최종 10개 팀만 선발합니다. 선발 팀은 멘토링과 발표 준비 과정을 집중적으로 지원받습니다.",
    },
    {
      question: "멘토링은 어떤 분야로 진행되나요?",
      answer: "기술, 관광 콘텐츠, 로컬관광 비즈니스 분야 전문가와 함께 데이터 분석 방향과 아이디어의 실현 가능성을 고도화합니다.",
    },
    {
      question: "본선 발표 형식은 어떻게 되나요?",
      answer: "팀별 7분 발표와 5분 질의응답으로 진행됩니다. 발표 전 멘토링과 자료 준비 과정을 통해 완성도를 높일 수 있습니다.",
    },
    {
      question: "신청할 때 무엇을 준비하면 되나요?",
      answer: "신청서를 다운로드해 팀 정보와 아이디어 방향을 작성한 뒤 이메일로 제출하면 됩니다. 완성된 기획안이 아니어도 괜찮으며, 선발 후 멘토링 과정에서 구체화할 수 있습니다.",
    },
  ] satisfies FaqItem[],
  applySteps: [
    {
      title: "팀 구성",
      description: "2~4인 팀으로 참여합니다. 역할은 기획, 데이터, 디자인, 개발 등 자유롭게 나눌 수 있습니다.",
    },
    {
      title: "신청서 작성",
      description: "신청서를 다운로드해 팀 정보와 아이디어 방향을 간단히 정리합니다.",
    },
    {
      title: "이메일 제출",
      description: "작성한 신청서를 high3308@naver.com으로 제출하면 접수됩니다.",
    },
  ] satisfies ApplyStep[],
};
