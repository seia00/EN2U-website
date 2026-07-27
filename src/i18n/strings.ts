/**
 * EN2U site copy, both locales.
 *
 * ⚠️  ALL COPY HERE IS PROPOSED, NOT APPROVED.
 * The org model changed (direct teaching -> curriculum provision), so every
 * string was rewritten. Japanese reuses the previous site's wording where the
 * meaning still holds; everything else needs Seia's verification.
 *
 * Accuracy rule enforced throughout: Guatemala = we taught directly.
 * Gaza = we supplied curriculum, a partner delivered it. Japan = our base.
 * Nothing in here may imply we run classrooms in all three.
 */

export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const strings = {
  en: {
    htmlLang: 'en',
    siteTitle: 'EN2U — English to Uplift & Utilize',
    metaDesc:
      'EN2U is a youth-led nonprofit in Japan. We build English curricula and hand them to the teachers and organisations already working with students who need them.',

    nav: {
      what: 'What we do',
      impact: 'Impact',
      about: 'About',
      toggle: '日本語',
      toggleLabel: 'Switch to Japanese',
      skip: 'Skip to content',
    },

    hero: {
      eyebrow: 'Youth-led · Japan · Nonprofit',
      title: 'English to Uplift & Utilize',
      lead: 'We build English curricula and hand them to the teachers and organisations already working with the students who need them.',
    },

    what: {
      n: '01',
      eyebrow: 'What we do',
      title: 'We equip teachers, not just students',
      body: 'Getting devices and connectivity to every student is the hardest part of remote teaching, and it is rarely the part we can solve. So we stopped trying to teach every student ourselves. We build the materials, and the people already in the room deliver them.',
      cards: [
        {
          t: 'Curricula, built to be handed over',
          b: 'Image-first slides, lesson structure and teaching notes designed to work in low-bandwidth classrooms and be run by someone who did not write them.',
        },
        {
          t: 'Delivered by local partners',
          b: 'Partner organisations and their teachers run the lessons. They know their students; we supply the structure and the materials.',
        },
        {
          t: 'Revised after every run',
          b: 'What the teachers report back becomes the next version. The curriculum improves because it has been used, not because we rewrote it.',
        },
      ],
    },

    where: {
      n: '02',
      eyebrow: 'Where we work',
      title: 'Three places, two different relationships',
      body: 'How we work differs by partner, and we would rather be precise about it than round it up.',
      nodes: [
        {
          place: 'Japan',
          role: 'Base',
          kind: 'base',
          b: 'Where EN2U is based and where our mentors are. Every curriculum is written here.',
        },
        {
          place: 'Guatemala',
          role: 'We taught directly',
          kind: 'direct',
          b: 'A year of weekly lessons with an NPO partner — our mentors in the room, one hour per group, every week.',
        },
        {
          place: 'Gaza',
          role: 'We supplied the curriculum',
          kind: 'curriculum',
          b: 'We provided the materials. Our partner delivered the teaching. We did not run these classrooms, and we amplify Gaza Soup Kitchen’s humanitarian work separately.',
        },
      ],
    },

    impact: {
      n: '03',
      eyebrow: 'Impact',
      title: 'What we can account for',
      note: 'Figures below are what our records support. Where a number is a floor, it is written as a floor.',
      statsHead: 'Guatemala · 2024–25',
      stats: [
        { v: '1', l: 'year of weekly lessons', fill: '100%', n: 'Guatemalan literacy project' },
        { v: '20+', l: 'hours of instruction', fill: '62%', n: 'One hour per group, weekly' },
        { v: '100+', l: 'students reached', fill: '78%', n: 'Directly and through partners' },
      ],
    },

    contact: {
      n: '04',
      eyebrow: 'Contact',
      title: 'Get in touch',
      body: 'We work with organisations that are already teaching. If that is you, or you want to use our curricula, reach out.',
      ig: '@en2u_npo',
      igLabel: 'Instagram',
      mail: 'en2u.org@gmail.com',
      mailLabel: 'Email',
    },

    footer: {
      tag: 'Youth-led nonprofit · Japan',
      rights: 'EN2U',
    },
  },

  ja: {
    htmlLang: 'ja',
    siteTitle: 'EN2U — 英語で向上し、活用する',
    metaDesc:
      'EN2Uは日本を拠点とする若者主導の非営利団体です。英語カリキュラムを制作し、生徒と向き合う教師や団体に提供しています。',

    nav: {
      what: '活動内容',
      impact: '活動実績',
      about: '私たちについて',
      toggle: 'English',
      toggleLabel: '英語に切り替える',
      skip: '本文へ移動',
    },

    hero: {
      eyebrow: '若者主導 · 日本 · 非営利団体',
      title: '英語で向上し、活用する',
      lead: '私たちは英語カリキュラムを制作し、生徒と向き合う教師や団体に提供しています。',
    },

    what: {
      n: '01',
      eyebrow: '活動内容',
      title: '生徒だけでなく、教師を支える',
      body: 'すべての生徒に端末と通信環境を届けることは、遠隔教育で最も難しく、私たちだけでは解決できない部分です。そこで私たちは、自分たちが直接教えるのではなく、教材を制作し、すでに現場にいる人たちに届けることにしました。',
      cards: [
        {
          t: '引き渡すための教材',
          b: '通信環境が限られた教室でも使え、制作者以外でも実施できるよう設計された、画像中心のスライド・授業構成・指導ノート。',
        },
        {
          t: '現地のパートナーが実施',
          b: 'レッスンはパートナー団体とその教師が実施します。生徒を知っているのは彼らです。私たちは構成と教材を提供します。',
        },
        {
          t: '実施ごとに改訂',
          b: '教師からの報告が次の版になります。書き直したからではなく、使われたからカリキュラムは良くなります。',
        },
      ],
    },

    where: {
      n: '02',
      eyebrow: '活動地域',
      title: '3つの地域、2つの異なる関わり方',
      body: '関わり方はパートナーごとに異なります。まとめてしまうより、正確に記したいと考えています。',
      nodes: [
        {
          place: '日本',
          role: '拠点',
          kind: 'base',
          b: 'EN2Uの拠点であり、メンターが活動する場所。すべてのカリキュラムはここで作られています。',
        },
        {
          place: 'グアテマラ',
          role: '直接指導',
          kind: 'direct',
          b: 'NPOと連携し、1年間にわたり毎週レッスンを実施。1グループにつき週1時間、私たちのメンターが直接指導しました。',
        },
        {
          place: 'ガザ',
          role: 'カリキュラム提供',
          kind: 'curriculum',
          b: '私たちは教材を提供し、指導はパートナーが担いました。私たちが教室を運営したわけではありません。ガザスープキッチンの人道支援の発信は、これとは別の活動です。',
        },
      ],
    },

    impact: {
      n: '03',
      eyebrow: '活動実績',
      title: '記録に基づく数字',
      note: '以下は記録により裏付けられる数字です。下限値である場合は、下限として記載しています。',
      statsHead: 'グアテマラ · 2024–25年',
      stats: [
        { v: '1年', l: '毎週のレッスン', fill: '100%', n: 'グアテマラ識字プロジェクト' },
        { v: '20+', l: '指導時間', fill: '62%', n: '1グループにつき週1時間' },
        { v: '100+', l: '届いた生徒数', fill: '78%', n: '直接指導およびパートナー経由' },
      ],
    },

    contact: {
      n: '04',
      eyebrow: 'お問い合わせ',
      title: 'ご連絡ください',
      body: 'すでに指導を行っている団体と協働しています。該当する方、またはカリキュラムの利用をご希望の方は、ぜひご連絡ください。',
      ig: '@en2u_npo',
      igLabel: 'Instagram',
      mail: 'en2u.org@gmail.com',
      mailLabel: 'メール',
    },

    footer: {
      tag: '若者主導の非営利団体 · 日本',
      rights: 'EN2U',
    },
  },
} as const;

export const t = (locale: Locale) => strings[locale];

/** Path to the same page in the other locale (preserves route). */
export const altPath = (locale: Locale, path: string) => {
  const clean = path.replace(/^\/ja(?=\/|$)/, '') || '/';
  return locale === 'en' ? `/ja${clean === '/' ? '' : clean}` || '/ja' : clean;
};
