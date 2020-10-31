const Ffmpeg = require("fluent-ffmpeg")
const fs = require("fs")
const path = require("path")
const concat = require("ffmpeg-concat")

const plateAudioToVideo = (relSoundFile) => {
	if (!relSoundFile) {
		relSoundFile = "../public/assets/S1E2-PodOfMadness.mp3"
	}
	const imagePlate = path.join(
		__dirname,
		"../public/assets",
		"pod-of-madness-logo-lg.png"
	)

	const castFile = path.join(__dirname, relSoundFile)
	const fileName = path.posix.basename(relSoundFile, path.extname(relSoundFile))
	var start = Date.now()
	var command = new Ffmpeg(imagePlate)
	command
		.loop()
		.inputOptions("-y")
		.addInput(castFile)
		.addOption("-threads 4")
		.inputOption("-hwaccel dxva2")
		.outputOption("-shortest")
		.outputOption("-acodec", "copy")
		// https://trac.ffmpeg.org/wiki/Encode/H.264
		.outputOption("-vcodec", "libx264")
		// .addOption("-gpu any")
		.outputOption("-cpu-used 2")
		.outputOption("-crf", 36) //32>= <40
		/**.outputOption(
			"-vf",
			"drawtext=text='Test Text':fontcolor=black:fontsize=40:x=1002:y=100:"
		) */
		// .outputOption("-pix_fmt", "yuv420p")
		.addOption("-preset ultrafast")
		.addOption("-tune stillimage")
		.format("avi")
		//.outputOption("-qscale:v", 20)
		//.format("avi")
		// https://trac.ffmpeg.org/wiki/Encode/MPEG-4
		//.outputOption("-vcodec", "mpeg4")
		//.outputOptions(["-vtag DIVX"])
		.renice(-19)
		.output(path.join(__dirname, "../videos", fileName + ".avi"))
		.size("1280x720")
		.aspect("16:9")
		.autopad("white")
		.on("error", (err, stdout, stderr) => {
			console.log("An error occurred: " + err)
			console.log("An error stdout: " + stdout)
			console.log("An error stderr: " + stderr)
		})
		.on("progress", (progress) => {
			console.log("Processing time completed: " + progress.timemark + " done")
		})
		.on("end", function () {
			console.log("Finished processing")
			console.log("Time taken: ", (Date.now() - start) / 1000 / 60)
		})
		.run()
}

const outroPlate = (relSoundFile) => {
	if (!relSoundFile) {
		relSoundFile = "../public/assets/Pod-of-Madness_Outro.mp3"
	}
	const imagePlate = path.join(
		__dirname,
		"../public/assets",
		"pod-of-madness-logo-lg.png"
	)

	const castFile = path.join(__dirname, relSoundFile)
	const fileName = path.posix.basename(relSoundFile, path.extname(relSoundFile))
	var start = Date.now()
	var command = new Ffmpeg(imagePlate)
	command
		.loop()
		.inputOptions("-y")
		.addInput(castFile)
		.addOption("-threads 4")
		//.outputOptions("-bsf:v h264_mp4toannexb")
		.outputOptions("-f mpegts")
		// .addOption("-gpu any")
		.outputOption("-cpu-used 2")
		/**.outputOption(
			"-vf",
			"drawtext=text='Test Text':fontcolor=black:fontsize=40:x=1002:y=100:"
		) */
		// .outputOption("-pix_fmt", "yuv420p")
		// .outputOption("-crf", 20) //32>= <40
		// .addOption("-tune stillimage")
		//.format("mp4")
		//.outputOption("-qscale:v", 20)
		//.format("avi")
		// https://trac.ffmpeg.org/wiki/Encode/MPEG-4
		//.outputOption("-vcodec", "mpeg4")
		//.outputOptions(["-vtag DIVX"])
		.renice(-19)
		.output(path.join(__dirname, "../videos", fileName + ".ts"))
		.size("1280x720")
		.aspect("16:9")
		.autopad("white")
		.on("error", (err, stdout, stderr) => {
			console.log("An error occurred: " + err)
			console.log("An error stdout: " + stdout)
			console.log("An error stderr: " + stderr)
		})
		.on("progress", (progress) => {
			console.log("Processing time completed: " + progress.timemark + " done")
		})
		.on("end", function () {
			console.log("Finished processing")
			console.log("Time taken: ", (Date.now() - start) / 1000 / 60)
		})
		.run()
}

const normalizeVideo = () => {
	const firstVideo = path.join(
		__dirname,
		"../videos/",
		"TALESFROMTHEHOOD3OfficialTrailerTonyTodd.mp4"
	)

	const fileName = path.posix.basename(firstVideo, path.extname(firstVideo))
	console.log("fileName", fileName)
	console.log("output", path.join(__dirname, "../videos/", fileName + ".avi"))

	var start = Date.now()
	var command = new Ffmpeg(firstVideo)
	return (
		command
			.inputOptions("-y")
			.addOption("-threads 4")
			// .addOption("-gpu any")
			.outputOption("-cpu-used 2")
			// .renice(-19)
			.videoCodec("copy")
			.audioCodec("copy")
			.renice(-19)
			// .addOption("-gpu any")
			.outputOption("-cpu-used 2")
			.outputOptions("-bsf:v h264_mp4toannexb")
			.outputOptions("-f mpegts")
			.output(path.join(__dirname, "../videos/", fileName + "-norm.ts"))
			.on("error", (err, stdout, stderr) => {
				console.log("An error occurred: " + err)
				console.log("An error stdout: " + stdout)
				console.log("An error stderr: " + stderr)
			})
			.on("progress", (progress) => {
				console.log("Processing time completed: " + progress.timemark + " done")
			})
			.on("end", function () {
				console.log("Finished processing")
				console.log("Time taken: ", (Date.now() - start) / 1000 / 60)
			})
			.run()
	)
}

const stitchVideoToVideo = (relOutroPlate) => {
	if (!relOutroPlate) {
		relOutroPlate = "../videos/Pod-of-Madness_Outro.ts"
	}
	const firstVideo = path.join(
		__dirname,
		"../videos/",
		"TALESFROMTHEHOOD3OfficialTrailerTonyTodd-norm.ts"
	)

	const castFile = path.join(__dirname, relOutroPlate)
	console.log(path.join(__dirname, firstVideo), castFile)
	const fileName = path.posix.basename(firstVideo, path.extname(firstVideo))
	console.log("fileName", fileName)
	console.log("output", path.join(__dirname, "../videos/", fileName + ".ts"))

	var start = Date.now()
	var command = Ffmpeg()
	command
		.input("concat:" + firstVideo + "|" + castFile)
		//.addOption("-threads 4")
		// .addOption("-gpu any")
		//.outputOption("-cpu-used 2")
		// .format("avi")
		// .renice(-19)
		// .addOption("-gpu any")
		.output(path.join(__dirname, "../videos/", fileName + "-plus-outro.ts"))
		.outputOption("-cpu-used 2")
		.outputOption("-strict -2") // I have an issue with experimental codecs, it is a solution
		.outputOption("-bsf:a aac_adtstoasc")
		.videoCodec("copy")
		.outputOption("-acodec", "aac")
		.on("error", (err, stdout, stderr) => {
			console.log("An error occurred: " + err)
			console.log("An error stdout: " + stdout)
			console.log("An error stderr: " + stderr)
		})
		.on("progress", (progress) => {
			console.log("Processing time completed: " + progress.timemark + " done")
		})
		.on("end", function () {
			console.log("Finished processing")
			console.log("Time taken: ", (Date.now() - start) / 1000 / 60)
		})
		.run()
}

const concatVideos = async () => {
	const relOutroPlate = "../videos/Pod-of-Madness_Outro-norm.mp4"
	const firstVideo = path.join(
		__dirname,
		"../videos/",
		"TALESFROMTHEHOOD3OfficialTrailerTonyTodd.mp4"
	)

	const outroFile = path.join(__dirname, relOutroPlate)
	const fileName = path.posix.basename(firstVideo, path.extname(firstVideo))
	console.log("fileName", fileName)
	console.log(
		"output",
		path.join(__dirname, "../videos/", fileName + "-concat.mp4")
	)

	var start = Date.now()
	await concat({
		output: path.join(__dirname, "../videos/", fileName + "-concat.mp4"),
		videos: [firstVideo, outroFile],
		transition: {
			name: "directionalWipe",
			duration: 500,
		},
	})
	console.log("Completed")
}

// outroPlate()

// normalizeVideo()

// stitchVideoToVideo()

// concatVideos()

plateAudioToVideo()
