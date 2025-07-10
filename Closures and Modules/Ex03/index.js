const SongsManager = function()
{
    const songs = {};
    const AddSong = function(songName, songURL)
    {
        if(songs.hasOwnProperty(songName) === false)
        {
            songs[songName] = songURL.slice(33);
        }
        else
        {
            console.log("This song already exist");
        }
    }
    const GetSong = function(songName)
    {
        console.log("https://www.youtube.com/watch?v=" + songs[songName]);
    }

    return{
        addSong: AddSong,
        getSong: GetSong
          }
}







const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
