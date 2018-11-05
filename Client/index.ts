const {prisma} = require('../Server/generated/prisma-client/index.ts');
async function main() {
    const newUser = await prisma.createUser({name:"Alice"});
    console.log(`Created New User ${newUser.id} ${newUser.name}`);
    const allUsers = await prisma.users();
    console.log(`All Users `, allUsers)
    
}
main().catch(e => console.error(e))