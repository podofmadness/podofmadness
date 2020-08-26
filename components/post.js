import Link from "next/link"
import Audio from "./audio"
import SocialPrompt from "./socialPrompt"

export default function Post({ post, isNew, isSocial, isFull, isFront }) {
	const newPrompt = isNew ? (
		<img
			src="https://podofmadness.com/assets/new.gif"
			style={{
				marginRight: ".4em",
			}}
		/>
	) : (
		""
	)
	const frontSocial = isSocial ? (
		<React.Fragment>
			<br />
			<SocialPrompt tweetUrl={post.socialPrompt} />
		</React.Fragment>
	) : (
		""
	)
	const headLine = isFront ? (
		<h3>
			{newPrompt}
			<Link href={`/posts/${post.id}`}>
				<a itemProp="url" title="Download podcast" className="title-link">
					<span itemProp="name">
						{post.title} {post.subtitle ? ": " + post.subtitle : ""}
					</span>
				</a>
			</Link>
		</h3>
	) : (
		<React.Fragment>
			<h1>
				{newPrompt}

				<span itemProp="name">{post.title}</span>
			</h1>
			<h2>{post.subtitle ? post.subtitle : post.description}</h2>
			<br />
		</React.Fragment>
	)
	const description = isFront ? (
		<p
			itemProp="description"
			dangerouslySetInnerHTML={{ __html: post.description }}
		></p>
	) : (
		<div
			itemProp="description"
			dangerouslySetInnerHTML={{ __html: post.contentHtml }}
		></div>
	)
	const transcript =
		isFront || !post.hasOwnProperty("transcriptHtml") ? (
			""
		) : (
			<React.Fragment>
				<hr />
				<div
					className="transcript"
					itemProp="transcript"
					dangerouslySetInnerHTML={{ __html: post.transcriptHtml }}
				></div>
			</React.Fragment>
		)
	const classNameOfPost =
		"episode__entry" + (isFront ? " front-post" : " full-post")
	return (
		<>
			<div
				className={classNameOfPost}
				itemScope
				itemType="http://schema.org/PodcastEpisode"
			>
				{headLine}
				<div
					itemProp="associatedMedia"
					itemScope
					itemType="http://schema.org/MediaObject"
				>
					<p>
						<Audio
							contentUrl={post.contentUrl}
							datePublished={post.date}
							minutesRequired={post.minutesRequired}
						/>
					</p>
					<p className="right">
						<a itemProp="contentUrl" href={post.contentUrl}>
							Download
						</a>
					</p>
					{description}
					{transcript}
				</div>
			</div>
			{frontSocial}
		</>
	)
}
