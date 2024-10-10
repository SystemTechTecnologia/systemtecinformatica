import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
          <p className="py-5 text-xl leading-normal text-red-500 lg:text-xl xl:text-2xl dark:text-gray-300 font-bold">
            <a href='https://asilosaojose.com.br/doacoes/'>
            Faça doação a uma entidade social - clique aqui
            </a>
            </p>
            <p className="py-5 text-xl leading-normal text-green-500 lg:text-xl xl:text-2xl dark:text-gray-300 font-bold">
            <a href='https://casasandreluiz.org.br/#doacoes'>
            Faça doação a uma entidade social - clique aqui
            </a>
            </p>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white ">
              assistencia tecnica
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 font-bold">
            Manutenção em :
            </p>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 font-bold">
            Celulares Notebooks e Pcs
            </p>
            

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://wa.me/message/BSA4YTAIUDRUL1"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-md ">
                Whatsapp Atendimento
              </a>
              <a
                href="https://quiz-game-systemtech.vercel.app/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-500 rounded-md ">
                Teste nosso Game Quizz - Clique Aqui
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            trabalhamos com <span className="text-indigo-600">varias</span>{" "}
            marcas e modelos
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AcerLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <MotorolaLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <SamsungLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <DellLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <HpLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <MicrosoftLogo/>
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <XiaomiLogo/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function AcerLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="33"
      fill="none"
      viewBox="15 15 110 33">
      <g fill="currentColor" clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          d="M113.418 18.73c-.354-.516-.776-.87-2.535-1.004-.46-.035-1.985-.085-4.548-.085-6.737 0-11.315 2.044-13.66 6.08.646-4.06-3.3-6.1-11.88-6.1-10.06 0-16.34 4.05-18.842 12.15-.93 3.013-1.025 5.48-.294 7.408l-2.374.16c-1.855.142-4.296.267-5.792.267-3.68 0-5.965-.617-6.85-1.852-.792-1.1-.714-3.168.2-6.17 1.536-4.973 5.34-7.212 11.418-7.212 3.15-.006 6.22.33 6.22.33V22.7c.422-.026.6-.466.562-.83l-.06-.475-.216-1.672c-.142-1.098-.96-1.75-2.454-1.952-1.365-.092-2.382-.153-3.877-.153h-.082c-7.945.018-13.482 2.627-16.6 7.825 1.15-5.217-2.523-7.826-11.033-7.826-4.73 0-8.12.133-10.178.402-1.577.196-2.538.85-2.886 1.958l-.673 2.148c-.123.394.067.588.57.588l.015-.003c.374-.047 1.813-.2 4.272-.386 3.253-.26 5.666-.4 7.252-.4 4.682 0 6.654 1.173 5.92 3.516-.16.52-.516.84-1.062.965-4.43.734-7.945 1.263-10.545 1.584-7.318.93-11.545 3.2-12.684 6.84-1.562 5 2.352 7.487 11.736 7.487 4.68 0 8.6-.275 11.786-.808 1.83-.307 2.758-.776 3.125-1.955L39.114 34c-.182 5.56 3.717 8.358 11.704 8.358 3.458 0 6.736-.114 8.284-.383 1.638-.284 2.42-.64 2.782-1.875l.354-1.753c1.7 2.652 5.435 3.98 11.198 3.98 6.078 0 9.623-.17 10.634-.5.847-.27 1.37-.707 1.557-1.315.036-.108.055-.224.074-.35l.728-2.362c.127-.4-.063-.606-.562-.6l-3.9.187c-2.597.142-4.63.215-6.098.215-2.763 0-4.657-.187-5.694-.564-1.537-.6-2.268-1.77-2.198-3.543l12.323-1.58c5.523-.706 9.22-2.406 11.1-5.1L87.23 41.37c-.08.275-.047.495.092.66.156.182.422.27.816.27h5.1c.9 0 1.2-.46 1.32-.846l4.508-15.697c.593-2.066 2.493-3.07 5.808-3.07l6.7.08a1.59 1.59 0 0 0 .112.004c.282 0 .8-.103 1.043-.785l.792-2.155c.15-.417.12-.786-.093-1.098zm-82.2 18.885c-1.594.25-3.88.374-6.868.374-5.183 0-7.45-1.046-6.794-3.14.472-1.5 1.83-2.405 4.086-2.708l11.8-1.584zm54.498-12.718c-.496 1.6-2.803 2.7-6.916 3.302l-9.823 1.394.25-.804c.813-2.646 1.97-4.45 3.464-5.408s3.924-1.437 7.293-1.437c4.43 0 6.34.987 5.733 2.952z"
          clipRule="evenodd"></path>
        <path
          fillRule="evenodd"
          d="M113.418 18.73c-.354-.516-.776-.87-2.535-1.004-.46-.035-1.985-.085-4.548-.085-6.737 0-11.315 2.044-13.66 6.08.646-4.06-3.3-6.1-11.88-6.1-10.06 0-16.34 4.05-18.842 12.15-.93 3.013-1.025 5.48-.294 7.408l-2.374.16c-1.855.142-4.296.267-5.792.267-3.68 0-5.965-.617-6.85-1.852-.792-1.1-.714-3.168.2-6.17 1.536-4.973 5.34-7.212 11.418-7.212 3.15-.006 6.22.33 6.22.33V22.7c.422-.026.6-.466.562-.83l-.06-.475-.216-1.672c-.142-1.098-.96-1.75-2.454-1.952-1.365-.092-2.382-.153-3.877-.153h-.082c-7.945.018-13.482 2.627-16.6 7.825 1.15-5.217-2.523-7.826-11.033-7.826-4.73 0-8.12.133-10.178.402-1.577.196-2.538.85-2.886 1.958l-.673 2.148c-.123.394.067.588.57.588l.015-.003c.374-.047 1.813-.2 4.272-.386 3.253-.26 5.666-.4 7.252-.4 4.682 0 6.654 1.173 5.92 3.516-.16.52-.516.84-1.062.965-4.43.734-7.945 1.263-10.545 1.584-7.318.93-11.545 3.2-12.684 6.84-1.562 5 2.352 7.487 11.736 7.487 4.68 0 8.6-.275 11.786-.808 1.83-.307 2.758-.776 3.125-1.955L39.114 34c-.182 5.56 3.717 8.358 11.704 8.358 3.458 0 6.736-.114 8.284-.383 1.638-.284 2.42-.64 2.782-1.875l.354-1.753c1.7 2.652 5.435 3.98 11.198 3.98 6.078 0 9.623-.17 10.634-.5.847-.27 1.37-.707 1.557-1.315.036-.108.055-.224.074-.35l.728-2.362c.127-.4-.063-.606-.562-.6l-3.9.187c-2.597.142-4.63.215-6.098.215-2.763 0-4.657-.187-5.694-.564-1.537-.6-2.268-1.77-2.198-3.543l12.323-1.58c5.523-.706 9.22-2.406 11.1-5.1L87.23 41.37c-.08.275-.047.495.092.66.156.182.422.27.816.27h5.1c.9 0 1.2-.46 1.32-.846l4.508-15.697c.593-2.066 2.493-3.07 5.808-3.07l6.7.08a1.59 1.59 0 0 0 .112.004c.282 0 .8-.103 1.043-.785l.792-2.155c.15-.417.12-.786-.093-1.098zm-82.2 18.885c-1.594.25-3.88.374-6.868.374-5.183 0-7.45-1.046-6.794-3.14.472-1.5 1.83-2.405 4.086-2.708l11.8-1.584zm54.498-12.718c-.496 1.6-2.803 2.7-6.916 3.302l-9.823 1.394.25-.804c.813-2.646 1.97-4.45 3.464-5.408s3.924-1.437 7.293-1.437c4.43 0 6.34.987 5.733 2.952z"
          clipRule="evenodd"></path>
        <path d="M113.418 18.73c-.354-.516-.776-.87-2.535-1.004-.46-.035-1.985-.085-4.548-.085-6.737 0-11.315 2.044-13.66 6.08.646-4.06-3.3-6.1-11.88-6.1-10.06 0-16.34 4.05-18.842 12.15-.93 3.013-1.025 5.48-.294 7.408l-2.374.16c-1.855.142-4.296.267-5.792.267-3.68 0-5.965-.617-6.85-1.852-.792-1.1-.714-3.168.2-6.17 1.536-4.973 5.34-7.212 11.418-7.212 3.15-.006 6.22.33 6.22.33V22.7c.422-.026.6-.466.562-.83l-.06-.475-.216-1.672c-.142-1.098-.96-1.75-2.454-1.952-1.365-.092-2.382-.153-3.877-.153h-.082c-7.945.018-13.482 2.627-16.6 7.825 1.15-5.217-2.523-7.826-11.033-7.826-4.73 0-8.12.133-10.178.402-1.577.196-2.538.85-2.886 1.958l-.673 2.148c-.123.394.067.588.57.588l.015-.003c.374-.047 1.813-.2 4.272-.386 3.253-.26 5.666-.4 7.252-.4 4.682 0 6.654 1.173 5.92 3.516-.16.52-.516.84-1.062.965-4.43.734-7.945 1.263-10.545 1.584-7.318.93-11.545 3.2-12.684 6.84-1.562 5 2.352 7.487 11.736 7.487 4.68 0 8.6-.275 11.786-.808 1.83-.307 2.758-.776 3.125-1.955L39.114 34c-.182 5.56 3.717 8.358 11.704 8.358 3.458 0 6.736-.114 8.284-.383 1.638-.284 2.42-.64 2.782-1.875l.354-1.753c1.7 2.652 5.435 3.98 11.198 3.98 6.078 0 9.623-.17 10.634-.5.847-.27 1.37-.707 1.557-1.315.036-.108.055-.224.074-.35l.728-2.362c.127-.4-.063-.606-.562-.6l-3.9.187c-2.597.142-4.63.215-6.098.215-2.763 0-4.657-.187-5.694-.564-1.537-.6-2.268-1.77-2.198-3.543l12.323-1.58c5.523-.706 9.22-2.406 11.1-5.1L87.23 41.37c-.08.275-.047.495.092.66.156.182.422.27.816.27h5.1c.9 0 1.2-.46 1.32-.846l4.508-15.697c.593-2.066 2.493-3.07 5.808-3.07l6.7.08a1.59 1.59 0 0 0 .112.004c.282 0 .8-.103 1.043-.785l.792-2.155c.15-.417.12-.786-.093-1.098zm-82.2 18.885c-1.594.25-3.88.374-6.868.374-5.183 0-7.45-1.046-6.794-3.14.472-1.5 1.83-2.405 4.086-2.708l11.8-1.584zm54.498-12.718c-.496 1.6-2.803 2.7-6.916 3.302l-9.823 1.394.25-.804c.813-2.646 1.97-4.45 3.464-5.408s3.924-1.437 7.293-1.437c4.43 0 6.34.987 5.733 2.952z"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M113.418 18.73c-.354-.516-.776-.87-2.535-1.004-.46-.035-1.985-.085-4.548-.085-6.737 0-11.315 2.044-13.66 6.08.646-4.06-3.3-6.1-11.88-6.1-10.06 0-16.34 4.05-18.842 12.15-.93 3.013-1.025 5.48-.294 7.408l-2.374.16c-1.855.142-4.296.267-5.792.267-3.68 0-5.965-.617-6.85-1.852-.792-1.1-.714-3.168.2-6.17 1.536-4.973 5.34-7.212 11.418-7.212 3.15-.006 6.22.33 6.22.33V22.7c.422-.026.6-.466.562-.83l-.06-.475-.216-1.672c-.142-1.098-.96-1.75-2.454-1.952-1.365-.092-2.382-.153-3.877-.153h-.082c-7.945.018-13.482 2.627-16.6 7.825 1.15-5.217-2.523-7.826-11.033-7.826-4.73 0-8.12.133-10.178.402-1.577.196-2.538.85-2.886 1.958l-.673 2.148c-.123.394.067.588.57.588l.015-.003c.374-.047 1.813-.2 4.272-.386 3.253-.26 5.666-.4 7.252-.4 4.682 0 6.654 1.173 5.92 3.516-.16.52-.516.84-1.062.965-4.43.734-7.945 1.263-10.545 1.584-7.318.93-11.545 3.2-12.684 6.84-1.562 5 2.352 7.487 11.736 7.487 4.68 0 8.6-.275 11.786-.808 1.83-.307 2.758-.776 3.125-1.955L39.114 34c-.182 5.56 3.717 8.358 11.704 8.358 3.458 0 6.736-.114 8.284-.383 1.638-.284 2.42-.64 2.782-1.875l.354-1.753c1.7 2.652 5.435 3.98 11.198 3.98 6.078 0 9.623-.17 10.634-.5.847-.27 1.37-.707 1.557-1.315.036-.108.055-.224.074-.35l.728-2.362c.127-.4-.063-.606-.562-.6l-3.9.187c-2.597.142-4.63.215-6.098.215-2.763 0-4.657-.187-5.694-.564-1.537-.6-2.268-1.77-2.198-3.543l12.323-1.58c5.523-.706 9.22-2.406 11.1-5.1L87.23 41.37c-.08.275-.047.495.092.66.156.182.422.27.816.27h5.1c.9 0 1.2-.46 1.32-.846l4.508-15.697c.593-2.066 2.493-3.07 5.808-3.07l6.7.08a1.59 1.59 0 0 0 .112.004c.282 0 .8-.103 1.043-.785l.792-2.155c.15-.417.12-.786-.093-1.098zm-82.2 18.885c-1.594.25-3.88.374-6.868.374-5.183 0-7.45-1.046-6.794-3.14.472-1.5 1.83-2.405 4.086-2.708l11.8-1.584zm54.498-12.718c-.496 1.6-2.803 2.7-6.916 3.302l-9.823 1.394.25-.804c.813-2.646 1.97-4.45 3.464-5.408s3.924-1.437 7.293-1.437c4.43 0 6.34.987 5.733 2.952z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function MotorolaLogo() {
  return (
   <svg height="31" viewBox="0 0 264.583 60.613" width="150" xmlns="http://www.w3.org/2000/svg"><g stroke-width=".452"><path d="m168.154 37.94c-4.607 0-8.356-3.75-8.356-8.356 0-4.607 3.749-8.356 8.356-8.356s8.355 3.749 8.355 8.356c0 4.652-3.794 8.355-8.355 8.355m0-21.68c-7.362 0-13.324 5.963-13.324 13.325s5.962 13.324 13.324 13.324 13.324-5.962 13.324-13.324c0-7.317-5.962-13.324-13.324-13.324m-16.305 22.357h1.084v5.013h-1.084c-5.736 0-10.434-4.697-10.434-10.433v-22.9h5.014v6.685h6.458v5.014h-6.458v11.246c0 2.936 2.439 5.375 5.42 5.375m61.064-.677c-4.607 0-8.355-3.75-8.355-8.356 0-4.607 3.748-8.356 8.355-8.356s8.356 3.749 8.356 8.356c-.045 4.652-3.794 8.355-8.356 8.355m0-21.68c-7.362 0-13.324 5.963-13.324 13.325s5.962 13.324 13.324 13.324 13.324-5.962 13.324-13.324c0-7.317-5.962-13.324-13.324-13.324m38.347 21.68c-4.608 0-8.356-3.75-8.356-8.356 0-4.607 3.748-8.356 8.355-8.356s8.356 3.749 8.356 8.356c0 4.652-3.794 8.355-8.356 8.355m0-21.68c-7.362 0-13.324 5.963-13.324 13.325s5.962 13.324 13.324 13.324c3.252 0 6.233-1.175 8.537-3.117v2.62h4.787v-12.421-.407c0-7.317-5.962-13.324-13.324-13.324m-56.006.001h2.394v5.013h-2.394c-2.98 0-5.42 2.44-5.42 5.42v15.899h-5.013v-15.899c0-5.736 4.697-10.433 10.433-10.433m34.327-6.64h5.013v32.881h-5.013zm-121.497 17.75v15.854h-5.014v-15.854c0-2.981-2.439-5.42-5.42-5.42-2.98 0-5.42 2.439-5.42 5.42v15.853h-5.013v-15.853c0-2.981-2.44-5.42-5.42-5.42s-5.42 2.439-5.42 5.42v15.853h-5.013v-15.853c0-5.737 4.697-10.434 10.388-10.434 3.207 0 6.007 1.4 7.949 3.659 1.942-2.259 4.742-3.659 7.95-3.659 5.735 0 10.433 4.697 10.433 10.434m16.711 11.247c-4.607 0-8.356-3.749-8.356-8.356s3.75-8.356 8.356-8.356c4.607 0 8.356 3.75 8.356 8.356 0 4.607-3.794 8.356-8.356 8.356m0-21.68c-7.407 0-13.37 5.962-13.37 13.324s5.963 13.324 13.325 13.324 13.324-5.962 13.324-13.324c.045-7.317-5.917-13.324-13.279-13.324m-94.488-16.937c-16.756 0-30.306 13.55-30.306 30.306s13.55 30.307 30.306 30.307c16.757 0 30.307-13.55 30.307-30.307 0-16.666-13.37-30.306-30.307-30.306"/><path d="m39.34 7.452-8.988 29.81-.046.045-.09-.045-8.988-29.81-11.608 38.166h2.168s1.446-6.64 3.84-10.614c1.31-2.168 3.297-3.93 5.961-3.885 1.897.046 3.523 1.084 5.556 3.93.451.632.993 1.671 1.535 2.665.859 1.67 1.581 3.387 1.581 3.387s1.897-4.336 3.117-6.052c2.032-2.846 3.658-3.884 5.555-3.93 2.665-.045 4.697 1.717 5.962 3.885 2.394 3.974 3.84 10.614 3.84 10.614h2.167z" fill="#fff"/></g></svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="31"
      fill="none"
      viewBox="0 0 150 31">
      <path
        fill="currentColor"
        d="M150 14.514v-2.647h-3.295V7.75l-.11.034-3.095.945-.061.019v3.118h-4.884V10.13c0-.81.181-1.428.538-1.841.355-.408.863-.615 1.51-.615.465 0 .947.11 1.431.325l.122.054V5.265l-.057-.021c-.452-.162-1.068-.244-1.83-.244-.96 0-1.834.209-2.596.622a4.428 4.428 0 00-1.78 1.757c-.419.751-.631 1.618-.631 2.578v1.91h-2.294v2.647h2.294v11.153h3.293V14.514h4.884v7.088c0 2.919 1.38 4.398 4.1 4.398a6.78 6.78 0 001.4-.155c.488-.105.822-.21 1.018-.322l.043-.026v-2.672l-.134.089c-.204.13-.428.227-.662.288a2.514 2.514 0 01-.65.11c-.638 0-1.11-.171-1.402-.51-.296-.34-.446-.938-.446-1.773v-6.515H150zm-24.387 8.799c-1.195 0-2.137-.396-2.801-1.175-.669-.783-1.007-1.9-1.007-3.317 0-1.464.338-2.61 1.007-3.406.664-.791 1.598-1.193 2.775-1.193 1.142 0 2.05.383 2.702 1.14.654.762.986 1.898.986 3.379 0 1.498-.312 2.65-.928 3.42-.612.764-1.531 1.152-2.734 1.152zm.147-11.779c-2.28 0-4.092.667-5.383 1.982-1.291 1.315-1.945 3.136-1.945 5.41 0 2.161.638 3.9 1.898 5.165 1.26 1.267 2.975 1.908 5.096 1.908 2.21 0 3.986-.676 5.277-2.009 1.29-1.332 1.945-3.135 1.945-5.356 0-2.195-.614-3.946-1.825-5.204-1.211-1.258-2.915-1.896-5.063-1.896zm-12.638 0c-1.551 0-2.834.396-3.815 1.177-.986.785-1.486 1.815-1.486 3.062 0 .647.108 1.223.32 1.711.214.49.545.921.985 1.283.436.359 1.11.735 2.001 1.117.75.308 1.31.569 1.665.774.347.201.594.404.733.6.135.193.204.457.204.783 0 .927-.696 1.378-2.128 1.378-.53 0-1.136-.11-1.8-.329a6.76 6.76 0 01-1.844-.932l-.136-.098v3.164l.05.023c.466.215 1.053.396 1.746.538a9.428 9.428 0 001.864.215c1.684 0 3.04-.398 4.028-1.183.996-.79 1.5-1.845 1.5-3.135 0-.93-.271-1.728-.807-2.37-.531-.639-1.454-1.225-2.74-1.743-1.026-.41-1.683-.751-1.954-1.013-.261-.253-.394-.61-.394-1.063 0-.401.164-.723.5-.983.339-.262.81-.395 1.401-.395.55 0 1.11.087 1.669.256.517.15 1.008.378 1.457.674l.134.092v-3.001l-.051-.022c-.378-.162-.875-.3-1.48-.412a9.053 9.053 0 00-1.622-.168zM99.236 23.313c-1.195 0-2.138-.396-2.802-1.175-.668-.783-1.006-1.899-1.006-3.317 0-1.464.338-2.61 1.007-3.406.664-.791 1.597-1.193 2.774-1.193 1.142 0 2.05.383 2.702 1.14.655.762.987 1.898.987 3.379 0 1.498-.313 2.65-.929 3.42-.611.764-1.53 1.152-2.733 1.152zm.147-11.779c-2.281 0-4.093.667-5.384 1.982-1.29 1.315-1.945 3.136-1.945 5.41 0 2.162.64 3.9 1.9 5.165C95.213 25.358 96.927 26 99.048 26c2.21 0 3.986-.676 5.277-2.009 1.29-1.332 1.945-3.135 1.945-5.356 0-2.195-.614-3.946-1.825-5.204-1.212-1.258-2.916-1.896-5.063-1.896l.001-.001zm-12.328 2.723v-2.39h-3.253v13.8h3.253v-7.06c0-1.2.273-2.186.811-2.93.531-.737 1.24-1.11 2.104-1.11.293 0 .622.049.978.144.353.095.608.198.759.306l.136.099v-3.273l-.052-.022c-.303-.129-.732-.194-1.274-.194-.818 0-1.55.263-2.176.779-.55.453-.947 1.075-1.251 1.85h-.035v.001zm-9.079-2.723c-1.492 0-2.823.32-3.955.95a6.4 6.4 0 00-2.61 2.676c-.594 1.143-.896 2.478-.896 3.966 0 1.304.293 2.5.871 3.555a6.114 6.114 0 002.435 2.456c1.035.573 2.231.863 3.556.863 1.546 0 2.866-.309 3.924-.917l.043-.024v-2.974l-.137.1a6.12 6.12 0 01-1.591.826c-.575.2-1.1.302-1.56.302-1.276 0-2.3-.399-3.044-1.185-.746-.786-1.123-1.891-1.123-3.281 0-1.4.394-2.533 1.17-3.369.775-.833 1.802-1.256 3.052-1.256 1.069 0 2.11.361 3.096 1.075l.137.098v-3.133l-.044-.025c-.371-.207-.877-.378-1.505-.508a9.005 9.005 0 00-1.819-.195zm-9.701.333h-3.253v13.8h3.253v-13.8zm-1.593-5.879c-.536 0-1.003.182-1.386.542a1.786 1.786 0 00-.581 1.354c0 .529.193.975.575 1.327.379.351.847.529 1.392.529a2.01 2.01 0 001.398-.528 1.729 1.729 0 00.582-1.328c0-.518-.19-.969-.566-1.339-.375-.37-.851-.557-1.414-.557zm-8.117 4.86v14.819h3.32V6.41H57.29l-5.84 14.302L45.782 6.41H41v19.256h3.12v-14.82h.107l5.985 14.82h2.354l5.892-14.818h.107z"
        ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 14H0V0h15v14zm17 0H17V0h15v14zM15 31H0V17h15v14zm17 0H17V17h15v14z"
        clipRule="evenodd"></path>
    </svg>
  );
}

function HpLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="35"
      fill="none"
      viewBox="30 0 350 350">
      <g>
      <path d="M0 0h352v352H0V0z" fill="#fff"/>
      <path d="M175.5 1.15c5.21-.03 10.4-1.21 15.57-.11 22.89 2.03 45.459 8.32 65.82 19.04 26.34 13.49 49 34 65.439 58.58 16.77 25 26.699 54.44 28.939 84.44-.369 7.94-.6 15.93.17 23.85-1.639 22.81-7.35 45.43-17.529 65.97-11.609 23.87-28.801 44.99-49.73 61.31-26.08 20.45-58.08 33.24-91.1 36.271-5.029.36-10.051 1.29-15.109.9-3.351-.221-6.781.85-10-.521 12.331-34.689 24.65-69.39 37.09-104.05 13.539-.25 27.09.09 40.629-.16 8.641-.3 17.181-5.561 20.021-13.96 11.45-32.24 23.19-64.39 34.28-96.77 1.82-4.89 2.83-10.34 1.38-15.46-1.96-6.49-7.899-11.08-14.28-12.8-5.539-1.72-11.391-1.09-17.09-1.19-17.38-.05-34.76.09-52.13-.08-.28.58-.851 1.73-1.13 2.3-28.141 79.04-56.23 158.101-84.48 237.1-29.02-7.53-56.06-22.61-77.62-43.45-25.97-24.851-44-57.9-50.67-93.23-2.09-10.61-2.85-21.41-3.43-32.18.47-22.43 4.15-44.96 12.6-65.82C33.75 58.44 81.44 16.95 136.88 5.09c-28.38 78.69-56.1 157.62-84.47 236.32 1.81.55 3.71.34 5.57.359 10.34-.05 20.69.021 31.03-.02 1.41-.01 1.26-1.97 1.85-2.87 12.46-35.18 25.07-70.31 37.57-105.47.75-2.18 1.45-4.38 2.45-6.45 6.48.11 12.96-.03 19.44.07-13.59 38.11-27.06 76.28-40.85 114.319 1.44.58 3.01.4 4.52.431 10.86-.101 21.72.069 32.58-.08 12.27-34.63 24.69-69.2 36.991-103.81 2.629-7.08 2.859-15.45-1.32-21.98-3.65-5.78-10.58-8.54-17.19-8.81-9.04-.27-18.09.02-27.14-.14C150.35 71.66 163.16 36.49 175.5 1.15z" 
      fill="#015294"/>
      <path d="M247.551 127.41c1.079-1.22 3-.48 4.439-.69 5.02.09 10.039-.04 15.061.07-11.691 33.37-23.931 66.55-35.431 99.99-6.5.46-13.05.18-19.56.14 11.87-33.15 23.62-66.35 35.491-99.51z" 
      fill="#015294"/>
      </g>
    </svg>
  );
}

function DellLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="136"
      height="30"
      viewBox="0 0 350 480">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#0083ca" fillRule="nonzero">
          <path d="M241.281 15.478h14.379C325.601 19.422 375.469 45.98 412.44 83.2c36.972 37.22 64.301 86.31 67.953 156.548v13.915c-3.551 71.361-31.363 118.459-67.953 156.78-38.437 36.4-85.688 63.979-157.012 67.488h-14.147c-69.932-3.952-119.809-30.499-156.78-67.721C47.53 372.99 20.2 323.901 16.548 253.663v-13.915c.182-.051.271-.194.232-.464 3.497-69.97 30.976-119.57 67.722-156.316 36.915-36.917 87.3-63.665 156.779-67.49zm-45.457 33.165c-13.78 3.69-26.138 8.376-37.339 13.915-34.094 16.859-62.21 40.979-81.869 71.896-19.188 30.178-35.802 68.999-33.396 119.904 1.517 32.093 8.84 59.089 20.408 82.101 22.845 45.437 57.625 78.916 105.758 99.264 23.802 10.062 53.295 17.12 86.507 15.538 31.857-1.517 59.462-8.678 82.333-20.177 44.824-22.538 80.149-57.312 99.728-105.293 9.902-24.271 17.39-52.31 15.771-86.276-3.064-64.343-29.237-107.971-63.778-141.241-17.091-16.462-37.671-30.465-61.923-40.586-23.531-9.82-54.164-17.101-86.972-15.539-16.129.768-31.344 2.776-45.228 6.494z"/><path d="M227.135 186.637c7.348 4.866 14.864 9.565 21.801 14.843-15.671 9.84-31.034 19.989-46.616 29.918 2.366 1.809 5.056 3.293 7.421 5.102 15.712-9.954 31.429-19.902 47.081-29.918 7.02 4.345 13.931 8.798 20.41 13.684-15.684 9.906-30.842 20.336-46.385 30.381 2.303 1.873 5.126 3.224 7.652 4.871 16.065-9.833 31.73-20.066 47.544-30.149v-32.934h34.789v65.635c9.817.54 20.642.077 30.847.23v30.847h-65.636v-31.311c-19.284 11.716-39.046 24.965-58.444 37.34-20.201-13.117-39.67-26.97-59.836-40.122-5.842 18.517-19.717 32.447-42.675 34.093-14.318 1.024-30.588-.765-47.08 0v-96.712c20.618 1.366 43.258-2.757 59.604 2.319 14.453 4.489 24.7 16.021 29.454 30.382 20.181-12.675 40.038-25.672 60.069-38.499zm-115.963 36.876v34.788c8.287.041 14.59.522 19.481-3.246 7.277-5.605 8.743-19.5 2.319-26.904-4.287-4.94-11.525-5.977-21.569-5.334-.268.039-.251.367-.231.696zM360.722 192.435h34.788v65.866h30.614v30.847h-65.636v-96.017c-.018-.329-.037-.657.234-.696z"></path>
          <path d="M241.281 15.478h14.379C325.601 19.422 375.469 45.98 412.44 83.2c36.972 37.22 64.301 86.31 67.953 156.548v13.915c-3.551 71.361-31.363 118.459-67.953 156.78-38.437 36.4-85.688 63.979-157.012 67.488h-14.147c-69.932-3.952-119.809-30.499-156.78-67.721C47.53 372.99 20.2 323.901 16.548 253.663v-13.915c.182-.051.271-.194.232-.464 3.497-69.97 30.976-119.57 67.722-156.316 36.915-36.917 87.3-63.665 156.779-67.49zm-45.457 33.165c-13.78 3.69-26.138 8.376-37.339 13.915-34.094 16.859-62.21 40.979-81.869 71.896-19.188 30.178-35.802 68.999-33.396 119.904 1.517 32.093 8.84 59.089 20.408 82.101 22.845 45.437 57.625 78.916 105.758 99.264 23.802 10.062 53.295 17.12 86.507 15.538 31.857-1.517 59.462-8.678 82.333-20.177 44.824-22.538 80.149-57.312 99.728-105.293 9.902-24.271 17.39-52.31 15.771-86.276-3.064-64.343-29.237-107.971-63.778-141.241-17.091-16.462-37.671-30.465-61.923-40.586-23.531-9.82-54.164-17.101-86.972-15.539-16.129.768-31.344 2.776-45.228 6.494z"/><path d="M227.135 186.637c7.348 4.866 14.864 9.565 21.801 14.843-15.671 9.84-31.034 19.989-46.616 29.918 2.366 1.809 5.056 3.293 7.421 5.102 15.712-9.954 31.429-19.902 47.081-29.918 7.02 4.345 13.931 8.798 20.41 13.684-15.684 9.906-30.842 20.336-46.385 30.381 2.303 1.873 5.126 3.224 7.652 4.871 16.065-9.833 31.73-20.066 47.544-30.149v-32.934h34.789v65.635c9.817.54 20.642.077 30.847.23v30.847h-65.636v-31.311c-19.284 11.716-39.046 24.965-58.444 37.34-20.201-13.117-39.67-26.97-59.836-40.122-5.842 18.517-19.717 32.447-42.675 34.093-14.318 1.024-30.588-.765-47.08 0v-96.712c20.618 1.366 43.258-2.757 59.604 2.319 14.453 4.489 24.7 16.021 29.454 30.382 20.181-12.675 40.038-25.672 60.069-38.499zm-115.963 36.876v34.788c8.287.041 14.59.522 19.481-3.246 7.277-5.605 8.743-19.5 2.319-26.904-4.287-4.94-11.525-5.977-21.569-5.334-.268.039-.251.367-.231.696zM360.722 192.435h34.788v65.866h30.614v30.847h-65.636v-96.017c-.018-.329-.037-.657.234-.696z"></path>
        </g>
      </g>
    </svg>
  );
}

function SamsungLogo() {
  return (
    <svg width="180px" height="61px" viewBox="0 -67.06 200.777 200.777" xmlns="http://www.w3.org/2000/svg"><path d="M200.653 15.87C197.923.194 150.822-4.698 95.446 4.943 72.19 8.994 51.191 14.969 34.838 21.691c2.512.055 4.375.631 5.507 1.76.885.886 1.332 2.102 1.332 3.617v1.555h-5.43V27.25c0-1.144-.686-1.853-1.901-1.853-1.021 0-1.65.461-1.853 1.369a2.63 2.63 0 0 0 .022 1.084c.581 2.375 8.644 3.85 9.521 8.233.115.564.271 1.771.025 3.498-.503 3.535-3.609 4.899-7.563 4.899-5.519 0-7.761-2.614-7.761-6.218l.004-1.705h5.821l.003 2.124c0 1.194.868 1.853 2.05 1.853 1.12 0 1.774-.451 2-1.373.105-.424.151-1.049-.04-1.527-1.077-2.702-8.606-3.964-9.533-8.333-.207-.982-.224-1.818-.052-2.875a5.606 5.606 0 0 1 .482-1.511C9.333 33.398-1.278 42.732.124 50.791c2.733 15.678 49.833 20.565 105.208 10.924 24.342-4.237 46.226-10.58 62.881-17.688-.241.012-.475.038-.725.038-3.79 0-7.174-1.42-7.525-5.294-.062-.705-.073-1-.075-1.402l.002-8.906c0-.384.045-1.058.088-1.406.449-3.744 3.409-5.288 7.512-5.288 3.175 0 7.068.911 7.496 5.291.057.55.051 1.137.05 1.33v.841h-5.484v-1.255c0-.027-.008-.496-.068-.789-.09-.447-.471-1.483-2.033-1.483-1.543 0-1.943 1.038-2.043 1.484-.057.245-.084.597-.084.987v9.679c-.005.336.012.599.046.792.027.152.304 1.486 2.1 1.486 1.783 0 2.059-1.334 2.084-1.486.047-.262.053-.574.051-.792v-2.999h-2.158v-3.23h7.631v5.746c-.002.391-.008.68-.074 1.4-.092 1.016-.412 1.876-.914 2.611 17.663-8.387 27.947-17.57 26.563-25.512zM57.065 43.653l-2.778-18.876h-.1l-2.849 18.876h-5.855l3.938-21.317h9.553l3.914 21.317h-5.823zm28.162 0l-.129-18.511h-.094l-3.445 18.511h-5.495l-3.428-18.511h-.098l-.125 18.511h-5.445l.472-21.317h8.758l2.55 15.835h.125l2.557-15.835h8.754l.47 21.317h-5.427zm25.641-4.131c-.586 4.129-4.631 4.851-7.49 4.851-4.747 0-7.683-2.029-7.683-6.158l.003-1.684h5.751l.004 2.098c0 1.139.803 1.836 2.043 1.836 1.106 0 1.754-.444 1.979-1.356.104-.425.147-1.045-.037-1.513-1.06-2.651-8.53-3.95-9.438-8.251-.208-.975-.223-1.803-.052-2.849.632-3.899 4.374-4.709 7.386-4.709 2.694 0 4.655.588 5.831 1.764.877.878 1.321 2.083 1.321 3.582v1.538h-5.378v-1.357c0-1.162-.721-1.834-1.88-1.834-1.028 0-1.65.457-1.854 1.356a2.59 2.59 0 0 0 .026 1.072c.576 2.364 8.568 3.809 9.443 8.151.113.554.268 1.743.025 3.463zm19.918-1.937c.008.4-.031 1.199-.053 1.404-.328 3.512-2.84 5.297-7.447 5.297-4.625 0-7.139-1.785-7.465-5.297a16.957 16.957 0 0 1-.053-1.4V22.331h5.502V38.07c-.006.352.012.612.047.793.068.35.416 1.486 1.969 1.486 1.548 0 1.896-1.137 1.969-1.482.031-.186.05-.459.05-.798V22.331h5.481v15.254zm23.705 5.851h-7.656l-5.139-16.885h-.086l.285 16.885h-5.336v-21.1h7.977l4.75 16.22h.111l-.281-16.22h5.375v21.1z" fill="#2d4f9e"/></svg>
  );
}

function XiaomiLogo() {
  return (
    <svg fill="#000000" width="31px" height="150px" viewBox="0 0 24A 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Xiaomi icon</title><path d="M19.96 20a.32.32 0 0 1-.32-.32V4.32a.32.32 0 0 1 .32-.32h3.71a.32.32 0 0 1 .33.32v15.36a.32.32 0 0 1-.33.32zm-6.22 0s-.3-.09-.3-.32v-9.43A2.18 2.18 0 0 0 11.24 8H4.3c-.4 0-.3.3-.3.3v11.38c0 .27-.3.32-.3.32H.33a.32.32 0 0 1-.33-.32V4.32A.32.32 0 0 1 .33 4h12.86a4.28 4.28 0 0 1 4.25 4.27l.01 11.41a.32.32 0 0 1-.32.32zm-6.9 0a.3.3 0 0 1-.3-.3v-9a.3.3 0 0 1 .3-.3h3.77a.3.3 0 0 1 .29.3v9a.3.3 0 0 1-.3.3z"/></svg>
  );
}

export default Hero;