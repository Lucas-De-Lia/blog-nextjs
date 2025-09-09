import prisma from "../lib/db";
export async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: true,
      imagenes: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}
export async function getPostById(id: string) {
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      author: true,
      imagenes: true,
    },
  });
  return post;
}
