# Music Player

A simple music player built with vanilla JavaScript.

## Features

- Play, pause, and skip functionality.
- Progress bar to visualize the current playback position.
- Responsive design.
- Play next and previous songs.

## Demo

You can try out the [live demo here](https://codingankit.github.io/musicPlayer).

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/codingankit/musicPlayer.git
   ```

2. Navigate to the project directory:

   ```shell
   cd musicPlayer
   ```

3. Open the `index.html` file in your preferred web browser.

## Usage

- Click the play button to start playback.
- Use the pause button to pause the currently playing track.
- Click the next and previous buttons to skip to the next or previous track in the playlist.
- The progress bar displays the current position of the track and allows you to seek to a specific position.

## Add More Songs

To add more songs to the player, follow these steps:

1. Upload your songs to the `musics` directory.
2. Open the `scripts/main.js` file.
3. Locate the `musics` array.
4. Add a new object to the array for each new song, specifying the song name and source URL. For example:

   ```
   const musics = [
     {
       musicName: 'Song 1',
       source: 'musics/song1.mp3'
     },
     {
       musicName: 'Song 2',
       source: 'musics/song2.mp3'
     },
     // Add more songs here
   ];
   ```

   Replace `'Song 1'` and `'Song 2'` with the names of your songs, and `'musics/song1.mp3'` and `'musics/song2.mp3'` with the appropriate source URLs.

## Customization

You can customize the music player by modifying the following files:

- `index.html`: Update the track information and playlist according to your needs.
- `scripts/style.css`: Adjust the styles to match your desired visual design.
- `scripts/main.js`: Extend the functionality or add new features as required.

## Technologies Used

- HTML
- CSS
- JavaScript

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

Feel free to customize the `README.md` file to include any additional information specific to your project. Make sure to update the sections such as the "Demo" link, "Getting Started" instructions information with the relevant details.

Remember to include any necessary attribution or credits for external resources used in your project, as well as any instructions or guidelines for potential contributors.
