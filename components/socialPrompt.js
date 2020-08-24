import ATweet from "../components/ATweet"

export default function SocialPrompt({ tweetUrl }) {
	return (
		<>
			<h4 className="pink">
				Join the conversation on Twitter for this Episode
			</h4>
			<ATweet twitterUrl={tweetUrl} />
		</>
	)
}
