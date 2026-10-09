// import { Eyebrow } from "../ui/Actions.jsx";

// export default function PageHero({ eyebrow, icon, title, text, image, tone = "midnight", caption = "Global DBA pathway" }) {
//   return (
//     <section className={`page-hero page-hero-${tone}`}>
//       <div className="page-hero-image">
//         <img src={image} alt="" />
//       </div>
//       <div className="container page-hero-grid">
//         <div className="page-hero-copy reveal visible">
//           <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
//           <h1>{title}</h1>
//           <p>{text}</p>
//           <span className="page-caption">{caption}</span>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Eyebrow } from "../ui/Actions.jsx";

export default function PageHero({
  eyebrow,
  icon,
  title,
  text,
  image,
  tone = "midnight",
  caption = "Global DBA pathway",
}) {
  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden page-hero-${tone}`}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Only image overlay - NO text background */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right Side Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center justify-end px-6 py-24 md:px-10 lg:px-16">
        <div className="w-auto max-w-xl lg:mr-8 xl:mr-16">
          
          <Eyebrow icon={icon}>{eyebrow}</Eyebrow>

          <h1 className="mt-6 text-4xl font-bold leading-tight !text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 !text-white md:text-xl">
            {text}
          </p>

          <span className="mt-8 block text-sm font-medium uppercase tracking-[0.18em] !text-white">
            {caption}
          </span>

        </div>
      </div>
    </section>
  );
}