import fs from 'fs';

const folder = process.env.ICONS_FOLDER;

const res: { [key: string]: string } = {};

const iconFolder = `lib/${folder}/icons`;
fs.readdirSync(iconFolder).forEach((file) => {
  const iconName = file.split('.')[0];
  res[iconName] = fs.readFileSync(`${iconFolder}/${file}`, 'utf-8').replace(/(height|width)=".*?" /g, '');
});

fs.writeFileSync('./lib/components/iconList.json', JSON.stringify(res));
