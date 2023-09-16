const CategoriesList = () => {
  const classes = `px-3 py-2 rounded hover:bg-gray-500/10 cursor-default text-sm`;
  return (
    <ul className="border-r p-2 w-60">
      <li className={classes}>Woman&apos;s Fashion</li>
      <li className={classes}>Man&apos;s Fashion</li>
      <li className={classes}>Electronics</li>
      <li className={classes}>Home & Lifestyle</li>
      <li className={classes}>Medicine</li>
      <li className={classes}>Sports & Outdoor</li>
      <li className={classes}>Baby&apos;s & Toys</li>
      <li className={classes}>Groceries and pets</li>
      <li className={classes}>Healthy & Beauty</li>
    </ul>
  );
};

export default CategoriesList;
