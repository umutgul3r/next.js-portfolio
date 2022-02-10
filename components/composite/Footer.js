import React from "react";
import {
  FacebookNegativeIcon,
  TwitterNegativeIcon,
  InstagramNegativeIcon,
  YoutubeNegativeIcon,
  TelephoneIcon,
  MailIcon,
  HomeIcon,
} from "@allIcons/index";

export default function Footer() {
  return (
    <footer class="text-center mt-52 lg:text-left bg-gray-100 w-full text-gray-600">
      <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div class="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div class="flex justify-center gap-10">
          <FacebookNegativeIcon />
          <TwitterNegativeIcon />
          <InstagramNegativeIcon />
          <YoutubeNegativeIcon />
        </div>
      </div>
      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="">
            <h6
              class="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              Lorem Ipsum
            </h6>
            <p>
              Curabitur et bibendum nisi. Pellentesque at congue lacus. Aliquam
              sed egestas nulla, quis placerat risus.
            </p>
          </div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Products
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                Angular
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                React
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" class="text-gray-600">
                Laravel
              </a>
            </p>
          </div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                Pricing
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                Settings
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="text-gray-600">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" class="text-gray-600">
                Help
              </a>
            </p>
          </div>
          <div>
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <HomeIcon />
              <span className="ml-2">New York, NY 10012, US</span>
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <MailIcon />

              <span className="ml-2">info@example.com</span>
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <TelephoneIcon />
              <span className="ml-2">+ 01 234 567 88</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
