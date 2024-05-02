import { prisma } from "database";

export async function getTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {
    return { error };
  }
}

export async function createTodo(title: any) {
  try {
    const todo = await prisma.todo.create({ data: { title } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function getTodoById(id: any) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    return { todo };
  } catch (error) {
    return { error };
  }
}

export async function updateTodo(id: any, isCompleted: any) {
  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: { isCompleted },
    });
    return { todo };
  } catch (error) {
    return { error };
  }
}
