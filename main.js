const haikuFactory = {
    // Haikus included by: Bashō, Hokusai, Buson, Shiki, Soseki, and Issa   
    haikuParts: [['An old silent pond', 'I write, erase, rewrite', 'In the moonlight,', 'After killing', 'Plum flower temple:', 'Everything I touch', 'Over-ripe sushi,', 'In the cicada\'s cry', 'Winter seclusion -', 'My life, -'], 
['A frog jumps into the pond—', 'Erase again, and then', 'The color and scent of the wisteria', 'a spider, how lonely I feel', 'Voices rise', 'with tenderness, alas,', 'The Master', 'No sign can foretell', 'Listening, that evening,', 'How much more of it remains?'], 
['Splash! Silence again.', 'A poppy blooms.', 'Seems far away.', 'in the cold of night!', 'From the foothills', 'pricks like a bramble.', 'Is full of regret.', 'How soon it must die.', 'To the rain in the mountain.', 'The night is brief.']],
    createHaiku() {
        let haiku = [];
        let line1 = Math.floor(Math.random() * this.haikuParts[0].length);
        let line2 = Math.floor(Math.random() * this.haikuParts[0].length);
        let line3 = Math.floor(Math.random() * this.haikuParts[0].length);
        haiku.push(this.haikuParts[0][line1]);
        haiku.push(this.haikuParts[1][line2]);
        haiku.push(this.haikuParts[2][line3]);
        return haiku;
    }
}

let haiku = haikuFactory.createHaiku();
console.log();
console.log(haiku[0]);
console.log(haiku[1]);
console.log(haiku[2]);
console.log();