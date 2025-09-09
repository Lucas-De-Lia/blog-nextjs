import { getPosts } from "@/lib/data";
import Post from "../ui/components/Post";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="h-screen bg-white pt-20">
      <h1 className="text-3xl font-bold mt-2">Revisa los ultimos posts!</h1>
      <section className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10 ">
          {posts.map((post) => {
            if (post.published) {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  created={post.createdAt}
                />
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}
