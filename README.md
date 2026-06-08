# APBL Hackathon Landing

Next.js + TypeScript + Tailwind CSS로 만든 해커톤 모집용 랜딩페이지입니다.

## 파일 구조

- `src/data/event.ts`: 행사명, 일정, 마감일, 링크, FAQ 등 모든 행사 데이터
- `src/app/page.tsx`: 랜딩페이지 화면 구성
- `src/app/layout.tsx`: 페이지 공통 레이아웃과 메타데이터
- `src/app/globals.css`: 전역 스타일과 Tailwind CSS 진입점
- `public/images/apbl-hero.png`: 히어로 섹션 배경 이미지
- `public/downloads/apbl-application-form.txt`: 신청서 다운로드 버튼용 임시 파일

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

## 수정 포인트

행사 내용은 대부분 `src/data/event.ts`만 수정하면 반영됩니다.
특히 실제 신청 링크, 실제 문의 이메일, 실제 신청서 파일이 확정되면 아래 값을 바꾸세요.

- `applicationUrl`
- `applicationFormUrl`
- `contactEmail`
- `registrationDeadline`
