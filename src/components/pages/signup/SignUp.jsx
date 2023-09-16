import img from "../../../assets/dl.beatsnoop 1.png";
import SignupForm from "./SignupForm";

const SignUp = () => {
  return (
    <div className="py-10 ">
      <div className="container flex items-center gap-3">
        <div className="img-container w-[500px]">
          <img src={img} alt="dl.beatsnoop 1" className="w-full" />
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;
