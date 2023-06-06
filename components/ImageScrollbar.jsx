import { useContext } from 'react';
import Image from 'next/image';
import { FaBed, FaBath, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
	<button className='slick-arrow slick-prev' onClick={onClick}>
		<FaArrowLeft />
	</button>
);

const PrevArrow = ({ onClick }) => (
	<button className='slick-arrow slick-next' onClick={onClick}>
		<FaArrowRight />
	</button>
);

export default function ImageSrollbar({ data }) {
	const settings = {
		arrow: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <NextArrow />,
		nextArrow: <PrevArrow />,
	};

	return (
		<Slider {...settings}>
			{data.map((item) => (
				<div key={item.id} overflow='hidden'>
					<Image
						placeholder='blur'
						blurDataURL={item.url}
						src={item.url}
						width={1000}
						height={500}
						sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
						alt={'image'}
					/>
				</div>
			))}
		</Slider>
	);
}
