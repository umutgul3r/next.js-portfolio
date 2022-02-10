import React, { useState } from "react";
import Head from "next/head";
import Footer from "@composite/Footer";
import { useDispatch } from "react-redux";
import { formDataAdd } from "@redux/actions/Actions";

const index = () => {
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const [form, setForm] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    window.scrollTo(0, 0);
    setStep(step + 1);
    e.preventDefault();
  };

  const postForm = () => {
    dispatch(formDataAdd(form));
  };

  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="https://www.svgrepo.com/show/393978/ampproject.svg"
        />
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center align-bottom font-bold text-[40px] md:text-[40px] w-full h-[115px] bg-black text-white my-auto">
          <span>Form</span>
        </div>
        {step == 1 && (
          <div className="mb-[431px] flex flex-col items-center justify-center mx-auto px-10 w-full">
            <h1 className="text-[35px]  font-bold mb-[61px] mt-[41px]">
              Adım 1
            </h1>
            <div className="w-full flex flex-col items-center h-[600px] ">
              <form onSubmit={handleSubmit}>
                <h2 className="formText sm:text-[25px] font-bold mb-[38px]">
                  Kişisel Bilgiler
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <input
                    onChange={handleChangeInput}
                    className="input mb-6"
                    name="name"
                    type="text"
                    placeholder="İsim"
                  />
                  <input
                    onChange={handleChangeInput}
                    className="input"
                    name="mail"
                    type="text"
                    placeholder="E-Posta Adresi"
                    className="input mb-6"
                  />
                </div>
                <div className="flex flex-col md:flex md:flex-row gap-8">
                  <input
                    onChange={handleChangeInput}
                    className="input"
                    name="phone"
                    type="text"
                    placeholder="Telefon"
                  />
                  <input
                    onChange={handleChangeInput}
                    className="input"
                    name="instagram_username"
                    type="text"
                    placeholder="Instagram Kullanıcı Adınız"
                  />
                </div>
                <h2 className="formText mt-[50px] font-bold sm:text-[25px] mb-9">
                  Hangi Ülkede Yaşıyorsun
                </h2>
                <div>
                  <select
                    name="ulke"
                    onChange={handleChangeInput}
                    className=" border-solid border border-black w-[300px] sm:w-[570px] p-[14px] sm:text-base"
                  >
                    <option value="turkiye">Türkiye</option>
                    <option value="almanya">Almanya</option>
                    <option value="ingiltere">İngiltere</option>
                  </select>
                </div>
                <h2 className="formText mt-[42px] font-bold sm:text-[25px] mb-[34px]">
                  Daha Önce React Kullandın mı ?
                </h2>
                <div className=" flex  gap-6  items-center ">
                  <label
                    onChange={handleChangeInput}
                    className="inline-flex items-center justify-center "
                    htmlFor="1"
                  >
                    <input
                      className="checkbox-checked checked:after:content-check checked:outline-green-500"
                      type="radio"
                      id="1"
                      name="React"
                      value="evet"
                      defaultChecked
                    />
                    <span className="ml-3">Evet</span>
                  </label>
                  <label
                    onChange={handleChangeInput}
                    className="inline-flex items-center justify-center"
                    htmlFor="2"
                  >
                    <input
                      className="checkbox-checked checked:after:content-uncheck checked:outline-red-500"
                      type="radio"
                      id="2"
                      name="Next.js"
                      value="Hayır"
                    />
                    <span className="ml-3">Hayır</span>
                  </label>
                </div>
                <h2 className="formText mt-[42px] font-bold sm:text-[25px] mb-[34px]">
                  Daha Önce Next.js Kullandın mı ?
                </h2>
                <div className=" flex  gap-6  items-center ">
                  <label
                    onChange={handleChangeInput}
                    className="inline-flex items-center justify-center"
                    htmlFor="3"
                  >
                    <input
                      className="checkbox-checked checked:after:content-check checked:outline-green-500"
                      type="radio"
                      id="3"
                      name="react kulladın mı?"
                      value="evet"
                    />
                    <span className="ml-3">Evet</span>
                  </label>
                  <label
                    onChange={handleChangeInput}
                    className="inline-flex items-center justify-center"
                    htmlFor="4"
                  >
                    <input
                      className="checkbox-checked checked:after:content-uncheck checked:outline-red-500"
                      type="radio"
                      id="4"
                      name="next.js kulladın mı?"
                      value="Hayır"
                      defaultChecked
                    />
                    <span className="ml-3">Hayır</span>
                  </label>
                </div>

                <h2 className="formText font-bold sm:text-[25px] mt-[51px] mb-[30px]">
                  Next.js Hakkındaki Görüşleriniz Nedir ?
                </h2>
                <textarea
                  onChange={handleChangeInput}
                  name="next.js hakkında görüşleriniz"
                  rows="4"
                  placeholder="Next.js Hakkında Görüşleriniz"
                  className="mb-[30px] w-[300px] sm:w-[570px] h-11 border border-black border-solid py-[14px] pl-[14px] text-[#000000] text-base "
                ></textarea>
                <div className="mb-[250px] h-72 z-10">
                  <button
                    type="submit"
                    className="bg-black text-white w-[300px] sm:w-[570px] py-3 mb-64"
                  >
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {step == 2 && (
          <div>
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <h1 className="font-bold mt-[53px]  text-[35px] mb-[42px]">
                Adım 2
              </h1>
              <p className="font-bold ">Bize Biraz Kendinden Bahseder misin?</p>
              <textarea
                onChange={handleChangeInput}
                className="mb-[30px] mt-16 w-[300px] sm:w-[570px] h-20 border border-black border-solid py-[14px] pl-[14px] text-[#000000] text-base "
                name="hakkında"
                placeholder="Birkaç Cümle Yeterli"
                id=""
                cols="60"
                rows="60"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white w-[300px] sm:w-[570px] py-3 mb-64"
                onClick={postForm}
              >
                Gönder
              </button>
            </form>
          </div>
        )}
        {step == 3 && (
          <div className="mt-[110px] mb-[1259px]">
            <span className="font-bold text-[35px]">Tamamlandı</span>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default index;
