import fs from 'fs';

const folder = process.env.ICONS_FOLDER;

const icons = Object.keys(JSON.parse(fs.readFileSync(`lib/${folder}/font/bootstrap-icons.json`, 'utf-8')));
const res: { [key: string]: string } = {};
for (const icon of icons) {
  res[icon] = fs.readFileSync(`lib/${folder}/icons/${icon}.svg`, 'utf-8').replace(/(height|width)=".*?" /g, '');
}
fs.writeFileSync('./lib/components/iconList.json', JSON.stringify(res));
