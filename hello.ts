import getPort from 'get-port';

async function main() {
    console.log('free port:', await getPort())
}

main().catch(console.error);