<<<<<<< HEAD
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/Ordenamiento');
}
=======
import LoginPage   from "./login/page";

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginPage />
    </main>
  );
}
>>>>>>> dev/teamsys
