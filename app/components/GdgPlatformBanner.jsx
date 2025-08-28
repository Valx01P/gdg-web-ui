const GdgPlatformBanner = () => {
  return (
    <section className="flex justify-center items-center w-full h-[143px] max-[770px]:h-auto max-[770px]:py-6 bg-[#4285f4] text-white">
      <div className="flex flex-shrink justify-center items-baseline flex-col gap-3 max-w-[1170px] w-full h-full px-4 max-[770px]:px-2">
        <h2 className="font-bold text-[18px] max-[770px]:text-[16px]">The GDG Platform now integrates with Google Developer Program.</h2>
        <div className="max-[770px]:text-[14px] max-[770px]:leading-relaxed">The integration streamlines the process of receiving badges and benefits. To learn more, please visit developers.google.com/program. Should you encounter any difficulties signing in / up for the GDG Platform, please reach out to gdg-support@google.com.</div>
      </div>
    </section>
  )
}

export default GdgPlatformBanner