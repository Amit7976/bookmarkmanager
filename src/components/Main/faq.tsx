import BlurFade from "../ui/blur-fade";

const FAQs = () => {
  const faq = [
    {
      question: "Is your platform free to use?",
      answer:
        "Yes, our platform is completely free to use. You can enjoy all the features without any charges.",
    },
    {
      question: "Is your platform available on mobile devices?",
      answer:
        "Absolutely! Our app is available on both iOS and Android. You can download it from the App Store or Google Play Store.",
    },
    {
      question: "Will you have a browser extension?",
      answer:
        "Yes! In the near future, we plan to launch a Chrome extension for seamless integration with your browser.",
    },
    {
      question: "How does your platform handle user data?",
      answer:
        "We value your privacy. All your data is stored locally on your device. We do not collect, use, or access your data in any way.",
    },
    {
      question: "Do I need an internet connection to use the app?",
      answer:
        "No, our platform works entirely offline. All your bookmarks are saved on your device, ensuring a fast and secure experience without relying on the internet.",
    },
    {
      question: "What makes your platform unique?",
      answer:
        "We offer features like Quick View, which lets you preview your bookmarks instantly, and an easy-to-use interface for organizing and managing your saved pages efficiently. Plus, your data always stays private and secure on your device.",
    },
    {
      question: "What is the purpose of this platform?",
      answer:
        "Our platform is designed to help you create and manage your personalized bookmarks. With our intuitive interface, you can easily add, organize, and share your favorite links across different devices and platforms.",
    },
  ];

  return (
    <section
      id="faqs"
      className="scroll-py-32 bg-white py-32 dark:bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
          <div className="text-center lg:text-left">
            <h2 className="text-title mb-4 text-3xl font-semibold md:text-5xl">
              Frequently <br className="hidden lg:block" /> Asked{" "}
              <br className="hidden lg:block" />
              Questions
            </h2>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-3xl lg:mx-0">
            {faq.map((faq, index) => (
              <BlurFade delay={0.15 * 2} inView key={index}>
                <div className="pb-6">
                  <h3 className="text-title font-medium text-xl">
                    {faq.question}
                  </h3>
                  <p className="text-lg text-gray-400 mt-4">{faq.answer}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQs;
