import i18n from "./i18n.mjs";
import nextTranslate from "next-translate-plugin";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n
};

export default nextTranslate(config);
