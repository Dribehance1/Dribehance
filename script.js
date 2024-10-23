let coins = 0;
const behanceLinks = [
    'https://www.behance.net/gallery/example1',
    'https://www.behance.net/gallery/example2',
    'https://www.behance.net/gallery/example3'
];

document.getElementById('getLink').addEventListener('click', () => {
    const randomLink = behanceLinks[Math.floor(Math.random() * behanceLinks.length)];
    document.getElementById('behanceLink').textContent = randomLink;
    document.getElementById('likedButton').disabled = false;
});

document.getElementById('likedButton').addEventListener('click', () => {
    coins += 10;
    document.getElementById('coinsStatus').textContent = `Coins: ${coins}`;
    document.getElementById('likedButton').disabled = true;
    document.getElementById('submitShot').disabled = coins < 20 ? true : false;
});

document.getElementById('submitShot').addEventListener('click', () => {
    const userShotLink = prompt("Enter your Behance shot link:");
    if (userShotLink) {
        alert(`Your shot has been submitted for likes! Remaining coins: ${coins - 20}`);
        coins -= 20;
        document.getElementById('coinsStatus').textContent = `Coins: ${coins}`;
        document.getElementById('submitShot').disabled = coins < 20 ? true : false;
    }
});
