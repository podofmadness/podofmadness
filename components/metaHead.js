import Head from "next/head"
import getJsonLd from "../lib/jsonLD"

export default function MetaHead({
	pageType,
	headline,
	description,
	datePublished,
	previewImage,
	buildDate,
	keywords,
	urlId,
	extendedData,
	children,
}) {
	if (!buildDate) {
		var buildDate = new Date()
	}
	const jsonLD = getJsonLd({
		pageType,
		headline,
		description,
		urlId,
		datePublished,
		previewImage,
		buildDate,
		extendedData,
	})
	const jsonLDAsString = JSON.stringify(jsonLD)
	// console.log("JSON LD as String", jsonLDAsString)
	return (
		<Head>
			<title>{headline ? headline : "Pod of Madness"}</title>
			<link key="meta-icon" rel="icon" href="/favicon.ico" />
			<meta
				key="meta-keywords"
				name="keywords"
				content={keywords.join(", ")}
			></meta>
			<meta key="meta-author" name="author" content="Jordan Gass-Poore'"></meta>
			<meta
				key="meta-og-title"
				property="og:title"
				content={headline ? headline : "Pod of Madness"}
			></meta>
			<meta
				key="meta-og-site_name"
				property="og:site_name"
				content="The Pod of Madness Podcast"
			/>
			<meta
				key="meta-og-description"
				property="og:description"
				content={description ? description : "Life is Mad."}
			/>
			<meta
				key="meta-og-url"
				property="og:url"
				content={"https://podofmadness.com" + (urlId ? urlId : "")}
			/>
			<meta key="meta-og-locale" property="og:locale" content="en_US" />
			<meta
				key="meta-twitter-site"
				name="twitter:site"
				content="@podofmadness"
			/>
			<meta
				key="meta-twitter-description"
				name="twitter:description"
				content={description ? description : "Life is Mad."}
			/>
			<meta
				key="meta-twitter-card"
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta
				key="meta-twitter-creator"
				name="twitter:creator"
				content="@podofmadness"
			/>
			<meta
				key="meta-twitter-title"
				name="twitter:title"
				content={headline ? headline : "Pod of Madness"}
			/>
			<meta
				key="meta-og-image"
				property="og:image"
				content={
					previewImage
						? previewImage
						: "https://podofmadness.com/assets/logo-white-bg.png"
				}
			/>
			<meta
				key="meta-twitter-image"
				name="twitter:image"
				content={
					previewImage
						? previewImage
						: "https://podofmadness.com/assets/logo-white-bg.png"
				}
			/>
			<link
				rel="alternate"
				type="application/rss+xml"
				title="RSS Feed for podofmadness.com"
				href="/feed.xml"
			/>
			<script key="meta-ld-json" type="application/ld+json">
				{jsonLDAsString}
			</script>
			{children}
		</Head>
	)
}

export async function getStaticProps() {
	return {
		props: {
			buildDate: new Date().toString(),
		},
	}
}
