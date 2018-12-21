function songDecoder(song){
    return song.replace(/WUB/g,' ').replace(/  +/g, ' ').replace(/^\s+/g,'').replace(/\s?$/g,'');
}


// TDD Cases
// Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
// Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
// Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");