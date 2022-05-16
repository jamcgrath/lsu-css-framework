import theme from "@nuxt/content-theme-docs";

export default theme({
	components: [{ path: "~~/components", level: -1 }],
	css: ["~~/css/styles.css"],
	docs: {
		primaryColor: "#E24F55",
	},
	content: {
		liveEdit: false,
	},
});
