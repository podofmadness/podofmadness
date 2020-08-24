import fs from "fs"
import path from "path"
import showdown from "showdown"
import * as matter from "gray-matter"
// Add this line to imports

export function postId(fileName) {
	return fileName.replace(/\.md$/, "")
}

export function showdownConverter() {
	var converter = new showdown.Converter({
		strikethrough: true,
		simpleLineBreaks: false,
		tasklists: true,
		metadata: true,
	})
	converter.setFlavor("original")
	return converter
}

export function postObj(fileContents) {
	var converter = showdownConverter()
	var html = converter.makeHtml(fileContents)
	// var metadata = converter.getMetadata()
	const { data } = matter(fileContents)
	data.date = data.date.toString()

	// return { ...metadata, content: html };

	// Use gray-matter to parse the post metadata section
	// const matterResult = matter(fileContents)
	var textContent = html.replace(/<[^>]+>/g, "") || ""
	return { html, metadata: data, textContent }
}

const postsDirectoryPath = path.join(process.cwd(), "posts")
const socialPostsDirectory = path.join(process.cwd(), "socialPosts")
// https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops
export function getSortedPostsData(type) {
	var postsDirectory = ""
	if (!type) {
		type = "episode"
	}
	switch (type) {
		case "episode":
			postsDirectory = postsDirectoryPath
			break
		case "socialSoundBite":
			postsDirectory = socialPostsDirectory
			break
		default:
			break
	}
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDirectory)
	const allPostsData = fileNames.map((fileName, index) => {
		// Remove ".md" from file name to get id
		const id = postId(fileName)

		// Read markdown file as string
		const fullPath = path.join(postsDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, "utf8")

		// var converter = showdownConverter()

		// var html = md.render(text);
		// var html = converter.makeHtml(fileContents)
		// var metadata = converter.getMetadata()
		// return { ...metadata, content: html };

		// Use gray-matter to parse the post metadata section
		// const matterResult = matter(fileContents)
		// var textContent = html.replace(/<[^>]+>/g, "") || ""
		const { html, metadata, textContent } = postObj(fileContents)
		var plaintextContent = textContent

		if (metadata.type === "episode") {
			if (metadata.description && metadata.description.length > 1) {
				// Description exists
			} else {
				if (textContent.length > 120) {
					metadata.description = textContent.substring(0, 117)
					metadata.description += "..."
				} else {
					metadata.description = textContent.substring(0, textContent.length)
				}
			}
		}

		// Combine the data with the id
		return {
			id,
			contentHtml: html,
			plaintextContent,
			...metadata,
		}
	})
	// console.log("Unsorted Posts", allPostsData)
	var filteredPostsData = allPostsData.filter((post) => post.type == type)
	// Sort posts by date
	return filteredPostsData.length == 1
		? filteredPostsData
		: filteredPostsData.sort((a, b) => {
				if (Date.parse(a.date) < Date.parse(b.date)) {
					return 1
				} else {
					return -1
				}
		  })
}

export function getAllPostIds() {
	var postsDirectory = postsDirectoryPath
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map((fileName) => {
		return {
			params: {
				id: postId(fileName),
			},
		}
	})
}

export async function getPostData(id) {
	var postsDirectory = postsDirectoryPath
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, "utf8")

	const { html, metadata, textContent } = postObj(fileContents)
	if (
		metadata.description &&
		metadata.description.length > 1 &&
		(!metadata.subtitle || metadata.subtitle.length < 1)
	) {
		if (!metadata.hasOwnProperty("subtitle")) {
			metadata.subtitle = metadata.description
		}
	} else {
		if (textContent.length > 120) {
			metadata.description = textContent.substring(0, 117)
			metadata.description += "..."
		} else {
			metadata.description = textContent.substring(0, textContent.length)
		}
	}

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml: html,
		...metadata,
	}
}
