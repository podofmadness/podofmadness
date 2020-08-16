import Link from "next/link"
import Head from "next/head"
import Layout from "../components/layout"
import SiteNav from "../components/SiteNav"

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>Contact Us</title>
			</Head>
			<SiteNav />
			<h1>Contact Us</h1>
			<ul>
				<li>Email: jordan (at) podofmadness (dot) com</li>
			</ul>
			<h6>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h6>
		</Layout>
	)
}
