import {spawnSync} from 'child_process';


const modules = ['array','browser','convert','date','dom','equal','file','number','object','string','uri'];

new Promise(async () => {
    const formIndexPackage = './src/package.json';
    const toIndexPackage = './dist/';

    for(const module of modules){
        const fromFile = `./src/${module}/package.json`;
        const toFile = `./dist/${module}`;
        await spawnSync('cp', [fromFile, toFile]);
    }
    await spawnSync('cp', [formIndexPackage, toIndexPackage]);
});
