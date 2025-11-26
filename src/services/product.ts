import prisma from "@/app/lib/prisma"


export const getAllProducts = async () => {
    return await prisma.product.findMany()
}
