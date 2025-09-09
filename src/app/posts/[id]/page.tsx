import { getPostById } from "@/lib/data";
interface PostPageProps {
  params: { id: string };
}
const PostsPage = async ({ params }: PostPageProps) => {
  const { id } = params;
  const post = await getPostById(id);
  return (
    <main className="pt-20">
      <h1 className="text-4xl font-bold text-center">{post?.title}</h1>
      <hr className="mt-4 border-1 border-indigo-700" />
      <p className="mt-4"> {post?.content} </p>
    </main>
  );
};

export default PostsPage;
