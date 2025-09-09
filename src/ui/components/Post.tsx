import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";

const Post = ({
  id,
  title,
  content,
  created,
}: {
  id: string;
  title: string;
  content: string;
  created: Date;
}) => {
  return (
    <Card className="w-70 h-70 flex justify-center border-indigo-700 hover:scale-105 transition transform">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p>
          Fecha de publicación:
          {format(created, " dd 'de' MMMM 'de' yyyy", { locale: es })}
        </p>
        <Link href={`/posts/${id}`} className="text-indigo-700 hover:underline">
          Leer más
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Post;
