import { surprisePrompts } from './../constants/index';


export function getRandomPrompt(prompt){
    const index = Math.floor(Math.random()*surprisePrompts.length);
    const randomPrompt = surprisePrompts[index];

    return randomPrompt;
}
