import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, job, age } = await req.json();
    const ageAsNumber = Number(age);

    const newUser = await prisma.user.create({
      data: {
        name,
        job,
        age: ageAsNumber,
      },
    });

    return Response.json(newUser);
  } catch (error) {
    console.error(error);
    Response.json({ error: "Internal Server Error" });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, job, age } = await req.json();
    const ageAsNumber = Number(age);

    const editedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        job,
        age: ageAsNumber,
      },
    });

    return Response.json({ message: "Deu certo", editedUser });
  } catch (error) {
    console.log("Failed to edit user info", error);
  }
}

export async function DELETE(req: Request) {
  try {
    const userId = await req.json();
    await prisma.user.delete({
      where: { id: userId },
    });

    return Response.json("User deleted successfully");
  } catch (error) {
    console.error(error);
    Response.json({ error: "Internal Server Error" });
  }
}
