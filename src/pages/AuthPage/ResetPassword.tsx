import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { useNotifications } from "../../customHooks";
import { getToken } from "../../services/api/auth";
import { useResetPassword } from "../../services/customHook/auth";

const ResetPassword = () => {
  const { successAlert, errorAlert } = useNotifications();
  const queryParams = new URLSearchParams(location.search).get(
    "token"
  ) as string;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoading: isResetPasswordLoading, mutate: mutatePasswordReset } =
    useResetPassword({
      onSuccess: (_res: any) => {
        navigate("/auth");
        successAlert("Password reset successful");
        getToken(queryParams).then((res) => res);
      },
      onError: (err: any) => {
        errorAlert(
          err?.response?.data?.message || "Error occurred, please try again"
        );
      },
    });
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    mutatePasswordReset({
      password,
      emailaddress: email,
      token: queryParams,
    });
  };
  return (
    <Container>
      <div className="flex flex-row justify-center items-center h-screen w-[100%]">
        <div className="p-4 md:p-8  bg-light border-[1px] border-purple shadow-lg rounded-md">
          <h3 className="font-semibold mb-4 text-lg">Reset Password</h3>
          <div>
            <h4>Input the email you used to login</h4>
            <form
              onSubmit={handleSubmit}
              className="flex  md:mt-0 flex-col mt-4 gap-4 md:min-w-[400px] max-w-[500px]"
            >
              <div>
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@test.com"
                  className="h-48px text-sm"
                  type={"email"}
                />
              </div>
              <div>
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="h-48px text-sm"
                  type={"text"}
                />
              </div>
              <Button
                isDisabled={!email || isResetPasswordLoading}
                isLoading={isResetPasswordLoading}
                loadingText="Resetting"
              >
                Reset Password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResetPassword;
