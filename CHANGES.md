# Project Changes Summary — Al Hiraa Quran Coaching Academy

This document summarizes all text, branding, structural, and social media updates made to the **Al Hiraa v2** codebase.

---

## 1. Rebranding & Title Updates
- **Name Change**: Replaced all occurrences of `"Al Hiraa Quran Coaching Centre"` and `"Quran Coaching Centre"` with **`"Al Hiraa Quran Coaching Academy"`** / **`"Quran Coaching Academy"`**.
- **Files Modified**:
  - `src/app/layout.js`
  - `src/app/page.js`
  - `src/app/about/page.js`
  - `src/app/courses/page.js`
  - `src/app/journey/page.js`
  - `src/app/legacy/page.js`
  - `src/components/Footer.js`
  - `src/app/api/enroll/route.js`

---

## 2. Homepage (`src/app/page.js`) Updates
- **Hero Subtitle**: Refined to *"Welcome to Al Hiraa Quran Coaching Academy — A dedicated Quran learning platform nurturing faith, character, and knowledge among learners through online teaching."*
- **Marquee Text**: Updated ticker text from `"Igniting Minds"` to **`"Enlightening Minds"`**.
- **Our Courses Subtitle**: Deleted paragraph *"Structured Islamic programs for ages 4–25..."*.
- **Arabic for Beginners**: Updated description text from *"read Islamic texts"* to *"read Arabic texts"*.
- **Humble Beginnings**: Updated preview text to *"vision to build a Quran (Tajweed) learning space"*.
- **Stats Section**: Removed `"100+ Students Guided"` and `"4–25 Age Group (Years)"`. Retained *"5+ Years of Excellence"* and *"5 Core Courses"*.
- **Begin Your Journey of Knowledge**: Updated paragraph to *"Join hundreds of students worldwide who are strengthening their faith and mastering the Qur'an."*.

---

## 3. About Page (`src/app/about/page.js`) Updates
- **Who We Are**: Updated primary sentence to:
  > *"Al Hiraa Quran Coaching Academy is a dedicated Quran teaching platform committed to nurturing faith, knowledge and strong moral character."*
- **Terminology Updates**: Updated *"real Islamic education"*, *"Islamic learning"*, *"Islamic knowledge"*, and *"Islamic education platform"* to use **Quran** / **Quranic**.

---

## 4. Courses Page (`src/app/courses/page.js`) Updates
- **Session Duration Update**: Updated session durations for all 5 courses from `20 minutes` / `20 mins` to **`30 minutes`**:
  - *Tajweed Foundations - Junior*: `30 minutes`
  - *Tajweed Foundations - Senior*: `30 minutes`
  - *Qur’anic Recitation*: `30 minutes`
  - *Hifz Program*: `30 minutes`
  - *Arabic for Beginners*: `30 minutes`
- **Header Subtitle**: Updated to *"Five courses, delivered live on our purpose-built learning platform for students, online and offline."* (removed *"structured Islamic"* and *"aged 4 to 25 years"*).
- **Arabic for Beginners**: Removed *"and Islamic"* from description (*"to better understand Qur'anic terms"*).
- **Namaz Tracker**: Removed opening sentence (*"No Quran education system should stop at the academic."*), starting directly with *"Suffah includes a dedicated Namaz Tracker..."*.

---

## 5. Journey Page (`src/app/journey/page.js`) Updates
- **The Inspiration Behind Suffah**: Replaced `"institution"` with **`"quran learning space"`** (*"by making the quran learning space he made possible, impossible to lose."*).
- **Identity & System Development (2024)**:
  - Deleted item `"Certification system implemented"`.
  - Updated `"Rewards and recognition programs launched"` to **`"Rewards and recognition programs launched (Offline)"`**.
- **Departmental & Digital Advancement (2026)**:
  - Updated `"Website and LMS officially launched"` to **`"Website and LMS launched"`** (removed *"officially"*).
- **Legacy Section**: Updated sentence to *"Suffah, the platform we built to run has named in acknowledgement of his legacy..."*.

---

## 6. Global Terminology Updates ("Islamic" -> "Quran" / "Quranic")
- **`src/app/programs/page.js`**: Updated feature tag to `"Quran Accountability"`.
- **`src/app/join/page.js`**: Updated FAQ answer to `"structured Quranic Studies"`.
- **`src/app/legacy/page.js`**: Updated tribute text to `"Quranic Studies"` and `"Quran education"`.

---

## 7. Social Media & Navigation Updates
- **New Instagram URL**: Updated all social links to **`https://www.instagram.com/Alhiraa.Quran`**.
- **Instagram Handle**: Updated handle references to **`@Alhiraa.Quran`**.
- **Global CSS (`src/app/globals.css`)**: Added `.nav-ig-link` and `.ig-icon` styling for responsive flexbox alignment and hover animations.
- **Navbar (`src/components/Nav.js`)**: Added SVG Instagram logo icon link to Desktop CTA and Mobile drawer menu.
- **Footer (`src/components/Footer.js`)**: Updated footer social link to feature the Instagram SVG logo icon alongside the handle badge **`@Alhiraa.Quran`**.

---

## 8. Verification & Deployment Status
- Verified git repository synchronization on branch **`main`**.
- Pushed clean commit to **`origin/main`**.
