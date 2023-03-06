import React from 'react';
import memory from '../assets/images/icon-memory.svg';
import reaction from '../assets/images/icon-reaction.svg';
import verbal from '../assets/images/icon-verbal.svg';
import visual from '../assets/images/icon-visual.svg';

const Field = ({ icon, title, score, colour }) => {
	return (
		<div className={`mb-4 flex h-14 items-center justify-between rounded-lg text-base bg-${colour}/10 px-4`}>
			<div className='flex items-center gap-2'>
				<img src={icon} alt='' />
				<p className={`text-${colour} font-semibold`}>{title}</p>
			</div>
			<p className='font-bold text-[var(--dark-grey-blue)]'>
				{score} <span className='opacity-50'>/ 100</span>
			</p>
		</div>
	);
};

const Summary = () => {
	return (
		<div className='px-10 py-6 '>
			<header className='mb-4'>
				<h1 className='font-bold'>Summary</h1>
			</header>
			<section>
				<Field icon={reaction} title='Reaction' score={80} colour='light-red' />
				<Field icon={memory} title='Memory' score={92} colour='orangey-yellow' />
				<Field icon={verbal} title='Verbal' score={61} colour='green-teal' />
				<Field icon={visual} title='Visual' score={72} colour='cobalt-blue' />
				<button className='mt-3 w-full rounded-full bg-dark-grey-blue from-light-slate-blue to-light-royal-blue p-4 text-white active:bg-gradient-to-b'>Continue</button>
			</section>
		</div>
	);
};

export default Summary;
