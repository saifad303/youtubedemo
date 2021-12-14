function HeaderItem({ Icon, title }) {
  return (
    <div className="group w-12 sm:w-20 cursor-pointer flex flex-col items-center">
      <Icon height={35} className="mb-1 group-hover:animate-bounce" />
      <p className="tracking-wideset opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
