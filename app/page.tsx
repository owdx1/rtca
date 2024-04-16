import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./lib/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "./components/forms/LoginForm";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if(session) {
    redirect("/chat")
  }


  return (
    <div className="h-screen">
      <LoginForm />
    </div>
  );
}
