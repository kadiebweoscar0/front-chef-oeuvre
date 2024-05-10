import Login from "../component/login/login";

type LoginPageProps = {
  onLoginSuccess: () => void;
};

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  return (
    <div className="max-sm:m-0">
      <Login onLoginSuccess={onLoginSuccess} />
    </div>
  );
}
