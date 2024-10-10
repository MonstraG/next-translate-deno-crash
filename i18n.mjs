/** @type {import("next-translate").I18nConfig & import("next").NextConfig['i18n']} */
const i18n = {
	defaultLocale: "en-GB",
	locales: ["en-GB"],
	pages: {
		"*": ["common"]
	}
};

export default i18n;
