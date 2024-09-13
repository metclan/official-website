//import components
import ContactForm from "./components/form";
//import icons

export const metadata = {
  title: "Contact us | Metclan",
  description:
    "Do you want to build a build or revamp your website? Please reach out to us. We'd be glad to help you with UI/UX development, Blockchain development, Web Development. Contact us",
};

export default function Contact() {
  return (
    <section className="relative mb-20">
      <div className="hidden sm:block">
        <div className="h-44 w-2 bg-orange-500 rounded-full absolute left-2 top-44">
          <div className="h-16 w-2 bg-white rounded-t-full"></div>
        </div>
      </div>
      <div className="w-[90%] mx-auto mt-20 md:w-[1100px] bg-white p-6 rounded-lg sm:p-8 md:p-12">
        <h1 className="text-xl font-medium sm:text-4xl">
          Love to hear from you, <br />
          Get in touch 👋
        </h1>
        <ContactForm />
      </div>
    </section>
  );
}
