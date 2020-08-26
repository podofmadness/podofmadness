import Head from "next/head"
import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import Layout from "../components/layout"
import ATweet from "../components/ATweet"
import Post from "../components/post"
import MetaHead from "../components/metaHead"
import SiteNav from "../components/SiteNav"
import MainContainer from "../components/MainContainer"
import Jumbotron from "../components/Jumbotron"
import Row from "../components/Row"
import ColumnSpan from "../components/ColumnSpan"

export default function Home({ allPostsData, allSocialData, buildDate }) {
	var buildDateObj = new Date(buildDate)
	let morePosts
	if (allPostsData.length > 1) {
		var postList = allPostsData.map((aPost) => {
			return (
				<li>
					<Link href={`/posts/${aPost.id}`}>
						<a title="Download podcast">
							<span>{aPost.title}</span>
						</a>
					</Link>
				</li>
			)
		})
		delete postList[0]
		morePosts = (
			<React.Fragment>
				<h4>Previous Episodes</h4>
				<ul>{postList}</ul>
				<h4>More episodes coming soon!</h4>
			</React.Fragment>
		)
	} else {
		morePosts = <h4>More episodes coming soon!</h4>
	}
	return (
		<Layout>
			<MetaHead
				pageType="CollectionPage"
				buildDate={buildDateObj}
				keywords={["horror", "zombies", "covid-19", "coronavirus", "podcast"]}
			></MetaHead>
			<SiteNav />
			<MainContainer>
				<Jumbotron>
					<Row>
						<ColumnSpan spanCount="6">
							<h1>Pod of Madness</h1>
							<p className="lead">Life is Mad</p>
						</ColumnSpan>
						<ColumnSpan spanCount="6">
							<center className="fun">
								<div className="toaster animated"></div>
							</center>
							<center className="logo">
								<img src="https://podofmadness.com/assets/logo-transparent.png" />
							</center>
						</ColumnSpan>
					</Row>
				</Jumbotron>
				<Row>
					<ColumnSpan spanCount="12">
						<h4>
							Pod of Madness is a horror-comedy show that proves life is mad.
						</h4>
						<hr />
					</ColumnSpan>
				</Row>
				<Row className="main-content">
					<ColumnSpan spanCount="6">
						<Post
							post={allPostsData[0]}
							isNew={true}
							isFull={false}
							isSocial={true}
							isFront={true}
						/>
					</ColumnSpan>
					<ColumnSpan spanCount="4">
						<h4>Listen to our social sound bites:</h4>
						<ATweet twitterUrl={allSocialData[0].socialPrompt} />
						<hr />
						<center>
							<a
								className="bmc-button"
								target="_blank"
								href="https://www.buymeacoffee.com/podofmadness"
							>
								<img
									src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
									alt="Buy me a coffee"
								/>
								<span
									style={{
										marginLeft: "5px",
										fontSize: "18px !important",
									}}
								>
									Buy me a coffee
								</span>
							</a>
						</center>
					</ColumnSpan>
					<ColumnSpan spanCount="2">{morePosts}</ColumnSpan>
				</Row>
			</MainContainer>

			<footer></footer>

			<style jsx>{`
				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
				}

				.bmc-button img {
					height: 34px !important;
					width: 35px !important;
					margin-bottom: 1px !important;
					box-shadow: none !important;
					border: none !important;
					vertical-align: middle !important;
				}
				.bmc-button {
					padding: 7px 15px 7px 10px !important;
					line-height: 35px !important;
					height: 51px !important;
					text-decoration: none !important;
					display: inline-flex !important;
					color: #ffffff !important;
					background-color: #000000 !important;
					border-radius: 8px !important;
					border: 1px solid transparent !important;
					font-size: 18px !important;
					letter-spacing: -0.08px !important;
					box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;
					-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
					margin: 0 auto !important;
					font-family: "Lato", sans-serif !important;
					-webkit-box-sizing: border-box !important;
					box-sizing: border-box !important;
				}
				.bmc-button:hover,
				.bmc-button:active,
				.bmc-button:focus {
					-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
					text-decoration: none !important;
					box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;
					opacity: 0.85 !important;
					color: #ffffff !important;
				}

				@media (max-width: 600px) {
					code {
						width: 100%;
					}
				}
			`}</style>

			<style jsx global>{``}</style>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData("episode")
	const allSocialData = getSortedPostsData("socialSoundBite")
	console.log("allPostsData", allPostsData[0])
	return {
		props: {
			allPostsData,
			allSocialData,
			buildDate: new Date().toString(),
		},
	}
}
