import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';
import { useTheme } from 'next-themes';
import { Element } from 'react-scroll';

interface Project {
	index: number;
	image: string;
	description: string;
	name: string;
	demo_link: string;
	github_link: string;
}

export default function Projects() {
	const [modalImg, setModalImg] = useState<string | undefined>(undefined);
	const [showModal, setShowModal] = useState<boolean>(false);
	const { theme } = useTheme();

	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setModalImg(undefined);
			}
		};
		window.addEventListener('keydown', closeOnEscapeKey);
		return () => window.removeEventListener('keydown', closeOnEscapeKey);
	}, []);

	useEffect(() => {
		if (modalImg === undefined) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [modalImg]);

	const projects: Project[] = [
		{
			index: 0,
			image: '/project/mtc-apply.png',
			description: 'Asp.Net Core 網站',
			name: '國立高雄科技大學海訓處報名系統',
			demo_link: '#',
			github_link: 'https://github.com/charlie26701/',
		},
	];

	return (
		<>
			<Element name="projects" className="relative" />
			<div className="mb-48">
				<h1 className="mb-16 cursor-default text-center text-4xl font-medium text-neutral-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					專案
				</h1>
				<div className="mx-0 grid grid-cols-1 grid-rows-2 sm:grid-cols-2 md:mx-4 lg:grid-cols-3">
					{projects.map((project) => {
						return (
							<div
								key={project.index}
								className={`group m-6 rounded-xl border-2 border-cyan-200 p-5 text-gray-700 hover:border-cyan-500  dark:border-gray-800 dark:text-white dark:hover:border-cyan-700`}
							>
								<Fade bottom>
									<div className="relative">
										<Image
											src={project.image}
											alt={project.name}
											width={300}
											height={224}
											title="Click to enlarge"
											onClick={() => {
												setModalImg(project.image);
											}}
											className={`absolute mb-4 h-auto max-h-56 w-full transform rounded-lg object-contain transition duration-500 ease-in-out hover:cursor-pointer group-hover:opacity-0`}
										/>
										<Image
											src={project.image}
											alt={project.name}
											width={300}
											height={224}
											className={`mb-4 h-auto max-h-56 w-full rounded-lg object-contain`}
										/>
									</div>

									<div>
										<p className="mb-2 cursor-default text-base text-cyan-600 dark:text-cyan-500">
											{project.description}
										</p>
										<p className="my-1 text-xl font-medium">{project.name}</p>
										<div className="flex justify-between">
											<a
												className="text-sm  hover:underline"
												href={project.demo_link}
												aria-label="Visit Demo"
												onClick={
													project.demo_link === '#'
														? (e) => {
																e.preventDefault();
														  }
														: (e) => {
																e.preventDefault();
																window.open(project.demo_link, '_blank');
														  }
												}
											>
												{project.demo_link === '#' ? '' : 'Visit'}
											</a>
											<Link
												href={project.github_link}
												rel="noreferrer"
												title="Github Link"
												target="_blank"
											>
												<AiFillGithub className="inline-block text-4xl text-black transition delay-75 ease-in-out hover:scale-110 dark:text-white" />
											</Link>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</div>
			<div
				id="modal"
				className={`fixed left-0 top-0 z-10 h-screen w-screen items-center justify-center bg-black/70 ${
					showModal ? 'flex' : 'hidden'
				}
				`}
				onClick={() => {
					setModalImg(undefined);
				}}
			>
				<div className="relative h-full w-full sm:m-10 lg:m-20">
					<Image id="modal-img" fill alt="" src={modalImg ? modalImg : ''} className="object-contain" />
				</div>
			</div>
		</>
	);
}
