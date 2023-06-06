import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
	Box,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Flex,
	Switch,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import Logo from '../assets/logo.svg';

function Navbar() {
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const [appColor, setAppColor] = useState('white');

	const handleSwitchToggle = () => {
		setIsSwitchOn(!isSwitchOn);
		setAppColor(isSwitchOn ? 'white' : 'blue');
	};

	return (
		<div>
			<Flex className={`header ${appColor}`}>
				<Box className='logo'>
					<Link href='/' paddingLeft='2' passHref>
						<Image src={Logo} alt='Your SVG' />
					</Link>
				</Box>

				<FormControl display='flex' alignItems='center' className='lang'>
					<FormLabel htmlFor='email-alerts' mb='0'>
						Blue color
					</FormLabel>
					<Switch
						size='md'
						isChecked={isSwitchOn}
						onChange={() => handleSwitchToggle(!appColor)}
					/>
				</FormControl>

				<Box className='menu'>
					<Menu>
						<MenuButton as={IconButton} icon={<FcMenu />} variant='outline' />
						<MenuList>
							<Link href='/'>
								<a>
									<MenuItem icon={<FcHome />}>Home</MenuItem>
								</a>
							</Link>
							<Link href='/Search' passHerf>
								<a>
									<MenuItem icon={<BsSearch />}>Search</MenuItem>
								</a>
							</Link>
							<Link href='/Search?purpose=for-sale' passHerf>
								<a>
									<MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
								</a>
							</Link>
							<Link href='/Search?purpose=for-rent' passHerf>
								<a>
									<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
								</a>
							</Link>
						</MenuList>
					</Menu>
				</Box>
			</Flex>
		</div>
	);
}

export default Navbar;
