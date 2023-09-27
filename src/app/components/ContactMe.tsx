import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineLink } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';

export default function ContactMe() {
	const form = useRef<HTMLFormElement | null>(null);
	const [disable, setDisable] = useState<boolean>(false);
	const [status, setStatus] = useState<string>('送出');

	const submitForm = (e: FormEvent) => {
		e.preventDefault();
		setDisable(true);
		setStatus('送出中...');

		if (form.current === null) {
			return;
		}

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					setStatus('已送出!');
				},
				(error) => {
					setStatus('錯誤!');
					setTimeout(() => {
						setStatus('送出');
					}, 3000);

					setDisable(false);
				}
			);
	};

	return (
		<div className="flex flex-col items-center justify-center border-t-2 border-cyan-400 bg-cyan-100 py-5 text-neutral-700 dark:border-0 dark:bg-neutral-800 dark:text-white sm:flex-row">
			<div className="min-w-1/2 flex flex-col justify-center sm:mr-10">
				<h2 className="cursor-default pb-8 pt-8 text-5xl sm:pt-0">Get in touch</h2>
				<span className="flex items-center pb-4">
					<AiOutlineMail className="mr-2" />
					<a
						href="mailto: xiangtw26701@gmail.com"
						className="group transition duration-300"
						rel="noreferrer"
						target="_blank"
					>
						xiangtw26701@gmail.com
						<span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
					</a>
				</span>
				<span className="flex items-center pb-4">
					<AiOutlineMail className="mr-2" />
					<a
						href="mailto: mail@charlie26701.dev"
						rel="noreferrer"
						className="group transition duration-300"
						target="_blank"
					>
						mail@charlie26701.dev
						<span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
					</a>
				</span>
			</div>

			<form
				className="flex w-full flex-col px-10 py-5 pt-10 sm:w-1/2 sm:px-0 sm:pl-10"
				onSubmit={submitForm}
				ref={form}
			>
				<input
					type="text"
					placeholder="名稱"
					name="from_name"
					required
					className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-neutral-900 dark:hover:border-gray-700"
				/>
				<input
					type="email"
					placeholder="電子郵件"
					name="from_email"
					required
					className="mb-2 h-10 max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-neutral-900 dark:hover:border-gray-700"
				/>
				<textarea
					rows={5}
					placeholder="訊息"
					name="message"
					minLength={10}
					required
					className="max-w-xl rounded-lg border-2 bg-white p-5 text-sm hover:border-cyan-500 dark:border-transparent dark:bg-neutral-900 dark:hover:border-gray-700"
				/>
				<button
					type="submit"
					disabled={disable}
					className={`btn group relative mt-5 inline-flex h-12 w-40 items-center justify-start overflow-hidden rounded-lg border-2 bg-white text-sm transition-all dark:border-0 dark:bg-neutral-900`}
				>
					<span
						className={`-z-1 absolute left-0 top-0 h-0 w-0 rounded ${
							status === 'Sent!' ? 'bg-green-500 text-black' : 'bg-cyan-600'
						} transition-all duration-500 ease-out group-hover:h-full group-hover:w-full ${
							status === 'Sent!' ? 'text-white dark:bg-green-500' : 'dark:bg-cyan-700'
						}`}
					></span>{' '}
					<span className="z-10 w-full text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-white">
						{status}
					</span>
				</button>
			</form>
		</div>
	);
}
