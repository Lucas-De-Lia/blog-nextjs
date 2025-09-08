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
  description,
  content,
  created,
}: {
  id: string;
  title: string;
  description: string;
  content: string;
  created: string;
}) => {
  return (
    <Card className="w-90 h-90 flex justify-center border-gray-300 hover:scale-105 transition transform">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p>
          Fecha de publicación:
          {format(parseISO(created), " dd 'de' MMMM 'de' yyyy", { locale: es })}
        </p>
        <Link href={`/posts/${id}`} className="text-blue-500 hover:underline">
          Leer más
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Post;
