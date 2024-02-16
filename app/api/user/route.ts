import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    return Response.json(users);
  } catch (error) {
    console.error("Failed to fetch users", error);
    return Response.json("Failed to fetch users");
  }
}

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
    return Response.json({ error: "Internal Server Error" });
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

    return Response.json({ editedUser });
  } catch (error) {
    console.log("Failed to edit user info", error);
    return Response.json({ error: "Internal Server Error" });
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
    return Response.json({ error: "Internal Server Error" });
  }
}
