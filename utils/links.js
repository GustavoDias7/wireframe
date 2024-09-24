const links = [
  { social: "whatsapp", link: "https://wa.me/552199999999" },
  { social: "facebook", link: "https://www.facebook.com/" },
  { social: "instagram", link: "https://www.instagram.com/" },
  { social: "linkedin", link: "https://www.linkedin.com/" },
  { social: "x", link: "https://x.com/" },
];

function setArgLinks() {
  return links
    .map((item) => {
      return {
        [item.social]: true,
        [`${item.social}_link`]: item.link,
      };
    })
    .reduce((a, i) => {
      return Object.assign(a, i);
    }, {});
}

module.exports = { setArgLinks };
