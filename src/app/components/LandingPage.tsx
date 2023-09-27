import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function LandingPage() {
	const line1 = 'Hi, I am a passionate developer.';
	const line2 = 'I like to learn new things and build stuff.';

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const titles = ['Full Stack Developer', 'UI/UX Designer', 'Unversity Student'];
	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [titles.length]);

	return (
		<div className="min-h-[100dvh] w-full md:flex md:items-center md:justify-center">
			<div className="px-10 pt-10 text-center">
				<h1 className="cursor-default py-2 text-3xl font-medium text-orange-500 dark:text-orange-400 sm:text-4xl md:text-5xl">
					Charlie.
				</h1>

				{mounted ? (
					<TextTransition springConfig={presets.default} className="flex items-center justify-center">
						<p className="cursor-default py-2 text-xl sm:text-2xl">{titles[titleIndex % titles.length]}</p>
					</TextTransition>
				) : (
					<p className="cursor-default py-2 text-xl sm:text-2xl">{titles[titleIndex % titles.length]}</p>
				)}

				{mounted ? (
					<motion.h3
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 1 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.02,
								},
							},
						}}
						className="cursor-default py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg"
					>
						{line1.split('').map((char, index) => {
							return (
								<motion.span
									key={char + '-' + index}
									variants={{
										hidden: { opacity: 0, y: 50 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
								>
									{char}
								</motion.span>
							);
						})}

						<br />

						{line2.split('').map((char, index) => {
							return (
								<motion.span
									key={char + '-' + index}
									variants={{
										hidden: { opacity: 0, y: 50 },
										visible: {
											opacity: 1,
											y: 0,
										},
									}}
								>
									{char}
								</motion.span>
							);
						})}
					</motion.h3>
				) : (
					<h3 className="cursor-default py-5 text-base leading-8 text-gray-600 dark:text-gray-400 md:text-lg">
						{' '}
						<br />{' '}
					</h3>
				)}
				<div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
					<a
						href="https://github.com/charlie26701"
						target="_blank"
						aria-label="Github"
						rel="noreferrer"
						className="group hover:cursor-pointer hover:text-black dark:hover:text-white"
					>
						<AiFillGithub />
						<p className="invisible text-xs group-hover:visible">Github</p>
					</a>
				</div>
			</div>

			<div className="px-10 py-20 md:px-0">
				<video
					autoPlay
					loop
					muted
					className="w-100 mx-auto rounded-full border-4 border-cyan-500"
					poster="/coding_anim_thumb.jpg"
				>
					<source src="/coding_anim.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}
