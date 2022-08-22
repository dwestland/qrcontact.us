import prisma from '../src/lib/prisma'
import users from '../seed-data/users'
import blogs from '../seed-data/blogs'

console.log('%c prisma ', 'background: red; color: white', prisma)

async function main() {
  await prisma.user.createMany({
    data: users,
  })
  await prisma.blogs.createMany({
    data: blogs,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(0)
  })
  .finally(async () => prisma.$disconnect)
