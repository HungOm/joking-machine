import './style.css'
import { VoiceRSS } from './vocie.min';
const button = document.querySelector('#button') as HTMLButtonElement;
const audio = document.querySelector('#audio') as HTMLAudioElement;
const jokeUrl:string = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist,explicit";


async function getJoke(url:string){
  let joke:string|undefined = '';
  try{
    const response = await fetch(url);
    const data = await response.json();
  
    if(data.setup){
      joke = `${data.setup} ... ${data.delivery}`
    }else{
      joke = data.joke
    }
    await tellJoke(joke);
      //disable button
      toggleButton()
  }catch(err){
    console.log(err)
  }
}


//toggle the button

function toggleButton():void{
  button.disabled = !button.disabled;

}
async function tellJoke(joke:string|undefined):Promise<void>{
  if(joke==undefined){
    joke = "Sorry, I cant get my joke now for some unattainable reason"
  }
  VoiceRSS.speech({
    key: 'c0480b4cd0ac4d5998137c7756129a81',
    src: joke,
    hl: 'en-us',
    v: 'Mary',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
    audio:audio
});
}
button


button.addEventListener('click',()=>{
    
      getJoke(jokeUrl)
})

// window.addEventListener('load',()=>{
//   getJoke(jokeUrl)

// })

audio.addEventListener('ended',toggleButton)
