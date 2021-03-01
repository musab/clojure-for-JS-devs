export default {
  repository: "https://github.com/musab/clojure-for-JS-devs", // project repo
  docsRepository: "https://github.com/musab/clojure-for-JS-devs", // docs repo
  branch: "main", // branch of docs
  path: "/", // path of docs
  titleSuffix: " – clj for JS devs",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: "MIT 2020 © Musa Barighzaai.",
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <svg>...</svg>
      <span>TODO</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Clojure for JS Devs" />
      <meta name="og:title" content="Clojure for JS Devs" />
    </>
  ),
};
