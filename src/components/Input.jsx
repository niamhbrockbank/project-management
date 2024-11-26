export default function Input({ textarea, ...props }) {
  const classes =
    "w-full text-2xl font-bold text-stone-700 my-4 bg-inherit focus:outline-stone-200";

  if (textarea) {
    return <textarea className={classes} {...props} />;
  }

  return <input className={classes} {...props} />;
}
