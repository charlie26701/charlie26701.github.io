import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function AboutMe() {
	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mb-48">
				<h3 className="mb-16 cursor-default text-center text-4xl font-medium text-neutral-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					關於我
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-neutral-800 sm:mx-10 md:flex-row">
					<Image
						src="/photo.jpg"
						alt="Profile Picture"
						width={480}
						height={480}
						className="mb-10 w-full max-w-[280px] rounded-full border-4 border-neutral-500 filter transition duration-300 hover:filter-none dark:border-neutral-700 md:mb-0"
					/>
					<p className="flex w-full max-w-2xl items-center text-base md:mb-0 md:ml-10 md:text-lg">
						{`🔭 I’m currently studying at NKUST`}<br /><br />
						{`🌱 I’m currently learning React, Next.js, Tailwind CSS, and TypeScript`}<br /><br />
						{`👯 I’m looking to collaborate on open source projects`}<br /><br />
						{`🤔 I’m looking for help with React, Next.js, Tailwind CSS, and TypeScript`}<br /><br />
						{`💬 Ask me about anything related to web development`}<br /><br />
						{`📫 How to reach me: xiangtw26701@gmail.com, mail@charlie26701.dev`}<br />
					</p>
				</div>
			</div>
		</Fade>
	);
}
