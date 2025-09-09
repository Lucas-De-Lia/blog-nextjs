const { PrismaClient } = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  // Crear un usuario de prueba
  const user = await prisma.user.create({
    data: {
      email: "lucas@example.com",
      password: "123456", // en producción nunca guardes plain passwords
    },
  });

  // Crear posts de prueba
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "Mi primer post",
        content: "Este es el contenido del primer post.",
        published: true,
        authorId: user.id,
      },
      {
        title: "Explorando Next.js",
        content: "Aprendiendo a usar rutas dinámicas y SSR en Next.js.",
        published: true,
        authorId: user.id,
      },
      {
        title: "Prisma y bases de datos",
        content:
          "Cómo conectar Prisma con Postgres y crear relaciones entre tablas.",
        published: true,
        authorId: user.id,
      },
      {
        title: "Autenticación en Next.js",
        content: "Implementando login y registro seguro con JWT o NextAuth.",
        published: false,
        authorId: user.id,
      },
      {
        title: "Creando un blog moderno",
        content:
          "Estructurando un proyecto de blog con Next.js y Prisma paso a paso.",
        published: true,
        authorId: user.id,
      },
      {
        title: "Publicando posts dinámicos",
        content:
          "Cómo usar rutas dinámicas para mostrar contenido individual en Next.js.",
        published: true,
        authorId: user.id,
      },
      {
        title: "Imágenes en tus posts",
        content:
          "Adjuntando imágenes a tus posts y mostrando galerías con Prisma.",
        published: true,
        authorId: user.id,
      },
      {
        title: "Consejos de diseño",
        content:
          "Buenas prácticas para crear un blog limpio y responsive con TailwindCSS.",
        published: false,
        authorId: user.id,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
