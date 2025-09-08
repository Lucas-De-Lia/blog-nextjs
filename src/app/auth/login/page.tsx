import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const LoginPage = () => {
  return (
    <main className="pt-20 w-screen h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm border-indigo-700">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Ininicar sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-600 cursor-pointer"
          >
            Iniciar sesión
          </Button>
          <Button variant="outline" className="w-full cursor-pointer">
            Iniciar sesión con Google
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default LoginPage;
