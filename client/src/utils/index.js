import { surprisePrompts } from './../constants/index';
import FileSaver from 'file-saver';


export function getRandomPrompt(prompt){
    const index = Math.floor(Math.random()*surprisePrompts.length);
    const randomPrompt = surprisePrompts[index];

    return randomPrompt;
}


export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.png`);
}