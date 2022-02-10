import Head from "next/head";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { wrapper } from "@redux/Store";
import { getGalleryImage } from "@api/GetPhoto";
import Pagination from "@composite/Pagination";
import Footer from "@composite/Footer";

const Home = ({ data }) => {
  const photos = useSelector((state) => state.imageUrlData.imageUrlData);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Fotoğraflar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/393978/ampproject.svg"
        />
      </Head>
      <div className="flex items-center justify-center align-bottom font-bold text-[40px] w-full h-[115px] bg-black text-white my-auto">
        <span> Fotoğraflar</span>
      </div>
      <div className="flex flex-wrap justify-center items-center sm:mx-[135px] sm:gap-7  mt-[95px] cursor-pointer">
        {currentPosts.map((item, key) => (
          <Link key={item.id} href={`/photos/${item.id}`}>
            <img
              className="w-[280px] h-[280px] md:w-[370px] md:h-[318px] mb-4 sm:mb-2"
              src={item.url}
              alt="photos"
            />
          </Link>
        ))}
      </div>
      <Pagination paginate={paginate} />
      <Footer />
    </>
  );
};

export default Home;

Home.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
  await store.dispatch(getGalleryImage());
});
