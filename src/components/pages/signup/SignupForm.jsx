import iconGoogle from "../../../assets/icon-Google.png";

const SignupForm = () => {
  return (
    <form className="w-full flex-1 flex flex-col gap-4 items-center">
      <h1>Create an account</h1>
      <p>Enter your detail below</p>
      <div className="input-field flex flex-col gap-2 relative w-full max-w-md">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          title="name"
          className="outline-none border px-3 py-2 text-sm w-full"
          placeholder="Enter name here"
        />
      </div>
      <div className="input-field flex flex-col gap-2 relative w-full max-w-md">
        <label htmlFor="email-Phone" className="">
          E-mail or Phone number
        </label>
        <input
          type="text"
          name="email-phone"
          id="email-phone"
          title="email-phone"
          className="outline-none border px-3 py-2 text-sm w-full"
          placeholder="Enter email id or phone number"
        />
      </div>
      <div className="input-field flex flex-col gap-2 relative w-full max-w-md">
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          title="password"
          className="outline-none border px-3 py-2 text-sm w-full"
          placeholder="Enter password"
        />
      </div>
      <button
        type="submit"
        className="bg-secondary2 text-white text-sm rounded py-2 hover:bg-secondary2/75 w-full max-w-md"
      >
        Create account
      </button>
      <button
        type="button"
        className="border flex items-center justify-center gap-3 text-sm rounded py-3 w-full max-w-md"
      >
        <img src={iconGoogle} alt="icon-google" className="w-5" />
        <span>Create account with google</span>
      </button>
      <p className="w-full max-w-md text-sm">
        I have already an account.{" "}
        <a href="/" className="text-blue-500 hover:underline-offset-2">
          Log in
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
