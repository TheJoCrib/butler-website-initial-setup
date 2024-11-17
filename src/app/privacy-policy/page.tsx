import React from 'react';
const PrivacyPolicy = () => {
  return (
    <div className="h-full">
      <div className="hidden sm:block w-full h-full overflow-y-auto">
        <div className="w-full md:mt-4 relative px-[40px] lg:px-[60px]">
          <div className="relative block w-full h-full">
            <div className="w-full mt-4">
              <div className="overflow-y-auto sm:h-[calc(100dvh-100px)] sm:border sm:border-primary rounded-[50px] ">
                <div className="px-12 md:px-8 py-5 md:py-9 text-start ">
                  <div className="md:mt-0">
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      Introduction
                    </p>
                    <p className="text-lightBlack font-medium sm:font-bold my-2 text-xs">
                      Welcome to Butler. This privacy policy outlines how we collect, use, and protect your personal
                      information.
                    </p>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      Information We Collect:
                    </p>
                    <div className="text-lightBlack font-medium sm:font-bold my-2 text-xs ">
                      <p>We collect the following types of information:</p>
                      <p>
                        <span className="text-primary font-light underline underline-offset-2 decoration-solid ">
                          Personal Identification Information,
                        </span>{' '}
                        this may include your name, email address, phone number, etc.
                      </p>
                      <p>This information is collected solely for the purpose of maintaining your account with us.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      Session Details:
                    </p>
                    <div className="text-lightBlack font-medium sm:font-bold sm:mb-2 text-xs ">
                      <p>We keep your session details for the following purposes:</p>
                      <p>&#45; Keeping you logged in to our app.</p>
                      <p>&#45; Determining whether you have opened the app for the first time.</p>
                      <p>
                        Please note that apart from these session details, we do not store any cookies or any other data
                        on your end.
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      How We Use Your Information:
                    </p>
                    <div className="text-lightBlack font-medium sm:font-bold sm:mb-2 text-xs">
                      <p>We use the information we collect in various ways, including to:</p>
                      <p>&#45; Provide, operate, and maintain our app</p>
                      <p>&#45; Improve, personalize, and expand our app</p>
                      <p>&#45; Understand and analyze how you use our app</p>
                      <p>&#45; Develop new products, services, features, and functionality</p>
                      <p>Please note that we &#42;do not use your information for advertising purposes&#42;.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      How We Share Your Information:
                    </p>
                    <p className="text-lightBlack font-medium sm:font-bold sm:mb-2 text-xs">
                      We do not sell, trade, or use your personal identification information for advertising. We do not
                      share your personal information with others.
                    </p>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      Changes To This Privacy Policy:
                    </p>
                    <div className="text-lightBlack font-medium sm:font-bold sm:sm:mb-2 text-xs">
                      <p>We may update our Privacy Policy from time to time.</p>
                      <p>We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                      Contact Us
                    </p>
                    <p className="text-lightBlack font-medium sm:font-bold text-xs">
                      If you have any questions about this Privacy Policy, please contact us at{' '}
                      <a href="mailto:help@butlerapp.info" className="text-primary">
                        help@butlerapp.info
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden h-full">
        <div className="w-full h-full ">
          <div className="relative h-full ">
            {/* Image positioned at the bottom */}
            {/* <div className="absolute bottom-0 w-full">
              <Image
                src="/assets/images/svg/grass_2.svg"
                alt="grass"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div> */}
            <div className=" h-[calc(100%-100px)]">
              <div className="h-full px-3 py-1 overflow-y-auto mt-6">
                <div className="w-full flex justify-center py-3">
                  <p className="text-primary font-semibold tracking-wider text-base">Privacy Policy</p>
                </div>
                <div>
                  <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                    Introduction
                  </p>
                  <p className="text-lightBlack font-medium sm:font-bold py-2 text-xs">
                    Welcome to Butler. This privacy policy outlines how we collect, use, and protect your personal
                    information.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                    Information We Collect:
                  </p>
                  <div className="text-lightBlack font-medium sm:font-bold py-2 text-xs ">
                    <p>We collect the following types of information:</p>
                    <p>
                      <span className="text-primary font-light underline underline-offset-2 decoration-solid ">
                        Personal Identification Information,
                      </span>{' '}
                      this may include your name, email address, phone number, etc.
                    </p>
                    <p>This information is collected solely for the purpose of maintaining your account with us.</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                    Session Details:
                  </p>
                  <div className="text-lightBlack font-medium sm:font-bold py-2 text-xs ">
                    <p>We keep your session details for the following purposes:</p>
                    <p>&#45; Keeping you logged in to our app.</p>
                    <p>&#45; Determining whether you have opened the app for the first time.</p>
                    <p>
                      Please note that apart from these session details, we do not store any cookies or any other data
                      on your end.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                    How We Use Your Information:
                  </p>
                  <div className="text-lightBlack font-medium sm:font-bold py-2 text-xs">
                    <p>We use the information we collect in various ways, including to:</p>
                    <p>&#45; Provide, operate, and maintain our app</p>
                    <p>&#45; Improve, personalize, and expand our app</p>
                    <p>&#45; Understand and analyze how you use our app</p>
                    <p>&#45; Develop new products, services, features, and functionality</p>
                    <p>Please note that we &#42;do not use your information for advertising purposes&#42;.</p>
                  </div>
                </div>
                <div>
                  <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-xs sm:text-sm">
                    How We Share Your Information:
                  </p>
                  <p className="text-lightBlack font-medium sm:font-bold py-2 text-xs">
                    We do not sell, trade, or use your personal identification information for advertising. We do not
                    share your personal information with others.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-sm">
                    Changes To This Privacy Policy:
                  </p>
                  <div className="text-lightBlack font-medium sm:font-bold py-2 text-xs">
                    <p>We may update our Privacy Policy from time to time.</p>
                    <p>We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                  </div>
                  <div>
                    <p className="text-primary font-semibold underline underline-offset-2 decoration-solid text-sm">
                      Contact Us
                    </p>
                    <p className="text-lightBlack font-medium sm:font-bold py-2 text-xs">
                      If you have any questions about this Privacy Policy, please contact us at{' '}
                      <a href="mailto:help@butlerapp.info" className="text-primary">
                        help@butlerapp.info
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
{
}

export default PrivacyPolicy;
