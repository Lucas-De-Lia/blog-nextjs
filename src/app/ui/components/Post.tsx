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

const Post = ({
  title,
  description,
  content,
  created,
}: {
  title: string;
  description: string;
  content: string;
  created: string;
}) => {
  return (
    <Card className="w-80 h-80 flex justify-center">
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
        <a href="#" className="text-blue-500 hover:underline">
          Leer más
        </a>
      </CardFooter>
    </Card>
  );
};

export default Post;
