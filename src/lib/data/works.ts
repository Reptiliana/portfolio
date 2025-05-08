//@ts-nocheck
import type { Work } from '$lib/types';
import FaBrandsReact from 'svelte-icons-pack/fa/FaBrandsReact';
import SiJavascript from 'svelte-icons-pack/si/SiJavascript';
import BiLogoAws from 'svelte-icons-pack/bi/BiLogoAws';
import FaBrandsNodeJs from 'svelte-icons-pack/fa/FaBrandsNodeJs';
import SiChakraui from 'svelte-icons-pack/si/SiChakraui';
import SiTypescript from 'svelte-icons-pack/si/SiTypescript';
import FaBrandsDocker from 'svelte-icons-pack/fa/FaBrandsDocker';
import SiNginx from 'svelte-icons-pack/si/SiNginx';
import SiMysql from 'svelte-icons-pack/si/SiMysql';
import FaBrandsLaravel from 'svelte-icons-pack/fa/FaBrandsLaravel';
import SiPostgresql from 'svelte-icons-pack/si/SiPostgresql';
import SiGraphql from 'svelte-icons-pack/si/SiGraphql';
import SiAntdesign from 'svelte-icons-pack/si/SiAntdesign';
import SiMongodb from 'svelte-icons-pack/si/SiMongodb';
import FaBrandsStripeS from 'svelte-icons-pack/fa/FaBrandsStripeS';
import SiRedux from 'svelte-icons-pack/si/SiRedux';
import { theme } from '$lib/stores/theme';
import { get } from 'svelte/store';

const paragraphStyle = `
    line-height: normal;
    align-self: flex-start;
`;

const linkStyle = `
    text-decoration: underline;
    cursor: pointer;
	color: ${get(theme) !== 'dark-mode' ? 'var(--night-color)' : 'var(--day-color)'}
`;

const bold = `
    font-weight: bolder;
`;

const subtitle = `
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 2rem;
    align-self: flex-start;
`;

const ulStyle = `
	margin-left: 1rem;
	align-self: flex-start;
	line-height: normal;
	list-style-type: disc;
`;

//@ts-check
const works: Work[] = [
	{
		title: 'Miniso México',
		slug: 'miniso',
		description_en: `
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/PBHRvA1WlSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 style="${subtitle}">About the project</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                <a style="${linkStyle}" href="https://www.miniso.com.mx/minisolove" target="_blank">MinisoLove</a> is the official loyalty program of Miniso México, it's a venture between Miniso México and Pug Interactive, the app was developed 
                in <span style="${bold}">React Native</span> and it's available for 
                <a target="_blank" href="https://apps.apple.com/us/app/miniso-m%C3%A9xico/id1546770058" style="${linkStyle}">iOS</a> and 
                <a target="_blank" href="https://play.google.com/store/apps/details?id=mx.com.miniso.app&hl=en_US&gl=US" style="${linkStyle}">Android</a>.
            </p>
            <h3 style="${subtitle}">My role</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                In this project I was responsible for the implementation of the loyalty plan in the application, 
                as well as the <span style="${bold}">production deployments to the App Store and Play Store</span>, I worked on the implementation of the 
                <span style="${bold}">REST API</span> developed by <a style="${linkStyle}" href="https://www.puginteractive.com/" target="_blank">Pug Interactive</a>, and support throughout the different campaigns.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
                I worked side by side with the Pug Interactive team, and the <a style="${linkStyle}" href="https://www.miniso.com.mx/" target="_blank">Miniso México</a> team, in order to have a successful launch on every campaign, <span style="${bold}">I played a key role communicating possible problems before they happen</span> since the loyalty plan and features I implemented are the bridge between Pug Interactive technologies and Miniso's bussines logic.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
                Some of the features I implemented were: 
                <ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
				<li>Animated Claw Game</li>
				<li>Animated Pick/Time Game</li>
				<li>Collections Game</li>
				<li>Game credits flow</li>
				<li>Game Marketplace</li>
				<li>Trivia Game</li>
				<li>Quests Game</li>
				<li>Reusable map component with coords</li>
				<li>Christmas campaign UI, with reusable components</li>
				<li>Bar Code for purchase credits claiming</li>
                </ul>
            </p>

        `,
		description_es: `
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/PBHRvA1WlSE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 style="${subtitle}">Sobre el proyecto</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                <a style="${linkStyle}" href="https://www.miniso.com.mx/minisolove" target="_blank">MinisoLove</a> is the official loyalty program of Miniso México, it's a venture between Miniso México and Pug Interactive, the app was developed 
                in <span style="${bold}">React Native</span> and it's available for 
                <a target="_blank" href="https://apps.apple.com/us/app/miniso-m%C3%A9xico/id1546770058" style="${linkStyle}">iOS</a> and 
                <a target="_blank" href="https://play.google.com/store/apps/details?id=mx.com.miniso.app&hl=en_US&gl=US" style="${linkStyle}">Android</a>.
            </p>
            <h3 style="${subtitle}">Mi rol</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                In this project I was responsible for the implementation of the loyalty plan in the application, 
                as well as the <span style="${bold}">production deployments to the App Store and Play Store</span>, I worked on the implementation of the 
                <span style="${bold}">REST API</span> developed by <a style="${linkStyle}" href="https://www.puginteractive.com/" target="_blank">Pug Interactive</a>, and support throughout the different campaigns.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
                I worked side by side with the Pug Interactive team, and the <a style="${linkStyle}" href="https://www.miniso.com.mx/" target="_blank">Miniso México</a> team, in order to have a successful launch on every campaign, <span style="${bold}">I played a key role communicating possible problems before they happen</span> since the loyalty plan and features I implemented are the bridge between Pug Interactive technologies and Miniso's bussines logic.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
                Some of the features I implemented were: 
                <ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
                    <li>Animated Claw Game</li>
					<li>Animated Pick/Time Game</li>
                    <li>Collections Game</li>
                    <li>Game credits flow</li>
                    <li>Game Marketplace</li>
                    <li>Trivia Game</li>
                    <li>Quests Game</li>
                    <li>Reusable map component with coords</li>
                    <li>Christmas campaign UI, with reusable components</li>
                    <li>Bar Code for purchase credits claiming</li>
                </ul>
            </p>

        `,
		short_description_es:
			'Implementación de plan de lealtad en la aplicación oficial de Miniso México con +100mil descargas.',
		short_description_en:
			'Implementation of loyalty plan in the official Miniso Mexico application with 100k+ downloads.',
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672168849/portfolio/miniso_ysmxki.webp'
			}
		],
		url: 'https://www.miniso.com.mx/minisolove',
		techs: [
			{
				name: 'React Native',
				icon: FaBrandsReact
			},
			{
				name: 'Javascript',
				icon: SiJavascript
			}
		],
		clients: ['Pug Interactive', 'Miniso México'],
		client_url: ['https://puginteractive.com/', 'https://www.miniso.com.mx/'],
		client_logos: ['', ''],
		subprojects: 2,
		type: 'frontend',
		tags: [
			'miniso',
			'pug',
			'puginteractive',
			'react',
			'reactnative',
			'javascript',
			'frontend',
			'mobile',
			'app',
			'ios',
			'android',
			'mongodb',
			'fetch',
			'api',
			'rest',
			'restful-api',
			'context',
			'context-api',
			'hooks',
			'mixpanel',
			'animated',
			'animations'
		],
		order: 1
	},
	{
		title: 'Brainrap',
		slug: 'brainrap',
		description_en: `
			<iframe width="100%" height="315" src="https://www.youtube.com/embed/61pqPerTygc?start=14285" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 style="${subtitle}">About the project</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                <a style="${linkStyle}" href="https://www.youtube.com/embed/Umec06Wldqo" target="_blank">Brainrap</a> is a web application that allows you to create and share your own music, it's main feature is to encourage user creativity using tools such as: mood detection, text generation, image generation, bluetooth connection to EEG headsets, and more.
            </p>
            <h3 style="${subtitle}">My role</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
				I worked as head of development, I was in charge of the development of the entire application, from the backend to the frontend and also some WEB3 features such as Tezos smart contract development with smartpy and wallet connection.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
				This platform was built using Next.js, and Node.js, as well as AWS S3, Cognito, EC2 and DynamoDB.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
                Some of the features I implemented were: 
                <ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Real time EEG diagrams</li>
					<li>EEG Headset connection using bluetooth</li>
					<li>Real time Mood detection using ML algorithms</li>
					<li>OpenAI Image generation</li>
					<li>OpenAI GPT3 integrations</li>
					<li>Tezos smart contract</li>
					<li>Wallet connection implementation</li>
                </ul>
            </p>
        `,
		description_es: `
			<iframe width="100%" height="315" src="https://www.youtube.com/embed/61pqPerTygc?start=14285" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 style="${subtitle}">Sobre el proyecto</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                <a style="${linkStyle}" href="https://www.youtube.com/embed/Umec06Wldqo" target="_blank">Brainrap</a> es una aplicación web que provee herramientas de estudio musical para músicos, ayuda a crear, grabar y compartir su música. Facilita el proceso creativo con herramientas cómo: detección de estado de ánimo, generación de imágenes, generación de texto, conexión de dispositivos de EEG, entre otras.
            </p>
            <h3 style="${subtitle}">Mi rol</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
				Trabajé cómo lider de desarrollo y estuve a cargo del desarrollo completo de la aplicación backend y frontent, además de algunas funciones WEB3 como el contrato intelignete para la blockchain Tezos desarrollado con smartpy y la conexión a diferentes wallets.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
				La plataforma fue construida utilizando Next.js, y Node.js, también AWS S3, Cognito, EC2 y DynamoDB.
            </p>

            <p style="${paragraphStyle} margin-top: 1rem">
				Algunas de las funcionalidades que implementé fueron:
                <ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Diagramas EEG en tiempo real</li>
					<li>Conexión a headset de electroencefalograma usando bluetooth</li>
					<li>Detección en tiempo real de estado de ánimo usando Machine Learning</li>
					<li>Integración de OpenAI Image generation</li>
					<li>Integración de OpenAI GPT3</li>
					<li>Tezos smart contract</li>
					<li>Conexión a wallet</li>
                </ul>
            </p>
        `,
		short_description_es:
			'Plataforma para la creación de contenido musical, los usuarios son apoyados por algoritmos de machine learning y tecnologías de reconocimiento de voz y emociones.',
		short_description_en:
			'Platform for musical content creation, users are supported by machine learning algorithms, speech and emotion recognition technologies.',
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dgontkzbf/image/upload/v1746657964/2da52f96-cd3c-4576-ab4c-9a46fad29d2a_jcybhp.jpg'
			}
		],
		url: 'https://www.youtube.com/watch?v=ys6zv33P8KY',
		techs: [
			{
				name: 'NextJS',
				isImage: true,
				icon: 'https://res.cloudinary.com/dpc15/image/upload/v1672174229/portfolio/next-js_ayrijc.svg'
			},
			{
				name: 'AWS',
				icon: BiLogoAws
			},
			{
				name: 'NodeJS',
				icon: FaBrandsNodeJs
			},
			{
				name: 'Chakra UI',
				icon: SiChakraui
			},
			{
				name: 'Javascript',
				icon: SiJavascript
			},
			{
				name: 'Typescript',
				icon: SiTypescript
			},
			{
				name: 'Tezos',
				isImage: true,
				icon: 'https://res.cloudinary.com/dpc15/image/upload/v1675905783/tezos_vbgafm.png'
			}
		],
		clients: ['Brainrap', 'Centiment'],
		client_url: ['https://brainrap.com/', 'https://centiment.com/'],
		subprojects: 4,
		type: 'fullstack',
		tags: [
			'brainrap',
			'centiment',
			'nextjs',
			'aws',
			'eeg',
			'speech-recognition',
			'machine',
			'learning',
			'emotion-recognition',
			'blockchain',
			'nodejs',
			'chakra',
			'ui',
			'javascript',
			'typescript',
			'docker',
			'fullstack',
			'nft',
			'dapp'
		],
		order: 2
	},
	{
		title: 'HeyLayer',
		slug: 'heylayer',
		description_en: '',
		description_es: '',
		short_description_es:
			'Marketplace de NFTs sobre la blockchain de Stacks, la plataforma permite a los usuarios crear y vender sus propios NFTs, además de revenderlos.',
		short_description_en:
			'NFT marketplace on the Stacks blockchain, the platform allows users to create and sell their own NFTs, as well as resell them.',
		description_en: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px;" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170591/portfolio/heylayer_gbz73s.png" 
					alt="HeyLayer"
				/>
			</div>
            <h3 style="${subtitle}">About the project</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
                <a style="${linkStyle}" href="https://www.heylayer.com/" target="_blank">HeyLayer</a> is a NFT marketplace on the Stacks blockchain, the platform allows users to create and sell their own NFTs, as well as tools for brands to create their personalized NFTs page.
            </p>
            <h3 style="${subtitle}">My role</h3>
            <p style="${paragraphStyle} margin-top: 1rem">
				I worked as a <span style="${bold}">frontend developer</span> and implemented a good amount of UI features and integrations of the Stack.js library. I also implemented some key features related to the NFTs creation as well as bug fixes. I was responsible of <span style="${bold}">deploying the implemented changes to production</span>.
            </p>

			<p style="${paragraphStyle} margin-top: 1rem">
				This platform was built using <span style="${bold}">Next.js</span> for the frontend using <span style="${bold}">Chakra UI</span> for the components creation and styling, I also give support to the backend platform using Laravel.
			</p>

			<p style="${paragraphStyle} margin-top: 1rem">
				Some of the features I implemented were: 
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>JSON Nfts creation using <span style="${bold}">File System Access API</span></li>
					<li>Different UI tweaks</li>
					<li>Different sendgrind email templates</li>
					<li><a href="https://gmnfts.heylayer.com/" target="_blank" style="${linkStyle}">GM</a> nfts page</li>
					<li><a href="https://hernft.heylayer.com/" target="_blank" style="${linkStyle}">HerNFT</a> event page</li>
					<li>AVAX photoboot event page</li>
					<li>STX photoboot event page</li>
					<li><a href="https://multipass.heylayer.com/" target="_blank" style="${linkStyle}">Multipass</a> claiming page</li>
					<li>And projects related to HeyLayer clients</li>
				</ul>
			</p>
        `,
		description_es: `
		<div
			style="
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 1rem;
				height: 200px;
				width: 600px;
				border-radius: 0.5rem;
				background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
			"
		>
			<img 
				style="height: 120px; width: 120px;" 
				src="https://res.cloudinary.com/dpc15/image/upload/v1672170591/portfolio/heylayer_gbz73s.png" 
				alt="HeyLayer"
			/>
		</div>
		<h3 style="${subtitle}">Sobre el proyecto</h3>
		<p style="${paragraphStyle} margin-top: 1rem">
			<a style="${linkStyle}" href="https://www.heylayer.com/" target="_blank">HeyLayer</a> es un marketplace construido utilizando la blockchain de Stacks, la plataforma permite a los usuarios crear sus propios NFTs, y también provee herramientas para crear páginas personalizadas.
		</p>
		<h3 style="${subtitle}">Mi rol</h3>
		<p style="${paragraphStyle} margin-top: 1rem">
			En este proyecto trabaje cómo<span style="${bold}">frontend developer</span> implementé una buena cantidad de funciones en la UI y caracteristícas de la librería Stacks.js, también implementé características clave para la creación de NFTs así cómo la reparación de bugs. Fui responsable de <span style="${bold}" >desplegar los cambios implementados a producción</span>
		</p>

		<p style="${paragraphStyle} margin-top: 1rem">
			Esta plataforma fue construida utilizando <span style="${bold}">Next.js</span> para el frontend usando <span style="${bold}">Chakra UI</span> para la creación y estilos de los componentes, también di soporte al backend construido en Laravel.
		</p>

		<p style="${paragraphStyle} margin-top: 1rem">
			A
			<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
				<li>Creación de NFTs usando un archivo JSON y <span style="${bold}">File System Access API</span></li>
				<li>Ajustes a la UI</li>
				<li>Creación de templated para emails en sendgrind</li>
				<li>Página de <a href="https://gmnfts.heylayer.com/" target="_blank" style="${linkStyle}">GM</a> nfts</li>
				<li>Página del evento: <a href="https://hernft.heylayer.com/" target="_blank" style="${linkStyle}">HerNFT</a></li>
				<li>Página del evento: AVAX photoboot</li>
				<li>Página del evento: STX photoboot</li>
				<li>Página para el canje de NFTS para <a href="https://multipass.heylayer.com/" target="_blank" style="${linkStyle}">Multipass</a></li>
				<li>Y otros proyectos relacionados con los clientes de HeyLayer</li>
			</ul>
		</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672170591/portfolio/heylayer_gbz73s.png'
			}
		],
		url: 'https://heylayer.com/',
		techs: [
			{
				name: 'NextJS',
				isImage: true,
				icon: 'https://res.cloudinary.com/dpc15/image/upload/v1672174229/portfolio/next-js_ayrijc.svg'
			},
			{
				name: 'Stacks',
				isImage: true,
				icon: 'https://res.cloudinary.com/dpc15/image/upload/v1672175191/portfolio/stx_o5um1p.png'
			},
			{
				name: 'NodeJS',
				icon: FaBrandsNodeJs
			},
			{
				name: 'Redux',
				icon: SiRedux
			},
			{
				name: 'nginx',
				icon: SiNginx
			},
			{
				name: 'MySQL',
				icon: SiMysql
			},
			{
				name: 'Laravel',
				icon: FaBrandsLaravel
			},
			{
				name: 'Javascript',
				icon: SiJavascript
			},
			{
				name: 'Typescript',
				icon: SiTypescript
			},
			{
				name: 'Chakra UI',
				icon: SiChakraui
			}
		],
		clients: ['HeyLayer'],
		client_url: ['https://heylayer.com/'],
		subprojects: 5,
		type: 'fullstack',
		tags: [
			'heylayer',
			'nextjs',
			'stacks',
			'blockchain',
			'nodejs',
			'nginx',
			'mysql',
			'laravel',
			'sendgrid',
			'javascript',
			'typescript',
			'chakra',
			'ui',
			'fullstack',
			'redux'
		],
		order: 3
	},
	{
		title: 'Three43',
		slug: 'three43',
		description_en: '',
		description_es: '',
		short_description_es:
			'Proyecto fullstack para una marketplace de NFT, donde los artistas pueden vender sus obras digitales con comportamientos y reglas personalizadas.',
		short_description_en:
			'Fullstack project for a NFT marketplace, where artists can sell their digital art with custom behaviors and rules.',
		url: 'https://three43.com/',
		description_en: `
		<div
			style="
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 1rem;
				height: 200px;
				width: 600px;
				border-radius: 0.5rem;
				background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
			"
		>
			<img 
				style="height: 120px; width: 120px; border-radius: 100%" 
				src="https://res.cloudinary.com/dpc15/image/upload/v1672170714/portfolio/three43_dsqic9.jpg" 
				alt="Three43"
			/>
		</div>
		<h3 style="${subtitle}">About the project</h3>
		<p style="${paragraphStyle} margin-top: 1rem">
			<a style="${linkStyle}" href="https://www.three43.com/" target="_blank">Three43</a> is a NFT marketplace on the Solana blockchain, the app is available on the App Store and Google Play. Allows users to collect normal, animated and interactive NFTs. The app has also its Admin Panel that allows admins to manage the art available on the marketplace.
		</p>
		<h3 style="${subtitle}">My role</h3>
		<p style="${paragraphStyle} margin-top: 1rem">
			I worked as a <span style="${bold}">fullstack developer</span> and implemented a good amount of UI features and integrations in the app and also the admin dashboard. I was responsible of publishing the changes to the Admin Panel to production and have direct contact with the client in order to have an efficient communitaction and requirements implementation.</span>
		</p>

		<p style="${paragraphStyle} margin-top: 1rem">
			This platform was built using <span style="${bold}">React</span> and <span style="${bold}">Redux and Redux Saga</span> for the <span style="${bold}">GraphQL</span> request, as well as <span style="${bold}">Ant Design</span> for the UI components. The mobile app is built using <span style="${bold}">React Native</span>. I also give support to the backend platform built in <span style="${bold}">NodeJS</span> and <span style="${bold}">Express</span>.
		</p>

		<p style="${paragraphStyle} margin-top: 1rem">
			Some of the features I implemented were: 
			<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
				<li><span style="${bold}">GraphQL</span> request integration</li>
				<li><span style="${bold}">Redux</span> & <span style="${bold}">Redux Sagas</span> implementation</li>
				<li>Graphs with <span style="${bold}">Ant Design</span></li>
				<li>Backend services with <span style="${bold}">GraphQL<span></li>
				<li>Debugging and support to <span style="${bold}">React Native</span> app</li>
			</ul>
		</p>
		`,
		description_es: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; border-radius: 100%" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170714/portfolio/three43_dsqic9.jpg" 
					alt="Three43"
				/>
			</div>
			<h3 style="${subtitle}">Sobre el proyecto</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://www.three43.com/" target="_blank">Three43</a> es un marketplace de NFTs en la blockchain Solana, la app está disponible en la App Store y Google Play. Permite a los usuarios collecionar NFTs normales, animados e interactivos. La app cuesta con su panel de Administración en la que puede controlarse los NFTs disponibles en el marketplace.
			</p>
			<h3 style="${subtitle}">Mi rol</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				Trabaje cómo <span style="${bold}">fullstack developer</span> e implementé una buena cantidad de catacterísticas de UI y también integraciones en la app y el panel de administración. Fui responsable de publicar los cambios a producción para el panel de administración, asimismo tuve contacto directo con el cliente para la efficiente y ágil implementación de requerimientos.</span>
			</p>

			<p style="${paragraphStyle} margin-top: 1rem">
				A
			</p>

			<p style="${paragraphStyle} margin-top: 1rem">
				A
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Integración de request <span style="${bold}">GraphQL</span></li>
					<li>Implementación de<span style="${bold}">Redux</span> & <span style="${bold}">Redux Sagas</span></li>
					<li>Gráficas con <span style="${bold}">Ant Design</span></li>
					<li>Servicios Backend con <span style="${bold}">GraphQL<span></li>
					<li>Debugging y soporte a la aplicación con <span style="${bold}">React Native</span></li>
				</ul>
			</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672170714/portfolio/three43_dsqic9.jpg'
			}
		],
		techs: [
			{
				name: 'React Native',
				icon: FaBrandsReact
			},
			{
				name: 'NodeJS',
				icon: FaBrandsNodeJs
			},
			{
				name: 'PostgreSQL',
				icon: SiPostgresql
			},
			{
				name: 'GraphQL',
				icon: SiGraphql
			},
			{
				name: 'Typescript',
				icon: SiTypescript
			},
			{
				name: 'AntD',
				icon: SiAntdesign
			},
			{
				name: 'Redux',
				icon: SiRedux
			}
		],
		clients: ['Three43'],
		client_url: ['https://three43.com/'],
		type: 'fullstack',
		subprojects: 3,
		tags: [
			'three43',
			'react',
			'reactnative',
			'nodejs',
			'postgresql',
			'graphql',
			'typescript',
			'cloudinary',
			'antd',
			'fullstack',
			'mobile',
			'redux',
			'app',
			'ios',
			'android'
		]
	},
	{
		title: 'The Yacht Experiences',
		slug: 'the-yacht-experiences',
		description_en: '',
		description_es: '',
		short_description_es:
			'Plataforma de reservación de yaters, además de página web donde los usuarios pueden realizar reservaciones directamente',
		short_description_en:
			'Yacht reservation platform, in addition to a website where users can make direct reservations',
		description_en: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img ,
					style="height: 120px; width: 120px" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170774/portfolio/tye_rn8guu.jpg" 
					alt="The Yacht Experiences"
				/>
			</div>
			<h3 style="${subtitle}">About the project</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://theyachtexperiences.com/" target="_blank">The Yacht Experiences</a> is a yacht reservation platform, in addition to a website where users can make direct reservations. The platform has a dashboard where the admin can manage the reservations and the yachts available in the platform as well as create acces for resellers and different types of users like: captains, crew, chefs, etc.
			</p>
			<h3 style="${subtitle}">My role</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				I worked as a <span style="${bold}">fullstack developer</span> implemented a good amount of UI features as well as backend services. I was responsible for publishing the changes to production for the dashboard, as well as having direct contact with the client for the efficient and agile implementation of requirements. 
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				This platform is build with <span style="${bold}">React</span> and <span style="${bold}">NextJS</span> for the frontend, <span style="${bold}">Redux</span> for state managment, <span style="${bold}">Chakra UI</span> for the UI components, and <span style="${bold}">NodeJS</span> for the backend. The database is <span style="${bold}">MongoDB</span>.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Some of the features I implemented were: 
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li><span style="${bold}">Backend</span> services for different types of reports</li>
					<li><span style="${bold}">Stripe</span> API</li>
					<li>Roles and permissions managment</li>
					<li>Backend for the platform intended for users direct reservations</li>
					<li>Publish of changes to production</li>
				</ul>
			</p>
		`,
		description_es: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px;" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170774/portfolio/tye_rn8guu.jpg" 
					alt="The Yacht Experiences"
				/>
			</div>
			<h3 style="${subtitle}">Sobre el proyecto</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://theyachtexperiences.com/" target="_blank">The Yacht Experiences</a> es una plataforma de reserva de yates, además de una página web para que los usuarios puedan realizar reservaciones directamente. La plataforma tiene un dashboard de administración donde pueden realizarse diversas configuraciones, crear diferentes tipos de usuarios cómo: resellers, captains, crew, chefs, etc.
			</p>
			<h3 style="${subtitle}">Mi rol</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				Trabajé cómo <span style="${bold}">fullstack developer</span> e implementé una buena cantidad de features de UI así como servicios en el backend. Fui responsable de publicar los cambios a producción para el dashboard, así como tener contacto directo con el cliente para la implementación eficiente y ágil de requerimientos.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Esta plataforma está construida con <span style="${bold}">React</span> y <span style="${bold}">NextJS</span> para el frontend, <span style="${bold}">Redux</span> para el manejador de estado, <span style="${bold}">Chakra UI</span> para los componentes de UI, y <span style="${bold}">NodeJS</span> para el backend. La base de datos es <span style="${bold}">MongoDB</span>.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Some of the features I implemented were: 
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Servicios <span style="${bold}">Backend</span> para diferentes tipos de reportes</li>
					<li><span style="${bold}">Stripe</span> API</li>
					<li>Roles y permisos de usuarios</li>
					<li>Backend para la plataforma destinada a reservaciones directas de usuarios</li>
					<li>Publicación de cambios a producción</li>
				</ul>
			</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672170774/portfolio/tye_rn8guu.jpg'
			}
		],
		url: 'https://www.theyachtexperiences.com/',
		techs: [
			{
				name: 'React',
				icon: FaBrandsReact
			},
			{
				name: 'NodeJS',
				icon: FaBrandsNodeJs
			},
			{
				name: 'MongoDB',
				icon: SiMongodb
			},
			{
				name: 'Redux',
				icon: SiRedux
			},
			{
				name: 'Javascript',
				icon: SiJavascript
			},
			{
				name: 'Chakra UI',
				icon: SiChakraui
			},
			{
				name: 'Stripe',
				icon: FaBrandsStripeS
			}
		],
		clients: ['The Yacht Experiences'],
		client_url: ['https://www.theyachtexperiences.com/'],
		subprojects: 2,
		type: 'fullstack',
		tags: [
			'theyachtexperiences',
			'react',
			'nextjs',
			'nodejs',
			'mongodb',
			'javascript',
			'chakra',
			'ui',
			'stripe',
			'cloudinary',
			'fullstack',
			'redux'
		]
	},
	{
		title: 'Equinoble',
		slug: 'equinoble',
		description_en: '',
		description_es: ``,
		short_description_es:
			'Aplicación móvil, tipo red social relacionada al mercado ecuestre, donde los usuarios pueden compartir contenido, comprar y vender productos.',
		short_description_en:
			'Mobile app, social network related to the equestrian market, where users can share content, buy and sell products, and find services.',
		description_en: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170820/portfolio/equinoble_x5zvgn.png"
					alt="Equinoble"
				/>
			</div>
			<h3 style="${subtitle}">About the project</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://www.equinoble.com/" target="_blank">Equinoble</a> is a mobile app, social network related to the equestrian market, where users can share content, buy and sell products, and find services.
			</p>
			<h3 style="${subtitle}">My role</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				I worked as a <span style="${bold}">mobile developer</span> and focused on the development of the app using <span style="${bold}">React Native</span> and <span style="${bold}">React Context</span>. I also implemented some third party services like <span style="${bold}">Google Maps API</span>.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				This platform is built with <span style="${bold}">React Native</span>, <span style="${bold}">NodeJS</span> for the backend, and <span style="${bold}">Firebase</span> for the database.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Some of the features I implemented were: 
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li><span style="${bold}">Google Maps API</span></li>
					<li>Reverse Geocoding API</li>
					<li>Builds with <span style="${bold}">XCode</span></li>
					<li>Builds for Android</li>
					<li>Live chat with <span style="${bold}">Sockets</span></li>
				</ul>
			</p>
		`,
		description_es: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170820/portfolio/equinoble_x5zvgn.png"
					alt="Equinoble"
				/>
			</div>
			<h3 style="${subtitle}">Sobre el proyecto</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://www.equinoble.com/" target="_blank">Equinoble</a> es una aplicación móvil, tipo red social relacionada al mercado ecuestre, donde los usuarios pueden compartir contenido, comprar y vender productos, y encontrar servicios.
			</p>
			<h3 style="${subtitle}">Mi rol</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				Trabajé como <span style="${bold}">desarrollador móvil</span> y me enfocé en el desarrollo de la aplicación utilizando <span style="${bold}">React Native</span> y <span style="${bold}">React Context</span>. También implementé algunos servicios de terceros como <span style="${bold}">Google Maps API</span>.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Esta plataforma está construida con <span style="${bold}">React Native</span>, <span style="${bold}">NodeJS</span> para el backend, y <span style="${bold}">Firebase</span> para la base de datos.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				A
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li><span style="${bold}">Google Maps API</span></li>
					<li>Reverse Geocoding API</li>
					<li>Builds con <span style="${bold}">XCode</span></li>
					<li>Builds para Android</li>
					<li>Live chat utilizando <span style="${bold}">Sockets</span></li>
				</ul>
			</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672170820/portfolio/equinoble_x5zvgn.png'
			}
		],
		url: 'https://www.equinoble.com/',
		techs: [
			{
				name: 'React Native',
				icon: FaBrandsReact
			},
			{
				name: 'Javascript',
				icon: SiJavascript
			}
		],
		clients: ['Fortitude DEV'],
		client_url: ['https://www.fortitudedev.com/'],
		type: 'frontend',
		tags: [
			'equinoble',
			'fortitude',
			'fortitudedev',
			'react',
			'reactnative',
			'javascript',
			'frontend',
			'mobile',
			'app',
			'ios',
			'android'
		]
	},
	{
		title: 'Happy Hop',
		slug: 'happy-hop',
		description_en: '',
		description_es: '',
		short_description_es:
			'Aplicación movil para encontrar actividades y eventos en la ciudad de Nueva York.',
		short_description_en: 'Mobile app to find activities and events in New York City.',
		description_en: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170923/portfolio/happy-hop_vclm7q.svg"
					alt="HappyHop"
				/>
			</div>
			<h3 style="${subtitle}">About the project</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://happy-hop.webflow.io/" target="_blank">HappyHop</a> is a mobile app that allows users to find activities and events in New York City.
			</p>
			<h3 style="${subtitle}">My role</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				I worked as a <span style="${bold}">mobile developer</span> and focused on the development of the application using <span style="${bold}">React Native</span>. In this project I gave support to the team by tracking bugs and reporting them to the team.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				This platform is built with <span style="${bold}">React Native</span>, <span style="${bold}">NodeJS</span> for the backend using <span style="${bold}">Express</span>, and <span style="${bold}">GraphQL</span>.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Some of activities I was responsible for were::
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Debugging</li>
					<li>Tracking bugs</li>
					<li>Reporting bugs</li>
					<li>Manual testing</li>
					<li>Automated testing</li>
				</ul>
			</p>
		`,
		description_es: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170923/portfolio/happy-hop_vclm7q.svg"
					alt="HappyHop"
				/>
			</div>
			<h3 style="${subtitle}">Sobre el proyecto</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://happy-hop.webflow.io/" target="_blank">HappyHop</a> es una aplicación móvil que permite a los usuarios encontrar actividades y eventos en la ciudad de Nueva York.
			</p>
			<h3 style="${subtitle}">Mi rol</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				Trabajé como <span style="${bold}">desarrollador móvil</span> y me enfocé en el desarrollo de la aplicación utilizando <span style="${bold}">React Native</span>. En este proyecto brindé soporte al equipo rastreando errores y reportándolos al equipo.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Esta plataforma está construida con <span style="${bold}">React Native</span>, <span style="${bold}">NodeJS</span> para el backend utilizando <span style="${bold}">Express</span> y <span style="${bold}">GraphQL</span>.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				A
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Debugging</li>
					<li>Rastreo de errores</li>
					<li>Reporte de errores</li>
					<li>Pruebas manuales</li>
					<li>Pruebas automatizadas</li>
				</ul>
			</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672170923/portfolio/happy-hop_vclm7q.svg'
			}
		],
		url: 'https://happy-hop.webflow.io/',
		techs: [
			{
				name: 'React Native',
				icon: FaBrandsReact
			},
			{
				name: 'Typescript',
				icon: SiTypescript
			},
			{
				name: 'GraphQL',
				icon: SiGraphql
			}
		],
		clients: ['BKLYN'],
		client_url: ['#'],
		type: 'frontend',
		tags: [
			'happyhop',
			'bklyn',
			'react',
			'reactnative',
			'typescript',
			'frontend',
			'mobile',
			'app',
			'ios',
			'android',
			'graphql'
		]
	},
	{
		title: 'Segmenta Link',
		slug: 'segmenta-app',
		short_description_es:
			'Aplicación para repartidores de productos para el cliente Segmenta Group, la aplicación permite a los repartidores realizar sus actividades sin conexión a internet, y sincronizar sus datos más tarde.',
		short_description_en:
			'Application for product deliveries for the client Segments Group, the application allows deliverers to perform their activities without internet connection, and synchronize their data later.',
		description_en: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170973/portfolio/segmenta_dqeag2.png"
					alt="Segmenta Link"
				/>
			</div>
			<h3 style="${subtitle}">About the project</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://segmentagroup.com/" target="_blank">Segmenta Link</a> is an application for product deliveries for the clients of Segments Group, the application allows deliverers to perform their activities without internet connection, and synchronize their data later.
			</p>
			<h3 style="${subtitle}">My role</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				I worked as a <span style="${bold}">mobile developer</span> and focused on the development of the application using <span style="${bold}">React Native</span>. In this project I implemented different features and UI components, as well as forms and different screens.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				This platform is built with <span style="${bold}">React Native</span>, <span style="${bold}">NodeJS</span> for the backend using <span style="${bold}">Express</span>. The app uses <span style="${bold}">SQLite</span> for offline data storage and uses a process of synchronization to send the data to the server.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Some of features I implemented were:
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Offline data storage</li>
					<li>Offline data synchronization</li>
					<li>Forms</li>
					<li>UI components</li>
					<li>UI screens</li>
					<li>Debugging</li>
					<li>Manual testing</li>
					<li>Automated testing</li>
					<li>Calendar integration and data displaying</li>
					<li><span style="${bold}">SQL</span> queries</li>
				</ul>
			</p>
		`,
		description_es: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672170973/portfolio/segmenta_dqeag2.png"
					alt="Segmenta Link"
				/>
			</div>
			<h3 style="${subtitle}">Sobre el proyecto</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://segmentagroup.com/" target="_blank">Segmenta Link</a> es una aplicación para repartidores de productos para el cliente Segmenta Group, la aplicación permite a los repartidores realizar sus actividades sin conexión a internet, y sincronizar sus datos más tarde.
			</p>
			<h3 style="${subtitle}">Mi rol</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				Trabajé como <span style="${bold}">desarrollador móvil</span> y me enfocé en el desarrollo de la aplicación utilizando <span style="${bold}">React Native</span>. En este proyecto implementé diferentes características y componentes de UI, así como formularios y diferentes pantallas.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Esta plataforma está construida con <span style="${bold}">React Native</span>, <span style="${bold}">NodeJS</span> para el backend utilizando <span style="${bold}">Express</span>. La aplicación utiliza <span style="${bold}">SQLite</span> para el almacenamiento de datos sin conexión y utiliza un proceso de sincronización para enviar los datos al servidor.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Algunas de las características que implementé fueron:
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Almacenamiento de datos sin conexión</li>
					<li>Sincronización de datos sin conexión</li>
					<li>Formularios</li>
					<li>Componentes de UI</li>
					<li>Pantallas de UI</li>
					<li>Depuración</li>
					<li>Pruebas manuales</li>
					<li>Pruebas automatizadas</li>
					<li>Integración y visualización de datos de calendario</li>
					<li><span style="${bold}">SQL</span> queries</li>
				</ul>
			</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672170973/portfolio/segmenta_dqeag2.png'
			}
		],
		url: 'https://segmentagroup.com/',
		techs: [
			{
				name: 'React Native',
				icon: FaBrandsReact
			},
			{
				name: 'Typescript',
				icon: SiTypescript
			}
		],
		clients: ['Segmenta'],
		client_url: ['https://segmentagroup.com/'],
		subprojects: 1,
		type: 'frontend',
		tags: ['segmenta', 'reactnative', 'mobile', 'app', 'ios', 'android', 'typescript']
	},
	{
		title: 'Yebo',
		slug: 'yebo',
		short_description_es:
			'YeboVR es una plataforma de creación de ambientes 3D, permite crear experiencias de realidad virtual con la intención de crear experiencias de aprendizaje y entretenimiento.',
		short_description_en:
			'YeboVR is a 3D environment creation platform, it allows you to create virtual reality experiences with the intention of creating learning and entertainment experiences.',
		description_en: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672171054/portfolio/logo-yebo-sml-r_2x_dwrama.png"
					alt="Hello Yebo"
				/>
			</div>
			<h3 style="${subtitle}">About the project</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://www.helloyebo.com/" target="_blank">YeboVR</a> is a 3D environment creation platform, it allows you to create virtual reality experiences with the intention of creating learning and entertainment experiences. 
			</p>
			<h3 style="${subtitle}">My role</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				I worked as a <span style="${bold}">fullstack developer</span> and focused on the development of the platform using <span style="${bold}">Javascript</span> and <span style="${bold}">Docker</span> mainly. In this project I was responsible of reverse engineering the platform, fixing bugs, and improving the performance of the platform and build strategy.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				This platform is built with <span style="${bold}">Javascript</span> and a group of different <span style="${bold}">Docker</span> containers for orchestration. 
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Some of features I implemented were:
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Reverse engineering</li>
					<li>Checking and fixing bugs</li>
					<li><span style="${bold}">Bash</span> scripting</li>
					<li><span style="${bold}">Docker</span> orchestration</li>
					<li><span style="${bold}">Javascript</span> debbuging</li>
					<li><span style="${bold}">AWS EC2</span> deployment</li>
				</ul>
			</p>
		`,
		description_es: `
			<div
				style="
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 1rem;
					height: 200px;
					width: 600px;
					border-radius: 0.5rem;
					background-color: ${get(theme) !== 'dark-mode' ? '#e2e8f0' : '#e1e1e1'};
				"
			>
				<img 
					style="height: 120px; width: 120px; object-fit: contain" 
					src="https://res.cloudinary.com/dpc15/image/upload/v1672171054/portfolio/logo-yebo-sml-r_2x_dwrama.png"
					alt="HelloYebo"
				/>
			</div>
			<h3 style="${subtitle}">Sobre el proyecto</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				<a style="${linkStyle}" href="https://www.helloyebo.com/" target="_blank">YeboVR</a> es una plataforma de creación de ambientes 3D, permite crear experiencias de realidad virtual con la intención de crear experiencias de aprendizaje y entretenimiento.
			</p>
			<h3 style="${subtitle}">Mi rol</h3>
			<p style="${paragraphStyle} margin-top: 1rem">
				Trabajé como <span style="${bold}">desarrollador fullstack</span> y me enfocé en el desarrollo de la plataforma utilizando <span style="${bold}">Javascript</span> y <span style="${bold}">Docker</span> principalmente. En este proyecto fui responsable de hacer ingeniería inversa a la plataforma, corregir errores y mejorar el rendimiento de la plataforma y la estrategia de construcción.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Esta plataforma está construida con <span style="${bold}">Javascript</span> y un grupo de diferentes contenedores <span style="${bold}">Docker</span> para la orquestación.
			</p>
	
			<p style="${paragraphStyle} margin-top: 1rem">
				Algunas de las características que implementé fueron:
				<ul style="${ulStyle} margin-left: 1rem; align-self:flex-start">
					<li>Ingeniería inversa de la plataforma</li>
					<li>Verificación y corrección de errores</li>
					<li>Scripting en <span style="${bold}">Bash</span></li>
					<li>Orquestación con <span style="${bold}">Docker</span></li>
					<li>Depuración de <span style="${bold}">Javascript</span></li>
					<li>Despliegue en <span style="${bold}">AWS EC2</span></li>
				</ul>
			</p>
		`,
		assets: [
			{
				type: 'icon',
				url: 'https://res.cloudinary.com/dpc15/image/upload/v1672171054/portfolio/logo-yebo-sml-r_2x_dwrama.png'
			}
		],
		url: 'https://yebo.com/',
		techs: [
			{
				name: 'Javascript',
				icon: SiJavascript
			},
			{
				name: 'Docker',
				icon: FaBrandsDocker
			}
		],
		clients: ['Yebo VR'],
		client_url: ['https://yebo.com/'],
		subprojects: 2,
		type: 'frontend',
		tags: ['yebo', 'javascript', 'docker', 'fullstack']
	}
];

export default works;
