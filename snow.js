const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Use snowflake emoji
    snowflake.innerText = '❄';

    // Randomize size
    const size = Math.random() * 16 + 12; // 12px to 28px
    snowflake.style.fontSize = `${size}px`;

    // Position randomly across the hero section
const left = Math.random() * 95; // Slight buffer from the edges
snowflake.style.left = `${left}vw`;



    // Randomize animation speed and delay
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5s - 10s
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    // Slight opacity variation
    snowflake.style.opacity = Math.random().toFixed(2);

document.getElementById('snow-container').appendChild(snowflake);

}
