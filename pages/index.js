import React from "react";
import Header from "@composite/Header";
import Head from "next/head";
import {
  FacebookNegativeIcon,
  TwitterNegativeIcon,
  InstagramNegativeIcon,
  YoutubeNegativeIcon,
  FooterIcon,
} from "@allIcons/index";

const Home = () => {
  return (
    <div className="flex-col items-center ">
      <div className=" sm:mr-[135px] flex-col items-center sm:ml-[135px] sm:h-full  sm:m-0    pb-16">
        <Head>
          <title>Anasayfa | Ferhan Cihaner</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="shortcut icon"
            href="https://www.svgrepo.com/show/393978/ampproject.svg"
          />
        </Head>
        <div className="flex flex-col mr-4 xl:w-full xl:flex-row  md:shadow-ff">
          <img
            alt="photo"
            src="https://plchldr.co/i/469x673?&bg=FFA500&fc=000000&text=redx"
            className="w-full h-full ml-1  xl:rounded-bl-[12px] xl:rounded-tl-[12px] rounded-tl-[12px] xl-[500px]  xl:rounded-tr-[0px] rounded-tr-[12px]"
          />

          <div className="xl:ml-[94px] ml-1 pl-6 pr-10 w-full lg:text-[18px]">
            <div className="font-bold  text-[25px] lg:text-[50px] leading-[50px] w-full h-[122px] mt-[38px] lg:mt-[92px] mr-[99px]">
              Lorem ipsum dolor sit amet
            </div>
            <p className="lg:mt-[41px]">Vivamus a quam augue.</p>
            <div className="w-full text-sm mr-10 ">
              <p className="mt-[22px] mb-6">
                Curabitur et bibendum nisi. Pellentesque at congue lacus.
                Phasellus cursus felis in metus dapibus, at interdum magna
                tincidunt. Aliquam sed egestas nulla, quis placerat risus.
              </p>
              <p className="">
                Quisque in feugiat urna. Etiam nibh magna, rutrum vel
                pellentesque a, sollicitudin ut sapien. Fusce rutrum vitae
                sapien sit amet ornare. Proin pulvinar dui vitae mi varius
                hendrerit. Integer mollis mi quis finibus sodales. Vestibulum
                euismod, ipsum sed tincidunt faucibus, eros ex vehicula nibh, at
                sagittis magna nunc et diam. Duis risus nisl, accumsan id
                placerat vitae, porttitor a tellus. Aliquam tristique diam nisl,
                a posuere enim cursus in. Pellentesque et libero sed velit
                maximus hendrerit. Maecenas hendrerit nibh non sapien porttitor,
                et ultrices nisi commodo. Cras libero diam, pretium in
                pellentesque at, auctor molestie nulla. Phasellus lorem tellus,
                interdum id luctus at, porta non purus. Etiam dapibus sit amet
                turpis in pulvinar.
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer md:flex-col md:absolute md:top-[335px] md:left-[70px] flex gap-6 w-8 justify-center mt-9 mx-auto">
          <FacebookNegativeIcon />
          <TwitterNegativeIcon />
          <InstagramNegativeIcon />
          <YoutubeNegativeIcon />
        </div>
      </div>
    </div>
  );
};

export default Home;
