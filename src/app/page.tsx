import Post from "../ui/components/Post";

// lib/posts.ts
export const posts = [
  {
    id: "1",
    title: "Mi primer post", // card title
    excerpt: "Este es un extracto de mi primer post en el blog.", //card description
    //card content
    content:
      "Contenido completo de mi primer post. Aquí puedo poner texto, imágenes, código, etc.",
    published: true, //con esto verifico si se muestra o no
    createdAt: "2025-09-04T10:00:00Z",
  },
  {
    id: "2",
    title: "Aprendiendo Next.js",
    excerpt: "Next.js es un framework poderoso sobre React...",
    content:
      "Contenido completo del post sobre Next.js. Aquí podemos explicar SSR, SSG, y más.",
    published: true,
    createdAt: "2025-09-03T15:30:00Z",
  },
  {
    id: "3",
    title: "UI con Tailwind y shadcn",
    excerpt: "Cómo crear componentes bonitos usando TailwindCSS y shadcn/ui.",
    content:
      "Contenido completo del post explicando cómo usar los componentes de shadcn/ui.",
    published: true,
    createdAt: "2025-09-02T12:45:00Z",
  },
  {
    id: "4",
    title: "Mi primer post", // card title
    excerpt: "Este es un extracto de mi primer post en el blog.", //card description
    //card content
    content:
      "Contenido completo de mi primer post. Aquí puedo poner texto, imágenes, código, etc.",
    published: true, //con esto verifico si se muestra o no
    createdAt: "2025-09-04T10:00:00Z",
  },
  {
    id: "5",
    title: "Aprendiendo Next.js",
    excerpt: "Next.js es un framework poderoso sobre React...",
    content:
      "Contenido completo del post sobre Next.js. Aquí podemos explicar SSR, SSG, y más.",
    published: true,
    createdAt: "2025-09-03T15:30:00Z",
  },
  {
    id: "6",
    title: "UI con Tailwind y shadcn",
    excerpt: "Cómo crear componentes bonitos usando TailwindCSS y shadcn/ui.",
    content:
      "Contenido completo del post explicando cómo usar los componentes de shadcn/ui.",
    published: true,
    createdAt: "2025-09-02T12:45:00Z",
  },
];

export default function Home() {
  return (
    <main className="h-screen bg-white pt-20">
      <h1 className="text-3xl font-bold mt-2">Revisa los ultimos posts!</h1>
      <section className="flex flex-wrap justify-center items-center gap-4 p-10 ">
        {posts.map((post) => {
          if (post.published) {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.excerpt}
                content={post.content}
                created={post.createdAt}
              />
            );
          }
        })}
      </section>
    </main>
  );
}
