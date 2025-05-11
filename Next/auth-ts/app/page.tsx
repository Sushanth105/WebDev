import { SignIn } from "./components/signin-button";
import UserAvatar from "./components/UserAvatar";
import { SignOut } from "./components/signout-button";

export default function Home() {
  return (
    <div>
      <SignIn/>
      <SignOut/>
      <UserAvatar/>
    </div>
  );
}
