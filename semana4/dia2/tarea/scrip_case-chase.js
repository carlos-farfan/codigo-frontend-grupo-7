let seleccionar = document.querySelector("select");
let titulo = document.querySelector('h1');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerCancion);

function establecerCancion() {
    let elegir = seleccionar.value

  case "oasis":
    titulo.textContent = "Don't Go Away"
    parrafo.textContent = "A cold and frosty morning there's not a lot to say About the things caught in my mind. And as the day was dawning, my plane flew away. With all the things caught in my mind. And I wanna be there when you're... Coming down And I wanna be there when you hit the ground (Chorus): So don't go away. Say what you say Say that you'll stay.  Forever and a day... in the time of my life. Cos I need more time, yes I need more time. Just to make things right Damn my situation and the games I have to play With all the things caught in my mind Damn my education I can't find the words to say About the things caught in my mind And I wanna be there when you're... Coming down And I wanna be there when you hit the ground Me and you what's going on?All we seem to know is how to show The feelings that are wrong (Chorus)" 
  break;
  
  case "u2":
    titulo.textContent = "Beautiful Day";
    parrafo.textContent = "The heart is a bloom, Shoots up through the stony ground, There's no room, No space to rent in this town, You're out of luck, And the reason that you had to care, The traffic is stuck, And you're not moving anywhere. You thought you'd found a friend, To take you out of this place, Someone you could lend a hand, In return for grace, It's a beautiful day, Sky falls, you feel like, It's a beautiful day, Don't let it get away. You're on the road, But you've got no destination, You're in the mud, In the maze of her imagination. You love this town, Even if that doesn't ring true, You've been all over, And it's been all over you. It's a beautiful day, Don't let it get away, It's a beautiful day. Touch me, Take me to that other place, Teach me. I know I'm not a hopeless case. See the world in green and blue, See China right in front of you, See the canyons broken by cloud, See the tuna fleets clearing the sea out, See the Bedouin fires at night, See the oil fields at first light, And see the bird with a leaf in her mouth, After the flood all the colors came out" 
  break;


  case "ed-sheeran":
    titulo.textContent = "Thinking Out Loud";
    parrafo.textContent = "When your legs don't work like they used to before, And I can't sweep you off of your feet, Will your mouth still remember the taste of my love, Will your eyes still smile from your cheeks, Darlin' I will, Be lovin' you, Till we're seventy, Baby my heart, Could still fall as hard, At twenty three, I'm thinkin' bout how, People fall in love in mysterious ways, Maybe just the touch of a hand, Well, me I fall in love with you every single day, And I just wanna tell you I am, So honey now, Take me into your lovin' arms, Kiss me under the light of a thousand stars, Place your head on my beating heart, I'm thinking out loud, Maybe we found love right where we are, When my hair's all but gone and my memory fades, And the crowds don't remember my name, When my hands don't play the strings the same way, I know you will still love me the same, 'Cause honey your soul, Can never grow old, It's evergreen, And baby your smile's forever in my mind and memory, I'm thinkin' bout how, People fall in love in mysterious ways, Maybe it's all part of a plan, I´ll just keep on making the same mistakes, Hoping that you'll understand, That baby now, Take me into your loving arms, Kiss me under the light of a thousand stars, Place your head on my beating heart, Thinking out loud, Maybe we found love right where we are, La, la, la, la, la, la, la, lo-ud So Baby now, Take me into your loving arms, Kiss me under the light of a thousand stars, Oh darlin' Place your head on my beating heart, I'm thinking out loud, But maybe we found love right where we are, Oh baby we found love right where we are, And we found love right where we are."
    break;

    default:
    titulo.textContent = "When I Was Your Man";
    parrafo.textContent = "Same bed but it feels just a little bit bigger now, Our song on the, radio but it don’t sound the same, When our friends talk about you all it does is just tear me down Cause my heart breaks a little when I hear your name, It all just sounds like ooooooooh, Mmm too young too dumb to realize, That I should’ve bought you flowers, and held your hand, Shoulda gave you all my hours, When I had the chance, Take you to every party, Cause all you wanted to do was dance, Now my baby’s dancin’,     But she’s dancin’ with another man,     My pride, my ego, my needs and my selfish ways, Caused a good, strong woman like you to walk out my life, Now I’ll never, never get to clean up the mess I made ooh, And that haunts me every time I close my eyes.AlthoughIt all just sounds like ooooooooh, Mmm too young too dumb to realize, That I should’ve bought you flowers, and held your hand, Shoulda gave you all my hours, When I had the chance, Take you to every party, cause all you wanted to do was dance, Now my baby’s dancin’ But she’s dancin’ with another man. Although it hurts, I’ll be the first to say that, I was wrong, Oh I know I’ll probably much too late, To try and apologize for my mistakes, But I just want you to know, I hope he buys you flowers, I hope he holds your hand, Give you all his hours, when he has the chance, Take you to every party, Cause I remember how much you love to dance, Do all the things I should’ve done, When I was your man, Do all the things I should’ve done, When I was your man ...." 
    break;
























} 