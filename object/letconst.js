const family = {
  d1text: "패밀리사이트",
  faimilysite: [
    {
      atext: "GIT",
      href: "http://www.github.com/GITwonwoo",
    },
    {
      atext: "네이버",
      href: "http://www.naver.com",
    },
    {
      atext: "다음",
      href: "http://www.daum.net",
    },
  ],
};

console.log(family.faimilysite[0].atext, family.faimilysite[0].href);
const mytag = `<a href="${family.faimilysite[0].href}">${family.faimilysite[0].atext}</a>`;

console.log(mytag);