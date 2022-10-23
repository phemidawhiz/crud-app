import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { useNotifications } from "../../customHooks";
import { useInitiatePasswordReset } from "../../services/customHook/auth";

const ForgotPassword = () => {
  const { successAlert } = useNotifications();
  const [email, setEmail] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { data: _, isLoading } = useInitiatePasswordReset(emailId, {
    onSuccess: (res: any) => {
      navigate("/reset-password");
      successAlert("Password reset link has been sent to your email");
      console.log(res);
    },
  });
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setEmailId(email);
  };
  return (
    <Container>
      <div className="flex flex-row justify-center items-center h-screen w-[100%]">
        <div className="p-4 md:p-8  bg-light border-[1px] border-purple shadow-lg rounded-md">
          <h3 className="font-semibold mb-4 text-lg">Forgot Password</h3>
          <div>
            <h4>Input the email you used to login</h4>
            <form
              onSubmit={handleSubmit}
              className="flex md:flex-row md:mt-0 flex-col mt-4 gap-4 md:min-w-[400px] max-w-[500px]"
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@test.com"
                className="h-48px"
                type={"email"}
              />
              <Button isDisabled={!email} loadingText="Sending">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
