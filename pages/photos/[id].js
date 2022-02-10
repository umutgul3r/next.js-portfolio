import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { photoDetail } from "@redux/actions/Actions";
import Footer from "@composite/Footer";
import axios from "axios";
import { getPhotoDetail } from "./../../api/GetPhotoDetail";
import { wrapper } from "@redux/Store";

const PhotoDetail = () => {
  const photo = useSelector((state) => state.imageUrlData.photoDetail);

  return (
    <>
      <Head>
        <title>Fotoğraf {photo.id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/393978/ampproject.svg"
        />
      </Head>
      <div className="flex items-center flex-col justify-center">
        <div className="flex items-center justify-center align-bottom font-bold text-5xl w-full h-[155px]  bg-black text-white my-auto">
          <span> Fotoğraf Detay</span>
        </div>
        <div className="">
          <img
            className="w-[300px] h-[300px] mx-10 sm:w-[500px] sm:h-[500px] lg:w-[1171px] lg:h-[1006px] mt-[95px] mb-[490px]"
            src={photo.url}
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoDetail;

PhotoDetail.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ query }) => {
      await store.dispatch(getPhotoDetail(query.id));
    }
);
