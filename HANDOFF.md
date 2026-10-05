# Handoff — Kỳ Nguyễn Portfolio

Đọc file này **đầu tiên** trong session Claude Code mới. Toàn bộ context, quyết định đã chốt, và đang dở ở đâu đều nằm đây.

---

## Dự án là gì

Portfolio cá nhân của **Kỳ Nguyễn** — tagline (brandbook FINAL): **"Bring out the best in people."** Statement: _"Ky Nguyen works with one dedication: bringing out the best in people. In the game industry, he leads the transformation of people systems — connecting sharper judgment to business results, with AI tools he builds himself."_ Người xem chính: senior leaders in game & tech. Ngôn ngữ trên site: **English**.

Đây **không** phải CV online.

---

## Files nguồn (bên ngoài project — cần bring theo hoặc reference)

Ở máy gốc: `C:\Users\LAP16688\Downloads\`
- **`Ky Nguyen BrandBook final version.pdf`** — **SOURCE OF TRUTH hiện tại**. Toàn bộ voice + positioning + palette + typography theo file này.
- `Ky_Nguyen_Personal_Website_Claude_Code_Spec.txt` — spec cũ (chỉ dùng cho site map §5); phần voice/positioning/palette đã bị brandbook FINAL đè hoàn toàn.
- Các brandbook cũ (v3.2, v6.1, v4) — deprecated, không dùng nữa.

Nếu chuyển thư mục mới, copy 2 file này vào cùng chỗ (hoặc reference bằng absolute path).

---

## Quy trình bắt buộc (workshop rules)

Đây là dự án workshop Vibe-Code — quy trình **Spec → Plan → Build**:
- Spec đã có (file .txt trên) — không tự bịa thêm
- Plan đã chốt (xem "Roadmap" bên dưới)
- Build: đi theo plan, không nhảy bước

Rules quan trọng:
- Người dùng **không phải dân code** — giải thích bằng tiếng Việt, ngôn ngữ bình thường
- Mỗi khi đề xuất → nói kèm **được gì, mất gì**
- **Không tự bịa** dates, metrics, URLs, images — dùng `TODO_CONTENT` / `TODO_IMAGE` marker
- **Không commit trực tiếp vào `main`** — làm trên feature branch, merge khi chạy được
- **Không** dùng dữ liệu cá nhân thật của người thứ ba
- API key luôn ở `.env`, không hard-code

---

## Decisions đã chốt

| Vấn đề | Chốt |
|---|---|
| Tech stack | **Astro** + Tailwind CSS v4 + Sitemap. Vercel free tier để deploy. MDX đã gỡ (chưa có `.mdx` file nào). |
| Ngôn ngữ site | English |
| Palette | **Brandbook FINAL — LOCKED** — giá trị thật nằm ở `src/styles/global.css`: Cream `#FAF6F0`, Peach `#F4C7A4`, Lilac `#DACDEB`, Soft Blue `#C9DCED`, Amber `#DE7C4B`, Grey `#6E6E73`, White `#FFFFFF`, ink `#1D1D1F`, blue (chữ) `#5693BB`. |
| Fonts | **One clear sans voice**: Noto Sans (weights 400/500/700/900). Bỏ hoàn toàn Noto Serif. |
| Tagline (hero) | **"Bring out the best in people."** |
| Statement | Ky Nguyen works with one dedication... In the game industry, he leads the transformation of people systems — connecting sharper judgment to business results, with AI tools he builds himself. |
| Ethos | **"Honest about what I see. Dedicated to what I build."** |
| Value frames | **Mission** (Seeing People Clearly / Moving the Business Forward / Choosing What Matters) + **Values** (Judgment / Honesty / Fairness — X-before-Y form). |
| Philosophy | **I Believe** 3 statements. About page có: Statement / Philosophy / Ethos / Mission / Values / Traits / Experience / Tone of Voice. |
| KN mark | Chrome (header, mobile-nav topbar) dùng **"KN"** — brandbook: "The KN mark carries the name. Give it breathing space. It should never compete with the thought on the page." Full "KỲ NGUYỄN" chỉ còn ở footer brand column. |
| Commitment Line | Vẫn có (Nextgen case dùng BELIEF → DECISION → OUTCOME). Palette đã restyled — amber dot + ink line + grey labels. |
| LinkedIn URL | `https://www.linkedin.com/in/kynt259/` — đã set ở `src/config/site.ts` |
| Email / CV / GitHub / Solace URL / Voice-Lab URL | **Chưa có** — đã để trống ở site.ts, sẽ hỏi user khi tới bước cần |
| Vercel site URL | **`https://ky-nguyen-website.vercel.app`** — đã set ở `astro.config.mjs` (`SITE_URL`) |
| Ảnh | Spec cấm stock/AI-generated — dùng `TODO_IMAGE` marker cho đến khi có ảnh thật |
| Language toggle | Không làm — site chỉ English |
| Contact form | Không làm ở v1 (spec §10) — chỉ LinkedIn CTA |

---

## Roadmap

- [x] **Phase 1-9** — full site: hero + about + cases + thinking + builds + contact, palette + typography + components + pages + OG + SEO/a11y + responsive tests. Prod build 9 pages sạch.
- [x] **Brandbook FINAL migration** (session mới nhất) — LOCKED palette pastel mesh (cream/peach/lilac/soft blue/amber/grey/white), one sans voice (Noto Sans, bỏ Noto Serif), rewrite toàn bộ content về voice mới (tagline "Bring out the best in people.", Statement / Vision / Mission triad / Values / Philosophy / Ethos / Traits / Tone), chrome dùng KN mark theo brandbook, retire PrincipleTriptych + SentenceTest + StepList, thêm MissionTriad + ValuesList + TraitsGrid.
- [x] **Adversarial review** — workflow 4-lens parallel; 2 finders + 8 cleanup fixes áp dụng: theme-color palette fix, unused type import, dead deps (`@fontsource/noto-serif`, `@astrojs/mdx`), duplicate `site.statement`, dead `githubKey?` type, 3 unused CSS tokens, duplicate "A separate name" text trên home. 2 judgment calls đã apply theo brandbook: chrome dùng KN mark, drop amber underline dưới active nav.
- [x] **Redesign theo brandbook** (23/09 chiều, sau lần handoff trước) — cover hero có portrait thật (`src/assets/brand/portrait-cover.jpg`) + mesh nền (`mesh.jpg`), thêm trang `/core-elements` và `404`, OG image đổi sang `public/og-default.jpg`. Cấu trúc component đã đổi (thư mục `home/`, `core/`, `writing/`, `builds/`) — danh sách file bên dưới là bản cũ, xem thẳng `src/` cho chính xác.
- [x] **Duyệt cuối toàn site + sửa** (29/09 duyệt, 02/10 sửa) — xem mục "Session 02/10" bên dưới.
- [x] **Deploy** (05/10) — commit `d447e19` lên `main`, GitHub: https://github.com/TimmyNguyen259/Ky-Nguyen-Website, Vercel tự deploy mỗi lần push `main`. Live: https://ky-nguyen-website.vercel.app
- [ ] **Post-deploy TODO** — xem cuối file.

---

## Session 02/10 — đã sửa sau vòng duyệt cuối

Build sạch 11 trang. Đã sửa:
- **SEO:** URL không còn dấu `/` cuối (`trailingSlash: 'never'` + `vercel.json`), canonical/sitemap khớp link nội bộ. Trang 404 không còn canonical. Bài viết + case có `og:type=article`. Thêm `twitter:image:alt`.
- **Một chỗ duy nhất cho URL site:** `astro.config.mjs` → `SITE_URL`. `robots.txt` giờ sinh tự động (`src/pages/robots.txt.ts`), `site.url` đọc từ config.
- **Truy cập (a11y):** menu mobile khoá nền (`inert`), focus không rơi mất khi xoay màn hình; link mục cha trên trang con dùng `aria-current="true"`; tên nút KN bắt đầu bằng "KN"; trang Thinking có heading nhóm (h2) + tiêu đề bài (h3).
- **Chữ:** thời gian đọc sửa thành "1 min" (bài chỉ ~200 chữ); "Read" → "Read the post" ở trang chủ; gạch ngang "—" không còn rớt xuống đầu dòng (`src/utils/typography.ts`, chỉ đổi lúc render, copy gốc giữ nguyên).
- **Hiệu năng/code:** chỉ tải font latin (bỏ 2 file Vietnamese thừa), Tailwind không quét sinh class thừa, gom khoảng cách cột về token `--grid-gap` / `--triad-gap`, bỏ comment trong SVG mask, xoá dữ liệu/component chết (`SectionLabel`, `site.role`, `nextgen.line/eyebrow/readingTime`).

Chưa làm (cố ý):
- Nén `mesh.jpg` sang AVIF (−37 KB/trang) — sẽ làm mịn hạt grain của nền, cần Kỳ xem trước khi đổi.
- Gom hiệu ứng gạch chân amber (thuần dọn code, rủi ro đổi hover).
- Gỡ `@astrojs/markdown-satteri` khỏi package.json — cần chạy npm, để sau.
- Reviewer "consistency" (thương hiệu giữa các trang) bị lỗi hết lượt, chưa chạy lại.

Kỳ đã quyết (02/10, đã áp dụng):
1. Case Nextgen có title riêng: "VNGGames Nextgen · A separate name was not a branding preference".
2. Chính tả **kiểu Mỹ** toàn site: recognized, behavior, "Colors" (kể cả nhãn trên trang /core-elements, dù brandbook in "Colours"). Viết copy mới cũng theo kiểu Mỹ.
3. Meta description /about = câu Brand Platform ("This brand platform defines who I am in words…").

## State hiện tại (bản 23/09 sáng — một phần đã lạc hậu)

### Files đã có (theo brandbook FINAL)

```
portfolio/
├── astro.config.mjs                                — tailwind + sitemap (MDX gỡ)
├── package.json                                    — noto-sans + astro + tailwind + sitemap (bỏ noto-serif + mdx)
├── public/
│   ├── og-default.svg                              — social share (mesh gradient, KỲ NGUYỄN, tagline FINAL)
│   ├── robots.txt
│   └── favicon.svg, favicon.ico
├── src/
│   ├── config/site.ts                              — meta + tagline "Bring out the best in people." + ethos
│   ├── content/
│   │   ├── home.ts                                 — Hero + Vision + Mission triad + Values + Case + Evidence + Systems + Thinking + Closing
│   │   ├── about.ts                                — Opening + Philosophy (I believe) + Ethos + Mission + Values + Traits + Tone + Experience
│   │   ├── cases.ts                                — 3-case index + Nextgen full narrative
│   │   ├── thinking.ts                             — 3 pillars + 3 posts metadata
│   │   ├── builds.ts                               — 3 builds (Solace / Voice-Lab / SSC-HRBP-COE)
│   │   └── contact.ts                              — heading + body + linkedin + ethos signature
│   ├── components/                                 — 12 files after retiring 3 legacy
│   │   ├── CommitmentLine.astro                    — restyled amber+ink+grey (Nextgen case)
│   │   ├── Wordmark.astro                          — chrome hiển thị KN (brandbook FINAL)
│   │   ├── SiteHeader.astro                        — sticky white/blur, ink text, amber color (no underline)
│   │   ├── MobileNavigation.astro                  — mesh gradient bg, KN topbar
│   │   ├── SiteFooter.astro                        — cream bg, KỲ NGUYỄN full-name brand column
│   │   ├── SectionLabel.astro                      — small quiet grey label (một tone duy nhất)
│   │   ├── MissionTriad.astro                      — mới, 3 verbs magazine layout
│   │   ├── ValuesList.astro                        — mới, 3 numbered principles
│   │   ├── TraitsGrid.astro                        — mới, 3-col word wall
│   │   ├── WritingSample.astro                     — post layout
│   │   ├── CaseRow.astro                           — cases index row
│   │   ├── EvidenceRow.astro                       — value + context
│   │   ├── BuildListItem.astro                     — build row
│   │   ├── ArticleListItem.astro                   — thinking row
│   │   └── CTAField.astro                          — closing panel (cream / mesh / ink)
│   ├── layouts/Base.astro                          — HTML shell + meta + skip link + JSON-LD Person + theme-color #F5EBDD
│   ├── styles/global.css                           — LOCKED palette (7 tokens) + one sans voice + mesh-gradient class
│   └── pages/
│       ├── index.astro                             — Home (Hero mesh + Vision + Mission + Values + Case peach + Evidence + Systems lilac + Thinking + Closing mesh)
│       ├── about.astro                             — Opening mesh + Philosophy + Ethos cream + Mission + Values peach + Traits + Experience lilac + Tone soft-blue
│       ├── contact.astro                           — Mesh hero + LinkedIn CTA + ethos signature
│       ├── cases/
│       │   ├── index.astro                         — Mesh hero + editorial list
│       │   └── vnggames-nextgen.astro              — Mesh header + CommitmentLine BELIEF→DECISION→OUTCOME + 4 sections + close cream
│       ├── thinking/
│       │   ├── index.astro                         — Mesh hero + grouped by pillar
│       │   ├── ai-is-a-decision-design-problem.astro
│       │   └── a-separate-name.astro
│       └── builds/
│           └── index.astro                         — Mesh hero + 3 detail-in-list + framing quote
```

### Test đã chạy (session mới nhất)

- Prod build sạch: 9 pages built in <5s, sitemap-index + sitemap-0.xml có 9 URL công khai (drafts hidden).
- Dev server 200 OK trên cả 9 route: `/`, `/about`, `/cases`, `/cases/vnggames-nextgen`, `/thinking`, `/thinking/a-separate-name`, `/thinking/ai-is-a-decision-design-problem`, `/builds`, `/contact`.
- Home sections: Hero mesh gradient → Vision → Mission triad (cream) → Values → Selected case (peach) → Evidence → Systems (lilac) → Thinking → Closing (mesh, ethos).
- About sections: Opening mesh + Philosophy 3 statements + Ethos cream + Mission triad + Values peach + Traits (3-col) + Experience lilac + Tone soft-blue.
- OG image render đúng brandbook — mesh cream→peach→lilac→soft-blue, KỲ NGUYỄN sans black, tagline "Bring out the best in people.", ethos amber-accented.

### Content còn TODO

- Ảnh: chưa có ảnh Kỳ nào. Brandbook FINAL §The Portrait: "An illustrated character, built from my real face" — cần Kỳ cung cấp portrait illustration.
- URLs trong `src/config/site.ts` trống: `email`, `cvPath`, `github`, `solaceUrl`, `voiceLabUrl`.
- Cases: **chỉ còn Nextgen** — Kỳ quyết (05/10) xoá 2 case draft (first talents / overseas pipeline) vì không hợp với site Kỳ muốn. Đừng gợi ý viết lại. Trang `/cases/[slug]` là template chung, thêm case mới = thêm 1 entry vào `caseIndex` + 1 story vào `caseStories`.
- Thị trường (Kỳ xác nhận 05/10): **Thailand, Indonesia, China, Taiwan, Malaysia** — 5 thị trường, không phải "4 SEA markets" / Philippines.
- Thinking: `process-is-not-a-system` đã publish 05/10 (528 chữ, 2 min).
- Builds: 3 builds có structure nhưng URL Solace/Voice-Lab/GitHub trống — link ẩn tự động.
- Vercel URL: đã đổi sang `https://ky-nguyen-website.vercel.app` (05/10).

Manage server: `npx astro dev status | logs | stop`.

---

## Phase 9 — Deploy checklist (XONG 05/10 — Bước 1–4 đã làm, Bước 5 khi có tên miền)

### Bước 1 — First commit (bạn chạy)

Repo hiện là `master` branch chưa có commit nào. Nhiều files đang staged (`A`) từ Phase 1, và toàn bộ Phase 2–8 là untracked. Đề xuất commit một lần cho V1 baseline (bạn approve trước khi chạy):

```bash
cd C:/Users/LAP16688/Downloads/portfolio
git add -A
git status  # xem lại xem có gì lạ không
git commit -m "V1: portfolio baseline (brandbook FINAL — Bring out the best in people)"
```

Sau đó đổi branch chính sang `main` cho khớp convention:

```bash
git branch -M main
```

### Bước 2 — Push lên GitHub (bạn chạy)

Tạo repo trống trên GitHub (private hoặc public — bạn chọn). **Không** khởi tạo README/`.gitignore` từ GitHub (đã có sẵn trong repo local).

```bash
git remote add origin git@github.com:<username>/<repo-name>.git
# hoặc HTTPS: https://github.com/<username>/<repo-name>.git
git push -u origin main
```

### Bước 3 — Vercel deploy (bạn click)

1. Đăng nhập [vercel.com](https://vercel.com) (free tier).
2. **New Project → Import Git Repository → chọn repo vừa push**.
3. Vercel tự nhận `Astro` framework — **không cần đổi** build/output settings.
4. Environment variables: **không có gì** (site tĩnh, không secret).
5. Nhấn **Deploy**. Sau ~1 phút sẽ có URL dạng `https://<repo-name>-<hash>.vercel.app` và một alias `https://<repo-name>.vercel.app`.

### Bước 4 — Cập nhật `SITE_URL` sau deploy (mình chạy)

Sau khi biết URL Vercel thực tế, gõ URL đó cho mình trong session, mình sẽ:

- Edit `astro.config.mjs` → đổi `SITE_URL` từ placeholder `https://ky-nguyen.vercel.app` sang URL thật. Đây là chỗ duy nhất — robots.txt, sitemap, canonical, JSON-LD tự theo.
- Commit + push để Vercel redeploy với canonical URL đúng.

### Bước 5 — Custom domain (khi Kỳ đã mua tên miền)

Trong Vercel dashboard → project → Settings → Domains → Add. Vercel sẽ hướng dẫn cấu hình DNS. Sau đó lặp lại Bước 4 với custom domain.

### Post-deploy TODO

- [x] `public/og-default.jpg` — ảnh chia sẻ 1200×630 dạng JPEG (thay SVG cũ), chạy được cả trên LinkedIn.
- [ ] **Illustrated portrait** — brandbook FINAL §The Portrait: "An illustrated character, built from my real face". 05/10: đã đưa Kỳ brief để làm bằng Claude Design (canvas 1536×1024, figure x≈935–1345 / y≈60–985 để khớp mask hero hiện tại; + bản nền trong suốt, crop vuông 1024, OG 1200×630). Khi có file → thay `src/assets/brand/portrait-cover.jpg`, chỉnh mask nếu lệch.
- [ ] Điền `email`, `cvPath` (upload PDF vào `public/`), `github`, `solaceUrl`, `voiceLabUrl` vào `src/config/site.ts` khi Kỳ có sẵn.
- [x] Viết nội dung cho `process-is-not-a-system` post — publish 05/10.
- [x] ~~2 case draft~~ — Kỳ quyết xoá (05/10).

---

## Bắt đầu session Claude Code mới

1. Mở Claude Code ở thư mục `C:/Users/LAP16688/Downloads/portfolio`.
2. Ensure `Ky Nguyen BrandBook final version.pdf` vẫn ở `C:/Users/LAP16688/Downloads/` — brandbook FINAL là source of truth.
3. Gõ: _"Đọc HANDOFF.md rồi tiếp tục."_
4. Session sẽ có full context.

---

**Cập nhật:** 05/10/2026 — đã deploy lên Vercel, `SITE_URL` đã đổi sang URL thật. Git author: Ky Nguyen + GitHub noreply email (set riêng cho repo này).

**Cập nhật trước:** 02/10/2026 — sửa xong vòng duyệt cuối, 3 quyết định của Kỳ đã áp dụng — sẵn sàng commit + deploy.

**Ngày handoff gốc:** 23/09/2026 (brandbook FINAL migration complete: palette pastel mesh locked, one sans voice, tagline "Bring out the best in people.", chrome dùng KN mark theo brandbook. 8 cleanup fixes từ adversarial review đã apply. 9 pages prod build sạch. Chờ deploy.)
