import Link from "next/link"

export default function SiteNav() {
	return (
		<nav>
			<div className="navbar navbar-fixed-top">
				<div className="navbar-inner">
					<div className="container">
						<a
							className="btn btn-navbar"
							data-toggle="collapse"
							data-target=".nav-collapse"
						>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</a>
						<Link href="/">
							<a className="brand">Pod of Madness</a>
						</Link>
						<div className="nav-collapse" id="main-menu">
							<ul className="nav" id="main-menu-left">
								<li className="dropdown" id="preview-menu">
									<a
										className="dropdown-toggle"
										data-toggle="dropdown"
										href="#"
									>
										Subscribe <b className="caret"></b>
									</a>
									<ul className="dropdown-menu">
										<li>
											<a target="_blank" href="feed.xml">
												RSS
											</a>
										</li>
										<li className="divider"></li>
										<li>
											<a
												target="_blank"
												href="https://podcasts.apple.com/us/podcast/pod-of-madness/id1528921215"
											>
												Apple Podcasts
											</a>
										</li>
										<li className="divider"></li>
										<li>
											<a
												target="_blank"
												href="https://open.spotify.com/show/1BkfF4HWGVg5MdlfpeZIrb"
											>
												Spotify
											</a>
										</li>
										<li className="divider"></li>
										<li>
											<a
												target="_blank"
												href="https://soundcloud.com/pod-of-madness"
											>
												SoundCloud
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="https://twitter.com/podofmadness" target="_blank">
										Follow us on
										<img
											height="25px"
											width="25px"
											src="https://podofmadness.com/assets/twittergif-transparent.gif"
										/>
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/podofmadness/"
										target="_blank"
									>
										Check out our Insta
									</a>
								</li>
								<li>
									<Link href="/contact">
										<a>Contact</a>
									</Link>
								</li>
							</ul>
							<ul className="nav pull-right" id="main-menu-right">
								<li>
									<a
										rel="tooltip"
										target="_blank"
										href="https://www.localswitchboard.nyc"
										title="Static Web Hosting"
									>
										A production of Local Switchboard
										<i className="icon-share-alt"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
