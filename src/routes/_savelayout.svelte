<script>
	import '../app.css';
</script>

<div class="overlay" />
<section class="top-part">
	<video controls autoplay loop class="fixed">
		<source src="videos/video.mp4" type="video/mp4" />
		<source src="videos/video.ogg" type="video/ogg" />
		Your browser does not support the video tag.
	</video>
</section>

<div class="cd-slider-nav">
	<nav>
		<span class="cd-marker item-1" />
		<ul>
			<li class="selected">
				<a href="#0"
					><div class="image-icon"><img src="img/home-icon.png" /></div>
					<h6>Welcome</h6></a
				>
			</li>
			<li>
				<a href="#0"
					><div class="image-icon"><img src="img/about-icon.png" /></div>
					<h6>About Us</h6></a
				>
			</li>
			<li>
				<a href="#0"
					><div class="image-icon"><img src="img/featured-icon.png" /></div>
					<h6>Featured</h6></a
				>
			</li>
			<li>
				<a href="#0"
					><div class="image-icon"><img src="img/projects-icon.png" /></div>
					<h6>Projects</h6></a
				>
			</li>
			<li>
				<a href="#0"
					><div class="image-icon"><img src="img/contact-icon.png" /></div>
					<h6>Contact Us</h6></a
				>
			</li>
		</ul>
	</nav>
</div>
<ul class="cd-hero-slider">
	<li class="selected">
		<div class="heading">
			<h1>NEWLINE</h1>
			<span>Welcome to Web Design Agency</span>
		</div>
		<div class="cd-full-width first-slide">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="content first-content">
							<h4>About Newline Template</h4>
							<p>
								Newline is free CSS template provided by templatemo site. Credits go to <a
									href="https://videos.pexels.com/videos/busy-street-in-the-city-1089"
									target="_blank">Pexels.com</a
								>
								for a video background and
								<a href="https://unsplash.com" target="_blank">Unsplash</a> for images. Please support
								templatemo by spreading a word. Thank you. If you have any question, feel free to contact
								us on Facebook page. Quisque dictum convallis mi. In dapibus auctor dictum donec mattis
								quis eros ultricies feugiat.
							</p>
							<div class="primary-button">
								<a href="#">Discover More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</li>

	<li>
		<div class="heading">
			<h1>About Us</h1>
			<span>Get More Info About Our Agency</span>
		</div>
		<div class="cd-half-width second-slide">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="content second-content">
							<div class="row">
								<div class="col-md-7 left-image">
									<img src="img/left-about-image.jpg" />
								</div>
								<div class="col-md-5">
									<div class="right-about-text">
										<h4>Who we are?</h4>
										<p>
											Fusce neque leo, dapibus sed imperdiet sed, vulputate sed purus. Nam eget
											justo in nibh facilisis rhoncus. Donec et risus non mauris lobortis convallis.
											Aliquam id urna quis ante blandit semper.
										</p>
										<div class="primary-button">
											<a href="#">Discover More</a>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-7">
									<div class="left-about-text">
										<h4>What we do?</h4>
										<p>
											Nam aliquam ultrices interdum. Vivamus metus mi, accumsan a tincidunt a,
											efficitur id felis. Vivamus non nibh malesuada, vestibulum nulla in, iaculis
											sem. Aenean tincidunt faucibus ipsum, ac aliquet nunc accumsan sed. Nulla
											sodales nunc sit amet libero egestas, ut interdum ex congue.
										</p>
										<div class="primary-button">
											<a href="#">Discover More</a>
										</div>
									</div>
								</div>
								<div class="col-md-5 right-image">
									<img src="img/right-about-image.jpg" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</li>
</ul>

<!-- .cd-slider-nav -->
<slot />

<style>
	p {
		font-size: 14px;
		color: #5a5a5a;
		font-weight: 300;
		line-height: 25px;
	}
	video {
		position: fixed;
		top: 50%;
		left: 50%;
		min-width: 100%;
		min-height: 100%;
		width: auto;
		height: auto;
		z-index: -100;
		transform: translateX(-50%) translateY(-50%);
		background-size: cover;
		transition: 1s opacity;
	}

	video::-webkit-media-controls {
		display: none !important;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.75); /*dim the background*/
	}

	.primary-button a {
		display: inline-block;
		background-color: #ffbb05;
		color: #343434;
		font-size: 13px;
		padding: 12px 18px;
		border-radius: 3px;
		text-decoration: none;
		border: 1px solid transparent;
	}

	.primary-button a:hover {
		background-color: transparent;
		border: 1px solid #ffbb05;
		-moz-transition: all 0.2s linear;
		-o-transition: all 0.2s linear;
		-webkit-transition: all 0.2s linear;
	}

	.cd-hero {
		z-index: 2;
		position: relative;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.cd-hero-slider {
		position: relative;
		overflow: hidden;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.cd-hero-slider li {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		-webkit-transform: translateX(100%);
		-moz-transform: translateX(100%);
		-ms-transform: translateX(100%);
		-o-transform: translateX(100%);
		transform: translateX(100%);
	}
	.cd-hero-slider li.selected {
		/* this is the visible slide */
		position: relative;
		-webkit-transform: translateX(0);
		-moz-transform: translateX(0);
		-ms-transform: translateX(0);
		-o-transform: translateX(0);
		transform: translateX(0);
	}
	.cd-hero-slider li.move-left {
		/* slide hidden on the left */
		-webkit-transform: translateX(-100%);
		-moz-transform: translateX(-100%);
		-ms-transform: translateX(-100%);
		-o-transform: translateX(-100%);
		transform: translateX(-100%);
	}
	.cd-hero-slider li.is-moving,
	.cd-hero-slider li.selected {
		/* the is-moving class is assigned to the slide which is moving outside the viewport */
		-webkit-transition: -webkit-transform 0.5s;
		-moz-transition: -moz-transform 0.5s;
		transition: transform 0.5s;
	}
	@media only screen and (min-width: 768px) {
		.cd-hero-slider {
		}
	}
	@media only screen and (min-width: 1170px) {
		.cd-hero-slider {
		}
	}

	.cd-slider-nav {
		text-align: center;
	}

	.cd-slider-nav ul {
		padding: 0;
		margin: 0;
	}

	.cd-slider-nav ul li {
		display: inline-block;
		margin: 80px 40px;
	}

	.cd-slider-nav ul li a {
		text-decoration: none;
	}

	.cd-slider-nav ul li h6 {
		font-size: 14px;
		text-transform: uppercase;
		text-align: center;
		font-weight: 400;
		color: #fff;
		margin-top: 15px;
	}

	.cd-slider-nav ul .selected h6 {
		color: #ffbb05;
		text-decoration: none;
	}

	.cd-slider-nav .image-icon {
		margin: 0 auto;
		margin-bottom: 15px;
		display: block;
		width: 80px;
		height: 80px;
		line-height: 80px;
		border-radius: 50%;
		text-align: center;
		margin: 0px;
		padding: 0px;
		background-color: #ffbb05;
	}

	.cd-slider-nav .image-icon:hover {
		background-color: #fff;
		-moz-transition: all 0.2s linear;
		-o-transition: all 0.2s linear;
		-webkit-transition: all 0.2s linear;
	}

	.content {
		margin-bottom: 100px;
		margin-top: -80px;
		background-color: #fff;
		border-top: 15px solid #ffbb05;
		box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
	}

	/*
=======================
----- FIRST SLIDE -----
=======================
*/

	.first-slide {
		text-align: center;
	}

	.first-slide {
		background-color: #fff;
		width: 100%;
	}

	.heading {
		text-align: center;
		margin-bottom: 180px;
	}

	.heading h1 {
		margin-top: 30px;
		font-size: 38px;
		text-transform: uppercase;
		color: #fff;
		font-weight: 900;
		letter-spacing: 1px;
	}

	.heading span {
		font-size: 16px;
		text-transform: uppercase;
		color: #ffbb05;
		font-weight: 300;
		letter-spacing: 0.5px;
	}

	.first-content h4 {
		font-size: 19px;
		text-transform: uppercase;
		color: #121212;
		letter-spacing: 1px;
		margin-top: 0px;
		margin-bottom: 30px;
	}

	.first-content {
		padding: 60px 0px;
	}

	.first-content p {
		margin: 0px 120px;
	}

	.first-content .primary-button {
		margin-top: 30px;
	}

	/*
=======================
----- SECOND SLIDE ----
=======================
*/

	.second-slide {
		text-align: center;
		background-color: #fff;
		width: 100%;
	}

	.second-slide .heading h1 {
		margin-top: 30px;
		font-size: 38px;
		text-transform: uppercase;
		color: #fff;
		font-weight: 900;
		letter-spacing: 1px;
	}

	.second-slide .heading span {
		font-size: 16px;
		text-transform: uppercase;
		color: #ffbb05;
		font-weight: 300;
		letter-spacing: 0.5px;
	}

	.second-slide img {
		width: 100%;
		overflow: hidden;
	}

	.second-slide .left-image {
		padding-right: 0px !important;
	}

	.second-slide .right-image {
		padding-left: 0px !important;
	}

	.second-slide .right-about-text {
		text-align: left;
		margin-left: 15px;
		margin-right: 30px;
	}

	.second-slide .right-about-text h4 {
		font-size: 19px;
		color: #121212;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-top: 30px;
		margin-bottom: 25px;
	}

	.second-slide .right-about-text .primary-button {
		margin-top: 25px;
	}

	.second-slide .left-about-text {
		text-align: left;
		margin-left: 15px;
		margin-left: 30px;
	}

	.second-slide .left-about-text h4 {
		font-size: 19px;
		color: #121212;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-top: 30px;
		margin-bottom: 25px;
	}

	.second-slide .left-about-text .primary-button {
		margin-top: 25px;
	}

	/*
========================================
---------- RESPONSIVE STYLE ------------
========================================
*/

	@media (max-width: 850px) {
		.cd-slider-nav ul li h6 {
			font-size: 13px;
			text-transform: uppercase;
			text-align: center;
			font-weight: 400;
			color: #fff;
			margin-top: 15px;
			display: none;
		}

		.cd-slider-nav .image-icon img {
			width: 25px;
		}

		.cd-slider-nav ul .selected img {
			border-bottom: 3px solid #fff;
			padding-bottom: 10px;
			-moz-transition: all 0.2s linear;
			-o-transition: all 0.2s linear;
			-webkit-transition: all 0.2s linear;
		}

		.cd-slider-nav .image-icon {
			width: 0px;
			height: 0px;
			line-height: 40px;
			margin: 0 auto;
		}

		.cd-slider-nav {
			background-color: #ffbb05;
			width: 100%;
			height: 80px;
			line-height: 80px;
			margin: 0 auto;
			text-align: center !important;
		}

		.cd-slider-nav ul {
			padding: 0;
			margin: 0;
			text-align: center !important;
		}

		.cd-slider-nav ul li {
			display: inline-block;
			margin-top: 0px;
			margin-left: 15px;
		}

		.heading h1 {
			margin-top: 60px;
			font-size: 24px;
			font-weight: 700;
			letter-spacing: 0px;
		}

		.heading span {
			font-size: 13px;
			letter-spacing: px;
		}

		.content {
			margin-bottom: 100px;
			margin-top: -100px;
			background-color: #fff;
			border-top: 15px solid #ffbb05;
			box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
		}

		.first-content h4 {
			margin-left: 15px;
			margin-right: 15px;
		}

		.first-content p {
			margin: 0px 30px;
		}

		.second-slide .left-image {
			padding-right: 15px !important;
		}

		.second-slide .right-image {
			padding-left: 15px !important;
		}

		.second-slide .right-about-text {
			text-align: left;
			margin-left: 15px;
			margin-left: 30px;
		}

		.second-slide .left-about-text {
			text-align: left;
			margin-left: 0px;
			margin-left: 30px;
			margin-bottom: 30px;
		}

		.fivth-content .left-info .social-icons {
			margin-top: 30px;
			margin-bottom: 60px;
		}
	}

	/*
=======================
---- FOOTER STYLE -----
=======================
*/

	footer {
		background-color: #ffbb05;
		position: relative;
		width: 100%;
		bottom: 0;
		z-index: 2;
		margin-top: -1px;
	}

	footer p {
		font-size: 13px;
		color: #343434;
		margin: 0px;
		padding: 25px 0px;
		text-align: center;
		font-weight: 400;
	}

	footer p em {
		font-style: normal;
		font-weight: 500;
	}

	footer a {
		color: #343434;
	}
</style>
